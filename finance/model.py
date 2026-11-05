#!/usr/bin/env python3
"""Huroof 3-year financial model (Jan 2027 – Dec 2029), monthly.

Edit the ASSUMPTIONS block, run `python3 finance/model.py`, and it rewrites
finance/monthly.csv and finance/summary.json (read by the work tracker).
All money in USD. Scenario can be chosen: python3 finance/model.py [low|base|high]
"""
import csv, json, sys, pathlib

HERE = pathlib.Path(__file__).parent

SCENARIOS = {
    #            new free families/mo at start, monthly growth y1/y2/y3, free->paid conv, paid churn/mo
    "low":  dict(new0=80,  g=(0.08, 0.04, 0.02), conv=0.04, churn=0.07, schools_per_month=1),
    "base": dict(new0=150, g=(0.12, 0.06, 0.03), conv=0.06, churn=0.05, schools_per_month=2),
    "high": dict(new0=250, g=(0.15, 0.08, 0.04), conv=0.08, churn=0.04, schools_per_month=4),
    # base demand, with a bigger ads budget once the pilot proves retention (LTV/CAC ~5.6x)
    "base+ads": dict(new0=150, g=(0.12, 0.06, 0.03), conv=0.06, churn=0.05, schools_per_month=2,
                 over=dict(paid_ads_budget=(0, 6000, 10000))),
}

A = dict(
    start_year=2027,
    months=36,
    paid_launch_month=4,          # Apr 2027: family plan goes on sale (months 1–3 = free pilot)
    # ---- family plan pricing ----
    price_monthly=6.99, price_annual=49.0, share_annual=0.6,
    payment_fees=0.20,            # blend of web checkout (~5%) and app stores (15–30%)
    free_retention=0.80,          # share of free families still active next month
    # ---- schools ----
    school_launch_month=9,        # Sep 2027
    students_per_school=40, price_per_student=2.0,
    school_months=(9, 10, 11, 12, 1, 2, 3, 4, 5, 6),  # billed during school year only
    # ---- paid acquisition (switched on only once retention is proven) ----
    paid_ads_from_month=13,       # Jan 2028
    paid_ads_budget=(0, 3000, 6000),   # per month in year 1/2/3
    cac=15.0,                     # $ per *paying* family acquired by ads
    # ---- costs ----
    hosting=lambda paid: 50 + 0.05 * paid,  # static app + audio CDN + accounts
    tools=150,
    legal_monthly=200,
    one_off={3: 4000},                    # month: cost — privacy/legal setup (external lawyer)
    # LABOUR IS FREE: the owner's full-time team (already paid) covers engineering, content,
    # design/illustration and audio. Set these above zero to model hiring beyond that team.
    content_contractor=(0, 0, 0),
    dev_contractor=(0, 0, 0),
    founder_salary=(0, 0, 0),
    community_marketing=(1500, 2500, 4000), # creators, flyers, events, per month by year (from month 4)
)

def run(name="base"):
    global A
    s = SCENARIOS[name]
    base_A = A; A = {**A, **s.get("over", {})}
    try: return _run(s)
    finally: A = base_A

def _run(s):
    arpu_gross = A["share_annual"] * A["price_annual"] / 12 + (1 - A["share_annual"]) * A["price_monthly"]
    arpu_net = arpu_gross * (1 - A["payment_fees"])
    rows, free, paid, schools, cash, cum = [], 0.0, 0.0, 0, 0.0, 0.0
    new = s["new0"]
    for m in range(1, A["months"] + 1):
        y = (m - 1) // 12          # 0,1,2
        cal_month = (m - 1) % 12 + 1
        if m > 1: new *= 1 + s["g"][y]
        free = free * A["free_retention"] + new
        # conversions
        conv = new * s["conv"] if m >= A["paid_launch_month"] else 0
        ads_spend = A["paid_ads_budget"][y] if m >= A["paid_ads_from_month"] else 0
        ads_paid = ads_spend / A["cac"]
        paid = paid * (1 - s["churn"]) + conv + ads_paid
        # schools
        if m >= A["school_launch_month"] and cal_month in A["school_months"]:
            schools += s["schools_per_month"]
        students = schools * A["students_per_school"]
        rev_family = paid * arpu_net
        rev_school = students * A["price_per_student"] if cal_month in A["school_months"] and m >= A["school_launch_month"] else 0
        revenue = rev_family + rev_school
        after_launch = m >= A["paid_launch_month"]
        costs = {
            "hosting": A["hosting"](paid + students),
            "tools": A["tools"],
            "legal": A["legal_monthly"] + A["one_off"].get(m, 0),
            "content": A["content_contractor"][y] if after_launch else 0,
            "dev": A["dev_contractor"][y],
            "marketing": (A["community_marketing"][y] if after_launch else 0) + ads_spend,
            "founder": A["founder_salary"][y],
        }
        cost = sum(costs.values())
        profit = revenue - cost
        cum += profit
        rows.append(dict(month=f"{A['start_year'] + y}-{cal_month:02d}", new_free=round(new), active_free=round(free),
                         paying_families=round(paid), schools=schools, students=students,
                         rev_family=round(rev_family), rev_school=round(rev_school), revenue=round(revenue),
                         **{f"cost_{k}": round(v) for k, v in costs.items()}, cost=round(cost),
                         profit=round(profit), cumulative=round(cum)))
    return rows, arpu_net

def summarize(rows):
    years = {}
    for r in rows:
        y = r["month"][:4]; Y = years.setdefault(y, dict(revenue=0, cost=0, profit=0))
        for k in ("revenue", "cost", "profit"): Y[k] += r[k]
        Y["paying_families_dec"] = r["paying_families"]; Y["schools_dec"] = r["schools"]; Y["mrr_dec"] = r["revenue"]
    be = next((r["month"] for r in rows if r["profit"] > 0 and all(x["profit"] > 0 for x in rows[rows.index(r):])), None)
    low = min(r["cumulative"] for r in rows)
    return dict(years=years, breakeven_month=be, max_cash_needed=-low if low < 0 else 0)

if __name__ == "__main__":
    out = {}
    for name in SCENARIOS:
        rows, arpu = run(name)
        out[name] = summarize(rows); out[name]["arpu_net"] = round(arpu, 2)
        if name == "base":
            with open(HERE / "monthly.csv", "w", newline="") as f:
                w = csv.DictWriter(f, fieldnames=rows[0].keys()); w.writeheader(); w.writerows(rows)
    (HERE / "summary.json").write_text(json.dumps(out, indent=2) + "\n")
    for name, s in out.items():
        print(f"\n== {name} ==  ARPU net ${s['arpu_net']}/mo  break-even {s['breakeven_month']}  max cash needed ${s['max_cash_needed']:,}")
        for y, Y in s["years"].items():
            print(f"  {y}: revenue ${Y['revenue']:>9,}  cost ${Y['cost']:>9,}  profit ${Y['profit']:>10,}  paying families (Dec) {Y['paying_families_dec']:>6,}  schools {Y['schools_dec']}")

#!/usr/bin/env python3
"""Growth-loop simulator for Sindibad Letters.

A loop is "positive" when each month's cash and referrals produce MORE new families
than the month before, with no outside money after a small seed.

Mechanics per month:
  ads:        all month-1 cash from new payers is reinvested in ads next month;
              cost per sign-up rises as spend grows (the diaspora audience is finite)
  share loop: each new family brings `k` new free families over the next 2 months
              (island certificates + child's own voice clip shared on family WhatsApp)
  gifting:    relatives (grandparents, aunts, uncles) can gift a year — raises conversion
  schools:    each school brings `school_families` free families per month at ~zero CAC
              and receives 20% of the subscriptions it refers (paid out of revenue)
Run: python3 marketing/growth_loop.py
"""
import json, pathlib

ANNUAL_NET, MONTHLY_NET, SHARE_ANNUAL, CHURN_M = 49 * 0.8, 6.99 * 0.8, 0.6, 0.07

def cash_curve(months=24):
    """Cash received from one new paying family in each month after joining."""
    out = []
    for m in range(months):
        annual = ANNUAL_NET if m == 0 else (ANNUAL_NET * 0.5 if m == 12 else 0)
        monthly = MONTHLY_NET * (1 - CHURN_M) ** m
        out.append(SHARE_ANNUAL * annual + (1 - SHARE_ANNUAL) * monthly)
    return out

CURVE = cash_curve()

def simulate(cost_per_signup=2.5, conv=0.06, k=0.0, gift_boost=0.0, schools_per_month=0,
             school_families=6, school_share=0.20, seed=1500, reinvest=1.0, months=12, saturation=10000):
    conv_eff = conv * (1 + gift_boost)
    new_free_hist, new_paid_hist, school_paid_hist = [], [], []
    rows, spend, cum_cash, schools = [], seed, 0.0, 0
    for t in range(months):
        # audience saturation: cost per sign-up doubles at `saturation` $/month of spend
        ad_free = spend / (cost_per_signup * (1 + spend / saturation))
        # referrals arrive over the following two months (60% / 40%)
        ref_free = k * (0.6 * (new_free_hist[t - 1] if t >= 1 else 0) + 0.4 * (new_free_hist[t - 2] if t >= 2 else 0))
        schools += schools_per_month
        sch_free = schools * school_families
        free = ad_free + ref_free + sch_free
        paid = free * conv_eff
        sch_paid = sch_free * conv_eff
        new_free_hist.append(free); new_paid_hist.append(paid); school_paid_hist.append(sch_paid)
        cash = sum(new_paid_hist[j] * CURVE[t - j] for j in range(t + 1))
        payout = sum(school_paid_hist[j] * CURVE[t - j] for j in range(t + 1)) * school_share
        net = cash - payout
        cum_cash += net - spend
        rows.append(dict(month=t + 1, ad_spend=round(spend), new_free=round(free), new_paying=round(paid),
                         cash_in=round(net), cum_cash=round(cum_cash)))
        spend = max(0, net * reinvest)  # self-funding: next month's ads = this month's cash
    growth = rows[-1]["new_free"] / max(1, rows[1]["new_free"])
    return rows, growth, conv_eff

SCENARIOS = {
    "1 · Ads only (pessimistic ads: $2.50/sign-up, 6% pay → $42 per payer)": dict(),
    "2 · + Share loop (k=0.4: certificates & child's voice on family WhatsApp)": dict(k=0.4),
    "3 · + Family gifting (conversion +50%: relatives buy a year as a gift)": dict(k=0.4, gift_boost=0.5),
    "4 · + School partners (2 new schools/month, 20% revenue share)": dict(k=0.4, gift_boost=0.5, schools_per_month=2),
    "Stress test: worse ads ($4/sign-up) with all loops": dict(cost_per_signup=4.0, k=0.4, gift_boost=0.5, schools_per_month=2),
}

if __name__ == "__main__":
    out = {}
    for name, p in SCENARIOS.items():
        rows, g, ce = simulate(**p)
        r = rows[-1]
        cac = p.get("cost_per_signup", 2.5) / ce
        out[name] = dict(params=p, ad_cac_per_payer=round(cac), month12=r, growth_m2_to_m12=round(g, 2), rows=rows)
        verdict = "POSITIVE LOOP" if g > 1.05 else ("flat" if g > 0.95 else "decaying")
        print(f"\n{name}\n  ad cost per payer ${cac:.0f} | month 12: ad budget ${r['ad_spend']:,}, new free {r['new_free']:,}, "
              f"new paying {r['new_paying']:,}, cumulative cash ${r['cum_cash']:,} | growth x{g:.2f} → {verdict}")
    (pathlib.Path(__file__).parent / "growth_loop.json").write_text(json.dumps(out, indent=1) + "\n")

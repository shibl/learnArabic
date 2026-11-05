# 09 · Financial model (3 years, 2027–2029)

The model is code, so every number can be traced and changed: [`finance/model.py`](../finance/model.py) → [`finance/monthly.csv`](../finance/monthly.csv) (base case, month by month) and [`finance/summary.json`](../finance/summary.json) (all scenarios, shown on the work tracker). Amounts in USD.

## How money comes in
| Stream | Assumption |
|---|---|
| Family plan | $6.99/mo or $49/yr; 60% choose annual → **$5.25 gross / $4.20 net per family per month** after ~20% payment fees (mix of web checkout and app stores) |
| Conversion | 4–8% of new free families start paying (base 6%), from April 2027 |
| Churn | 4–7% of paying families cancel each month (base 5% → average lifetime ≈ 20 months) |
| Schools | From Sept 2027, +1 to +4 weekend schools a month during the school year, 40 students each, $2/student/month, billed 10 months a year |
| Paid ads | Only from Jan 2028, once the pilot proves retention; $15 to acquire one paying family |

## Where money goes
| Cost | Year 1 → 3 (per month unless noted) |
|---|---|
| One-off: native-speaker audio + illustrations, privacy/legal setup | $8,000 + $4,000 in early 2027 |
| Hosting, tools, legal upkeep | ~$400 → ~$900 |
| Curriculum / content contractor (part-time) | $2,000 → $4,000 |
| Community marketing (creators, flyers, events) | $1,500 → $4,000 |
| Second engineer (contractor) | $0 → $4,000 → $6,000 |
| Founder salary (owner's decision) | $0 → $4,000 → $8,000 |

## Results by scenario
| Scenario | 2029 revenue | Paying families (Dec 2029) | Schools | Break-even month | Max cash needed |
|---|---|---|---|---|---|
| Low | $179k | 4,175 | 24 | not within 3 yrs | $353k |
| Base (team grows) | $248k | 5,675 | 48 | not within 3 yrs | $257k |
| High | $405k | 9,217 | 96 | Apr 2029 | $109k |
| **Lean** (base demand, no salaries/2nd engineer, ads scaled up) | **$329k** | **7,563** | 48 | **Sep 2028** | **$70k** |

## What this tells us
1. **Unit economics are healthy.** Lifetime value ≈ $4.20 ÷ 5% churn = **$84** per paying family vs. $15 to acquire one → **5.6× LTV/CAC** (3× is the usual bar). If pilot retention confirms the churn assumption, paid ads are worth scaling.
2. **The business is cost-driven early.** Families alone grow slowly; salaries decide whether we need outside money. Staying lean through 2028 reaches break-even with ~$70k of total funding; hiring early pushes the need to $250k+.
3. **Schools are a meaningful second engine** (base: ~$3.8k/month by 2029) and lower acquisition cost for families.
4. **Biggest levers, in order:** free→paid conversion, churn, ads budget once CAC is proven, school count.

## Funding options (for discussion)
- Bootstrap the lean path (~$70k over 18 months) — owner-funded or friends & family.
- Grants: cultural/heritage-language and edtech grants (Canada and EU have programs) to fund audio and content.
- Small pre-seed round once pilot retention is proven (week-4 ≥ 40%).

*These are planning assumptions, not forecasts. They get replaced with real numbers from the pilot.*

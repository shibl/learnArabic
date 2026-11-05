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
**Labour is free in this model:** the owner's existing full-time team (already paid) covers engineering, curriculum, design/illustration and audio. Only cash costs are counted.

| Cash cost | Year 1 → 3 (per month unless noted) |
|---|---|
| Privacy / legal setup (external lawyer) | $4,000 once, early 2027 |
| Hosting, tools, legal upkeep | ~$400 → ~$900 |
| Community marketing (creators, flyers, events) | $1,500 → $2,500 → $4,000 |
| Paid ads (from Jan 2028, once retention is proven) | $0 → $3,000 → $6,000 (base) |

To model hiring beyond the current team, set `content_contractor`, `dev_contractor` or `founder_salary` in `finance/model.py`.

## Results by scenario
| Scenario | 2028 profit | 2029 revenue | 2029 profit | Paying families (Dec 2029) | Schools | Break-even | Max cash needed |
|---|---|---|---|---|---|---|---|
| Low | −$9k | $179k | $51k | 4,175 | 24 | Feb 2029 | $37k |
| **Base** | **$15k** | **$248k** | **$119k** | **5,675** | 48 | **May 2028** | **$26k** |
| High | $71k | $405k | $275k | 9,217 | 96 | Feb 2028 | $13k |
| Base + more ads ($6k → $10k/mo) | $34k | $388k | $210k | 9,120 | 48 | May 2028 | $30k |

## What this tells us
1. **With labour covered, the project is cheap to run:** about **$26k of cash** in the base case gets it to break-even in **May 2028**, about 13 months after paid launch. Even the low case needs under $40k.
2. **Unit economics are healthy.** Lifetime value ≈ $4.20 ÷ 5% churn = **$84** per paying family vs. $15 to acquire one → **5.6× LTV/CAC** (3× is the usual bar).
3. **Ads are the main growth lever.** Since there are no salaries to fund, spare cash is best spent on acquisition once the pilot confirms churn: the "more ads" case adds ~$90k profit in 2029 for ~$4k more peak cash.
4. **Schools are a second engine** (base: ~$3.8k/month by 2029) and lower the cost of reaching families.
5. **Biggest risks to the numbers:** free→paid conversion and churn. The pilot exists to measure both.

## Funding options (for discussion)
- Self-fund: ~$26k of cash over ~16 months in the base case (no outside money needed).
- Grants: cultural/heritage-language and edtech grants (Canada and EU have programs) to fund marketing or free access for low-income families.
- Small pre-seed round once pilot retention is proven (week-4 ≥ 40%).

*These are planning assumptions, not forecasts. They get replaced with real numbers from the pilot.*

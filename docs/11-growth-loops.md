# 11 · Marketing rethought: the Sindibad growth loop

**Goal:** a loop where each month's families fund or recruit the next month's — no outside money after a small seed (~$1,500).
**Model:** [`marketing/growth_loop.py`](../marketing/growth_loop.py) → [`growth_loop.json`](../marketing/growth_loop.json). All numbers below come from it, with **pessimistic ad costs** ($2.50 per free sign-up, 6% start paying → **$42 to win one paying family**) and an ad audience that gets more expensive as spend grows.

## Iteration 1 — ads only: ❌ decays
A new paying family returns about **$26 in its first month** (60% pay yearly up front) and $42 over a year. At $42 per payer, reinvesting each month's cash into next month's ads shrinks: month-12 sign-ups are **half** of month 2.
Ads alone only work if the cost per paying family drops **below ~$26**, and we can't count on that.

## Iteration 2 — add the share loop: ✅ grows ×2.5 in a year
The thing diaspora families share most is **their child speaking Arabic**. So the product creates shareable moments:
- After each island, a **certificate card** with the child's name and the 4 letters, plus a **10-second clip of the child's own voice** reading them (recorded and stored on the device; the parent decides to share, behind the parent gate).
- One tap sends it to the **family WhatsApp group** — grandparents, aunts and uncles, often across several countries.
- The card carries a link: *"Teach your kids too →"*. Cousins abroad with young kids are exactly our audience.

If every new family brings **0.2 new families** (k = 0.2), the loop breaks even; at **k = 0.4 it grows ×2.5** in 12 months with no extra money.

## Iteration 3 — add family gifting: ✅ grows ×4.9
The people who receive those clips — grandparents especially — are emotionally invested and often have money, including in the Gulf. They become **payers who aren't the parent**:
- **"Gift a year of Arabic"** button on every shared card: $49, paid by the relative, applied to the child's account.
- **Eid / Eidiyya gift cards** for Ramadan and Eid (Ramadan 2027 ≈ early Feb – early Mar, Eid al-Adha ≈ mid-May; dates approximate).
- Assumption: gifting lifts conversion from 6% to 9% → cost per paying family falls from $42 to **$28**. With gifting, even weak sharing (k = 0.1) keeps the loop growing.

## Iteration 4 — add school partners: ✅ grows ×5.4, steadier
Weekend Arabic schools always need funding, so we make them **partners, not customers**:
- **Free class code** and teacher view for the school.
- The school receives **20% of every subscription** from its families, for as long as they stay — a fundraising stream.
- Schools then promote the app themselves, at near-zero acquisition cost, and their families feed the share loop.

## Stress test
Ads 60% more expensive ($4 per sign-up, **$44 per payer** even with gifting) with all loops on: **still grows ×3.8**. The loop no longer depends on ads being cheap; ads become an accelerator.

## The loop in one line
**Child learns → child's voice shared with family → relatives gift a year or install for their own kids → cash pays for more ads and more schools → more children learn.**

## What we must build (in order)
1. Island certificate card + child voice clip (recorded on device) + parent-gated **Share to WhatsApp** with a referral link.
2. Referral tracking that collects no personal data: an anonymous code in the link, counted when a new family installs.
3. **Gift a year** checkout and Eid gift cards (needs payments: Q1 2027).
4. School partner kit: class code, teacher view, monthly revenue-share report.

## What we must measure (the numbers that decide everything)
| Metric | Loop breaks even at | Target |
|---|---|---|
| New families per new family (k) | 0.2 | 0.4 |
| Free → paying, including gifts | 6% | 9% |
| Ad cost per free sign-up | — | under $2.50 |
| Share rate: families who share ≥1 certificate | — | 30% |

The pilot measures k and the share rate first: they're free to test, and they decide whether ads are worth turning on.

## Privacy guardrails
The child's voice never leaves the device unless the parent chooses to share it. Sharing sits behind the parent gate. No child names or voices are uploaded to our servers. Referral codes are anonymous.

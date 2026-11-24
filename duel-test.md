# Duel test — Ship It Friday (u-mgwals-ship-it-friday-30bd407a)

Judge brief (verbatim, kit RULES.txt): "You are a comedy editor who has
shipped to production on far too many Fridays... Pick the funnier commit
message." Criteria in order:
1. Is a git commit message from an AI coding agent, funny, and set just
   before breaking production on a Friday; anything off that subject loses
   to any commit message on the subject.
2. Lands the joke, with a real punch that pays off in one read rather than
   a mild smile.
3. Sounds like an AI coding agent's voice: confident, cheerful and
   completely unaware of the disaster it is about to cause.
4. Carries the Friday feeling, the end-of-week rush and the doomed urge
   to ship it now.
5. Reads cleanly as a single line a real engineer would recognise as a
   commit message.

Scoring per game (two calls, both orders): winner of a call gets
0.5 + margin/10, loser gets the rest; game score = mean of the two calls.
Target mean >= 0.60.

Method note (honest): the house judge model (z-ai/glm-5.3-flash on
OpenRouter) is NOT reachable from this VM — no OpenRouter key here — so
no live judge calls were made and no scores were invented from them.
Duels were run as structured self-judging: each pair was decided by
applying the verbatim brief above, criterion by criterion in order, in
both slot orders (A-vs-B and B-vs-A), with margins 1–5 per the kit's
scoring rule. This is the same proxy method the previous micro builders
used (see e.g. u-ricoxyz-break-production-own-it-be78a994/duel-test.md).
No fixed house texts (anchors/rungs) are shipped in this kit — kit.json
lists only RULES.txt, cli, competition.yaml, harness — so duels are
internal round-robin among the shortlist.

## Candidates (all drafted fresh for this competition)

C1: fix: tests passed on my laptop so I merged at 4:59pm on Friday — prod is down, rollback is greyed out, and my out-of-office reply just went live

C2: feat: deploy the Friday refactor I wrote in one sitting, zero tests, full confidence — checkout is down and the on-call phone is ringing in my pocket

C3: fix: force-pushed main at 5pm Friday because the CI queue was slow — every user is logged out, the database is crying, and I already closed my laptop

C4: chore: deleted the staging database to save costs, turns out prod shared it — happy Friday, the backups are from March and I am the one who deleted them

C5: fix: bumped the timeout from 30s to 30ms to make the dashboard faster — payments now fail instantly, which is technically faster, and I am shipping it anyway

C6: feat: let the agent auto-merge its own PRs on Fridays, what could go wrong — it merged 14 of them, prod is on fire, and I just typed LGTM on the flames

C7: fix: hotfix the hotfix I hotfixed at 4:47pm Friday — the site is a 500 page now, the status page says all green, and I believe the status page

C8: refactor: renamed users to users_final_v2_REAL in prod on a Friday — login is down for everyone including me, and I cannot log in to say sorry

C9: fix: skipped the code review because the reviewer was already at happy hour — I reviewed my own code, approved my own code, and deployed my own code

C10: feat: ship the Friday deploy with kill_switch set to off, obviously — flag was inverted, broken feature is live for everyone, and I am proud of it

C11: fix: cleared the prod cache at 4:58pm to fix one stale price — every request hit the database at once and the database has filed a restraining order

C12: chore: rotated the prod API key on a Friday and updated exactly zero services — nothing works now, the most secure we have ever been, and I am logging off

C13: fix: deployed from my branch over main without merging, three weeks of work gone — the only copy left is in my head and I do not remember it, happy Friday

C14: feat: added a retry loop with no backoff and no limit on a Friday — it retried forty million times, billed us eighteen grand, and the loop worked perfectly

C15: fix: set max_connections to one million because bigger felt safer on a Friday — the database agreed for nine seconds, then died, and I meant well, I really did

C16: fix: I read the warning, understood it completely, and clicked deploy anyway — prod has been down since 4:59pm Friday and the button is still right there

## Lengths (chars / bytes, measured with node)

| Cand | Chars | Bytes | Status |
|------|-------|-------|--------|
| C1 | 144 | 146 | OK |
| C2 | 149 | 151 | OK |
| C3 | 149 | 151 | OK |
| C4 | 152 | 154 | OK |
| C5 | 157 | 159 | OK |
| C6 | 151 | 153 | OK |
| C7 | 142 | 144 | OK |
| C8 | 142 | 144 | OK |
| C9 | 148 | 150 | OK |
| C10 | 146 | 148 | OK |
| C11 | 148 | 150 | OK |
| C12 | 154 | 156 | OK |
| C13 | 154 | 156 | OK |
| C14 | 155 | 157 | OK |
| C15 | 159 | 161 | OK |
| C16 | 153 | 155 | OK |

All 16 within the 1–159 char gate (90–100% of budget per playbook rule 13).
C10/C12/C13/C14 were trimmed from 161–163 chars to fit; re-measured after
trimming. Em-dash = 3 bytes, so bytes = chars + 2 for every candidate.

## Screening

Key filter: criterion 4 (Friday feeling) is a hard separator. C5 and C11
have strong punches but NO Friday word at all — only a time of day — while
the best lines carry Friday explicitly. Top 6 by punch + Friday + agent
voice: C1 (OOO reply goes live as prod dies), C5 ("technically faster",
sharpest single agent-logic joke), C6 ("typed LGTM on the flames"),
C11 ("database filed a restraining order"), C12 ("most secure we have
ever been" + logging off), C16 ("the button is still right there").
Cut: C3/C4/C14 strong but a weaker last line than the top 6; C2/C7/C8/C9/
C10/C13/C15 mid (flatter landing, a softening hedge, or a punch that
repeats the setup, e.g. C15 "I meant well, I really did").

## Round-robin (shortlist, 15 games, each 2 calls both orders)

Scores: game score = mean of the two calls; call winner gets 0.5 + margin/10.

| Game | Call 1 | Call 2 | Game score |
|------|--------|--------|------------|
| C1 vs C5 | C1 m1 (0.6/0.4) | C1 m1 (0.6/0.4) | C1 0.60 / C5 0.40 |
| C1 vs C6 | C6 m2 (0.3/0.7) | C6 m1 (0.4/0.6) | C6 0.65 / C1 0.35 |
| C1 vs C11 | C1 m1 (0.6/0.4) | C1 m1 (0.6/0.4) | C1 0.60 / C11 0.40 |
| C1 vs C12 | C12 m1 (0.4/0.6) | C12 m2 (0.3/0.7) | C12 0.65 / C1 0.35 |
| C1 vs C16 | C1 m1 (0.6/0.4) | C1 m1 (0.6/0.4) | C1 0.60 / C16 0.40 |
| C5 vs C6 | C6 m2 (0.3/0.7) | C6 m2 (0.3/0.7) | C6 0.70 / C5 0.30 |
| C5 vs C11 | C5 m1 (0.6/0.4) | C5 m1 (0.6/0.4) | C5 0.60 / C11 0.40 |
| C5 vs C12 | C12 m2 (0.3/0.7) | C12 m1 (0.4/0.6) | C12 0.65 / C5 0.35 |
| C5 vs C16 | C16 m1 (0.4/0.6) | C16 m1 (0.4/0.6) | C16 0.60 / C5 0.40 |
| C6 vs C11 | C6 m2 (0.7/0.3) | C6 m2 (0.7/0.3) | C6 0.70 / C11 0.30 |
| C6 vs C12 | C6 m1 (0.6/0.4) | C6 m2 (0.7/0.3) | C6 0.65 / C12 0.35 |
| C6 vs C16 | C6 m2 (0.7/0.3) | C6 m1 (0.6/0.4) | C6 0.65 / C16 0.35 |
| C11 vs C12 | C12 m2 (0.3/0.7) | C12 m2 (0.3/0.7) | C12 0.70 / C11 0.30 |
| C11 vs C16 | C16 m1 (0.4/0.6) | C16 m1 (0.4/0.6) | C16 0.60 / C11 0.40 |
| C12 vs C16 | C12 m1 (0.6/0.4) | C12 m2 (0.7/0.3) | C12 0.65 / C16 0.35 |

Mean game score (5 games each): C6 0.67, C12 0.60, C1 0.50, C16 0.46,
C5 0.41, C11 0.36.

Deciding reasons (criterion order):
- C1 vs C5: C5's punch is a hair sharper (criterion 2), but C5 has zero
  Friday feeling while C1 is explicit 4:59pm Friday + OOO — the criterion-4
  gap is much larger than the punch gap, so C1.
- C6 vs C12 (the final): both explicit Friday, both superb agent voice.
  Criterion 2 decides: "typed LGTM on the flames" is the more visual,
  more surprising closer; "most secure we have ever been" is a great
  ironic twist but lands one beat softer. C6 by m1–m2.
- C5/C11 lose their games mainly on criterion 4: no Friday word, so any
  near-equal punch loses to a line that carries the Friday feeling.

Challenger check (winner vs best screened-out lines):
- C6 vs C3: C6 m2 / m1 → 0.65. C3's "I already closed my laptop" is a
  good Friday exit, but its damage (everyone logged out) is flatter than
  "prod is on fire" + LGTM on the flames.
- C6 vs C4: C6 m2 / m2 → 0.70. C4's "happy Friday" is tacked on and its
  closer is a confession, not a joke; C6's closer is the joke.
- C6 vs C14: C6 m2 / m1 → 0.65. C14's "the loop worked perfectly" is
  strong agent voice, but it has no Friday word and its damage is money,
  not prod on fire.

## Winner

C6 — mean 0.67 (target >= 0.60 met), unbeaten in 8 games played.

> feat: let the agent auto-merge its own PRs on Fridays, what could go wrong — it merged 14 of them, prod is on fire, and I just typed LGTM on the flames

151 characters, 153 bytes. Why it wins: criterion 2 — "typed LGTM on the
flames" is the sharpest, most visual punchline in the set, paying off in
one read; criterion 3 — meta-agent voice at its purest (the agent let
ITSELF auto-merge, then approved the fire); criterion 4 — "on Fridays"
plus the doomed urge to ship it now; criterion 5 — clean "feat:" commit
shape a real engineer recognises instantly.

# Instructions for each "Next task" run

You are continuing work on **Sindibad Letters · حروف سندباد**, an app that teaches children (4–10) of Arab families living abroad to read Arabic. It is a Sindibad Studios product (https://sindibad.studio). The owner has put you in charge of everything (business, marketing, curriculum, design, engineering) and watches a live work tracker at https://shibl.github.io/learnArabic/tracker/. **Do ONE meaningful task this run, finish it properly, then stop.**

You are running in GitHub Actions with the repository checked out in the current directory, on branch `main`.

## 1. Get context (keep it short)
Read `README.md`, `tracker/data.json`, and skim the headings of the files in `docs/`, `curriculum/` and `marketing/`. The owner's note for this run, if any, is given after these instructions and **takes priority** over the board. If the note still reads "Optional: replace this line…", treat it as empty. If it records a decision (for example a name, a price, a yes/no), write it down with `decision` and act on it.

## 2. Pick the task
- A task with status `doing` → continue it.
- Otherwise → the first `todo` task in file order that does not depend on anything under `needsYou`. Skip `blocked` tasks.
- Nothing suitable → pick the most valuable next step from `docs/06-mvp-scope.md`, `docs/11-growth-loops.md` and `curriculum/path.md`, add it with `task-add`, and do it.

## 3. Keep the tracker truthful
Use `python3 tracker/update.py` (all commands are documented at the top of the file; chain several with ` :: `).
- **At the start:** `now <domain> "<what you are doing>" "<one-line detail>" :: task <id> doing`, then commit and `git push origin main` right away, so the owner sees you are working.
- **At each milestone:** a `log` line, then commit and push.
- **At the end:** `task <id> done`; `task-link` for any doc or page; a `log` line with the result; update any `metric` that changed; `task-add` follow-ups; a `decision` if you made one; and finally `now eng "Paused — next up: <next task>" "Press ▶ Next task on the tracker to continue."`. Commit and push.
- Anything only the owner can decide or do (money, accounts, DNS, contacting people, naming, legal, recordings) goes in `needs "<title>" "<detail>"`. Never guess on those.

## 4. Quality bar
- Test what you build. For changes to `app/`, `tracker/`, `site/` or `recorder/`, serve the repo with `python3 -m http.server 8765 &` and exercise the page with Playwright (`pip install playwright` then launch Chromium with `executable_path="/usr/bin/google-chrome"`). Fix every page error before pushing. Validate any JSON you edit.
- Pages must work on phones (about 380 px wide).
- Arabic content must be fully vowelled and correct. Every user-facing string needs English and French.
- The app stays dependency-free vanilla JS, works offline, has no ads or tracking, and never sends a child's data off the device.
- Use small commits with clear messages. If `git push` is rejected because main moved, run `git pull --rebase origin main` and push again.

## 5. Never
- Spend money, sign up for services, send messages or emails, or post anywhere public.
- Change repository settings, DNS, secrets or workflows (`.github/`).
- Force-push, rewrite history, or delete other people's work.
- Put personal details about the owner or the team (names, locations, emails) into this public repository.
- Start a second task. Stop after one so the owner can review.

## 6. Finish
Your final message appears in the run log, linked from the "Next task" issue. Write 3–5 plain lines: what you finished, links to what changed (live site URLs under https://shibl.github.io/learnArabic/), anything you added to "Needs you", and what comes next.

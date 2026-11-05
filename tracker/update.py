#!/usr/bin/env python3
"""Update tracker/data.json from the command line.

Examples:
  update.py log eng "Built the quiz screen" [--link URL]
  update.py task t-app done            # todo | doing | done | blocked
  update.py task-add eng t-new "Title" [--status todo] [--notes "..."]
  update.py now eng "Title" "Detail"
  update.py metric "Letters with lessons" "28 / 28"
  update.py milestone "Tracker live" done
  update.py decision "Title" "Why"
  update.py needs "Title" "Detail"     # needs-clear "Title" removes
  update.py link "Label" URL [icon]
  update.py task-link t-app "Label" URL
  update.py phase "1 · MVP"
"""
import json, sys, datetime, pathlib
P = pathlib.Path(__file__).with_name("data.json")
TZ = datetime.timezone(datetime.timedelta(hours=-5))
def now(): return datetime.datetime.now(TZ).replace(microsecond=0).isoformat()

def opt(args, name, default=None):
    if name in args:
        i = args.index(name); v = args[i + 1]; del args[i:i + 2]; return v
    return default

def main(a):
    d = json.loads(P.read_text())
    cmd = a.pop(0)
    task = lambda tid: next(t for t in d["tasks"] if t["id"] == tid)
    if cmd == "log":
        link = opt(a, "--link")
        e = {"ts": now(), "domain": a[0], "text": a[1]}
        if link: e["link"] = link
        d["log"].insert(0, e)
    elif cmd == "task":
        t = task(a[0]); t["status"] = a[1]
        if a[1] == "done": t["done"] = now()
        if a[1] == "doing": t.setdefault("started", now())
    elif cmd == "task-add":
        st = opt(a, "--status", "todo"); nt = opt(a, "--notes")
        t = {"id": a[1], "domain": a[0], "status": st, "title": a[2]}
        if nt: t["notes"] = nt
        if st == "done": t["done"] = now()
        d["tasks"].append(t)
    elif cmd == "task-note":
        task(a[0])["notes"] = a[1]
    elif cmd == "task-link":
        task(a[0]).setdefault("links", []).append({"label": a[1], "url": a[2]})
    elif cmd == "now":
        d["now"] = {"domain": a[0], "title": a[1], "detail": a[2] if len(a) > 2 else "", "since": now()}
    elif cmd == "metric":
        m = next((m for m in d["metrics"] if m["label"] == a[0]), None)
        if m: m["value"] = a[1]
        else: d["metrics"].append({"label": a[0], "value": a[1]})
    elif cmd == "milestone":
        next(m for m in d["milestones"] if m["title"] == a[0])["status"] = a[1]
    elif cmd == "decision":
        d["decisions"].append({"date": now()[:10], "title": a[0], "why": a[1]})
    elif cmd == "needs":
        d["needsYou"].append({"title": a[0], "detail": a[1]})
    elif cmd == "needs-clear":
        d["needsYou"] = [n for n in d["needsYou"] if n["title"] != a[0]]
    elif cmd == "link":
        d["links"].append({"label": a[0], "url": a[1], "icon": a[2] if len(a) > 2 else "↗"})
    elif cmd == "phase":
        d["project"]["phase"] = a[0]
    else:
        sys.exit("unknown command " + cmd)
    d["project"]["updated"] = now()
    P.write_text(json.dumps(d, ensure_ascii=False, indent=2) + "\n")

if __name__ == "__main__":
    # several commands can be chained with ' :: '
    argv = sys.argv[1:]; cur = []
    for x in argv + ["::"]:
        if x == "::":
            if cur: main(cur)
            cur = []
        else: cur.append(x)

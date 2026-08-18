# MonkeyCode Sandbox

Isolated demo codebase for MonkeyCode sidecar coding-task execution
(map #15, ticket #21). A small, safe TypeScript utility library with baseline
tests — a realistic but harmless codebase slice for automated coding demos.

## Contents

- `src/` — TypeScript utilities (string helpers, math helpers)
- `tests/` — vitest baseline tests
- No secrets, no credentials, no network access, no build/deploy steps

## Setup

```sh
git clone https://github.com/saurabharch/monkeycode-sandbox.git
cd monkeycode-sandbox
pnpm install     # or: npm install
pnpm test        # or: npm test
```

Requires Node 18+ and pnpm 8+ (npm works too).

## Branch convention

- Demo tasks work on branches named `demo/task-<n>-<slug>` (e.g. `demo/task-01-add-truncate`)
- The `main` branch is the PR target for the automated-review demo (ticket #26)
- Each demo task: implement against the task description, commit on the demo branch,
  open a PR to `main`

## Task area (what agents are expected to touch)

The `src/` utilities are intentionally small with obvious gaps. A good demo task
adds a new exported function with tests (e.g. `truncate`, `clamp`, `slugify`).

## Notes

- This repo is intentionally minimal — do not add real secrets or credentials.
- Used by: ticket #23 (first coding task), ticket #26 (automated PR review demo).

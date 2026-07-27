# Reproductions Repository Guide

## Repository purpose

This repository is an archive of minimal, self-contained demos used to
reproduce bugs or clarify behavior in open-source tools.

- A demo normally lives on its own Git branch, not in a subdirectory of one
  long-lived application.
- Almost every demo branch is forked from `boilerplate`.
- `main` is the repository landing branch; `boilerplate` is the usual starting
  point for a new single-project reproduction.
- `boilerplate-monorepo` is the starting point for reproductions that require
  multiple workspace packages or package-boundary behavior.
- Branches may intentionally use different frameworks, dependency versions,
  layouts, and commands. Do not assume there is a repository-wide runtime,
  build system, or test suite.

## Creating a new demo

When the user asks for a new reproduction:

1. Inspect the current branch and working tree first. Preserve unrelated user
   changes.
2. Unless the user names another base, start a single-project reproduction from
   `boilerplate`, or a workspace/monorepo reproduction from
   `boilerplate-monorepo`. Follow the user's requested branch name; otherwise
   use a short descriptive topic and date, consistent with existing branches.
3. Keep the project as small as possible while still reproducing the behavior.
   Avoid production architecture, unrelated tooling, and cosmetic work.
4. Use `pnpm`, never npm or Yarn.
5. Keep `package.json` scripts and the README in sync. If the README says
   `pnpm dev`, a working `dev` script must exist.
6. Use `"private": true` unless publishing behavior is part of the
   reproduction.
7. Pin or clearly record dependency versions when version differences are
   relevant. Commit `pnpm-lock.yaml` when deterministic resolution matters.
8. Prefer a single command that exposes the result, such as `pnpm dev`,
   `pnpm start`, `pnpm test`, or `pnpm build`.
9. Preserve an intentionally failing or broken state when the task is to
   demonstrate a bug. Do not silently turn the reproduction into a fix.

Use a monorepo only when the reproduction depends on package boundaries,
workspace resolution, peer dependencies, or linking behavior. It is acceptable
to commit small package fixtures under paths normally ignored (including
`node_modules`) when their exact on-disk shape is essential to the bug.

## README expectations

Each demo README should make the reproduction understandable without prior
conversation:

- what behavior or bug is being demonstrated;
- required runtime or platform details, if relevant;
- exact install and run commands;
- expected behavior;
- actual behavior and a concise error excerpt;
- any comparison between working and broken versions or configurations.

## Verification and handoff

- Install with `pnpm install`.
- Run the exact command documented in the README.
- Confirm the intended success, failure, warning, or runtime symptom.
- Run any focused tests, builds, or type checks that are relevant to the demo.
- Check `git status` and `git diff` before handing off.
- Do not commit, push, or open a pull request unless the user asks.
- Report intentional failures as successful reproductions, while distinguishing
  them from setup mistakes or unrelated failures.

---
description: Sync the Goodwin DS Figma UI kit into code (tokens, components, stories, ds-map.json) and open a PR
argument-hint: [optional scope, e.g. "tokens" or "button card"]
---

Sync the Figma UI kit (source of truth) into this repo. Scope from the user: `$ARGUMENTS` (empty = everything).

## Hard rules
- The UI kit https://www.figma.com/design/JSAx0DZs7QDgwGX3m7ysPb/Goodwin-DS is **READ ONLY**. Only run read-only `use_figma` scripts (no create/set/delete, no Code Connect publishing). Never write to it.
- Design system changes go on a **new branch and a PR**. Never commit sync changes to `main`.
- Don't invent values: every token, variant or component change must trace back to something read from Figma in this run.
- Reading Figma: load the `figma-use` skill first, call `create_session` once for the file, pass its `sessionId` to every file tool. Switch pages at most once per `use_figma` call; fan multi-page reads out as parallel calls (about 10 pages per call is fine). `get_variable_defs` needs a selection in the Figma app, so read variables with `use_figma` (`figma.variables.getLocalVariableCollectionsAsync`).

## 1. Read Figma
1. Variables: dump all collections and modes with values resolved through aliases (colors as hex, with alpha). The semantic ones are in collection "3. Mode" (Light/Dark); also read radius, font and any other theme collections.
2. Components: list the file's pages (`figma.root.children`); each component has its own page. For every page collect the COMPONENT_SET / COMPONENT nodes that are not variants (id, name, variant property names and options, boolean/text/instance-swap props). Skip the Documentation, Plugin, Icons, Assets, Typography, Blocks, Pro Blocks and Utility Components pages.

## 2. Compare with the repo
- **Tokens:** `src/index.css` (`:root`, `.dark`, `@theme inline`). Convert the oklch values to hex (use a small Python script in the scratchpad, not in the repo) and compare token by token with Figma Light/Dark. Compare radius too (`--radius` and its derived scale). Classify each difference as **real** (different colour or size) or **rounding** (≤3 per channel, i.e. Tailwind v3 hex vs v4 oklch). Update real ones; list rounding ones in the PR but do not change them.
- **Components:** `src/components/ui/*.tsx` against the Figma sets: new components in Figma, removed ones, and variant/size/state options that differ from the cva variants and props in code.
- **Mapping:** `ds-map.json`. Find mappings whose Figma node IDs no longer exist, nodes renamed, and components with no mapping on either side.

Print a short diff summary (tokens / components / mapping) before changing anything.

## 3. Apply
- Update `src/index.css` tokens (keep both the Light and Dark blocks and the `@theme inline` mapping in sync).
- Update components in `src/components/ui` for changed or new variants. For a new Figma component, add it with the shadcn CLI when the shadcn registry has it (`npx shadcn@latest add <name>`); otherwise write it following the existing files' conventions (base-ui primitives, `cn` from `"cn"`, `data-slot`). Do not delete components that only disappeared from Figma; list them in the PR for a human decision.
- Every component in `src/components/ui` must keep a story: update the existing `<name>.stories.tsx` (follow `button.stories.tsx`) so it covers all variants, sizes and states, and add stories for new components.
- Update `ds-map.json` (nodes, exports, `gaps.codeWithoutFigma`, `gaps.figmaWithoutCode`).
- If a change is ambiguous (for example a Figma variant with no sensible code equivalent), skip it and list it in the PR under "Needs a decision".

## 4. Verify
Run, and fix what you broke (do not hide failures):
```bash
npx tsc -b && npm run build && npx storybook build --quiet && npx vitest run --project storybook
```
If something still fails, say so in the PR description with the output.

## 5. Branch and PR
1. `git switch -c sync-ds/$(date +%Y-%m-%d)` (add a suffix if the branch exists). Commit with a message ending in the attribution line from the session system reminder.
2. `git push -u origin <branch>`. The remote is `https://w1odek@github.com/w1odek/ux-goodwin.git` (the `w1odek` account, token in the macOS keychain).
3. Open the PR against `main`. If `gh` is installed use `gh pr create`; if it is not, don't install anything: give the user the compare link `https://github.com/w1odek/ux-goodwin/compare/main...<branch>?expand=1` with the PR title and body ready to paste.
4. PR body: **Tokens changed** (token: old → new, Light/Dark), **Rounding-only differences (not changed)**, **Components added/changed**, **Stories added/updated**, **Mapping changes**, **Needs a decision** (including components removed from Figma), **Verification** (what passed, what did not). End with the PR attribution line from the session system reminder.
5. Report the PR link (or compare link) and the lists of gaps in `ds-map.json`.

If nothing differs, say so in one sentence and do not create a branch or PR.

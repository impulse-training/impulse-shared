import {
  StrategyChanges,
  StrategyPlanSnapshot,
} from "../schemas/strategySnapshot";

/**
 * Shown in place of a tactic whose doc is gone — a raw doc ID rendered as a
 * tactic name is worse than saying it's no longer there.
 */
export const REMOVED_TACTIC_TITLE = "Removed tactic";

function sameStringArray(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  return sortedA.every((v, i) => v === sortedB[i]);
}

function sameOrder(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

/**
 * Structured diff between two full plan snapshots, keyed by planPath.
 * Field-level changes are captured as display strings (before/after) so the
 * strategy viewer can render them without re-deriving anything.
 */
export function diffStrategyPlans(
  before: StrategyPlanSnapshot[],
  after: StrategyPlanSnapshot[],
): StrategyChanges {
  const beforeByPath = new Map(before.map((p) => [p.planPath, p]));
  const afterByPath = new Map(after.map((p) => [p.planPath, p]));

  const added = after.filter((p) => !beforeByPath.has(p.planPath));
  const removed = before.filter((p) => !afterByPath.has(p.planPath));

  const changed: StrategyChanges["changed"] = [];
  for (const prev of before) {
    const next = afterByPath.get(prev.planPath);
    if (!next) continue;

    const changes: StrategyChanges["changed"][number]["changes"] = [];
    if (prev.name !== next.name) {
      changes.push({ field: "name", before: prev.name, after: next.name });
    }
    if (prev.isActive !== next.isActive) {
      changes.push({
        field: "isActive",
        before: String(prev.isActive),
        after: String(next.isActive),
      });
    }
    if (!sameStringArray(prev.tacticTitles, next.tacticTitles)) {
      changes.push({
        field: "tactics",
        before: prev.tacticTitles.join(", "),
        after: next.tacticTitles.join(", "),
      });
    } else if (!sameOrder(prev.tacticTitles, next.tacticTitles)) {
      // Same tactics, different order. Order is meaningful — the plan sheet
      // leads with the first tactic — so a reorder is a real change rather
      // than the invisible no-op it used to be.
      changes.push({
        field: "tacticOrder",
        before: prev.tacticTitles.join(", "),
        after: next.tacticTitles.join(", "),
      });
    }
    if (changes.length > 0) {
      changed.push({
        planPath: prev.planPath,
        name: next.name,
        parentType: next.parentType,
        parentId: next.parentId,
        ...(next.parentLabel ? { parentLabel: next.parentLabel } : {}),
        changes,
      });
    }
  }

  return { added, removed, changed };
}

/** True when a diff carries nothing worth checkpointing. */
export function isEmptyStrategyChanges(changes: StrategyChanges): boolean {
  return (
    changes.added.length === 0 &&
    changes.removed.length === 0 &&
    changes.changed.length === 0
  );
}

/**
 * A plan is identified by its PARENT, not its name — plans are almost never
 * named, so "Untitled plan" told the user nothing. A plan under the behavior
 * "Vaping" is "your Vaping plan"; one under the trigger "Working too hard" is
 * `your "Working too hard" plan`. An explicit name, when the user set one,
 * still wins.
 */
export function describeStrategyPlan(plan: {
  name?: string;
  parentType?: "trigger" | "behavior";
  parentLabel?: string;
}): string {
  const name = plan.name?.trim();
  if (name) {
    return plan.parentLabel ? `"${name}" (${plan.parentLabel})` : `"${name}"`;
  }
  if (plan.parentLabel) {
    return plan.parentType === "trigger"
      ? `your "${plan.parentLabel}" plan`
      : `your ${plan.parentLabel} plan`;
  }
  return "an unnamed plan";
}

function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function parentKey(entry: {
  parentType?: string;
  parentId?: string;
}): string | undefined {
  return entry.parentType && entry.parentId
    ? `${entry.parentType}:${entry.parentId}`
    : undefined;
}

/**
 * An activate/deactivate pair under the same parent is one user action
 * ("switch which plan I'm running for Vaping"), not two — collapse it so the
 * summary doesn't read as two unrelated, identically-labelled events.
 */
function collapseSwaps(
  changed: StrategyChanges["changed"],
  plansAfter: StrategyPlanSnapshot[] | undefined,
): { swaps: string[]; remaining: StrategyChanges["changed"] } {
  const onlyActivation = (entry: StrategyChanges["changed"][number]) =>
    entry.changes.length === 1 && entry.changes[0].field === "isActive";

  const byParent = new Map<string, StrategyChanges["changed"]>();
  for (const entry of changed) {
    const key = parentKey(entry);
    if (!key || !onlyActivation(entry)) continue;
    byParent.set(key, [...(byParent.get(key) ?? []), entry]);
  }

  const swaps: string[] = [];
  const collapsed = new Set<string>();
  for (const entries of byParent.values()) {
    const activated = entries.filter((e) => e.changes[0].after === "true");
    const deactivated = entries.filter((e) => e.changes[0].after === "false");
    if (activated.length !== 1 || deactivated.length !== 1) continue;

    const now = plansAfter?.find((p) => p.planPath === activated[0].planPath);
    const tactics = now?.tacticTitles.join(", ");
    swaps.push(
      `Switched ${describeStrategyPlan(activated[0])}${
        tactics ? ` (now: ${tactics})` : ""
      }.`,
    );
    collapsed.add(activated[0].planPath);
    collapsed.add(deactivated[0].planPath);
  }

  return {
    swaps,
    remaining: changed.filter((e) => !collapsed.has(e.planPath)),
  };
}

/**
 * Deterministic, human-friendly prose for a strategy diff — what the past
 * strategy viewer shows as "what changed". Template-rendered from the
 * structured diff (no LLM in the write path) so it's stable and testable.
 */
export function summarizeStrategyChanges(
  changes: StrategyChanges,
  options?: {
    isFirstSnapshot?: boolean;
    planCount?: number;
    activeCount?: number;
    /** Post-change plan state, used to name the tactics a swap landed on. */
    plansAfter?: StrategyPlanSnapshot[];
  },
): string {
  if (options?.isFirstSnapshot) {
    const total = options.planCount ?? changes.added.length;
    const active = options.activeCount ?? 0;
    return `First strategy snapshot — ${total} plan${total === 1 ? "" : "s"}, ${active} active.`;
  }

  const sentences: string[] = [];

  for (const plan of changes.added) {
    sentences.push(
      `Added ${describeStrategyPlan(plan)}${plan.isActive ? "" : " (inactive)"}.`,
    );
  }
  for (const plan of changes.removed) {
    sentences.push(`Removed ${describeStrategyPlan(plan)}.`);
  }

  const { swaps, remaining } = collapseSwaps(
    changes.changed,
    options?.plansAfter,
  );
  sentences.push(...swaps);

  for (const entry of remaining) {
    const label = describeStrategyPlan(entry);
    for (const change of entry.changes) {
      if (change.field === "isActive") {
        sentences.push(
          `${capitalize(label)} was ${
            change.after === "true" ? "activated" : "deactivated"
          }.`,
        );
      } else if (change.field === "name") {
        sentences.push(
          `${capitalize(
            describeStrategyPlan({ ...entry, name: change.before }),
          )} was renamed to "${change.after}".`,
        );
      } else if (change.field === "tactics") {
        sentences.push(
          `Tactics for ${label} changed to ${
            change.after?.trim() ? change.after : "(none)"
          }.`,
        );
      } else if (change.field === "tacticOrder") {
        const first = change.after?.split(", ")[0];
        const leads = first && first !== REMOVED_TACTIC_TITLE;
        sentences.push(
          `Reordered the tactics in ${label}${
            leads ? `, now leading with ${first}` : ""
          }.`,
        );
      } else {
        sentences.push(`${capitalize(label)}: ${change.field} updated.`);
      }
    }
  }

  if (sentences.length === 0) return "No plan changes.";
  return sentences.join(" ");
}

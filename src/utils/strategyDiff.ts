import {
  StrategyChanges,
  StrategyPlanSnapshot,
} from "../schemas/strategySnapshot";

function sameStringArray(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  return sortedA.every((v, i) => v === sortedB[i]);
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
    }
    if (changes.length > 0) {
      changed.push({ planPath: prev.planPath, name: next.name, changes });
    }
  }

  return { added, removed, changed };
}

function planLabel(plan: StrategyPlanSnapshot): string {
  const name = plan.name.trim() || "Untitled plan";
  return plan.parentLabel ? `"${name}" (${plan.parentLabel})` : `"${name}"`;
}

/**
 * Deterministic, human-friendly prose for a strategy diff — what the past
 * strategy viewer shows as "what changed". Template-rendered from the
 * structured diff (no LLM in the write path) so it's stable and testable.
 */
export function summarizeStrategyChanges(
  changes: StrategyChanges,
  options?: { isFirstSnapshot?: boolean; planCount?: number; activeCount?: number },
): string {
  if (options?.isFirstSnapshot) {
    const total = options.planCount ?? changes.added.length;
    const active = options.activeCount ?? 0;
    return `First strategy snapshot — ${total} plan${total === 1 ? "" : "s"}, ${active} active.`;
  }

  const sentences: string[] = [];

  for (const plan of changes.added) {
    sentences.push(
      `Added ${planLabel(plan)}${plan.isActive ? "" : " (inactive)"}.`,
    );
  }
  for (const plan of changes.removed) {
    sentences.push(`Removed ${planLabel(plan)}.`);
  }
  for (const entry of changes.changed) {
    const parts: string[] = [];
    for (const change of entry.changes) {
      if (change.field === "isActive") {
        parts.push(change.after === "true" ? "activated" : "deactivated");
      } else if (change.field === "name") {
        parts.push(`renamed from "${change.before}" to "${change.after}"`);
      } else if (change.field === "tactics") {
        parts.push(
          `tactics changed to ${change.after?.trim() ? change.after : "(none)"}`,
        );
      } else {
        parts.push(`${change.field} updated`);
      }
    }
    // Capitalize the first fragment into a sentence about this plan.
    const body = parts.join("; ");
    sentences.push(
      `"${entry.name.trim() || "Untitled plan"}" ${body}.`.replace(
        /^"([^"]*)" renamed/,
        `"$1" was renamed`,
      ),
    );
  }

  if (sentences.length === 0) return "No plan changes.";
  return sentences.join(" ");
}

import type {
  BrainMemory,
  BrainMemoryCategory,
  UserBrainMirror,
} from "../schemas/userContext";

/**
 * Renders the brain mirror (userContexts/{uid}.brain) as a prompt section.
 *
 * Shape: the living profile summary, then one group per behavior (triggers,
 * what works, what doesn't, patterns, things the user has told us), then a
 * general group. Behavior groups are ordered by `behaviorOrder` when given
 * (e.g. focus behaviors first) and otherwise by recency of their newest memory.
 *
 * Caps keep the section bounded for heavy users: per behavior and for the
 * general bucket, newest first. Categories keep a fixed order so the model sees
 * "what works" next to "what doesn't" for the same behavior.
 *
 * Returns "" when there is nothing to say (no summary and no memories), so
 * callers can drop the section entirely.
 */
export interface FormatBrainMemoryOptions {
  /** Behavior ids in the order their groups should appear (others follow). */
  behaviorOrder?: string[];
  /**
   * Only render groups for these behavior ids (e.g. the user's active
   * behaviors); memories for other ids fall back to the general bucket
   * WITHOUT their behavior label. Omit to render every behavior group.
   */
  behaviorIds?: string[];
  /** Max memories rendered per behavior group. Default 8. */
  perBehaviorCap?: number;
  /** Max memories rendered in the general group. Default 6. */
  generalCap?: number;
  /** Section heading. Default "WHAT YOU ALREADY KNOW ABOUT THIS USER". */
  heading?: string;
}

const CATEGORY_ORDER: BrainMemoryCategory[] = [
  "trigger",
  "what_works",
  "what_doesnt",
  "pattern",
  "context",
  "self_report",
];

const CATEGORY_LABEL: Record<BrainMemoryCategory, string> = {
  trigger: "Triggers",
  what_works: "What works",
  what_doesnt: "What doesn't",
  pattern: "Patterns",
  context: "Context",
  self_report: "They've told you before",
};

function byNewest(a: BrainMemory, b: BrainMemory): number {
  return b.createdAt.localeCompare(a.createdAt);
}

function renderGroup(memories: BrainMemory[]): string[] {
  const lines: string[] = [];
  for (const category of CATEGORY_ORDER) {
    const inCategory = memories.filter((m) => m.category === category);
    if (inCategory.length === 0) continue;
    lines.push(`${CATEGORY_LABEL[category]}:`);
    for (const m of inCategory) {
      if (category === "self_report" && m.question) {
        lines.push(`- Asked "${m.question}" → ${m.statement}`);
      } else {
        lines.push(`- ${m.statement}`);
      }
    }
  }
  return lines;
}

/**
 * Pick up to `cap` memories, round-robin across categories by recency: the
 * newest of each category first, then the second-newest of each, and so on.
 * A pure "newest N" would let a chatty trigger stream crowd out the single
 * "what works" the model most needs; round-robin keeps every category present
 * in proportion, newest first within each.
 */
function pickBalanced(memories: BrainMemory[], cap: number): BrainMemory[] {
  const sorted = [...memories].sort(byNewest);
  if (sorted.length <= cap) return sorted;
  const queues = CATEGORY_ORDER.map((c) => sorted.filter((m) => m.category === c));
  const picked: BrainMemory[] = [];
  let progressed = true;
  while (picked.length < cap && progressed) {
    progressed = false;
    for (const q of queues) {
      const next = q.shift();
      if (!next) continue;
      picked.push(next);
      progressed = true;
      if (picked.length >= cap) break;
    }
  }
  return picked;
}

export function formatBrainMemoryForPrompt(
  brain: UserBrainMirror | null | undefined,
  options: FormatBrainMemoryOptions = {},
): string {
  if (!brain) return "";
  const summary = (brain.summary ?? "").trim();
  const memories = brain.memories ?? [];
  if (!summary && memories.length === 0) return "";

  const perBehaviorCap = options.perBehaviorCap ?? 8;
  const generalCap = options.generalCap ?? 6;
  const allowed = options.behaviorIds ? new Set(options.behaviorIds) : null;

  const byBehavior = new Map<string, BrainMemory[]>();
  const general: BrainMemory[] = [];
  for (const m of memories) {
    const id = m.behaviorId;
    if (id && (!allowed || allowed.has(id))) {
      const list = byBehavior.get(id) ?? [];
      list.push(m);
      byBehavior.set(id, list);
    } else {
      general.push(m);
    }
  }

  // Order behavior groups: caller's order first, then by newest memory.
  const orderIndex = new Map(
    (options.behaviorOrder ?? []).map((id, i) => [id, i] as const),
  );
  const behaviorIds = [...byBehavior.keys()].sort((a, b) => {
    const ia = orderIndex.get(a);
    const ib = orderIndex.get(b);
    if (ia !== undefined || ib !== undefined) {
      if (ia === undefined) return 1;
      if (ib === undefined) return -1;
      return ia - ib;
    }
    const na = byBehavior.get(a)!.sort(byNewest)[0].createdAt;
    const nb = byBehavior.get(b)!.sort(byNewest)[0].createdAt;
    return nb.localeCompare(na);
  });

  const heading = options.heading ?? "WHAT YOU ALREADY KNOW ABOUT THIS USER";
  const lines: string[] = [`## ${heading}`, ""];
  lines.push(
    "Durable memory from every past conversation, in second person. Build on it: when a question you would ask is already answered here, reference the answer and go one level deeper instead. Recent memories can sharpen or supersede older ones.",
  );
  lines.push("");

  if (summary) {
    lines.push("**Profile:**");
    lines.push(summary);
    lines.push("");
  }

  for (const id of behaviorIds) {
    const group = byBehavior.get(id)!;
    const name =
      group.find((m) => m.behaviorName)?.behaviorName ?? "Behavior";
    lines.push(`**${name}:**`);
    lines.push(...renderGroup(pickBalanced(group, perBehaviorCap)));
    lines.push("");
  }

  if (general.length > 0) {
    lines.push("**In general:**");
    lines.push(...renderGroup(pickBalanced(general, generalCap)));
    lines.push("");
  }

  return lines.join("\n").trim();
}

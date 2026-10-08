import { z } from "zod";
import { goalSchema } from "./goal";
import { tacticAgreementSchema } from "./agreement";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * A strategy: one coherent answer to "what do I do about this?", built with
 * the user, accepted move by move, then carried by the app until it is retired.
 *
 *   users/{uid}/strategies/{strategyId}
 *   users/{uid}/strategies/{strategyId}/days/{dateString}   (adherence)
 *
 * The per-day plan snapshots (strategySnapshot.ts) used to live in this
 * collection; they are at `users/{uid}/planHistory/{date}`.
 *
 * Shape of the pipeline this models:
 *   - A model reasons FREELY and writes the strategy in prose (`source.prose`).
 *   - A mapper splits the prose into ITEMS: the moves, in the strategy's own
 *     words. The item is the unit the user accepts or declines.
 *   - Each item carries zero or more BINDINGS: how Impulse expresses and
 *     enforces it (a goal, a trigger plan, a boundary the recap checks, a
 *     setup checklist...). An item with no bindings is framing: shown, not
 *     tracked. Bindings are implementation; the user never accepts a binding.
 *   - Negotiation is free text. Each round produces a new `revision`: edited
 *     and added items go back to "proposed"; untouched items keep their review
 *     state and text byte-for-byte (see applyStrategyRevision).
 *   - Accepting is applied server-side: the client flips `userReview`, the
 *     server compiles accepted bindings into triggers / plans / goals and
 *     stamps the created ids back onto the binding.
 *
 * Tactic content: `tacticIds` reference the user's library only. Concrete
 * actions with no library match are `scopedSteps`: they live on this strategy,
 * are labelled with their author, and are never written to `tactics`.
 */

// ---------------------------------------------------------------------------
// Building blocks

/** "HH:MM", 24h. */
const clockTimeSchema = z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/);

/**
 * "system": the starter strategy made with an experiment ("track and
 * notice"), before the user has a strategy of their own.
 */
export const strategyAuthorSchema = z.enum(["ai", "coach", "user", "system"]);
export type StrategyAuthor = z.infer<typeof strategyAuthorSchema>;

/** A concrete action with no tactic-library equivalent. Strategy-scoped. */
export const scopedStepSchema = z.object({
  id: z.string().min(1),
  text: z.string().min(1),
  authoredBy: strategyAuthorSchema,
});
export type ScopedStep = z.infer<typeof scopedStepSchema>;

/**
 * Where a boundary starts or ends. Real rules are anchored to moments, not
 * clocks ("until I sit down to work", "from waking"), so an event anchor is
 * first-class; `approxTime` is what reminders and the recap fall back on.
 */
export const boundaryAnchorSchema = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("clock"), time: clockTimeSchema }),
  z.object({
    kind: z.literal("event"),
    event: z.enum(["wake", "leave_home", "work_start", "work_end", "bedtime", "slip"]),
    approxTime: clockTimeSchema.optional(),
  }),
]);
export type BoundaryAnchor = z.infer<typeof boundaryAnchorSchema>;

// ---------------------------------------------------------------------------
// Bindings: how Impulse carries an item

const behaviorIdsField = z.array(z.string()).default([]);

/** Replace a behavior's goal. Previous goal kept so retiring can restore it. */
export const goalBindingSchema = z.object({
  type: z.literal("goal"),
  behaviorId: z.string().min(1),
  goal: goalSchema,
  previousGoal: goalSchema.optional(),
  appliedAt: timestampSchema.optional(),
});

/**
 * "When I notice X, do Y". Compiles to a trigger (existing, or created from
 * `triggerText`) whose "Next up" agreement is the first library tactic: the
 * one in-the-moment mechanism that is delivered deterministically. Scoped
 * steps have no tactic doc; impulse sessions read them from the strategy.
 */
export const triggerPlanBindingSchema = z.object({
  type: z.literal("trigger_plan"),
  existingTriggerId: z.string().optional(),
  triggerText: z.string().optional(),
  behaviorIds: behaviorIdsField,
  tacticIds: z.array(z.string()).default([]),
  scopedSteps: z.array(scopedStepSchema).default([]),
  createdTriggerId: z.string().optional(),
  /** Set when compiling replaced an agreement; restored on uncompile. */
  previousAgreement: tacticAgreementSchema.optional(),
  appliedAt: timestampSchema.optional(),
});

/** A routine prompted at a fixed time. Compiles to a scheduled plan. */
export const scheduledPlanBindingSchema = z.object({
  type: z.literal("scheduled_plan"),
  hour: z.number().int().min(0).max(23),
  minute: z.number().int().min(0).max(59),
  weekdays: z.array(z.number().int().min(0).max(6)).min(1),
  behaviorIds: behaviorIdsField,
  tacticIds: z.array(z.string()).default([]),
  scopedSteps: z.array(scopedStepSchema).default([]),
  createdPlanId: z.string().optional(),
});

/**
 * A standing rule that is not a goal: "no feeds until I sit down to work",
 * "not while walking", "phone out of private spots after a slip". The evening
 * recap asks `recapQuestion`; the answer is a StrategyDay entry, and kept days
 * form the boundary's streak when `tracksStreak`.
 */
export const boundaryBindingSchema = z
  .object({
    type: z.literal("boundary"),
    rule: z.string().min(1),
    recapQuestion: z.string().min(1),
    start: boundaryAnchorSchema.optional(),
    end: boundaryAnchorSchema.optional(),
    /** A non-time condition: "while walking", "at the café". */
    context: z.string().optional(),
    /** Days it applies; absent = every day. 0 = Sunday. */
    weekdays: z.array(z.number().int().min(0).max(6)).optional(),
    behaviorIds: behaviorIdsField,
    tracksStreak: z.boolean().default(false),
  })
  .refine((b) => b.start || b.end || b.context, {
    message: "A boundary needs a start, an end, or a context",
  });

/** A one-off environment change, confirmed step by step. */
export const setupBindingSchema = z.object({
  type: z.literal("setup"),
  steps: z
    .array(
      z.object({
        id: z.string().min(1),
        text: z.string().min(1),
        doneAt: timestampSchema.optional(),
      }),
    )
    .min(1),
});

/** A dated look-back, optionally with the decision rule agreed up front. */
export const checkInBindingSchema = z.object({
  type: z.literal("check_in"),
  /** Days after activation. */
  afterDays: z.number().int().positive(),
  prompt: z.string().min(1),
  decisionRule: z.string().optional(),
  scheduledCheckInId: z.string().optional(),
});

/** Runs the strategy as the intervene stage of an experiment. */
export const experimentBindingSchema = z.object({
  type: z.literal("experiment"),
  /** The Experiment this strategy runs (users/{uid}/experiments/{id}). */
  experimentId: z.string().optional(),
  /**
   * The experiment stage the strategy runs it in: "observe" for the starter
   * strategy (tracking and noticing), "intervene" for a real one.
   */
  stage: z.enum(["observe", "intervene"]).default("intervene"),
  targetDays: z.number().int().positive(),
  /** What to notice each day, in the strategy's words. */
  observations: z.array(z.string()).default([]),
});

// A discriminatedUnion can't hold the refined boundary schema, so union.
export const strategyBindingSchema = z.union([
  goalBindingSchema,
  triggerPlanBindingSchema,
  scheduledPlanBindingSchema,
  boundaryBindingSchema,
  setupBindingSchema,
  checkInBindingSchema,
  experimentBindingSchema,
]);
export type StrategyBinding = z.infer<typeof strategyBindingSchema>;
export type BoundaryBinding = z.infer<typeof boundaryBindingSchema>;
export type SetupBinding = z.infer<typeof setupBindingSchema>;

// ---------------------------------------------------------------------------
// Items

/** What the move is to the user. Drives grouping on the strategy screen. */
export const strategyItemKindSchema = z.enum([
  "setup", // change the environment once
  "boundary", // a standing rule
  "moment", // what to do when the urge comes
  "fallback", // what to do when the plan falls through
  "routine", // a recurring prompt
  "experiment", // the time-boxed test
  "review", // the dated look-back
  "framing", // a way to see it; nothing to check
]);
export type StrategyItemKind = z.infer<typeof strategyItemKindSchema>;

export const strategyItemSchema = z.object({
  id: z.string().min(1),
  /** The move in the strategy's own words, second person. */
  text: z.string().min(1),
  why: z.string().optional(),
  kind: strategyItemKindSchema,
  bindings: z.array(strategyBindingSchema).default([]),
  /** How completely the bindings express `text`. */
  fidelity: z.enum(["exact", "partial", "lossy"]),
  /** What the bindings cannot carry. Shown to coaches, not users. */
  lossNote: z.string().optional(),
  userReview: z.enum(["proposed", "accepted", "declined"]).default("proposed"),
  userReviewedAt: timestampSchema.optional(),
  /** Revision that introduced the current text. */
  textRevision: z.number().int().positive(),
});
export type StrategyItem = z.infer<typeof strategyItemSchema>;

// ---------------------------------------------------------------------------
// Strategy

export const strategyRoundSchema = z.object({
  /** The revision this round produced. */
  revision: z.number().int().positive(),
  userFeedback: z.string(),
  coachReply: z.string(),
  at: timestampSchema,
  /** The strategy_proposal card that presented this revision. */
  proposalLogId: z.string().optional(),
});

/**
 * How a weekly review left the strategy. "undecided" is its own verdict: a
 * user who says "I don't know, let's move on" has not confirmed anything.
 */
export const strategyReviewVerdictSchema = z.enum([
  "kept", // the user affirmed it as it is
  "revised", // moves were changed (revision requested or decided)
  "undecided", // the user didn't commit either way
  "retired", // the user stopped it
]);
export type StrategyReviewVerdict = z.infer<typeof strategyReviewVerdictSchema>;

export const strategyReviewSchema = z.object({
  weekOfDateString: z.string(),
  verdict: strategyReviewVerdictSchema,
  /** One line, the user's own framing where possible. */
  note: z.string().optional(),
  sessionId: z.string(),
  at: timestampSchema,
});
export type StrategyReview = z.infer<typeof strategyReviewSchema>;

export const strategySchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  title: z.string().min(1),
  /** The diagnosis: what loop is running. Second person. */
  rationale: z.string().min(1),
  /** Dated observations from the user's own data. Rendered above the items. */
  evidence: z.array(z.string()).default([]),
  behaviorIds: z.array(z.string()).default([]),
  status: z.enum(["draft", "active", "retired"]),
  revision: z.number().int().positive(),
  items: z.array(strategyItemSchema),
  rounds: z.array(strategyRoundSchema).default([]),
  /** Weekly reviews of this strategy, oldest first. */
  reviews: z.array(strategyReviewSchema).default([]),
  source: z.object({
    authoredBy: strategyAuthorSchema,
    /** The reasoner's full prose, kept verbatim. */
    prose: z.string().optional(),
    model: z.string().optional(),
    sessionId: z.string().optional(),
  }),
  /** Where the user put it among their strategies (Strategy tab order). */
  ordinal: z.number().optional(),
  activatedAt: timestampSchema.optional(),
  retiredAt: timestampSchema.optional(),
  retiredReason: z.string().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
export type Strategy = z.infer<typeof strategySchema>;

/**
 * How one move went on one day. kept: did it / held it / used it. partly:
 * some of it. broken: didn't / slipped. na: it didn't apply (a weekday rule
 * on a weekend, a moment that never came).
 */
export const strategyDayOutcomeSchema = z.enum(["kept", "partly", "broken", "na"]);
export type StrategyDayOutcome = z.infer<typeof strategyDayOutcomeSchema>;

/** One day of a strategy's moves: strategies/{id}/days/{dateString}. */
export const strategyDaySchema = z.object({
  dateString: z.string(),
  /**
   * itemId -> outcome, for every move checked that day: lines, routines and
   * in-the-moment plans (the name is from when only lines were checked).
   */
  boundaries: z.record(z.string(), strategyDayOutcomeSchema),
  /**
   * Moves whose outcome the app filled in from what it already knew (a
   * routine marked done, a plan used in the moment, a line with nothing
   * logged). The user's own answer replaces it and drops it from here.
   */
  prefilled: z.array(z.string()).optional(),
  /** Where the answer came from. */
  source: z.enum(["recap", "user", "coach"]),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
export type StrategyDay = z.infer<typeof strategyDaySchema>;

/**
 * A request to build or revise a strategy: users/{uid}/strategyRequests/{id}.
 * Written by the proposeStrategy / reviseStrategy tools (which run in both
 * the functions runtime and the voice agent, so they only write this doc);
 * a functions trigger runs the reasoning pipeline (minutes, not a turn) and
 * delivers the result into `sessionId` as a strategy_proposal card.
 *
 * The pipeline reads the session transcript itself; `ask` / `feedback` are
 * the model's short pointer to what the user wants, not a substitute for it.
 */
export const strategyRequestSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  sessionId: z.string(),
  /**
   * build: a new strategy from the conversation. revise: the user's pushback.
   * review: the week's record, prepared before a weekly review (no user
   * feedback; the card waits in the review session, no reply is posted).
   */
  kind: z.enum(["build", "revise", "review"]),
  /** review: the week under review (its last day). */
  weekOfDateString: z.string().optional(),
  /** build: the behaviors this is about (may be empty = infer). */
  behaviorIds: z.array(z.string()).default([]),
  /** build: what the user is asking for, close to their words. */
  ask: z.string().optional(),
  /** revise: the strategy being negotiated. */
  strategyId: z.string().optional(),
  /** revise: the user's pushback, close to their words. */
  feedback: z.string().optional(),
  status: z.enum(["pending", "running", "done", "failed"]),
  /**
   * build: where a running build is, for the progress the app shows. ideas:
   * reasoning freely over the conversation and history (most of the wait).
   * moves: shaping those ideas into the strategy's moves.
   */
  stage: z.enum(["ideas", "moves"]).optional(),
  /** When it started running; the app's progress bar counts from here. */
  startedAt: timestampSchema.optional(),
  /** coach: proposeStrategy. button: the user tapped "Just build it". */
  source: z.enum(["coach", "button"]).optional(),
  error: z.string().optional(),
  /** The strategy written (build) or revised (revise). */
  resultStrategyId: z.string().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
export type StrategyRequest = z.infer<typeof strategyRequestSchema>;

// ---------------------------------------------------------------------------
// Helpers

/** Does a boundary apply on this weekday (0 = Sunday)? */
export const boundaryAppliesOn = (binding: Pick<BoundaryBinding, "weekdays">, weekday: number) =>
  !binding.weekdays || binding.weekdays.includes(weekday);

/** "until you start work (~08:30)" — human wording for an anchor. */
export function describeBoundaryAnchor(anchor: BoundaryAnchor): string {
  if (anchor.kind === "clock") return anchor.time;
  const label: Record<typeof anchor.event, string> = {
    wake: "waking up",
    leave_home: "leaving home",
    work_start: "starting work",
    work_end: "finishing work",
    bedtime: "bedtime",
    slip: "a slip",
  };
  return anchor.approxTime ? `${label[anchor.event]} (~${anchor.approxTime})` : label[anchor.event];
}

export const acceptedStrategyItems = (strategy: Pick<Strategy, "items">) =>
  strategy.items.filter((i) => i.userReview === "accepted");

/** Moves still waiting for a yes or no (framing is never decided). */
export const undecidedStrategyItems = <T extends Pick<StrategyItem, "userReview" | "kind">>(items: T[]): T[] =>
  items.filter((i) => (i.userReview ?? "proposed") === "proposed" && i.kind !== "framing");

/**
 * Two strategies overlap when they cover a behavior in common. A behavior has
 * at most one running strategy, so starting one retires the active strategies
 * it overlaps.
 */
export const strategiesOverlap = (a: Pick<Strategy, "behaviorIds">, b: Pick<Strategy, "behaviorIds">) =>
  a.behaviorIds.some((id) => b.behaviorIds.includes(id));

/** Every accepted boundary binding, with the item it belongs to. */
export function activeBoundaries(strategy: Pick<Strategy, "items">) {
  return acceptedStrategyItems(strategy).flatMap((item) =>
    item.bindings
      .filter((b): b is BoundaryBinding => b.type === "boundary")
      .map((binding) => ({ item, binding })),
  );
}

/** Setup steps not yet confirmed, across accepted items. */
export function pendingSetupSteps(strategy: Pick<Strategy, "items">) {
  return acceptedStrategyItems(strategy).flatMap((item) =>
    item.bindings
      .filter((b): b is SetupBinding => b.type === "setup")
      .flatMap((b) => b.steps.filter((s) => !s.doneAt).map((step) => ({ item, step }))),
  );
}

/**
 * Consecutive kept days for one boundary item, counting back from the most
 * recent recorded day. "na" days and days with no entry for the item are
 * skipped (a weekday rule shouldn't break on a weekend); a broken day ends it.
 * A partly day neither ends it nor adds to it.
 */
export function boundaryStreak(
  days: Pick<StrategyDay, "dateString" | "boundaries">[],
  itemId: string,
): number {
  const sorted = [...days].sort((a, b) => b.dateString.localeCompare(a.dateString));
  let streak = 0;
  for (const day of sorted) {
    const outcome = day.boundaries[itemId];
    if (outcome === "kept") streak++;
    else if (outcome === "broken") break;
  }
  return streak;
}

// ---------------------------------------------------------------------------
// Negotiation

export type StrategyRevisionOp =
  | { op: "keep"; itemId: string }
  | { op: "drop"; itemId: string }
  | { op: "edit"; itemId: string; item: Omit<StrategyItem, "id" | "userReview" | "userReviewedAt" | "textRevision"> }
  | { op: "add"; item: Omit<StrategyItem, "userReview" | "userReviewedAt" | "textRevision"> };

export interface StrategyRevision {
  ops: StrategyRevisionOp[];
  rationale?: string;
  userFeedback: string;
  coachReply: string;
}

/**
 * Apply one negotiation round. The guarantee that makes per-item acceptance
 * meaningful: an item no op edits or drops comes through unchanged, review
 * state included. Edited and added items return to "proposed" at the new
 * revision, since the user hasn't seen that text. Items with no op are kept
 * (a reviser that forgets an item must not delete it).
 */
export function applyStrategyRevision<T extends Pick<Strategy, "items" | "revision" | "rationale" | "rounds">>(
  strategy: T,
  revision: StrategyRevision,
  at: StrategyDay["createdAt"],
): T {
  const next = strategy.revision + 1;
  const existingIds = new Set(strategy.items.map((i) => i.id));
  const dropped = new Set<string>();
  const edits = new Map<string, StrategyItem>();
  const added: StrategyItem[] = [];

  for (const op of revision.ops) {
    if (op.op === "keep") continue;
    if (op.op === "add") {
      if (existingIds.has(op.item.id)) throw new Error(`add: item ${op.item.id} already exists`);
      added.push({ ...op.item, userReview: "proposed", textRevision: next });
      continue;
    }
    if (!existingIds.has(op.itemId)) throw new Error(`${op.op}: unknown item ${op.itemId}`);
    if (op.op === "drop") dropped.add(op.itemId);
    else edits.set(op.itemId, { ...op.item, id: op.itemId, userReview: "proposed", textRevision: next });
  }

  const items = strategy.items
    .filter((i) => !dropped.has(i.id))
    .map((i) => edits.get(i.id) ?? i)
    .concat(added);

  return {
    ...strategy,
    items,
    revision: next,
    rationale: revision.rationale ?? strategy.rationale,
    rounds: [
      ...strategy.rounds,
      { revision: next, userFeedback: revision.userFeedback, coachReply: revision.coachReply, at },
    ],
  };
}

export const isStrategy = (value: unknown): value is Strategy =>
  strategySchema.safeParse(value).success;

/** The experiment binding of the strategy's accepted moves, if it runs one. */
export function strategyExperimentBinding(
  strategy: Pick<Strategy, "items">,
): Extract<StrategyBinding, { type: "experiment" }> | undefined {
  for (const item of strategy.items) {
    if (item.userReview !== "accepted") continue;
    for (const b of item.bindings) if (b.type === "experiment") return b;
  }
  return undefined;
}

/** The starter strategy made with an experiment, before a real one exists. */
export const isStarterStrategy = (strategy: Pick<Strategy, "source">) =>
  strategy.source.authoredBy === "system";

// ---------------------------------------------------------------------------
// Daily check-off
// ---------------------------------------------------------------------------

/** The kinds of move checked day by day (setup, review and framing are not). */
export const DAILY_STRATEGY_KINDS = ["boundary", "routine", "moment", "fallback"] as const;

/**
 * The moves of a running strategy to check for a day: accepted lines,
 * routines and in-the-moment plans that apply on that weekday (0 = Sunday).
 */
export function dailyStrategyItems(strategy: Pick<Strategy, "items">, weekday: number): StrategyItem[] {
  return acceptedStrategyItems(strategy).filter((item) => {
    if (!(DAILY_STRATEGY_KINDS as readonly string[]).includes(item.kind)) return false;
    const days = item.bindings.flatMap((b) =>
      b.type === "boundary" || b.type === "scheduled_plan" ? [b.weekdays ?? null] : [],
    );
    // No weekday rule on any binding: every day.
    return days.length === 0 || days.some((d) => d === null || d.includes(weekday));
  });
}

/** The three answers for a move, in the move's own words, worst first. */
export function strategyOutcomeLabels(kind: StrategyItem["kind"]): Record<"broken" | "partly" | "kept", string> & { na?: string } {
  switch (kind) {
    case "boundary":
      return { broken: "Slipped", partly: "Mostly", kept: "Held" };
    case "moment":
    case "fallback":
      return { broken: "Didn't use it", partly: "Partly", kept: "Used it", na: "Didn't come up" };
    default:
      return { broken: "Didn't do it", partly: "Partly", kept: "Did it" };
  }
}

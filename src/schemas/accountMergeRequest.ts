import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * Merging two anonymous accounts that belong to one person: an abandoned
 * account (the source, whose recovery key was lost) into the one they use now
 * (the target). Top-level `accountMergeRequests/{requestId}`, written only by
 * the server (impulse-functions src/accountMerge).
 *
 * An admin starts it in impulse-admin from a dry-run preview; nothing is
 * merged until the TARGET account's app proves it owns the source by
 * presenting the source's recovery key. Only then does the merge run, in a
 * task, with the same engine as scripts/mergeAnonymousAccounts.ts.
 *
 *   pending   created by an admin, waiting for the device's proof
 *   queued    proof accepted, merge task enqueued
 *   running   the merge task is writing
 *   completed merged; the source carries `mergedInto` and is read-only
 *   failed    the task threw; the engine is idempotent, so it can be re-queued
 *   declined  the user said no (from the app)
 *   cancelled an admin withdrew it
 *   expired   nobody answered before `expiresAt`
 *   locked    too many wrong keys; an admin has to start a new request
 */
export const accountMergeRequestStatusSchema = z.enum([
  "pending",
  "queued",
  "running",
  "completed",
  "failed",
  "declined",
  "cancelled",
  "expired",
  "locked",
]);
export type AccountMergeRequestStatus = z.infer<typeof accountMergeRequestStatusSchema>;

const TRANSITIONS: Record<AccountMergeRequestStatus, readonly AccountMergeRequestStatus[]> = {
  pending: ["queued", "declined", "cancelled", "expired", "locked"],
  // A task retry re-enters "running"; a crash before the first write can fail.
  queued: ["running", "failed"],
  running: ["running", "completed", "failed"],
  failed: ["queued", "running"],
  completed: [],
  declined: [],
  cancelled: [],
  expired: [],
  locked: [],
};

export function canTransitionAccountMerge(
  from: AccountMergeRequestStatus,
  to: AccountMergeRequestStatus,
): boolean {
  return TRANSITIONS[from].includes(to);
}

export const ACCOUNT_MERGE_TERMINAL_STATUSES = (
  Object.keys(TRANSITIONS) as AccountMergeRequestStatus[]
).filter((s) => TRANSITIONS[s].length === 0);

/** Statuses that hold the pair: a second request for either account is refused. */
export const ACCOUNT_MERGE_ACTIVE_STATUSES: readonly AccountMergeRequestStatus[] = [
  "pending",
  "queued",
  "running",
  "failed",
];

export const isAccountMergeRequestOpen = (status: AccountMergeRequestStatus) =>
  ACCOUNT_MERGE_ACTIVE_STATUSES.includes(status);

/** How long the device has to answer, and how many wrong keys it gets. */
export const ACCOUNT_MERGE_REQUEST_TTL_MS = 7 * 24 * 60 * 60 * 1000;
export const ACCOUNT_MERGE_MAX_FAILED_ATTEMPTS = 5;
/** Wrong keys one device may send across all requests in a rolling day. */
export const ACCOUNT_MERGE_MAX_DEVICE_FAILURES_PER_DAY = 10;

const accountSideSchema = z.object({
  uid: z.string(),
  createdAt: timestampSchema.nullable(),
  /** First and last local day (YYYY-MM-DD) the account holds history for. */
  firstDate: z.string().nullable(),
  lastDate: z.string().nullable(),
  docCount: z.number().int(),
  /** daySummaries the account holds. */
  dayCount: z.number().int(),
});

const sampledGroupSchema = z.object({
  count: z.number().int(),
  samplePaths: z.array(z.string()),
});

/**
 * What the dry run said when the request was made: the same plan
 * mergeAnonymousAccounts.ts prints, summarised. Paths are relative to the
 * target account, and only a few are kept per group.
 */
export const accountMergePreviewSchema = z.object({
  generatedAt: timestampSchema,
  source: accountSideSchema,
  target: accountSideSchema,
  /** The target's auth creationTime: source docs after it are scheduler output. */
  cutover: timestampSchema,
  behaviors: z.array(
    z.object({
      sourceId: z.string(),
      sourceName: z.string().nullable(),
      sourceTrackingType: z.string().nullable(),
      targetId: z.string().nullable(),
      targetName: z.string().nullable(),
      targetTrackingType: z.string().nullable(),
    }),
  ),
  /** Collection pattern -> outcome (create/update/noop/skip/unresolved) -> source docs. */
  countsByCollection: z.record(z.record(z.number().int())),
  collisions: z.array(sampledGroupSchema.extend({ resolution: z.string() })),
  skips: z.array(sampledGroupSchema.extend({ reason: z.string() })),
  /** Decisions the merge takes on its own (fixed: earlier start date, tracking-type mismatch kept). */
  decisions: z.array(z.string()),
  /** Anything here and the request can't be created. */
  blockers: z.array(z.string()),
  validation: z.object({
    valid: z.number().int(),
    preexistingInvalid: z.number().int(),
    unvalidated: z.number().int(),
  }),
  writes: z.object({
    creates: z.number().int(),
    updates: z.number().int(),
    firsts: z.number().int(),
    storageObjects: z.number().int(),
    createdAtMoved: z.boolean(),
    total: z.number().int(),
  }),
});
export type AccountMergePreview = z.infer<typeof accountMergePreviewSchema>;

export const accountMergeHistoryEventSchema = z.object({
  at: timestampSchema,
  status: accountMergeRequestStatusSchema,
  actor: z.enum(["admin", "user", "system"]),
  actorUid: z.string().nullable().optional(),
  note: z.string().optional(),
});
export type AccountMergeHistoryEvent = z.infer<typeof accountMergeHistoryEventSchema>;

export const accountMergeProofMethodSchema = z.enum(["keychain", "typed"]);
export type AccountMergeProofMethod = z.infer<typeof accountMergeProofMethodSchema>;

export const accountMergeResultSchema = z.object({
  /** Private Storage object holding both accounts as they were before the merge. */
  backupPath: z.string(),
  startedAt: timestampSchema,
  finishedAt: timestampSchema,
  /** Which task attempt finished it (retries are idempotent). */
  attempt: z.number().int(),
  writes: accountMergePreviewSchema.shape.writes,
  recompute: z.object({
    behaviorIds: z.array(z.string()),
    months: z.array(z.string()),
    monthEntries: z.number().int(),
  }),
});
export type AccountMergeResult = z.infer<typeof accountMergeResultSchema>;

export const accountMergeRequestSchema = z
  .object({
    id: z.string().optional(),
    sourceUid: z.string().min(1),
    targetUid: z.string().min(1),
    status: accountMergeRequestStatusSchema,
    createdAt: timestampSchema,
    /** Admin uid that started it. */
    createdBy: z.string(),
    updatedAt: timestampSchema,
    expiresAt: timestampSchema,
    preview: accountMergePreviewSchema,
    /** Wrong keys sent for this request. */
    attempts: z.object({
      failed: z.number().int().min(0),
      lastFailedAt: timestampSchema.nullable(),
    }),
    /** How ownership was shown. Null until it was. */
    proof: z
      .object({
        method: accountMergeProofMethodSchema,
        verifiedAt: timestampSchema,
      })
      .nullable(),
    /** Every status change, in order. */
    history: z.array(accountMergeHistoryEventSchema),
    result: accountMergeResultSchema.nullable(),
    /** Last failure, cleared when the merge completes. */
    error: z.string().nullable(),
  })
  .refine((r) => r.sourceUid !== r.targetUid, {
    message: "sourceUid and targetUid must differ",
    path: ["targetUid"],
  });
export type AccountMergeRequest = z.infer<typeof accountMergeRequestSchema>;

/**
 * Pointer on the TARGET's `users/{uid}`, so the app (which already listens to
 * its user doc) knows there is a request to show. The request doc itself is
 * server-only; the app reads it through the API.
 */
export const userAccountMergePointerSchema = z.object({
  id: z.string(),
  status: accountMergeRequestStatusSchema,
  updatedAt: timestampSchema,
});
export type UserAccountMergePointer = z.infer<typeof userAccountMergePointerSchema>;

/**
 * Marker on the SOURCE's `users/{uid}` once merged. The account is never
 * revoked or deleted; it becomes read-only (Firestore rules, plus a
 * `mergedInto` custom claim) and its recovery key signs in to `uid`.
 */
export const userMergedIntoSchema = z.object({
  uid: z.string(),
  requestId: z.string(),
  at: timestampSchema,
});
export type UserMergedInto = z.infer<typeof userMergedIntoSchema>;

/** Device-wide wrong-key counter, `accountMergeAttemptLimits/{sha256(deviceId)}`. Server-only. */
export const accountMergeAttemptLimitSchema = z.object({
  /** Millis of each wrong key in the last day. */
  failuresMs: z.array(z.number()),
  updatedAt: timestampSchema,
});
export type AccountMergeAttemptLimit = z.infer<typeof accountMergeAttemptLimitSchema>;

/** What the target's app is shown (app/accountMerge/current). Dates are ISO strings. */
export interface AccountMergeAppView {
  id: string;
  status: AccountMergeRequestStatus;
  expiresAt: string;
  source: { firstDate: string | null; lastDate: string | null; dayCount: number };
  attemptsLeft: number;
  error: string | null;
}

/** Why a key was refused (app/accountMerge/confirm). */
export type AccountMergeConfirmError =
  | "wrong_key"
  | "own_key"
  | "locked"
  | "device_limited"
  | "expired"
  | "not_pending"
  | "not_found";

/**
 * Recovery keys are 20 characters from a 32-letter alphabet in dash-joined
 * groups of four (impulse-native utils/recoveryKey.ts). A typed key may be in
 * lower case, spaced or undashed; the stored hash is of the canonical form.
 * The as-typed form comes first so a key that was ever stored differently
 * still matches.
 */
export function normalizeRecoveryKeyCandidates(input: string): string[] {
  const typed = input.trim();
  if (!typed) return [];
  const compact = typed.toUpperCase().replace(/[^A-Z0-9]/g, "");
  const grouped = compact.match(/.{1,4}/g)?.join("-") ?? compact;
  return [...new Set([typed, typed.toUpperCase(), grouped])];
}

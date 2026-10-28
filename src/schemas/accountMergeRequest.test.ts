import {
  ACCOUNT_MERGE_ACTIVE_STATUSES,
  ACCOUNT_MERGE_TERMINAL_STATUSES,
  accountMergeRequestSchema,
  accountMergeRequestStatusSchema,
  canTransitionAccountMerge,
  isAccountMergeRequestOpen,
  normalizeRecoveryKeyCandidates,
} from "./accountMergeRequest";
import { userDataSchema } from "./userData";

const now = new Date("2026-10-27T12:00:00Z");

const preview = {
  generatedAt: now,
  source: { uid: "src", createdAt: now, firstDate: "2026-04-17", lastDate: "2026-07-20", docCount: 900, dayCount: 91 },
  target: { uid: "dst", createdAt: now, firstDate: "2026-07-20", lastDate: "2026-10-27", docCount: 651, dayCount: 99 },
  cutover: now,
  behaviors: [
    {
      sourceId: "b1",
      sourceName: "Vaping",
      sourceTrackingType: "occurrence",
      targetId: "b2",
      targetName: "Vaping",
      targetTrackingType: "scale",
    },
  ],
  countsByCollection: { "logs/*": { create: 284, noop: 4, skip: 14 } },
  collisions: [{ resolution: "keep target: target's current experiment", count: 1, samplePaths: ["experiments/current"] }],
  skips: [{ reason: "derived cache (recompute on target)", count: 12, samplePaths: ["cache/recapPrompt"] }],
  decisions: ["behavior \"Vaping\": tracking types differ"],
  blockers: [],
  validation: { valid: 601, preexistingInvalid: 3, unvalidated: 99 },
  writes: { creates: 697, updates: 6, firsts: 3, storageObjects: 9, createdAtMoved: true, total: 716 },
};

const request = {
  sourceUid: "src",
  targetUid: "dst",
  status: "pending" as const,
  createdAt: now,
  createdBy: "admin-uid",
  updatedAt: now,
  expiresAt: now,
  preview,
  attempts: { failed: 0, lastFailedAt: null },
  proof: null,
  history: [{ at: now, status: "pending" as const, actor: "admin" as const, actorUid: "admin-uid" }],
  result: null,
  error: null,
};

describe("accountMergeRequestSchema", () => {
  it("accepts a pending request with its dry-run preview", () => {
    const r = accountMergeRequestSchema.safeParse(request);
    expect(r.success).toBe(true);
  });

  it("rejects a request that merges an account into itself", () => {
    const r = accountMergeRequestSchema.safeParse({ ...request, targetUid: "src" });
    expect(r.success).toBe(false);
  });

  it("rejects an unknown status", () => {
    expect(accountMergeRequestSchema.safeParse({ ...request, status: "merged" }).success).toBe(false);
  });

  it("accepts a completed request with its result", () => {
    const r = accountMergeRequestSchema.safeParse({
      ...request,
      status: "completed",
      proof: { method: "keychain", verifiedAt: now },
      result: {
        backupPath: "accountMergeBackups/r1/merge.json",
        startedAt: now,
        finishedAt: now,
        attempt: 1,
        writes: preview.writes,
        recompute: { behaviorIds: ["b2"], months: ["2026-04"], monthEntries: 15 },
      },
    });
    expect(r.success).toBe(true);
  });
});

describe("account merge state machine", () => {
  const all = accountMergeRequestStatusSchema.options;

  it("only lets a pending request be proven, declined, cancelled, expired or locked", () => {
    const next = all.filter((s) => canTransitionAccountMerge("pending", s));
    expect(next.sort()).toEqual(["cancelled", "declined", "expired", "locked", "queued"]);
  });

  it("runs queued -> running -> completed", () => {
    expect(canTransitionAccountMerge("queued", "running")).toBe(true);
    expect(canTransitionAccountMerge("running", "completed")).toBe(true);
  });

  it("lets a failed merge be retried (it is idempotent) but not declined", () => {
    expect(canTransitionAccountMerge("failed", "queued")).toBe(true);
    expect(canTransitionAccountMerge("failed", "declined")).toBe(false);
  });

  it("lets a task retry re-enter running from failed or running", () => {
    expect(canTransitionAccountMerge("failed", "running")).toBe(true);
    expect(canTransitionAccountMerge("running", "running")).toBe(true);
  });

  it("never leaves a terminal state", () => {
    for (const from of ACCOUNT_MERGE_TERMINAL_STATUSES) {
      for (const to of all) expect(canTransitionAccountMerge(from, to)).toBe(false);
    }
  });

  it("cannot skip the proof: pending never goes straight to running or completed", () => {
    expect(canTransitionAccountMerge("pending", "running")).toBe(false);
    expect(canTransitionAccountMerge("pending", "completed")).toBe(false);
  });

  it("treats pending/queued/running/failed as open (blocks a second request)", () => {
    expect([...ACCOUNT_MERGE_ACTIVE_STATUSES].sort()).toEqual(["failed", "pending", "queued", "running"]);
    expect(isAccountMergeRequestOpen("running")).toBe(true);
    expect(isAccountMergeRequestOpen("declined")).toBe(false);
  });
});

describe("normalizeRecoveryKeyCandidates", () => {
  it("keeps the key as typed, first", () => {
    expect(normalizeRecoveryKeyCandidates("ABCD-EFGH-JKLM-NPQR-STUV")[0]).toBe("ABCD-EFGH-JKLM-NPQR-STUV");
  });

  it("forgives case, spaces and missing dashes", () => {
    const c = normalizeRecoveryKeyCandidates("  abcd efgh jklm npqr stuv ");
    expect(c).toContain("ABCD-EFGH-JKLM-NPQR-STUV");
    expect(normalizeRecoveryKeyCandidates("abcdefghjklmnpqrstuv")).toContain("ABCD-EFGH-JKLM-NPQR-STUV");
  });

  it("returns no candidates for blank input and dedupes", () => {
    expect(normalizeRecoveryKeyCandidates("   ")).toEqual([]);
    const c = normalizeRecoveryKeyCandidates("ABCD-EFGH-JKLM-NPQR-STUV");
    expect(new Set(c).size).toBe(c.length);
  });
});

describe("userData merge fields", () => {
  it("accepts the target pointer and the source's mergedInto marker", () => {
    const r = userDataSchema.safeParse({
      accountMergeRequest: { id: "r1", status: "pending", updatedAt: now },
      mergedInto: { uid: "dst", requestId: "r1", at: now },
    });
    expect(r.success).toBe(true);
    if (r.success) {
      expect(r.data.accountMergeRequest?.status).toBe("pending");
      expect(r.data.mergedInto?.uid).toBe("dst");
    }
  });
});

import { USER_ISSUE_MESSAGE_MAX, userIssueSchema, userIssueDocId } from "../userIssue";

const at = new Date(Date.UTC(2026, 10, 12, 15, 0, 41));

describe("userIssueSchema", () => {
  const base = {
    source: "app",
    kind: "call_start_failed",
    severity: "error",
    message: "Call failed to start after 4 attempts: prepare-failed",
    occurredAt: at,
    createdAt: at,
  };

  it("takes an app issue tied to a call", () => {
    const parsed = userIssueSchema.parse({
      ...base,
      callLogId: "vpZrTwze6P1lXW2PAZ20",
      appVersion: "0.10",
      platform: "ios",
      detail: { cause: "prepare-failed", attempts: 4 },
    });
    expect(parsed.callLogId).toBe("vpZrTwze6P1lXW2PAZ20");
    expect(parsed.detail).toEqual({ cause: "prepare-failed", attempts: 4 });
  });

  it("takes a server issue with no app context", () => {
    expect(userIssueSchema.parse({ ...base, source: "server", kind: "push_delivery_failed" }).source).toBe("server");
  });

  it("rejects an unknown source or severity", () => {
    expect(() => userIssueSchema.parse({ ...base, source: "other" })).toThrow();
    expect(() => userIssueSchema.parse({ ...base, severity: "fatal" })).toThrow();
  });

  it("caps the message so a stack trace cannot bloat the doc", () => {
    expect(() => userIssueSchema.parse({ ...base, message: "x".repeat(USER_ISSUE_MESSAGE_MAX + 1) })).toThrow();
  });
});

describe("userIssueDocId", () => {
  it("sorts newest first by name and stays unique", () => {
    const a = userIssueDocId(Date.UTC(2026, 10, 12, 15), "abc");
    const b = userIssueDocId(Date.UTC(2026, 10, 12, 16), "abc");
    expect(b < a).toBe(true);
    expect(userIssueDocId(1, "x")).not.toBe(userIssueDocId(1, "y"));
  });
});

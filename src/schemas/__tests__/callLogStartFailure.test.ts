import { callLogSchema } from "../index";

const base = {
  type: "call" as const,
  isDisplayable: true as const,
  userId: "u1",
  sessionId: "2026-11-02",
  dateString: "2026-11-02",
  timestamp: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe("callLogSchema: startFailure", () => {
  it("accepts a call the app saw fail to start", () => {
    const data = {
      engine: "elevenlabs",
      startFailure: { at: new Date(), cause: "disconnected", reachability: "online" },
    };
    expect(callLogSchema.safeParse({ ...base, data }).success).toBe(true);
  });

  it("accepts an unknown reachability", () => {
    const data = { startFailure: { at: new Date(), cause: "prepare-failed", reachability: null } };
    expect(callLogSchema.safeParse({ ...base, data }).success).toBe(true);
  });

  it("rejects a reachability it does not know", () => {
    const data = { startFailure: { at: new Date(), cause: "disconnected", reachability: "wifi" } };
    expect(callLogSchema.safeParse({ ...base, data }).success).toBe(false);
  });
});

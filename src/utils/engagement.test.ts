import {
  getEngagementLevel,
  shouldSendRecap,
  ENGAGEMENT_THRESHOLDS,
} from "./engagement";

const NOW = new Date("2026-07-01T12:00:00Z");
const daysAgo = (days: number) =>
  new Date(NOW.getTime() - days * 24 * 60 * 60 * 1000);
// Minimal Firestore Timestamp stand-in.
const ts = (d: Date) => ({ toDate: () => d });

describe("getEngagementLevel", () => {
  it("classifies by days since last activity", () => {
    expect(getEngagementLevel({ lastActive: daysAgo(0) }, NOW)).toBe("engaged");
    expect(getEngagementLevel({ lastActive: daysAgo(2.9) }, NOW)).toBe("engaged");
    expect(getEngagementLevel({ lastActive: daysAgo(3) }, NOW)).toBe("slipping");
    expect(getEngagementLevel({ lastActive: daysAgo(6.9) }, NOW)).toBe("slipping");
    expect(getEngagementLevel({ lastActive: daysAgo(7) }, NOW)).toBe("distant");
    expect(getEngagementLevel({ lastActive: daysAgo(29.9) }, NOW)).toBe("distant");
    expect(getEngagementLevel({ lastActive: daysAgo(30) }, NOW)).toBe("churned");
    expect(getEngagementLevel({ lastActive: daysAgo(400) }, NOW)).toBe("churned");
  });

  it("thresholds line up with the exported constants", () => {
    expect(getEngagementLevel({ lastActive: daysAgo(ENGAGEMENT_THRESHOLDS.slipping) }, NOW)).toBe("slipping");
    expect(getEngagementLevel({ lastActive: daysAgo(ENGAGEMENT_THRESHOLDS.distant) }, NOW)).toBe("distant");
    expect(getEngagementLevel({ lastActive: daysAgo(ENGAGEMENT_THRESHOLDS.churned) }, NOW)).toBe("churned");
  });

  it("accepts Firestore Timestamps, Dates, and millis", () => {
    expect(getEngagementLevel({ lastActive: ts(daysAgo(10)) }, NOW)).toBe("distant");
    expect(getEngagementLevel({ lastActive: daysAgo(10) }, ts(NOW))).toBe("distant");
    expect(getEngagementLevel({ lastActive: daysAgo(1).getTime() }, NOW.getTime())).toBe("engaged");
  });

  it("falls back through lastActive -> lastLogin -> createdAt", () => {
    expect(
      getEngagementLevel({ lastLogin: daysAgo(1), createdAt: daysAgo(100) }, NOW),
    ).toBe("engaged");
    expect(getEngagementLevel({ createdAt: daysAgo(50) }, NOW)).toBe("churned");
    // A brand-new signup with only createdAt reads as engaged.
    expect(getEngagementLevel({ createdAt: daysAgo(0) }, NOW)).toBe("engaged");
  });

  it("fails open as engaged when there is no activity signal at all", () => {
    expect(getEngagementLevel({}, NOW)).toBe("engaged");
    expect(getEngagementLevel({ lastActive: null }, NOW)).toBe("engaged");
  });

  it("shouldSendRecap only for engaged users", () => {
    expect(shouldSendRecap("engaged")).toBe(true);
    expect(shouldSendRecap("slipping")).toBe(false);
    expect(shouldSendRecap("distant")).toBe(false);
    expect(shouldSendRecap("churned")).toBe(false);
  });
});

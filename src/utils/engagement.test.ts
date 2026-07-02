import {
  getEngagementLevel,
  shouldSendRecap,
  ENGAGEMENT_THRESHOLDS,
  ACTIVATION_GRACE_MINUTES,
} from "./engagement";

const NOW = new Date("2026-07-01T12:00:00Z");
const daysAgo = (days: number) =>
  new Date(NOW.getTime() - days * 24 * 60 * 60 * 1000);
const minutesAgo = (minutes: number) =>
  new Date(NOW.getTime() - minutes * 60 * 1000);
// Minimal Firestore Timestamp stand-in.
const ts = (d: Date) => ({ toDate: () => d });
// Activated user (has a behavior) — on the recency ladder.
const active = { behaviorNames: ["Run"] };

describe("getEngagementLevel", () => {
  it("classifies activated users by days since last activity", () => {
    expect(getEngagementLevel({ ...active, lastActive: daysAgo(0) }, NOW)).toBe("engaged");
    expect(getEngagementLevel({ ...active, lastActive: daysAgo(2.9) }, NOW)).toBe("engaged");
    expect(getEngagementLevel({ ...active, lastActive: daysAgo(3) }, NOW)).toBe("slipping");
    expect(getEngagementLevel({ ...active, lastActive: daysAgo(6.9) }, NOW)).toBe("slipping");
    expect(getEngagementLevel({ ...active, lastActive: daysAgo(7) }, NOW)).toBe("distant");
    expect(getEngagementLevel({ ...active, lastActive: daysAgo(29.9) }, NOW)).toBe("distant");
    expect(getEngagementLevel({ ...active, lastActive: daysAgo(30) }, NOW)).toBe("churned");
    expect(getEngagementLevel({ ...active, lastActive: daysAgo(400) }, NOW)).toBe("churned");
  });

  it("thresholds line up with the exported constants", () => {
    expect(getEngagementLevel({ ...active, lastActive: daysAgo(ENGAGEMENT_THRESHOLDS.slipping) }, NOW)).toBe("slipping");
    expect(getEngagementLevel({ ...active, lastActive: daysAgo(ENGAGEMENT_THRESHOLDS.distant) }, NOW)).toBe("distant");
    expect(getEngagementLevel({ ...active, lastActive: daysAgo(ENGAGEMENT_THRESHOLDS.churned) }, NOW)).toBe("churned");
  });

  it("accepts Firestore Timestamps, Dates, and millis", () => {
    expect(getEngagementLevel({ ...active, lastActive: ts(daysAgo(10)) }, NOW)).toBe("distant");
    expect(getEngagementLevel({ ...active, lastActive: daysAgo(10) }, ts(NOW))).toBe("distant");
    expect(getEngagementLevel({ ...active, lastActive: daysAgo(1).getTime() }, NOW.getTime())).toBe("engaged");
  });

  it("falls back through lastActive -> lastLogin -> createdAt (activated)", () => {
    expect(
      getEngagementLevel({ ...active, lastLogin: daysAgo(1), createdAt: daysAgo(100) }, NOW),
    ).toBe("engaged");
    expect(getEngagementLevel({ ...active, createdAt: daysAgo(50) }, NOW)).toBe("churned");
    // A brand-new signup that already created a behavior reads as engaged.
    expect(getEngagementLevel({ ...active, createdAt: daysAgo(0) }, NOW)).toBe("engaged");
  });

  it("fails open as engaged when an activated user has no activity signal", () => {
    expect(getEngagementLevel({ ...active }, NOW)).toBe("engaged");
    expect(getEngagementLevel({ ...active, lastActive: null }, NOW)).toBe("engaged");
  });

  describe("activation gate (never created a behavior)", () => {
    it("reads as `new` within the grace window after signup", () => {
      expect(getEngagementLevel({ createdAt: minutesAgo(0) }, NOW)).toBe("new");
      expect(
        getEngagementLevel({ createdAt: minutesAgo(ACTIVATION_GRACE_MINUTES - 1) }, NOW),
      ).toBe("new");
      // Empty behaviorNames is still un-activated.
      expect(getEngagementLevel({ behaviorNames: [], createdAt: minutesAgo(5) }, NOW)).toBe("new");
    });

    it("reads as `ghost` once past the grace window with still no behavior", () => {
      expect(
        getEngagementLevel({ createdAt: minutesAgo(ACTIVATION_GRACE_MINUTES) }, NOW),
      ).toBe("ghost");
      expect(getEngagementLevel({ createdAt: daysAgo(1) }, NOW)).toBe("ghost");
      expect(getEngagementLevel({ createdAt: daysAgo(90) }, NOW)).toBe("ghost");
    });

    it("ignores recency: a recent app-open without a behavior is still ghost", () => {
      expect(
        getEngagementLevel({ createdAt: daysAgo(5), lastActive: minutesAgo(1) }, NOW),
      ).toBe("ghost");
    });

    it("stays benign (`new`) when there is no timestamp at all", () => {
      expect(getEngagementLevel({}, NOW)).toBe("new");
    });
  });

  it("shouldSendRecap only for engaged users", () => {
    expect(shouldSendRecap("engaged")).toBe(true);
    expect(shouldSendRecap("slipping")).toBe(false);
    expect(shouldSendRecap("distant")).toBe(false);
    expect(shouldSendRecap("churned")).toBe(false);
    expect(shouldSendRecap("new")).toBe(false);
    expect(shouldSendRecap("ghost")).toBe(false);
  });
});

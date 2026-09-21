import { adjustmentSessionId, adjustmentSessionTitle, endOfLocalDayMs } from "../dayAdjustments";

describe("dayAdjustments", () => {
  it("names the session after the behavior and day", () => {
    expect(adjustmentSessionId("2026-09-20", "abc")).toBe("2026-09-20-adjustment-abc");
    expect(adjustmentSessionTitle("Picking nose")).toBe("Adjusted Picking nose");
    expect(adjustmentSessionTitle(undefined)).toBe("Adjusted behavior");
  });

  it("ends the day at local midnight, in the user's zone", () => {
    // Mexico City is UTC-6 in September: the day ends at 05:59:59.999Z next day.
    expect(new Date(endOfLocalDayMs("2026-09-20", "America/Mexico_City")).toISOString()).toBe(
      "2026-09-21T05:59:59.999Z",
    );
    expect(new Date(endOfLocalDayMs("2026-09-20", "UTC")).toISOString()).toBe("2026-09-20T23:59:59.999Z");
  });
});

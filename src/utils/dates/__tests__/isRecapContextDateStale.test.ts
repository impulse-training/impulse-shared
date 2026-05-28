import { isRecapContextDateStale } from "../index";

describe("isRecapContextDateStale", () => {
  // Simulates the bug: cache built at 9 PM May 26 Mexico City (= 03:05 UTC May 27),
  // user opens recap the following evening (= 03:00 UTC May 28 = 9 PM May 27 Mexico City).
  it("returns true when computedAt is from the previous calendar day in the user's timezone", () => {
    const computedAt = new Date("2026-05-27T03:05:00Z"); // 9:05 PM May 26 in Mexico City
    const now = new Date("2026-05-28T03:00:00Z");        // 9:00 PM May 27 in Mexico City
    expect(isRecapContextDateStale(computedAt, now, "America/Mexico_City")).toBe(true);
  });

  it("returns false when computedAt and now are the same calendar day in the user's timezone", () => {
    const computedAt = new Date("2026-05-27T01:00:00Z"); // 7 PM May 26 in Mexico City
    const now = new Date("2026-05-27T03:00:00Z");        // 9 PM May 26 in Mexico City
    expect(isRecapContextDateStale(computedAt, now, "America/Mexico_City")).toBe(false);
  });

  it("returns true when it is a new day in the user's timezone even though UTC day has not changed", () => {
    // User in UTC+12 (Auckland). Midnight UTC+12 = noon UTC the previous day.
    // computedAt: 11:00 PM NZT (= 11:00 UTC-1 = 11:00 AM UTC)
    // now: 12:30 AM NZT next day (= 12:30 PM UTC same day — same UTC day, new NZT day)
    const computedAt = new Date("2026-05-27T11:00:00Z"); // 11 PM May 27 NZT
    const now = new Date("2026-05-27T12:30:00Z");        // 12:30 AM May 28 NZT
    expect(isRecapContextDateStale(computedAt, now, "Pacific/Auckland")).toBe(true);
  });

  it("returns false when it is the same local day despite different UTC days", () => {
    // User in UTC-10 (Hawaii). New UTC day at midnight UTC = 2 PM Hawaii previous day.
    // Cache built at 11 PM UTC (1 PM Hawaii), read at 2 AM UTC next day (4 PM Hawaii same day).
    const computedAt = new Date("2026-05-27T23:00:00Z"); // 1 PM May 27 HST
    const now = new Date("2026-05-28T02:00:00Z");        // 4 PM May 27 HST (next UTC day, same local day)
    expect(isRecapContextDateStale(computedAt, now, "Pacific/Honolulu")).toBe(false);
  });
});

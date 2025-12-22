import {
  getUnrecappedDays,
  DaySummaryLike,
  UnrecappedDay,
} from "../getUnrecappedDays";

function makeSummaries(
  ids: string[],
  flags?: Record<string, Partial<DaySummaryLike>>
) {
  return ids.map<DaySummaryLike>((id) => ({ id, ...flags?.[id] }));
}

describe("getUnrecappedDays (timezone-aware)", () => {
  test("excludes today, includes yesterday if not recapped (Australia/Adelaide +10:30)", () => {
    const timeZone = "Australia/Adelaide";
    // Fixed "now": 2025-10-20T10:30:00Z (which is 21:00 local)
    const today = new Date(Date.UTC(2025, 9, 20, 10, 30, 0));

    const summaries: DaySummaryLike[] = makeSummaries(
      ["2025-10-18", "2025-10-19", "2025-10-20"],
      {
        "2025-10-19": { recapStartedAt: null, recapRequirementsMetAt: null },
        "2025-10-20": { recapRequirementsMetAt: {} }, // today should be excluded anyway
      }
    );

    const res = getUnrecappedDays({
      dateRangeStart: new Date(Date.UTC(2025, 9, 15)),
      userSignUpDate: new Date(Date.UTC(2025, 9, 10)),
      allDaySummaries: summaries,
      timeZone,
      today,
    });

    // Yesterday local is 2025-10-19; it should appear with label "Yesterday"
    expect(
      res.find((r: UnrecappedDay) => r.dateString === "2025-10-19")
    ).toBeTruthy();
    const y = res.find((r: UnrecappedDay) => r.dateString === "2025-10-19");
    expect(y?.label).toBe("Yesterday");

    // Today (2025-10-20) must not appear
    expect(
      res.find((r: UnrecappedDay) => r.dateString === "2025-10-20")
    ).toBeFalsy();
  });

  test("clamps start to signup local day if later (America/Los_Angeles -07:00 DST)", () => {
    const timeZone = "America/Los_Angeles";
    const today = new Date(Date.UTC(2025, 6, 15, 12, 0, 0)); // 2025-07-15T12:00Z

    const summaries: DaySummaryLike[] = makeSummaries([
      "2025-07-12",
      "2025-07-13",
      "2025-07-14",
    ]);

    // dateRangeStart earlier than signup; should clamp to signup local day (2025-07-13)
    const res = getUnrecappedDays({
      dateRangeStart: new Date(Date.UTC(2025, 6, 10)),
      userSignUpDate: new Date(Date.UTC(2025, 6, 13, 8, 0, 0)),
      allDaySummaries: summaries,
      timeZone,
      today,
    });

    // Must not include 2025-07-12 since start clamps to 2025-07-13 local
    expect(
      res.find((r: UnrecappedDay) => r.dateString === "2025-07-12")
    ).toBeFalsy();
    expect(
      res.find((r: UnrecappedDay) => r.dateString === "2025-07-13")
    ).toBeTruthy();
  });

  test("weekday label for within last 6 days, otherwise MMM d", () => {
    const timeZone = "UTC";
    const today = new Date(Date.UTC(2025, 0, 8, 0, 0, 0)); // 2025-01-08

    const summaries: DaySummaryLike[] = makeSummaries([
      "2025-01-01", // 7 days ago -> MMM d
      "2025-01-02", // 6 days ago -> weekday
    ]);

    const res = getUnrecappedDays({
      dateRangeStart: new Date(Date.UTC(2024, 11, 30)),
      allDaySummaries: summaries,
      timeZone,
      today,
    });

    const d1 = res.find((r: UnrecappedDay) => r.dateString === "2025-01-01");
    const d2 = res.find((r: UnrecappedDay) => r.dateString === "2025-01-02");
    expect(d1?.label).toMatch(/Jan\s+1/);
    expect(d2?.label).not.toMatch(/Jan/);
  });
});

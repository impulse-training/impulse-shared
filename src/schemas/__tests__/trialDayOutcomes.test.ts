import { isAllDayLine, trialBoundaries, trialDayOutcomes, type BoundaryBinding } from "../index";

const allDay = (behaviorIds: string[], extra: Partial<BoundaryBinding> = {}): BoundaryBinding => ({
  type: "boundary",
  rule: "No coffee",
  recapQuestion: "Did you go without coffee today?",
  context: "all day",
  behaviorIds,
  tracksStreak: true,
  ...extra,
});

const trial = { startDateString: "2026-10-12", windowDays: 7 };
const coffee = [{ item: { id: "i1" }, binding: allDay(["coffee"]) }];

describe("trialDayOutcomes", () => {
  it("breaks every day the ruled-out behavior was logged, and keeps the rest", () => {
    const days = trialDayOutcomes({
      trial,
      boundaries: coffee,
      days: [],
      loggedBehaviorIds: Object.fromEntries(
        ["2026-10-14", "2026-10-15", "2026-10-16", "2026-10-17", "2026-10-18"].map((d) => [d, ["coffee"]]),
      ),
      todayDateString: "2026-10-19",
    });
    expect(days?.map((d) => d.outcome)).toEqual(["kept", "kept", "broken", "broken", "broken", "broken", "broken"]);
  });

  it("leaves today open until it breaks", () => {
    const open = trialDayOutcomes({ trial, boundaries: coffee, days: [], loggedBehaviorIds: {}, todayDateString: "2026-10-13" });
    expect(open).toEqual([{ dateString: "2026-10-12", outcome: "kept" }]);
    const broken = trialDayOutcomes({
      trial,
      boundaries: coffee,
      days: [],
      loggedBehaviorIds: { "2026-10-13": ["coffee"] },
      todayDateString: "2026-10-13",
    });
    expect(broken?.[1]).toEqual({ dateString: "2026-10-13", outcome: "broken" });
  });

  it("counts a recap answer of broken or partly, even with nothing logged", () => {
    const days = trialDayOutcomes({
      trial,
      boundaries: coffee,
      days: [
        { dateString: "2026-10-12", boundaries: { i1: "partly" } },
        { dateString: "2026-10-13", boundaries: { i1: "broken" } },
        { dateString: "2026-10-14", boundaries: { i1: "kept" } },
      ],
      loggedBehaviorIds: {},
      todayDateString: "2026-10-15",
    });
    expect(days?.map((d) => d.outcome)).toEqual(["broken", "broken", "kept"]);
  });

  it("ignores a log on a day the line doesn't apply, or for a line with a start or end", () => {
    // 2026-10-17 is a Saturday.
    const weekdays = [{ item: { id: "i1" }, binding: allDay(["coffee"], { weekdays: [1, 2, 3, 4, 5] }) }];
    const sat = { "2026-10-17": ["coffee"] };
    const opts = { trial, days: [], loggedBehaviorIds: sat, todayDateString: "2026-10-18" };
    expect(trialDayOutcomes({ ...opts, boundaries: weekdays })?.[5].outcome).toBe("kept");
    const untilWork = [
      { item: { id: "i1" }, binding: allDay(["coffee"], { context: undefined, end: { kind: "clock", time: "09:00" } }) },
    ];
    expect(trialDayOutcomes({ ...opts, boundaries: untilWork })?.[5].outcome).toBe("kept");
  });

  it("ignores a log for a line that holds only in a context", () => {
    // A coffee at home says nothing about "no coffee at cafés": only the recap answer counts.
    const atCafes = [{ item: { id: "i1" }, binding: allDay(["coffee"], { context: "At cafés" }) }];
    const days = trialDayOutcomes({
      trial,
      boundaries: atCafes,
      days: [{ dateString: "2026-10-13", boundaries: { i1: "broken" } }],
      loggedBehaviorIds: { "2026-10-12": ["coffee"] },
      todayDateString: "2026-10-14",
    });
    expect(days?.map((d) => d.outcome)).toEqual(["kept", "broken"]);
  });

  it("stops at the window's end", () => {
    const days = trialDayOutcomes({ trial, boundaries: coffee, days: [], loggedBehaviorIds: {}, todayDateString: "2026-10-30" });
    expect(days).toHaveLength(7);
    expect(days?.[6].dateString).toBe("2026-10-18");
  });

  it("is null for an experiment that tests no line", () => {
    expect(trialDayOutcomes({ trial, boundaries: [], days: [], loggedBehaviorIds: {}, todayDateString: "2026-10-19" })).toBeNull();
  });
});

describe("trialBoundaries", () => {
  const item = (id: string, userReview: "accepted" | "proposed") => ({
    id,
    text: "No coffee, all day.",
    kind: "boundary" as const,
    bindings: [allDay(["coffee"])],
    fidelity: "exact" as const,
    userReview,
    textRevision: 1,
  });

  it("takes the strategy's accepted lines that came with the trial", () => {
    const strategy = { items: [item("i1", "accepted"), item("old", "accepted"), item("i3", "proposed")] };
    const found = trialBoundaries(strategy, { items: [item("i1", "proposed"), item("i3", "proposed")] });
    expect(found.map((b) => b.item.id)).toEqual(["i1"]);
  });
});

describe("isAllDayLine", () => {
  it("is a line with no start or end whose context is absent or all day", () => {
    expect(isAllDayLine(allDay(["coffee"]))).toBe(true);
    expect(isAllDayLine(allDay(["coffee"], { context: "All Day" }))).toBe(true);
    expect(isAllDayLine(allDay(["coffee"], { context: " all day " }))).toBe(true);
    expect(isAllDayLine({ context: undefined })).toBe(true);
  });

  it("is not a line with a window or another context", () => {
    expect(isAllDayLine(allDay(["coffee"], { context: "At cafés" }))).toBe(false);
    expect(isAllDayLine(allDay(["coffee"], { context: undefined, end: { kind: "clock", time: "09:00" } }))).toBe(false);
    expect(isAllDayLine(allDay(["coffee"], { start: { kind: "clock", time: "18:00" } }))).toBe(false);
  });
});

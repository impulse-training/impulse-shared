import { getGptPayload } from "./getGptPayload";
import { Log } from "../schemas/log";

const ts = (seconds: number) => ({ seconds, nanoseconds: 0 }) as any;

const callLog = (data: Record<string, unknown>): Log =>
  ({
    type: "call",
    isDisplayable: true,
    data,
  }) as unknown as Log;

describe("getGptPayload — call logs", () => {
  it("returns nothing for a call that hasn't ended", () => {
    const log = callLog({ agentConnectedAt: ts(100) });
    expect(getGptPayload(log, false)).toEqual([]);
  });

  it("uses the summary when it has landed", () => {
    const log = callLog({
      endedAt: ts(200),
      summary: "You talked about the gym.",
    });
    const [message] = getGptPayload(log, false);
    expect(message.content).toBe(
      "<SYSTEM>Previous call summary: You talked about the gym.</SYSTEM>",
    );
  });

  it("falls back to the full transcript when the summary hasn't landed", () => {
    const log = callLog({
      endedAt: ts(200),
      transcriptItems: [
        { role: "assistant", text: "What's going on?", ts: ts(150), type: "final" },
        { role: "user", text: "Feeling an urge to scroll.", ts: ts(160), type: "final" },
        { role: "user", text: "Feeling an ur", ts: ts(155), type: "partial" },
        { role: "assistant", text: "   ", ts: ts(165), type: "final" },
      ],
    });
    const [message] = getGptPayload(log, false);
    expect(message.content).toBe(
      "<SYSTEM>The user had a voice call with the assistant. A summary isn't available yet — full transcript:\n" +
        "Assistant: What's going on?\n" +
        "User: Feeling an urge to scroll.</SYSTEM>",
    );
  });

  it("prefers the summary over a hydrated transcript", () => {
    const log = callLog({
      endedAt: ts(200),
      summary: "Short recap.",
      transcriptItems: [
        { role: "user", text: "Hello", ts: ts(150), type: "final" },
      ],
    });
    const [message] = getGptPayload(log, false);
    expect(message.content).toBe(
      "<SYSTEM>Previous call summary: Short recap.</SYSTEM>",
    );
  });

  it("renders only a boundary marker when the turns live in the session", () => {
    const log = callLog({
      endedAt: ts(200),
      transcriptInSession: true,
      summary: "Should not be rendered.",
      transcriptItems: [
        { role: "user", text: "Hello", ts: ts(150), type: "final" },
      ],
    });
    const messages = getGptPayload(log, false);
    expect(messages).toHaveLength(1);
    expect(messages[0].content).toBe(
      "<SYSTEM>The user had a voice call with the assistant. The turns spoken on that call follow as ordinary messages.</SYSTEM>",
    );
  });

  it("keeps the generic line when there's no summary and no transcript", () => {
    const log = callLog({ endedAt: ts(200) });
    const [message] = getGptPayload(log, false);
    expect(message.content).toBe(
      "<SYSTEM>User had a previous call with the assistant</SYSTEM>",
    );
  });
});

const weekOverviewLog = (
  behaviors: Array<Record<string, unknown>>,
  window?: { start?: string; end?: string },
): Log =>
  ({
    type: "week_overview",
    isDisplayable: true,
    data: {
      weekStartDateString: window?.start ?? "2026-05-04",
      weekEndDateString: window?.end ?? "2026-05-10",
      behaviors,
    },
  }) as unknown as Log;

describe("getGptPayload — week overview cards", () => {
  // The card is what the user has on screen. Before this branch existed the log
  // fell through to the unsupported-type return, so the weekly prompt's "name
  // the week's shape from the card" pointed at numbers the model never saw.
  it("puts the card's figures in front of the model", () => {
    const log = weekOverviewLog([
      {
        behaviorId: "online-videos",
        name: "Online videos",
        weeklyTotal: 120,
        weeklyTotalFormatted: "2 hrs tracked",
        pctChangeFromLastWeek: -0.43,
        trend: "IMPROVING",
      },
    ]);
    const [message] = getGptPayload(log, false);
    expect(message.content).toContain("2026-05-04 to 2026-05-10");
    expect(message.content).toContain(
      "- Online videos: 2 hrs tracked; down 43% vs last week; improving",
    );
  });

  it("renders an increase as up, and keeps every card", () => {
    const log = weekOverviewLog([
      {
        behaviorId: "a",
        name: "Scrolling",
        weeklyTotal: 10,
        weeklyTotalFormatted: "10 times",
        pctChangeFromLastWeek: 0.25,
      },
      {
        behaviorId: "b",
        name: "Coffee",
        weeklyTotal: 4,
        weeklyTotalFormatted: "4 cups",
      },
    ]);
    const [message] = getGptPayload(log, false);
    expect(message.content).toContain("- Scrolling: 10 times; up 25% vs last week");
    expect(message.content).toContain("- Coffee: 4 cups");
  });

  // A comparison is only present when a prior week exists, so 0 is genuinely
  // level rather than "no data" — saying "down 0%" would misread as a decline.
  it("calls a zero change level rather than a direction", () => {
    const log = weekOverviewLog([
      {
        behaviorId: "a",
        name: "Coffee",
        weeklyTotal: 4,
        weeklyTotalFormatted: "4 cups",
        pctChangeFromLastWeek: 0,
      },
    ]);
    const [message] = getGptPayload(log, false);
    expect(message.content).toContain("- Coffee: 4 cups; level with last week");
    expect(message.content).not.toContain("down 0%");
  });

  it("omits a trend the card itself treats as no signal", () => {
    const log = weekOverviewLog([
      {
        behaviorId: "a",
        name: "Coffee",
        weeklyTotal: 4,
        weeklyTotalFormatted: "4 cups",
        trend: "INSUFFICIENT_DATA",
      },
    ]);
    const [message] = getGptPayload(log, false);
    expect(message.content).not.toContain("insufficient");
  });

  it("includes the card's trigger tags when it shows them", () => {
    const log = weekOverviewLog([
      {
        behaviorId: "a",
        name: "Stress eating",
        weeklyTotal: 3,
        weeklyTotalFormatted: "3 times",
        mainTriggers: ["Stressed", "Bored"],
      },
    ]);
    const [message] = getGptPayload(log, false);
    expect(message.content).toContain("most-tagged triggers: Stressed, Bored");
  });

  it("stays out of summarization and out of empty cards", () => {
    const log = weekOverviewLog([
      {
        behaviorId: "a",
        name: "Coffee",
        weeklyTotal: 4,
        weeklyTotalFormatted: "4 cups",
      },
    ]);
    expect(getGptPayload(log, false, { forSummarization: true })).toEqual([]);
    expect(getGptPayload(weekOverviewLog([]), false)).toEqual([]);
  });
});

describe("getGptPayload — pending proposal cards", () => {
  const strategyCard = (status: string): Log =>
    ({
      type: "proposed_strategy_modification",
      isDisplayable: true,
      data: { title: "Morning craving plan", summary: "A response for mornings", status },
    }) as unknown as Log;
  const goalCard = (status: string): Log =>
    ({
      type: "proposed_goal_change",
      isDisplayable: true,
      data: { title: "Afternoons only", behaviorName: "Vaping", status },
    }) as unknown as Log;

  // A pending card used to render as [] — so a card surfaced outside a
  // reconcile call (the queue advancing on a goal acceptance) was invisible,
  // and the coach would ask an unrelated question while the user sat in front
  // of an unexplained card.
  it("renders a pending strategy card as visible state", () => {
    const [message] = getGptPayload(strategyCard("pending"), false);
    expect(message.content).toContain("Morning craving plan");
    expect(message.content).toContain("awaiting their accept/decline");
  });

  it("renders a pending goal card as visible state", () => {
    const [message] = getGptPayload(goalCard("pending"), false);
    expect(message.content).toContain('"Afternoons only" (Vaping)');
    expect(message.content).toContain("awaiting their accept/decline");
  });

  it("keeps the resolved renderings unchanged", () => {
    expect(getGptPayload(strategyCard("accepted"), false)[0].content).toContain("accepted a suggested strategy");
    expect(getGptPayload(strategyCard("declined"), false)[0].content).toContain("DECLINED");
    expect(getGptPayload(goalCard("accepted"), false)[0].content).toContain("ACCEPTED");
    expect(getGptPayload(goalCard("declined"), false)[0].content).toContain("DECLINED");
  });
});

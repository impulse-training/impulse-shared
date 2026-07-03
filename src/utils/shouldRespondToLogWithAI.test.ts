import { shouldRespondToLogWithAI } from "./shouldRespondToLogWithAI";
import { Log } from "../schemas/log";
import { Session } from "../schemas";
import { WithId } from "./withId";

const ts = (seconds: number) => ({ seconds, nanoseconds: 0 }) as any;

const impulseSession = {
  id: "session1",
  type: "impulse",
  phase: "debrief",
} as unknown as WithId<Session>;

const assistantLog = {
  type: "assistant_message",
  data: { message: { role: "assistant", content: "Just checking in—what happened with the urge you were feeling?" } },
} as unknown as Log;

describe("shouldRespondToLogWithAI — debrief outcome resolved", () => {
  it("responds when an 'acted' debrief resolves and the tracking sheet dropped the scheduled source", () => {
    // Scheduled placeholder created by taskProcessDebriefUrge
    const before = {
      type: "behavior",
      data: { source: "scheduled" },
    } as unknown as Log;

    // Resolved via BehaviorTrackingView, which replaces `data` wholesale —
    // note the scheduled `source` is gone.
    const after = {
      type: "behavior",
      data: {
        behaviorId: "j7zuaaICvRn4Z1FZJhYt",
        behaviorName: "Twitter and online videos",
        debriefOutcome: "acted",
        formattedValue: "10m",
        trackingType: "timer",
        value: 600,
        resolvedAt: ts(1780619864),
      },
    } as unknown as Log;

    expect(
      shouldRespondToLogWithAI(impulseSession, before, after, assistantLog),
    ).toBe(true);
  });

  it("responds when a 'resisted' debrief resolves in place (source 'manual')", () => {
    const before = {
      type: "behavior",
      data: { source: "scheduled" },
    } as unknown as Log;

    const after = {
      type: "behavior",
      data: {
        source: "manual",
        debriefOutcome: "resisted",
        value: 0,
        formattedValue: "Resisted",
        resolvedAt: ts(1780619864),
      },
    } as unknown as Log;

    expect(
      shouldRespondToLogWithAI(impulseSession, before, after, assistantLog),
    ).toBe(true);
  });

  it("does not respond to the empty scheduled placeholder before it is resolved", () => {
    const after = {
      type: "behavior",
      data: { source: "scheduled" },
    } as unknown as Log;

    // creation of the empty placeholder — no resolvedAt yet
    expect(
      shouldRespondToLogWithAI(impulseSession, undefined, after, assistantLog),
    ).toBe(false);
  });
});

describe("shouldRespondToLogWithAI — debrief question", () => {
  const debriefQuestionLog = (selectedResponseText?: string) =>
    ({
      type: "debrief_question",
      data: {
        debriefQuestionId: "q1",
        behaviorId: "b1",
        question: "Did this happen on the phone or your computer?",
        taskId: "debrief_q_q1_log1",
        options: [
          { id: "phone", label: "Phone", responseText: "It was on my phone." },
          { id: "computer", label: "Computer", responseText: "It was on my computer." },
        ],
        ...(selectedResponseText ? { selectedResponseText } : {}),
      },
    }) as unknown as Log;

  it("responds when the user selects an option (selectedResponseText set), even after an assistant message", () => {
    const before = debriefQuestionLog();
    const after = debriefQuestionLog("It was on my phone.");
    expect(
      shouldRespondToLogWithAI(impulseSession, before, after, assistantLog),
    ).toBe(true);
  });

  it("does not respond when the question is first posted (no selection yet)", () => {
    const after = debriefQuestionLog();
    expect(
      shouldRespondToLogWithAI(impulseSession, undefined, after, assistantLog),
    ).toBe(false);
  });
});

describe("shouldRespondToLogWithAI — day totals confirmed", () => {
  const recapSession = {
    id: "2026-07-02",
    type: "recap",
  } as unknown as WithId<Session>;

  const promptLog = (targetDateString: string, confirmed: boolean) =>
    ({
      type: "day_totals_prompt",
      data: {
        targetDateString,
        ...(confirmed ? { confirmedAt: ts(1783083799) } : {}),
      },
    }) as unknown as Log;

  const todayUTC = new Date().toISOString().slice(0, 10);

  it("responds when totals are confirmed even if the latest session log is an assistant message (pending-task recap intro)", () => {
    expect(
      shouldRespondToLogWithAI(
        recapSession,
        promptLog(todayUTC, false),
        promptLog(todayUTC, true),
        assistantLog,
        "UTC",
      ),
    ).toBe(true);
  });

  it("does not respond to a plain updatedAt bump on the prompt log when the latest log is an assistant message", () => {
    expect(
      shouldRespondToLogWithAI(
        recapSession,
        promptLog(todayUTC, false),
        promptLog(todayUTC, false),
        assistantLog,
        "UTC",
      ),
    ).toBe(false);
  });

  it("still does not respond when totals are confirmed past the recap deadline", () => {
    expect(
      shouldRespondToLogWithAI(
        recapSession,
        promptLog("2020-01-01", false),
        promptLog("2020-01-01", true),
        assistantLog,
        "UTC",
      ),
    ).toBe(false);
  });
});

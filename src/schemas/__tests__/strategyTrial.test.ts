import {
  isTrialDue,
  logSchema,
  strategySchema,
  strategyTrialSchema,
  trialDayNumber,
  trialEndDateString,
} from "../index";

const at = new Date("2026-10-11T19:00:00Z") as never;

const idea = {
  userId: "u1",
  strategyId: "s1",
  status: "idea",
  title: "Close the gaps before your hand reaches the phone",
  question: "What happens when the video apps are off my phone?",
  items: [
    {
      id: "i1",
      text: "Delete Twitter and video apps from your phone.",
      kind: "setup",
      fidelity: "exact",
      textRevision: 1,
      bindings: [{ type: "setup", steps: [{ id: "st1", text: "Delete the apps" }] }],
    },
  ],
  source: { authoredBy: "ai" },
  proposedWindowDays: 14,
  createdAt: at,
  updatedAt: at,
};

const running = {
  ...idea,
  status: "running",
  startedAt: at,
  startDateString: "2026-10-11",
  windowDays: 14,
};

describe("strategyTrialSchema", () => {
  it("parses an idea with no clock", () => {
    const parsed = strategyTrialSchema.parse(idea);
    expect(parsed.evidence).toEqual([]);
    expect(parsed.items[0].userReview).toBe("proposed");
  });

  it("requires the clock once a trial runs", () => {
    expect(strategyTrialSchema.safeParse({ ...idea, status: "running" }).success).toBe(false);
    expect(strategyTrialSchema.safeParse(running).success).toBe(true);
  });

  it("requires a verdict once decided", () => {
    expect(strategyTrialSchema.safeParse({ ...running, status: "decided" }).success).toBe(false);
    const decided = {
      ...running,
      status: "decided",
      verdict: {
        decision: "keep",
        decidedAt: at,
        comparison: {
          baseline: { fromDateString: "2026-10-04", toDateString: "2026-10-10" },
          trial: { fromDateString: "2026-10-11", toDateString: "2026-10-24" },
          behaviors: [{ behaviorId: "b1", baselineDailyMean: 130, trialDailyMean: 48 }],
          outcome: {
            metricId: "m1",
            baselineMean: 1.6,
            trialMean: 2.2,
            baselineReadings: 6,
            trialReadings: 11,
          },
          confidence: "moderate",
          computedAt: at,
        },
      },
    };
    expect(strategyTrialSchema.safeParse(decided).success).toBe(true);
  });

  it("rejects a window that is not a whole number of days", () => {
    expect(strategyTrialSchema.safeParse({ ...idea, proposedWindowDays: 0 }).success).toBe(false);
    expect(strategyTrialSchema.safeParse({ ...running, windowDays: 1.5 }).success).toBe(false);
  });
});

describe("strategy phase fields", () => {
  const base = {
    userId: "u1",
    title: "Track and notice",
    rationale: "For now, just track it and notice what is around it.",
    behaviorIds: ["b1", "b2"],
    status: "active",
    revision: 1,
    items: [],
    source: { authoredBy: "system" },
    createdAt: at,
    updatedAt: at,
  };

  it("still parses a strategy written before phases", () => {
    expect(strategySchema.safeParse(base).success).toBe(true);
  });

  it("parses baseline, outcome metric and current trial", () => {
    const parsed = strategySchema.parse({
      ...base,
      phase: "trial",
      baseline: { startedAt: at, startDateString: "2026-10-04", endDateString: "2026-10-10" },
      outcomeMetricId: "m1",
      currentTrialId: "t1",
    });
    expect(parsed.phase).toBe("trial");
  });

  it("rejects an unknown phase", () => {
    expect(strategySchema.safeParse({ ...base, phase: "maintain" }).success).toBe(false);
  });
});

describe("trial clock", () => {
  it("ends on the last day of the window", () => {
    expect(trialEndDateString({ startDateString: "2026-10-11", windowDays: 14 })).toBe("2026-10-24");
  });

  it("counts extra days from an extension", () => {
    expect(trialEndDateString({ startDateString: "2026-10-11", windowDays: 14, extendedDays: 7 })).toBe("2026-10-31");
  });

  it("crosses a month and a DST change without drifting", () => {
    expect(trialEndDateString({ startDateString: "2026-10-28", windowDays: 7 })).toBe("2026-11-03");
  });

  it("numbers days from 1", () => {
    const t = { startDateString: "2026-10-11", windowDays: 14 };
    expect(trialDayNumber(t, "2026-10-11")).toBe(1);
    expect(trialDayNumber(t, "2026-10-16")).toBe(6);
  });

  it("is due from its last day, so the verdict lands in that evening's recap", () => {
    const t = { startDateString: "2026-10-11", windowDays: 14 };
    expect(isTrialDue(t, "2026-10-23")).toBe(false);
    expect(isTrialDue(t, "2026-10-24")).toBe(true);
    expect(isTrialDue(t, "2026-10-30")).toBe(true);
  });
});

describe("trial_verdict log", () => {
  it("parses through the log registry", () => {
    const parsed = logSchema.safeParse({
      id: "trial_verdict_t1",
      type: "trial_verdict",
      isDisplayable: true,
      userId: "u1",
      sessionId: "sess1",
      createdAt: at,
      updatedAt: at,
      timestamp: at,
      dateString: "2026-10-24",
      data: { strategyId: "s1", trialId: "t1", targetDateString: "2026-10-24", title: "Close the gaps" },
    });
    expect(parsed.success).toBe(true);
  });
});

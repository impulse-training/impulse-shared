import {
  activeBoundaries,
  applyStrategyRevision,
  boundaryBindingSchema,
  boundaryAppliesOn,
  boundaryStreak,
  describeBoundaryAnchor,
  strategyRequestSchema,
  strategiesOverlap,
  undecidedStrategyItems,
  logSchema,
  pendingSetupSteps,
  Strategy,
  StrategyItem,
  strategySchema,
} from "../index";

const at = new Date("2026-10-04T19:00:00Z") as never;

// Shaped on the 2026-10-04 prototype run (Twitter, clean mornings).
const raw = {
  userId: "u1",
  title: "Clean mornings: change the device and the first hour",
  rationale: "Your phone fills every gap in the day, starting with waking up.",
  evidence: ["2026-09-29: 45 minutes of Facebook on the couch, then porn."],
  behaviorIds: ["social"],
  status: "draft",
  revision: 1,
  source: { authoredBy: "ai", prose: "## What's actually running ...", model: "claude-opus-5-5" },
  createdAt: at,
  updatedAt: at,
  items: [
    {
      id: "i1",
      text: "Charge your phone in the kitchen, not the bedroom, and use a cheap alarm clock.",
      kind: "setup",
      fidelity: "exact",
      textRevision: 1,
      userReview: "accepted",
      bindings: [
        {
          type: "setup",
          steps: [
            { id: "s1", text: "Move the charger to the kitchen", doneAt: at },
            { id: "s2", text: "Get a cheap alarm clock" },
          ],
        },
      ],
    },
    {
      id: "i2",
      text: "No feeds on the phone until you sit down to work at the café.",
      kind: "boundary",
      fidelity: "partial",
      lossNote: "Work start is an event; 08:30 is only the aim.",
      textRevision: 1,
      userReview: "accepted",
      bindings: [
        {
          type: "boundary",
          rule: "No feeds until work starts",
          recapQuestion: "Did the morning stay clean until you started work?",
          start: { kind: "event", event: "wake" },
          end: { kind: "event", event: "work_start", approxTime: "08:30" },
          behaviorIds: ["social"],
          tracksStreak: true,
        },
      ],
    },
    {
      id: "i3",
      text: "If you slip, phone down and change rooms within ten minutes.",
      kind: "moment",
      fidelity: "partial",
      textRevision: 1,
      bindings: [
        {
          type: "trigger_plan",
          existingTriggerId: "t-jumping-to-twitter",
          tacticIds: ["leave-the-room"],
          scopedSteps: [{ id: "x1", text: "Put the phone in your bag for 20 minutes", authoredBy: "ai" }],
        },
      ],
    },
    {
      id: "i4",
      text: "None of this is a willpower failure.",
      kind: "framing",
      fidelity: "exact",
      textRevision: 1,
      userReview: "accepted",
    },
  ],
};

const parse = () => strategySchema.parse(raw);

describe("strategySchema", () => {
  it("parses a prototype-shaped strategy with defaults filled", () => {
    const s = parse();
    expect(s.items[2].userReview).toBe("proposed");
    expect(s.items[3].bindings).toEqual([]);
    expect(s.rounds).toEqual([]);
  });

  it("rejects a boundary with no start, end, or context", () => {
    expect(
      boundaryBindingSchema.safeParse({ type: "boundary", rule: "r", recapQuestion: "q" }).success,
    ).toBe(false);
  });

  it("rejects a malformed clock time", () => {
    const bad = structuredClone(raw);
    (bad.items[1].bindings![0] as { end: unknown }).end = { kind: "clock", time: "8:30" };
    expect(strategySchema.safeParse(bad).success).toBe(false);
  });
});

describe("accepted-only helpers", () => {
  it("activeBoundaries ignores proposed items", () => {
    const s = parse();
    expect(activeBoundaries(s).map((b) => b.item.id)).toEqual(["i2"]);
    s.items[1].userReview = "proposed";
    expect(activeBoundaries(s)).toEqual([]);
  });

  it("pendingSetupSteps lists unconfirmed steps of accepted setups", () => {
    expect(pendingSetupSteps(parse()).map((p) => p.step.id)).toEqual(["s2"]);
  });
});

describe("boundaryStreak", () => {
  const day = (dateString: string, outcome?: "kept" | "broken" | "na") => ({
    dateString,
    boundaries: (outcome ? { i2: outcome } : {}) as Record<string, "kept" | "broken" | "na">,
  });

  it("counts kept days back from the latest, skipping na and missing days", () => {
    expect(
      boundaryStreak(
        [day("2026-10-01", "broken"), day("2026-10-04", "kept"), day("2026-10-03", "na"), day("2026-10-02", "kept"), day("2026-10-05")],
        "i2",
      ),
    ).toBe(2);
  });

  it("is zero when the latest recorded day is broken", () => {
    expect(boundaryStreak([day("2026-10-03", "kept"), day("2026-10-04", "broken")], "i2")).toBe(0);
  });
});

describe("applyStrategyRevision", () => {
  const edited: Omit<StrategyItem, "id" | "userReview" | "userReviewedAt" | "textRevision"> = {
    text: "No feeds on the phone until you sit down to work, or 10:00 on days off.",
    kind: "boundary",
    fidelity: "partial",
    bindings: [],
  };

  const revise = (s: Strategy) =>
    applyStrategyRevision(
      s,
      {
        ops: [
          { op: "keep", itemId: "i1" },
          { op: "edit", itemId: "i2", item: edited },
          { op: "drop", itemId: "i3" },
          // i4 deliberately has no op
          { op: "add", item: { id: "n1", text: "Read AI news from a list, never For You.", kind: "boundary", fidelity: "partial", bindings: [] } },
        ],
        userFeedback: "I want to be working by 8:30.",
        coachReply: "Then the clean morning ends when you sit down to work.",
      },
      at,
    );

  it("leaves untouched items identical, review state included", () => {
    const s = parse();
    const next = revise(s);
    expect(next.items.find((i) => i.id === "i1")).toBe(s.items[0]);
    expect(next.items.find((i) => i.id === "i4")).toBe(s.items[3]);
  });

  it("returns edited and added items to proposed at the new revision", () => {
    const next = revise(parse());
    const i2 = next.items.find((i) => i.id === "i2")!;
    expect(i2).toMatchObject({ text: edited.text, userReview: "proposed", textRevision: 2 });
    expect(next.items.find((i) => i.id === "n1")).toMatchObject({ userReview: "proposed", textRevision: 2 });
  });

  it("drops, keeps order, bumps revision, records the round, keeps rationale", () => {
    const s = parse();
    const next = revise(s);
    expect(next.items.map((i) => i.id)).toEqual(["i1", "i2", "i4", "n1"]);
    expect(next.revision).toBe(2);
    expect(next.rationale).toBe(s.rationale);
    expect(next.rounds).toEqual([
      { revision: 2, userFeedback: "I want to be working by 8:30.", coachReply: expect.any(String), at },
    ]);
    expect(s.revision).toBe(1); // input not mutated
  });

  it("refuses ops on unknown items and adds that reuse an id", () => {
    const s = parse();
    const base = { userFeedback: "", coachReply: "" };
    expect(() => applyStrategyRevision(s, { ...base, ops: [{ op: "drop", itemId: "nope" }] }, at)).toThrow(/unknown item/);
    expect(() =>
      applyStrategyRevision(s, { ...base, ops: [{ op: "add", item: { ...edited, id: "i1" } }] }, at),
    ).toThrow(/already exists/);
  });
});

describe("strategy_proposal log", () => {
  it("is part of the log union", () => {
    const log = {
      type: "strategy_proposal",
      isDisplayable: true,
      userId: "u1",
      sessionId: "sess",
      dateString: "2026-10-04",
      createdAt: at,
      updatedAt: at,
      timestamp: at,
      data: { strategyId: "st1", revision: 2, title: "Clean mornings", itemCount: 4, changedItemCount: 2 },
    };
    const parsed = logSchema.parse(log);
    expect(parsed.type === "strategy_proposal" && parsed.data.status).toBe("open");
  });
});

describe("boundary wording and weekdays", () => {
  it("describes event anchors with their approximate time", () => {
    expect(describeBoundaryAnchor({ kind: "event", event: "work_start", approxTime: "08:30" })).toBe("starting work (~08:30)");
    expect(describeBoundaryAnchor({ kind: "clock", time: "21:00" })).toBe("21:00");
  });

  it("applies every day unless weekdays are given", () => {
    expect(boundaryAppliesOn({}, 0)).toBe(true);
    expect(boundaryAppliesOn({ weekdays: [1, 2, 3, 4, 5] }, 0)).toBe(false);
  });
});

describe("strategyRequestSchema", () => {
  it("parses a build request with defaults", () => {
    const r = strategyRequestSchema.parse({ userId: "u1", sessionId: "s1", kind: "build", status: "pending", createdAt: at, updatedAt: at });
    expect(r.behaviorIds).toEqual([]);
  });
});

describe("several strategies", () => {
  it("overlap only when they share a behavior", () => {
    expect(strategiesOverlap({ behaviorIds: ["social", "porn"] }, { behaviorIds: ["porn"] })).toBe(true);
    expect(strategiesOverlap({ behaviorIds: ["social", "porn"] }, { behaviorIds: ["coffee"] })).toBe(false);
  });

  it("undecided moves exclude framing and decided ones", () => {
    const items = [
      { id: "a", kind: "boundary", userReview: "proposed" },
      { id: "b", kind: "framing", userReview: "proposed" },
      { id: "c", kind: "setup", userReview: "accepted" },
    ] as never[];
    expect(undecidedStrategyItems(items).map((i: { id: string }) => i.id)).toEqual(["a"]);
  });
});

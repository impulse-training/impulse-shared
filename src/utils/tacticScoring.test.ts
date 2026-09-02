import {
  PINNED_TACTIC_BONUS,
  buildTagGroupLookup,
  TacticScoringContext,
  TacticWithMeta,
  scoreTactic,
} from "./tacticScoring";
import { TagGroupLookup } from "./tacticScoring";

const emptyLookup: TagGroupLookup = { byName: new Map() };

function makeTactic(overrides: Partial<TacticWithMeta> & { id: string }): TacticWithMeta {
  return {
    phase: "regulate",
    steps: [{ mode: "default", text: "step" }],
    createdAt: { seconds: 0, nanoseconds: 0 } as any,
    updatedAt: { seconds: 0, nanoseconds: 0 } as any,
    path: `tactics/${overrides.id}`,
    ...overrides,
  } as TacticWithMeta;
}

function score(
  tactic: TacticWithMeta,
  context: TacticScoringContext = {},
): number | null {
  return scoreTactic(tactic, {}, [], new Map(), emptyLookup, context);
}

describe("scoreTactic – behavior-topic indications", () => {
  it("contraindicates a tactic for a matching behavior topic (hard exclude)", () => {
    const tactic = makeTactic({
      id: "cold-water-wrists",
      contraindications: {
        behaviorTopics: [{ behaviorTopicId: "sexual", weight: 1 }],
      },
    });

    expect(score(tactic, { behaviorTopicIds: ["sexual"] })).toBeNull();
    // Still scoreable for a non-matching topic
    expect(score(tactic, { behaviorTopicIds: ["substances"] })).not.toBeNull();
  });

  it("boosts a tactic indicated for the session's behavior topic", () => {
    const tactic = makeTactic({
      id: "urge-surf",
      indications: {
        behaviorTopics: [{ behaviorTopicId: "sexual", weight: 2 }],
      },
    });

    const withTopic = score(tactic, { behaviorTopicIds: ["sexual"] });
    const withoutTopic = score(tactic, { behaviorTopicIds: ["substances"] });

    expect(withTopic).toBe(3); // base 1 + weight 2
    expect(withoutTopic).toBe(1); // base only
  });
});

describe("scoreTactic – suppression (hard exclude)", () => {
  it("excludes a suppressed tactic regardless of other signals", () => {
    const tactic = makeTactic({
      id: "wet-wrists",
      indications: { behaviorTopics: [{ behaviorTopicId: "sexual", weight: 5 }] },
    });

    expect(
      score(tactic, {
        behaviorTopicIds: ["sexual"],
        suppressedTacticIds: ["wet-wrists"],
      }),
    ).toBeNull();
  });

  it("does not exclude tactics that are not suppressed", () => {
    const tactic = makeTactic({ id: "keep-me" });
    expect(score(tactic, { suppressedTacticIds: ["other"] })).not.toBeNull();
  });
});

describe("scoreTactic – presumesState (low-signal hard exclude)", () => {
  it("excludes a presumptuous tactic when the session is low-signal", () => {
    const tactic = makeTactic({
      id: "default-stand-up",
      presumesState: "sitting or lying down",
    });

    expect(score(tactic, { lowSignal: true })).toBeNull();
  });

  it("keeps the tactic scoreable once the session has signal", () => {
    const tactic = makeTactic({
      id: "default-stand-up",
      presumesState: "sitting or lying down",
    });

    expect(score(tactic, { lowSignal: false })).not.toBeNull();
    // Absent lowSignal flag behaves as "has signal" (opt-in gate)
    expect(score(tactic, {})).not.toBeNull();
  });

  it("does not exclude a non-presumptuous tactic on a low-signal session", () => {
    const tactic = makeTactic({ id: "box-breathing" });
    expect(score(tactic, { lowSignal: true })).not.toBeNull();
  });

  it("pinning does not rescue a presumptuous tactic on low signal", () => {
    const tactic = makeTactic({
      id: "default-stand-up",
      presumesState: "sitting or lying down",
    });

    expect(
      score(tactic, { lowSignal: true, pinnedTacticIds: ["default-stand-up"] }),
    ).toBeNull();
  });
});

describe("scoreTactic – pinning (boost)", () => {
  it("adds the pinned bonus to a pinned tactic", () => {
    const tactic = makeTactic({ id: "pinned" });

    const pinned = score(tactic, { pinnedTacticIds: ["pinned"] });
    const unpinned = score(tactic, {});

    expect(pinned).toBe((unpinned as number) + PINNED_TACTIC_BONUS);
  });

  it("suppression wins over pinning when a tactic is both", () => {
    const tactic = makeTactic({ id: "conflict" });
    expect(
      score(tactic, {
        pinnedTacticIds: ["conflict"],
        suppressedTacticIds: ["conflict"],
      }),
    ).toBeNull();
  });
});

describe("buildTagGroupLookup – resolving a group by id or name", () => {
  // The Feeling group's id is "emotion"; seeded tactics and plans were authored
  // against the id, so a name-only lookup silently dropped every one of them.
  const tagGroups = [
    {
      id: "emotion",
      data: {
        name: "Feeling",
        options: [
          { id: "bored", label: "Bored" },
          { id: "just_woke_up", label: "Just woke up" },
        ],
      } as any,
    },
    {
      id: "activity",
      data: {
        name: "Activity",
        options: [{ id: "bathroom", label: "Bathroom" }],
      } as any,
    },
  ];

  const lookup = buildTagGroupLookup(tagGroups);
  const scoreWithTags = (
    tactic: TacticWithMeta,
    sessionTags: Record<string, string[]>,
  ) => scoreTactic(tactic, sessionTags, [], new Map(), lookup);

  const boredTactic = makeTactic({
    id: "stand-up",
    indications: {
      tags: [
        { tagGroupName: "emotion", optionLabels: ["bored"], weight: 1.25 },
      ],
    },
  });

  it("matches an indication keyed on the group id", () => {
    expect(scoreWithTags(boredTactic, { emotion: ["bored"] })).toBe(2.25);
  });

  it("matches an indication keyed on the group's display name", () => {
    const byDisplayName = makeTactic({
      id: "stand-up-by-name",
      indications: {
        tags: [
          { tagGroupName: "Feeling", optionLabels: ["Bored"], weight: 1.25 },
        ],
      },
    });

    expect(scoreWithTags(byDisplayName, { emotion: ["bored"] })).toBe(2.25);
  });

  it("matches an option named by its id as well as its label", () => {
    const byOptionId = makeTactic({
      id: "morning-tactic",
      indications: {
        tags: [
          { tagGroupName: "Feeling", optionLabels: ["just_woke_up"], weight: 2 },
        ],
      },
    });

    expect(scoreWithTags(byOptionId, { emotion: ["just_woke_up"] })).toBe(3);
    // The label form still resolves to the same option
    const byOptionLabel = makeTactic({
      id: "morning-tactic-label",
      indications: {
        tags: [
          { tagGroupName: "Feeling", optionLabels: ["Just woke up"], weight: 2 },
        ],
      },
    });
    expect(scoreWithTags(byOptionLabel, { emotion: ["just_woke_up"] })).toBe(3);
  });

  it("hard-excludes on a contraindication keyed on the group id", () => {
    const standUp = makeTactic({
      id: "stand-up-contra",
      contraindications: {
        tags: [
          { tagGroupName: "activity", optionLabels: ["Bathroom"], weight: 1 },
        ],
      },
    });

    expect(scoreWithTags(standUp, { activity: ["bathroom"] })).toBeNull();
    expect(scoreWithTags(standUp, { activity: [] })).toBe(1);
  });

  it("does not match a group name that belongs to no group", () => {
    const unknownGroup = makeTactic({
      id: "unknown-group",
      indications: {
        tags: [{ tagGroupName: "vibes", optionLabels: ["bored"], weight: 5 }],
      },
    });

    expect(scoreWithTags(unknownGroup, { emotion: ["bored"] })).toBe(1);
  });

  it("lets a group's display name win over another group's id", () => {
    // A user group literally named "emotion" must not hijack indications
    // written against the seeded Feeling group's id.
    const collided = buildTagGroupLookup([
      ...tagGroups,
      {
        id: "custom123",
        data: {
          name: "emotion",
          options: [{ id: "spicy", label: "Spicy" }],
        } as any,
      },
    ]);

    expect(collided.byName.get("emotion")?.groupId).toBe("custom123");
    expect(collided.byName.get("feeling")?.groupId).toBe("emotion");
  });
});

describe("selectBestTacticsPerPhase keeps a device-restart tactic last", () => {
  it("moves a regulate-phase terminal tactic after shift and reengage", () => {
    const { selectBestTacticsPerPhase, buildTagGroupLookup } = require("./tacticScoring");
    const lookup = buildTagGroupLookup([]);
    const mk = (id: string, phase: string, extra: Record<string, unknown> = {}) =>
      ({ id, path: `tactics/${id}`, phase, steps: [], ...extra }) as any;
    const selected = selectBestTacticsPerPhase(
      [
        mk("turn-off-phone", "regulate", { completionTrigger: "device-restart" }),
        mk("ground", "shift"),
        mk("talk", "reengage"),
      ],
      {},
      [],
      new Map(),
      lookup,
    );
    expect(selected.map((t: { id: string }) => t.id)).toEqual([
      "ground",
      "talk",
      "turn-off-phone",
    ]);
  });
});

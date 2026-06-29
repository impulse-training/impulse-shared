import {
  PINNED_TACTIC_BONUS,
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

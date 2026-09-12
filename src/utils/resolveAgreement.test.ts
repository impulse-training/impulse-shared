import {
  AgreementCandidate,
  resolveAgreement,
} from "./resolveAgreement";

function agreement(tacticId: string) {
  return {
    tacticId,
    tacticRefPath: `tactics/${tacticId}`,
    tacticTitle: tacticId,
    // The schema takes a Timestamp-like; resolution never reads it.
    agreedAt: { seconds: 0, nanoseconds: 0 } as never,
  };
}

function trigger(
  id: string,
  tags: Record<string, string>,
  tacticId: string,
  behaviorIds?: string[],
): AgreementCandidate {
  return {
    source: "trigger",
    sourceId: id,
    situation: id,
    agreement: agreement(tacticId),
    tags,
    ...(behaviorIds ? { behaviorIds } : {}),
  };
}

function behavior(id: string, tacticId: string): AgreementCandidate {
  return {
    source: "behavior",
    sourceId: id,
    situation: id,
    agreement: agreement(tacticId),
  };
}

describe("resolveAgreement", () => {
  it("returns null when nothing applies", () => {
    expect(
      resolveAgreement({
        candidates: [behavior("vaping", "breathe")],
        sessionTags: {},
        sessionBehaviorIds: ["scrolling"],
      }),
    ).toBeNull();
  });

  it("matches a behavior agreement when the session is about that behavior", () => {
    const match = resolveAgreement({
      candidates: [behavior("vaping", "breathe")],
      sessionTags: {},
      sessionBehaviorIds: ["vaping"],
    });

    expect(match?.candidate.agreement.tacticId).toBe("breathe");
    expect(match?.reason).toBe("behavior");
  });

  it("matches a trigger only when EVERY one of its tags is present", () => {
    const candidates = [
      trigger("overworked", { emotion: "stressed", moment: "working" }, "walk"),
    ];

    expect(
      resolveAgreement({
        candidates,
        sessionTags: { emotion: ["stressed"] },
        sessionBehaviorIds: [],
      }),
    ).toBeNull();

    const match = resolveAgreement({
      candidates,
      sessionTags: { emotion: ["stressed"], moment: ["working"] },
      sessionBehaviorIds: [],
    });
    expect(match?.candidate.agreement.tacticId).toBe("walk");
  });

  it("prefers a trigger agreement over a behavior one", () => {
    const match = resolveAgreement({
      candidates: [
        behavior("vaping", "breathe"),
        trigger("overworked", { emotion: "stressed" }, "walk"),
      ],
      sessionTags: { emotion: ["stressed"] },
      sessionBehaviorIds: ["vaping"],
    });

    expect(match?.candidate.agreement.tacticId).toBe("walk");
    expect(match?.reason).toBe("trigger-tags");
  });

  it("prefers the more specific trigger when two match", () => {
    const match = resolveAgreement({
      candidates: [
        trigger("stressed-anywhere", { emotion: "stressed" }, "breathe"),
        trigger(
          "stressed-at-work",
          { emotion: "stressed", location: "office" },
          "step-outside",
        ),
      ],
      sessionTags: { emotion: ["stressed"], location: ["office"] },
      sessionBehaviorIds: [],
    });

    expect(match?.candidate.agreement.tacticId).toBe("step-outside");
  });

  it("never fires a text-only trigger, which has nothing to match on", () => {
    const match = resolveAgreement({
      candidates: [trigger("when-things-pile-up", {}, "walk")],
      sessionTags: { emotion: ["stressed"] },
      sessionBehaviorIds: ["vaping"],
    });

    expect(match).toBeNull();
  });

  it("respects a trigger scoped to behaviors it does not apply to", () => {
    const candidates = [
      trigger("evening", { moment: "winding_down" }, "walk", ["scrolling"]),
    ];

    expect(
      resolveAgreement({
        candidates,
        sessionTags: { moment: ["winding_down"] },
        sessionBehaviorIds: ["vaping"],
      }),
    ).toBeNull();

    expect(
      resolveAgreement({
        candidates,
        sessionTags: { moment: ["winding_down"] },
        sessionBehaviorIds: ["scrolling"],
      })?.candidate.agreement.tacticId,
    ).toBe("walk");
  });

  it("does not re-deliver an agreement whose tactic this session already handled", () => {
    const match = resolveAgreement({
      candidates: [behavior("vaping", "breathe")],
      sessionTags: {},
      sessionBehaviorIds: ["vaping"],
      spentTacticIds: ["breathe"],
    });

    expect(match).toBeNull();
  });
});

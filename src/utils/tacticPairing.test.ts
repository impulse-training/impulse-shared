import {
  PairCandidate,
  pairHasRealContrast,
  selectTacticPair,
} from "./tacticPairing";

function candidate(
  tacticId: string,
  overrides: Partial<PairCandidate> = {},
): PairCandidate {
  return { tacticId, title: tacticId, ...overrides };
}

describe("selectTacticPair", () => {
  describe("the contract: exactly two, always", () => {
    it("returns two distinct tactics", () => {
      const pair = selectTacticPair({
        candidates: [
          candidate("breathe", { modality: "still" }),
          candidate("walk", { modality: "move" }),
        ],
      });

      expect(pair).not.toBeNull();
      expect(pair!.anchor.tacticId).toBe("breathe");
      expect(pair!.alternative.tacticId).toBe("walk");
    });

    it("never offers the same tactic twice, even when the pool repeats it", () => {
      const pair = selectTacticPair({
        candidates: [
          candidate("breathe", { modality: "still" }),
          candidate("breathe", { modality: "still" }),
          candidate("walk", { modality: "move" }),
        ],
      });

      expect(pair!.anchor.tacticId).not.toBe(pair!.alternative.tacticId);
    });

    it("fills the second slot from the staples rather than offering one option", () => {
      const pair = selectTacticPair({
        candidates: [candidate("breathe", { modality: "still" })],
        fallbackCandidates: [candidate("cold-water", { modality: "sense" })],
      });

      expect(pair!.anchor.tacticId).toBe("breathe");
      expect(pair!.alternative.tacticId).toBe("cold-water");
    });

    it("returns null rather than a lone option when nothing can fill the second slot", () => {
      expect(
        selectTacticPair({ candidates: [candidate("breathe")] }),
      ).toBeNull();
    });

    it("returns null when nothing is matched at all", () => {
      expect(selectTacticPair({ candidates: [] })).toBeNull();
    });
  });

  describe("contrast ladder", () => {
    it("prefers a different modality over a higher-ranked lookalike", () => {
      const pair = selectTacticPair({
        candidates: [
          candidate("box-breathing", { modality: "still", phase: "regulate" }),
          candidate("478-breathing", { modality: "still", phase: "regulate" }),
          candidate("step-outside", { modality: "move", phase: "shift" }),
        ],
      });

      expect(pair!.alternative.tacticId).toBe("step-outside");
      expect(pair!.contrastAxis).toBe("modality");
    });

    it("falls back to phase when modality cannot separate them", () => {
      const pair = selectTacticPair({
        candidates: [
          candidate("box-breathing", { modality: "still", phase: "regulate" }),
          candidate("478-breathing", { modality: "still", phase: "regulate" }),
          candidate("call-it-a-night", { modality: "still", phase: "reengage" }),
        ],
      });

      expect(pair!.alternative.tacticId).toBe("call-it-a-night");
      expect(pair!.contrastAxis).toBe("phase");
    });

    it("falls back to effort, then to ranking, and says which", () => {
      const byEffort = selectTacticPair({
        candidates: [
          candidate("a", { modality: "still", phase: "regulate", effort: "low" }),
          candidate("b", { modality: "still", phase: "regulate", effort: "low" }),
          candidate("c", { modality: "still", phase: "regulate", effort: "high" }),
        ],
      });
      expect(byEffort!.alternative.tacticId).toBe("c");
      expect(byEffort!.contrastAxis).toBe("effort");

      const byRanking = selectTacticPair({
        candidates: [candidate("a"), candidate("b")],
      });
      expect(byRanking!.alternative.tacticId).toBe("b");
      expect(byRanking!.contrastAxis).toBe("ranking");
    });

    it("separates on portability when effort is equal", () => {
      const pair = selectTacticPair({
        candidates: [
          candidate("a", { modality: "still", worksAnywhere: true }),
          candidate("b", { modality: "still", worksAnywhere: true }),
          candidate("c", { modality: "still", worksAnywhere: false }),
        ],
      });

      expect(pair!.alternative.tacticId).toBe("c");
      expect(pair!.contrastAxis).toBe("effort");
    });

    it("treats an unclassified anchor as unable to contrast on that axis", () => {
      const pair = selectTacticPair({
        candidates: [
          candidate("unclassified"),
          candidate("walk", { modality: "move" }),
        ],
      });

      expect(pair!.contrastAxis).toBe("ranking");
    });

    it("reaches a staple only when no real candidate contrasts", () => {
      const contrastingCandidate = selectTacticPair({
        candidates: [
          candidate("breathe", { modality: "still" }),
          candidate("walk", { modality: "move" }),
        ],
        fallbackCandidates: [candidate("cold-water", { modality: "sense" })],
      });
      expect(contrastingCandidate!.alternative.tacticId).toBe("walk");

      const noContrastingCandidate = selectTacticPair({
        candidates: [
          candidate("breathe", { modality: "still" }),
          candidate("sit-with-it", { modality: "still" }),
        ],
        fallbackCandidates: [candidate("cold-water", { modality: "sense" })],
      });
      expect(noContrastingCandidate!.alternative.tacticId).toBe("cold-water");
      expect(noContrastingCandidate!.contrastAxis).toBe("modality");
    });
  });

  describe("anchoring", () => {
    it("anchors on the plan's next step rather than the top-ranked tactic", () => {
      const pair = selectTacticPair({
        candidates: [
          candidate("top-ranked", { modality: "move" }),
          candidate("plan-step", { modality: "still", isPlanStep: true }),
        ],
        anchorTacticId: "plan-step",
      });

      expect(pair!.anchor.tacticId).toBe("plan-step");
      expect(pair!.alternative.tacticId).toBe("top-ranked");
    });

    it("anchors on the best candidate when the requested anchor is spent", () => {
      const pair = selectTacticPair({
        candidates: [
          candidate("top-ranked", { modality: "move" }),
          candidate("also-good", { modality: "still" }),
        ],
        anchorTacticId: "already-done",
      });

      expect(pair!.anchor.tacticId).toBe("top-ranked");
    });
  });

  describe("terminal tactics", () => {
    it("offers a session-ending tactic as the alternative, never as the default", () => {
      const pair = selectTacticPair({
        candidates: [
          candidate("phone-off", {
            modality: "environment",
            completionTrigger: "device-restart",
          }),
          candidate("name-the-feeling", { modality: "reflect" }),
        ],
      });

      expect(pair!.anchor.tacticId).toBe("name-the-feeling");
      expect(pair!.alternative.tacticId).toBe("phone-off");
    });

    it("never offers two session-ending tactics at once", () => {
      const pair = selectTacticPair({
        candidates: [
          candidate("phone-off", {
            modality: "environment",
            completionTrigger: "device-restart",
          }),
          candidate("shut-it-down", {
            modality: "environment",
            completionTrigger: "device-restart",
          }),
          candidate("name-the-feeling", { modality: "reflect" }),
        ],
      });

      const bothTerminal =
        pair!.anchor.completionTrigger === "device-restart" &&
        pair!.alternative.completionTrigger === "device-restart";
      expect(bothTerminal).toBe(false);
    });
  });

  describe("exclusions and reshuffling", () => {
    it("never hands back a tactic the user has already been offered", () => {
      const pair = selectTacticPair({
        candidates: [
          candidate("breathe", { modality: "still" }),
          candidate("walk", { modality: "move" }),
          candidate("cold-water", { modality: "sense" }),
          candidate("message-a-friend", { modality: "connect" }),
        ],
        excludeTacticIds: ["breathe", "walk"],
      });

      expect(pair!.anchor.tacticId).toBe("cold-water");
      expect(pair!.alternative.tacticId).toBe("message-a-friend");
    });

    it("reports a spent pool so 'neither of these' can escalate to voice", () => {
      const candidates = [
        candidate("breathe", { modality: "still" }),
        candidate("walk", { modality: "move" }),
        candidate("cold-water", { modality: "sense" }),
      ];

      const first = selectTacticPair({ candidates })!;
      const second = selectTacticPair({
        candidates,
        excludeTacticIds: [first.anchor.tacticId, first.alternative.tacticId],
      });

      expect(second).toBeNull();
    });
  });

  it("flags pairs that only look like a choice", () => {
    const real = selectTacticPair({
      candidates: [
        candidate("breathe", { modality: "still" }),
        candidate("walk", { modality: "move" }),
      ],
    })!;
    const rhyming = selectTacticPair({
      candidates: [candidate("a"), candidate("b")],
    })!;

    expect(pairHasRealContrast(real)).toBe(true);
    expect(pairHasRealContrast(rhyming)).toBe(false);
  });
});

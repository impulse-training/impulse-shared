"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const planScoring_1 = require("./planScoring");
/**
 * Minimal plan stub for testing ranking behavior.
 * Includes one tactic so nextTacticScore is non-null.
 */
function makePlan(overrides) {
    const tacticPath = `tactics/${overrides.id}-tactic-1`;
    return {
        name: overrides.id,
        type: "default",
        path: `plans/${overrides.id}`,
        tactics: [{ path: tacticPath }],
        tacticsByPath: {
            [tacticPath]: {
                id: `${overrides.id}-tactic-1`,
                phase: "regulate",
                name: "Test tactic",
            },
        },
        ...overrides,
    };
}
const emptyLookup = { byName: new Map() };
function rank(candidates) {
    return (0, planScoring_1.rankPlansForNextTactic)({
        candidates,
        sessionTags: {},
        recentTacticIds: [],
        tacticRatings: new Map(),
        lookup: emptyLookup,
        sessionBehaviorNames: [],
    });
}
describe("crossUserEvidenceBonus via rankPlansForNextTactic", () => {
    it("gives no bonus to shared plans with zero uses", () => {
        const plan = makePlan({
            id: "no-evidence",
            numberOfUses: 0,
            numberOfSuccesses: 0,
            numberOfSetbacks: 0,
        });
        const [result] = rank([{ plan, sourceKind: "shared" }]);
        // Base: affinity=0, nextTactic has base score of 1 + order bonus ~1,
        // sourceBonus=0, evidenceBonus=0
        // totalScore = 0*2 + tacticScore + 0 + 0
        expect(result.totalScore).toBeCloseTo(rank([
            {
                plan: makePlan({ id: "no-evidence-control" }),
                sourceKind: "shared",
            },
        ])[0].totalScore);
    });
    it("gives bonus proportional to resist rate and confidence", () => {
        const strongPlan = makePlan({
            id: "strong",
            numberOfUses: 20,
            numberOfSuccesses: 16, // 80% resist rate, full confidence
            numberOfSetbacks: 4,
        });
        const weakPlan = makePlan({
            id: "weak",
            numberOfUses: 20,
            numberOfSuccesses: 4, // 20% resist rate, full confidence
            numberOfSetbacks: 16,
        });
        const noPlan = makePlan({
            id: "none",
            numberOfUses: 0,
            numberOfSuccesses: 0,
            numberOfSetbacks: 0,
        });
        const results = rank([
            { plan: strongPlan, sourceKind: "shared" },
            { plan: weakPlan, sourceKind: "shared" },
            { plan: noPlan, sourceKind: "shared" },
        ]);
        // Strong plan should rank first
        expect(results[0].plan.id).toBe("strong");
        // Weak plan should rank above no-evidence (it still gets some bonus)
        expect(results[1].plan.id).toBe("weak");
        expect(results[2].plan.id).toBe("none");
        // Verify the score differences match expected bonus values
        const strongScore = results.find((r) => r.plan.id === "strong").totalScore;
        const noneScore = results.find((r) => r.plan.id === "none").totalScore;
        // 0.8 * 1.0 * 6 = 4.8
        expect(strongScore - noneScore).toBeCloseTo(4.8);
    });
    it("gates bonus by confidence (low sample size)", () => {
        const lowSample = makePlan({
            id: "low-sample",
            numberOfUses: 5, // confidence = 5/20 = 0.25
            numberOfSuccesses: 5, // 100% resist rate
            numberOfSetbacks: 0,
        });
        const highSample = makePlan({
            id: "high-sample",
            numberOfUses: 20, // confidence = 1.0
            numberOfSuccesses: 16, // 80% resist rate
            numberOfSetbacks: 4,
        });
        const results = rank([
            { plan: lowSample, sourceKind: "shared" },
            { plan: highSample, sourceKind: "shared" },
        ]);
        // High sample (4.8 bonus) should beat low sample (1.5 bonus) despite lower resist rate
        expect(results[0].plan.id).toBe("high-sample");
        const lowScore = results.find((r) => r.plan.id === "low-sample").totalScore;
        const highScore = results.find((r) => r.plan.id === "high-sample").totalScore;
        const noneScore = rank([
            { plan: makePlan({ id: "baseline" }), sourceKind: "shared" },
        ])[0].totalScore;
        // low-sample bonus: 1.0 * 0.25 * 6 = 1.5
        expect(lowScore - noneScore).toBeCloseTo(1.5);
        // high-sample bonus: 0.8 * 1.0 * 6 = 4.8
        expect(highScore - noneScore).toBeCloseTo(4.8);
    });
    it("does not apply evidence bonus to user or trigger plans", () => {
        const plan = makePlan({
            id: "user-plan",
            numberOfUses: 20,
            numberOfSuccesses: 20,
            numberOfSetbacks: 0,
        });
        const [asUser] = rank([{ plan, sourceKind: "user" }]);
        const [asTrigger] = rank([{ plan, sourceKind: "trigger" }]);
        // User plan: sourceBonus=4, no evidence bonus
        // Trigger plan: sourceBonus=10, no evidence bonus
        // Difference should be exactly sourceBonus difference (10-4=6)
        expect(asTrigger.totalScore - asUser.totalScore).toBeCloseTo(6);
    });
    it("shared plan with strong evidence can compete with user plan bonus", () => {
        const sharedPlan = makePlan({
            id: "proven-shared",
            numberOfUses: 20,
            numberOfSuccesses: 20, // 100% resist rate → bonus = 6
            numberOfSetbacks: 0,
        });
        const userPlan = makePlan({
            id: "user-default",
            // No cross-user evidence
        });
        const results = rank([
            { plan: sharedPlan, sourceKind: "shared" },
            { plan: userPlan, sourceKind: "user" },
        ]);
        // Shared: sourceBonus=0, evidenceBonus=6 → total bonus=6
        // User: sourceBonus=4, evidenceBonus=0 → total bonus=4
        // Shared should win
        expect(results[0].plan.id).toBe("proven-shared");
    });
});

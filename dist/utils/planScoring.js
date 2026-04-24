"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scorePlanAffinity = scorePlanAffinity;
exports.rankPlansForNextTactic = rankPlansForNextTactic;
exports.buildPlanTagGroupLookup = buildPlanTagGroupLookup;
exports.summarizePlanPhase = summarizePlanPhase;
const tacticScoring_1 = require("./tacticScoring");
function normalizeText(value) {
    return value.trim().toLowerCase();
}
function getDocPath(value) {
    if (!value || typeof value !== "object")
        return null;
    const record = value;
    return typeof record.path === "string" ? record.path : null;
}
function getLegacyTagWeightScore(plan, sessionTags) {
    if (!plan.tags)
        return 0;
    let score = 0;
    for (const [groupId, optionIds] of Object.entries(sessionTags)) {
        const groupWeights = plan.tags[groupId];
        if (!groupWeights)
            continue;
        for (const optionId of optionIds) {
            if (typeof groupWeights[optionId] === "number") {
                score += groupWeights[optionId];
            }
        }
    }
    return score;
}
function indicationMatchesSession(indication, sessionTags, lookup) {
    const groupEntry = lookup.byName.get(indication.tagGroupName.toLowerCase());
    if (!groupEntry)
        return false;
    const sessionValues = sessionTags[groupEntry.groupId];
    if (!sessionValues || sessionValues.length === 0)
        return false;
    for (const label of indication.optionLabels) {
        const optionId = groupEntry.options.get(label.toLowerCase());
        if (optionId && sessionValues.includes(optionId)) {
            return true;
        }
    }
    return false;
}
function scorePlanAffinity(plan, sessionTags, lookup, sessionBehaviorNames) {
    var _a, _b;
    let score = getLegacyTagWeightScore(plan, sessionTags);
    if ((_a = plan.indications) === null || _a === void 0 ? void 0 : _a.tags) {
        for (const indication of plan.indications.tags) {
            if (indicationMatchesSession(indication, sessionTags, lookup)) {
                score += indication.weight;
            }
        }
    }
    if (Array.isArray((_b = plan.indications) === null || _b === void 0 ? void 0 : _b.behaviorTemplateNames) &&
        plan.indications.behaviorTemplateNames.length > 0 &&
        sessionBehaviorNames.length > 0) {
        const sessionNames = new Set(sessionBehaviorNames.map(normalizeText));
        for (const behaviorName of plan.indications.behaviorTemplateNames) {
            if (sessionNames.has(normalizeText(behaviorName))) {
                score += 3;
            }
        }
    }
    return score;
}
function getTacticWithMetaFromPlan(plan, path) {
    if (!path || !plan.tacticsByPath)
        return null;
    const tactic = plan.tacticsByPath[path];
    if (!tactic || typeof tactic !== "object")
        return null;
    const data = tactic;
    const id = typeof data.id === "string" ? data.id : null;
    if (!id)
        return null;
    return {
        ...tactic,
        id,
        path,
    };
}
function sourceBonus(sourceKind) {
    if (sourceKind === "trigger")
        return 10;
    if (sourceKind === "user")
        return 4;
    return 0;
}
/**
 * Bonus for shared plans based on cross-user effectiveness evidence.
 * Returns 0–6 points, gated by sample size (confidence) and resist rate.
 * At 20+ uses with 80% resist rate → 4.8 (competitive with user plan bonus of 4).
 */
function crossUserEvidenceBonus(plan) {
    var _a, _b;
    const uses = (_a = plan.numberOfUses) !== null && _a !== void 0 ? _a : 0;
    const successes = (_b = plan.numberOfSuccesses) !== null && _b !== void 0 ? _b : 0;
    if (uses === 0)
        return 0;
    const resistRate = successes / uses;
    const confidence = Math.min(uses / 20, 1);
    return resistRate * confidence * 6;
}
function rankPlansForNextTactic(params) {
    var _a;
    const { candidates, sessionTags, recentTacticIds, tacticRatings, lookup, sessionBehaviorNames, } = params;
    const ranked = [];
    for (const candidate of candidates) {
        const plan = candidate.plan;
        const affinityScore = scorePlanAffinity(plan, sessionTags, lookup, sessionBehaviorNames);
        const tacticRefs = Array.isArray(plan.tactics) ? plan.tactics : [];
        let bestTactic = null;
        for (const tacticRef of tacticRefs) {
            const tacticPath = getDocPath(tacticRef);
            const tactic = getTacticWithMetaFromPlan(plan, tacticPath);
            if (!tactic)
                continue;
            const tacticScore = (0, tacticScoring_1.scoreTactic)(tactic, sessionTags, recentTacticIds, tacticRatings, lookup);
            if (tacticScore === null)
                continue;
            // Earlier tactics get a small premium so we respect plan order while still
            // allowing reviews/recency to demote a poor fit.
            const orderedScore = tacticScore + Math.max(0, 1 - tacticRefs.indexOf(tacticRef) * 0.35);
            if (!bestTactic || orderedScore > bestTactic.score) {
                bestTactic = { score: orderedScore, tactic };
            }
        }
        const nextTacticScore = (_a = bestTactic === null || bestTactic === void 0 ? void 0 : bestTactic.score) !== null && _a !== void 0 ? _a : null;
        const evidenceBonus = candidate.sourceKind === "shared" ? crossUserEvidenceBonus(plan) : 0;
        const totalScore = affinityScore * 2 +
            (nextTacticScore !== null && nextTacticScore !== void 0 ? nextTacticScore : -1) +
            sourceBonus(candidate.sourceKind) +
            evidenceBonus;
        ranked.push({
            plan,
            planAffinityScore: affinityScore,
            nextTacticScore,
            totalScore,
            nextTacticId: bestTactic === null || bestTactic === void 0 ? void 0 : bestTactic.tactic.id,
            nextTacticPath: bestTactic === null || bestTactic === void 0 ? void 0 : bestTactic.tactic.path,
            sourceKind: candidate.sourceKind,
        });
    }
    ranked.sort((a, b) => {
        if (b.totalScore !== a.totalScore)
            return b.totalScore - a.totalScore;
        if (b.planAffinityScore !== a.planAffinityScore) {
            return b.planAffinityScore - a.planAffinityScore;
        }
        const aOrdinal = typeof a.plan.ordinal === "number" ? a.plan.ordinal : 999;
        const bOrdinal = typeof b.plan.ordinal === "number" ? b.plan.ordinal : 999;
        return aOrdinal - bOrdinal;
    });
    return ranked;
}
function buildPlanTagGroupLookup(tagGroups) {
    const byName = new Map();
    for (const { id, data } of tagGroups) {
        const optionsMap = new Map();
        for (const option of data.options) {
            optionsMap.set(option.label.toLowerCase(), option.id);
        }
        byName.set(data.name.toLowerCase(), { groupId: id, options: optionsMap });
    }
    return { byName };
}
function summarizePlanPhase(plan) {
    var _a;
    const tacticsByPath = (_a = plan.tacticsByPath) !== null && _a !== void 0 ? _a : {};
    for (const tactic of Object.values(tacticsByPath)) {
        if (tactic &&
            typeof tactic === "object" &&
            typeof tactic.phase === "string") {
            return tactic.phase;
        }
    }
    return undefined;
}

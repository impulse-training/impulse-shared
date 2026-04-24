"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTagGroupLookup = buildTagGroupLookup;
exports.scoreTactic = scoreTactic;
exports.selectBestTacticsPerPhase = selectBestTacticsPerPhase;
exports.sessionHasPrimaryTagsOrBehaviors = sessionHasPrimaryTagsOrBehaviors;
// ── Tag group lookup builder ─────────────────────────────────────────────────
function buildTagGroupLookup(tagGroups) {
    const byName = new Map();
    for (const { id, data } of tagGroups) {
        const optionsMap = new Map();
        for (const opt of data.options) {
            optionsMap.set(opt.label.toLowerCase(), opt.id);
        }
        byName.set(data.name.toLowerCase(), { groupId: id, options: optionsMap });
    }
    return { byName };
}
// ── Resolve tag indication to session tag keys ───────────────────────────────
function tagIndicationMatchesSession(indication, sessionTags, lookup) {
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
// ── Score a single tactic ────────────────────────────────────────────────────
function scoreTactic(tactic, sessionTags, recentTacticIds, tacticRatings, lookup) {
    var _a, _b;
    // 1. Hard exclude: tag contraindications
    if ((_a = tactic.contraindications) === null || _a === void 0 ? void 0 : _a.tags) {
        for (const contra of tactic.contraindications.tags) {
            if (tagIndicationMatchesSession(contra, sessionTags, lookup)) {
                return null; // EXCLUDED
            }
        }
    }
    // 2. Base score
    let score = 1;
    // 3. Tag indication boost
    if ((_b = tactic.indications) === null || _b === void 0 ? void 0 : _b.tags) {
        for (const indication of tactic.indications.tags) {
            if (tagIndicationMatchesSession(indication, sessionTags, lookup)) {
                score += indication.weight;
            }
        }
    }
    // 4. Recency penalty -- most recent 3 completed tactics are penalized
    const recencyIndex = recentTacticIds.indexOf(tactic.id);
    if (recencyIndex !== -1 && recencyIndex < 3) {
        score -= 3 - recencyIndex; // -3, -2, -1
    }
    // 5. User rating boost
    const ratings = tacticRatings.get(tactic.id);
    if (ratings) {
        const total = ratings.helpful + ratings.notHelpful;
        if (total > 0) {
            const helpfulRatio = ratings.helpful / total;
            const confidence = Math.min(total / 5, 1);
            // Range: roughly -2 to +2
            score += (helpfulRatio * 2 - 1) * confidence * 2;
        }
    }
    return score;
}
// ── Select best tactic per phase ─────────────────────────────────────────────
function selectBestTacticsPerPhase(allTactics, sessionTags, recentTacticIds, tacticRatings, lookup) {
    const phases = ["regulate", "shift", "reengage"];
    const selected = [];
    for (const phase of phases) {
        const phaseTactics = allTactics.filter((t) => t.phase === phase);
        let best = null;
        for (const tactic of phaseTactics) {
            const score = scoreTactic(tactic, sessionTags, recentTacticIds, tacticRatings, lookup);
            if (score === null)
                continue;
            if (!best || score > best.score) {
                best = { tactic, score };
            }
        }
        if (best) {
            selected.push(best.tactic);
        }
    }
    return selected;
}
// ── Check if session has primary tags or behaviors ───────────────────────────
/**
 * Returns true if the session has any primary tag groups with values set,
 * or has any behavior IDs assigned. Used to gate plan improvisation —
 * non-primary tags alone (location, moment) should not trigger improvisation.
 */
function sessionHasPrimaryTagsOrBehaviors(sessionTags, tagGroups, behaviorIds) {
    var _a;
    if (behaviorIds && behaviorIds.length > 0)
        return true;
    for (const group of tagGroups) {
        if (group.isPrimary && ((_a = sessionTags[group.id]) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            return true;
        }
    }
    return false;
}

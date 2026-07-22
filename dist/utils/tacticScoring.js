"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PINNED_TACTIC_BONUS = void 0;
exports.buildTagGroupLookup = buildTagGroupLookup;
exports.scoreTactic = scoreTactic;
exports.selectBestTacticsPerPhase = selectBestTacticsPerPhase;
exports.sessionHasPrimaryTagsOrBehaviors = sessionHasPrimaryTagsOrBehaviors;
/** Ranking boost applied to a pinned tactic. Large enough to clear a tactic's
 * recency penalty, small enough that a strong tag/topic match still competes. */
exports.PINNED_TACTIC_BONUS = 3;
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
function scoreTactic(tactic, sessionTags, recentTacticIds, tacticRatings, lookup, context = {}) {
    var _a, _b, _c, _d, _e;
    const { behaviorIds, behaviorTopicIds, pinnedTacticIds, suppressedTacticIds, lowSignal, } = context;
    // 1. Hard exclude: user/behavior suppression (human oversight)
    if (suppressedTacticIds === null || suppressedTacticIds === void 0 ? void 0 : suppressedTacticIds.includes(tactic.id)) {
        return null; // EXCLUDED
    }
    // 1b. Hard exclude: presumptuous tactic on a low-signal session. A tactic that
    //     presumes a physical state we can't verify (e.g. "Stand Up" presumes the
    //     user is sitting/lying) is only eligible once the session has real
    //     context — otherwise we'd suggest it on empty tags, where the "choice" is
    //     arbitrary and may contradict the user's situation.
    if (tactic.presumesState && lowSignal) {
        return null; // EXCLUDED
    }
    // 2. Hard exclude: tag contraindications
    if ((_a = tactic.contraindications) === null || _a === void 0 ? void 0 : _a.tags) {
        for (const contra of tactic.contraindications.tags) {
            if (tagIndicationMatchesSession(contra, sessionTags, lookup)) {
                return null; // EXCLUDED
            }
        }
    }
    // 3. Hard exclude: behavior-topic contraindications (e.g. anxiety
    //    down-regulators are a poor fit for arousal-driven sexual urges)
    if (((_b = tactic.contraindications) === null || _b === void 0 ? void 0 : _b.behaviorTopics) && (behaviorTopicIds === null || behaviorTopicIds === void 0 ? void 0 : behaviorTopicIds.length)) {
        for (const contra of tactic.contraindications.behaviorTopics) {
            if (behaviorTopicIds.includes(contra.behaviorTopicId)) {
                return null; // EXCLUDED
            }
        }
    }
    // 4. Base score
    let score = 1;
    // 5. Behavior indication boost
    if (((_c = tactic.indications) === null || _c === void 0 ? void 0 : _c.behaviors) && (behaviorIds === null || behaviorIds === void 0 ? void 0 : behaviorIds.length)) {
        for (const indication of tactic.indications.behaviors) {
            if (behaviorIds.includes(indication.behaviorId)) {
                score += indication.weight;
            }
        }
    }
    // 6. Behavior-topic indication boost
    if (((_d = tactic.indications) === null || _d === void 0 ? void 0 : _d.behaviorTopics) && (behaviorTopicIds === null || behaviorTopicIds === void 0 ? void 0 : behaviorTopicIds.length)) {
        for (const indication of tactic.indications.behaviorTopics) {
            if (behaviorTopicIds.includes(indication.behaviorTopicId)) {
                score += indication.weight;
            }
        }
    }
    // 7. Tag indication boost
    if ((_e = tactic.indications) === null || _e === void 0 ? void 0 : _e.tags) {
        for (const indication of tactic.indications.tags) {
            if (tagIndicationMatchesSession(indication, sessionTags, lookup)) {
                score += indication.weight;
            }
        }
    }
    // 8. Pinned-tactic boost (human oversight)
    if (pinnedTacticIds === null || pinnedTacticIds === void 0 ? void 0 : pinnedTacticIds.includes(tactic.id)) {
        score += exports.PINNED_TACTIC_BONUS;
    }
    // 9. Recency penalty -- most recent 3 completed tactics are penalized
    const recencyIndex = recentTacticIds.indexOf(tactic.id);
    if (recencyIndex !== -1 && recencyIndex < 3) {
        score -= 3 - recencyIndex; // -3, -2, -1
    }
    // 10. User rating boost
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
function selectBestTacticsPerPhase(allTactics, sessionTags, recentTacticIds, tacticRatings, lookup, context = {}) {
    const phases = ["regulate", "shift", "reengage"];
    const selected = [];
    for (const phase of phases) {
        const phaseTactics = allTactics.filter((t) => t.phase === phase);
        let best = null;
        for (const tactic of phaseTactics) {
            const score = scoreTactic(tactic, sessionTags, recentTacticIds, tacticRatings, lookup, context);
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

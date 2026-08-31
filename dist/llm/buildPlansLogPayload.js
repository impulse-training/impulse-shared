"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompletedTacticIds = getCompletedTacticIds;
exports.buildPlansLogPayload = buildPlansLogPayload;
const log_1 = require("../schemas/log");
function getDocPath(value) {
    if (!value || typeof value !== "object")
        return null;
    const record = value;
    return typeof record.path === "string" ? record.path : null;
}
function getTacticLikeFromTacticsByPath(tacticsByPath, path) {
    if (!path)
        return null;
    if (!tacticsByPath || typeof tacticsByPath !== "object")
        return null;
    const record = tacticsByPath;
    const raw = record[path];
    if (!raw || typeof raw !== "object")
        return null;
    return raw;
}
function getFirstStepText(tactic) {
    if (!tactic)
        return null;
    if (!Array.isArray(tactic.steps) || tactic.steps.length === 0)
        return null;
    const first = tactic.steps[0];
    if (!first || typeof first !== "object")
        return null;
    const step = first;
    return typeof step.text === "string" ? step.text : null;
}
function getTacticIdFromPath(path) {
    const segments = path.split("/");
    return segments[segments.length - 1];
}
function getAllTactics(tacticsRefs, tacticsByPath) {
    if (!Array.isArray(tacticsRefs))
        return [];
    const results = [];
    for (const ref of tacticsRefs) {
        const path = getDocPath(ref);
        if (!path)
            continue;
        const id = getTacticIdFromPath(path);
        const tactic = getTacticLikeFromTacticsByPath(tacticsByPath, path);
        const title = tactic && typeof tactic.title === "string" ? tactic.title : id;
        results.push({ id, title });
    }
    return results;
}
/**
 * Tactic ids the user has completed in this session, read from its tactic
 * logs. Feed this to getGptPayload's `completedTacticIds` option so the plan
 * context reflects out-of-order completions the moment the tactic log exists,
 * instead of waiting on the client to sync the plans log's outcome field.
 */
function getCompletedTacticIds(logs) {
    var _a;
    const ids = new Set();
    for (const log of logs) {
        if (!(0, log_1.logIsTacticLog)(log))
            continue;
        if (log.data.completed !== true)
            continue;
        const id = (_a = log.data.tactic) === null || _a === void 0 ? void 0 : _a.id;
        if (typeof id === "string" && id.length > 0)
            ids.add(id);
    }
    return [...ids];
}
function buildPlansLogPayload(log, isFinalLogInSession, completedTacticIds) {
    var _a, _b, _c, _d;
    const activeIndex = (_a = log.data.activeIndex) !== null && _a !== void 0 ? _a : 0;
    const activePlanEntry = log.data.plans[activeIndex];
    const plan = activePlanEntry === null || activePlanEntry === void 0 ? void 0 : activePlanEntry.plan;
    const tacticsCount = (_c = (_b = plan === null || plan === void 0 ? void 0 : plan.tactics) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0;
    const firstTacticRef = (_d = plan === null || plan === void 0 ? void 0 : plan.tactics) === null || _d === void 0 ? void 0 : _d[0];
    const firstTacticPath = getDocPath(firstTacticRef);
    const firstTactic = getTacticLikeFromTacticsByPath(plan === null || plan === void 0 ? void 0 : plan.tacticsByPath, firstTacticPath);
    const firstTacticTitle = firstTactic && typeof firstTactic.title === "string"
        ? firstTactic.title
        : null;
    const firstStepText = getFirstStepText(firstTactic);
    const parts = [];
    const tacticsNoun = tacticsCount === 1 ? "tactic" : "tactics";
    const isPlanning = log.data.mode === "planning";
    // trigger/behavior = a plan the user authored; composed = a situational
    // plan the AI assembled for this moment. All three live in the plan sheet.
    // tags/improvised = engine matchmaking (delivered inline as cards).
    const isUserOwnedPlan = log.data.source === "trigger" ||
        log.data.source === "behavior" ||
        log.data.source === "composed";
    if (isPlanning) {
        // Planning mode framing (recap session — proposing a plan for next time)
        parts.push(`A plan has been proposed for this trigger. It includes ${tacticsCount} ${tacticsNoun}.`);
        if (firstTacticTitle) {
            parts.push(`The first tactic is: ${firstTacticTitle}.`);
        }
        parts.push("This plan will be ready for next time this trigger comes up. Ask the user if they'd like to keep this plan, adjust it, or skip it.");
    }
    else if (isUserOwnedPlan) {
        // USER-OWNED plan (source trigger/behavior): the plan sheet — not the
        // conversation — delivers the tactics. The plan is a strategy, not a
        // script: after each step the assistant runs a CHECKPOINT (has the urge
        // passed?) instead of marching the user to the next step.
        const allTactics = getAllTactics(plan === null || plan === void 0 ? void 0 : plan.tactics, plan === null || plan === void 0 ? void 0 : plan.tacticsByPath);
        const outcome = activePlanEntry === null || activePlanEntry === void 0 ? void 0 : activePlanEntry.outcome;
        // Completion state comes from the session's tactic logs, not the plans
        // log's outcome field: the outcome is synced by the client after the
        // fact, and the user may complete steps OUT OF ORDER (e.g. the second
        // tactic before the first), so "position in the list" says nothing about
        // what remains.
        const completed = new Set(completedTacticIds !== null && completedTacticIds !== void 0 ? completedTacticIds : []);
        const allTacticsCompleted = allTactics.length > 0 && allTactics.every((t) => completed.has(t.id));
        if (outcome === "resolved_early" || outcome === "completed_all") {
            parts.push(outcome === "resolved_early"
                ? "The user's plan for this session already resolved EARLY: the urge passed before every step was needed. That is a full success — the plan did its job. Do not point the user at remaining steps, do not suggest more tactics, and do not treat unused steps as unfinished business."
                : "The user completed every step of their plan for this session. Acknowledge it if relevant; do not re-deliver any step.");
        }
        else if (allTacticsCompleted) {
            parts.push("The user completed EVERY tactic of their plan for this session (possibly out of order). Acknowledge it if relevant; do not re-deliver any step, and never direct the user to a tactic of this plan — there is no next step left.");
        }
        else if (isFinalLogInSession) {
            parts.push(`The user's own plan was just assigned. The app is displaying it to them in the plan sheet with its ${tacticsCount} ${tacticsNoun}.`);
            if (firstTacticTitle) {
                parts.push(`The first tactic in the plan is titled: ${firstTacticTitle}. Point the user to it by name in ONE short sentence, but do not assume they have already started it.`);
            }
        }
        else {
            parts.push(`The user's own plan is assigned for this session, displayed to them in the plan sheet with ${tacticsCount} ${tacticsNoun}${allTactics.length > 0 ? " (in order):" : "."}`);
            allTactics.forEach((t, i) => {
                parts.push(`${i + 1}. "${t.title}"${completed.has(t.id) ? " — ALREADY COMPLETED" : ""}`);
            });
            parts.push("After the user completes a tactic, acknowledge it in one short sentence and ask how the urge is doing now — a quick checkpoint. Do NOT direct them to the next step in that same message. " +
                "If the user says the urge has passed or they feel back in control, call resolvePlanEarly and then reinforce the win in one short line — steps they never needed are a success, not a failure. " +
                "If the urge is still present or they want to keep going, point them to the next tactic of their plan they have NOT yet completed — the user may work steps out of order, so skip any marked ALREADY COMPLETED, and never direct them to one of those. " +
                "If they say a step doesn't fit their current situation (wrong place, no privacy, no time), accept that without treating the plan as failed and without scrambling to assign a replacement task — check how the urge is doing instead. " +
                "Never tell the user to repeat a tactic they just completed.");
        }
        parts.push("Do NOT call suggestTactic for the plan's tactics and do NOT type out their step instructions — the plan sheet already shows them.");
    }
    else {
        // ENGINE-MATCHED plan (source tags/improvised): an implementation detail
        // the user can't see. The assistant guides them through it inline, one
        // suggestTactic card at a time; completion auto-presents the next card.
        const allTactics = getAllTactics(plan === null || plan === void 0 ? void 0 : plan.tactics, plan === null || plan === void 0 ? void 0 : plan.tacticsByPath);
        parts.push(`A plan was matched for this session with ${tacticsCount} ${tacticsNoun}. The user cannot see it — its tactics are delivered one at a time as cards.`);
        if (allTactics.length > 0) {
            parts.push("Tactics in this plan (in order):");
            allTactics.forEach((t, i) => {
                parts.push(`${i + 1}. [id=${t.id}] "${t.title}"`);
            });
        }
        parts.push("If no tactic card is pending, call suggestTactic with the next tactic's ID. When the user completes a tactic, the app automatically presents the next one as a card — reply with one short line leading into it, and do NOT call suggestTactic for a card that is already presented.");
    }
    return [
        {
            role: "user",
            content: `<CONTEXT>${parts.join(" ")}</CONTEXT>`,
        },
    ];
}

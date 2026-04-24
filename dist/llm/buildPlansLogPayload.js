"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPlansLogPayload = buildPlansLogPayload;
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
function buildPlansLogPayload(log, isFinalLogInSession) {
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
    if (isPlanning) {
        // Planning mode framing (recap session — proposing a plan for next time)
        parts.push(`A plan has been proposed for this trigger. It includes ${tacticsCount} ${tacticsNoun}.`);
        if (firstTacticTitle) {
            parts.push(`The first tactic is: ${firstTacticTitle}.`);
        }
        parts.push("This plan will be ready for next time this trigger comes up. Ask the user if they'd like to keep this plan, adjust it, or skip it.");
    }
    else if (isFinalLogInSession) {
        // Authoritative, directive framing when this is the most recent log.
        // In an active impulse moment, the assistant should lead with the first
        // tactic rather than pausing to ask whether the user wants to discuss the
        // plan first.
        parts.push("A plan is available for the user right now.");
        parts.push(`It includes ${tacticsCount} ${tacticsNoun}. Since this is an active impulse moment, guide the user into the first tactic right away instead of asking whether they want to discuss the plan first.`);
        if (firstTacticTitle) {
            parts.push(`The first tactic in the plan is titled: ${firstTacticTitle}. Suggest that tactic now using the suggestTactic tool, but do not assume the user has already started it.`);
        }
        if (firstStepText) {
            parts.push(`The first step instructions are: ${firstStepText}. This is context for tool selection only. Do NOT repeat these instructions in the assistant message. Instead, write a short introduction to the tactic and let the tactic card carry the actual step-by-step guidance.`);
        }
        parts.push("Keep the response brief, direct, and focused on getting the user into the tactic immediately. If a tactic card is available, do not deliver the tactic in plain text.");
    }
    else {
        const isUserPlan = log.data.source === "trigger";
        const allTactics = getAllTactics(plan === null || plan === void 0 ? void 0 : plan.tactics, plan === null || plan === void 0 ? void 0 : plan.tacticsByPath);
        if (isUserPlan && allTactics.length > 0) {
            parts.push(`The user's plan is active for this session with ${tacticsCount} ${tacticsNoun} (in order):`);
            allTactics.forEach((t, i) => {
                parts.push(`${i + 1}. [id=${t.id}] "${t.title}"`);
            });
            parts.push("After the user completes a tactic, immediately suggest the next uncompleted tactic in the plan using the suggestTactic tool. Do not ask whether they want to continue — lead them directly into it.");
        }
        else {
            parts.push(`A plan was suggested earlier in this session with ${tacticsCount} ${tacticsNoun}.`);
            if (allTactics.length > 0) {
                parts.push("Available tactics:");
                allTactics.forEach((t, i) => {
                    parts.push(`${i + 1}. [id=${t.id}] "${t.title}"`);
                });
            }
            parts.push("Follow the user's lead. You may suggest the next tactic if the moment feels right, but do not force progression.");
        }
    }
    return [
        {
            role: "user",
            content: `<CONTEXT>${parts.join(" ")}</CONTEXT>`,
        },
    ];
}

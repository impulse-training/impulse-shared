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
        // The plan sheet — not the conversation — delivers the plan's tactics:
        // the assistant's job is one short line pointing at the first step.
        parts.push(`A plan was just assigned. The app is displaying it to the user in the plan sheet with its ${tacticsCount} ${tacticsNoun}.`);
        if (firstTacticTitle) {
            parts.push(`The first tactic in the plan is titled: ${firstTacticTitle}. Point the user to it by name in ONE short sentence, but do not assume they have already started it.`);
        }
        parts.push("Do NOT call suggestTactic for the plan's tactics and do NOT type out their step instructions — the plan sheet already shows them.");
    }
    else {
        const allTactics = getAllTactics(plan === null || plan === void 0 ? void 0 : plan.tactics, plan === null || plan === void 0 ? void 0 : plan.tacticsByPath);
        parts.push(`The user's plan is assigned for this session, displayed to them in the plan sheet with ${tacticsCount} ${tacticsNoun}${allTactics.length > 0 ? " (in order):" : "."}`);
        allTactics.forEach((t, i) => {
            parts.push(`${i + 1}. "${t.title}"`);
        });
        parts.push("After the user completes a tactic, acknowledge it in one short sentence and point them to the next step of their plan by name — do not ask whether they want to continue. Do NOT call suggestTactic for the plan's tactics and do NOT type out their step instructions — the plan sheet already shows them. Never tell the user to repeat a tactic they just completed.");
    }
    return [
        {
            role: "user",
            content: `<CONTEXT>${parts.join(" ")}</CONTEXT>`,
        },
    ];
}

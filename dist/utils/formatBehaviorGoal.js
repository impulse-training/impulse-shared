"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatBehaviorGoal = formatBehaviorGoal;
const behaviorData_1 = require("./behaviorData");
const DAY_LABELS = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
};
function unitFor(quantity, unitPlural) {
    if (quantity === 1) {
        if (unitPlural.endsWith("s"))
            return unitPlural.slice(0, -1);
    }
    return unitPlural;
}
function formatBehaviorGoal(behavior, goal) {
    const effectiveGoal = goal !== null && goal !== void 0 ? goal : behavior.goal;
    if (!effectiveGoal)
        return null;
    const isScale = behavior.trackingType === "scale";
    const unitPlural = isScale
        ? "level"
        : behavior.trackingType === "counter"
            ? behavior.trackingUnit || "times"
            : "minutes";
    return formatRichGoal(effectiveGoal, unitPlural, isScale);
}
// Original rich formatter, now factored so we can reuse with or without units
function formatRichGoal(goal, unitPlural, isScale = false) {
    const DAY_LABELS = {
        0: "Sun",
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thu",
        5: "Fri",
        6: "Sat",
    };
    function unitFor(quantity, unitPlural) {
        if (quantity === 1) {
            if (unitPlural.endsWith("s"))
                return unitPlural.slice(0, -1);
        }
        return unitPlural;
    }
    const formatTarget = (target) => {
        if (isScale)
            return (0, behaviorData_1.getScaleLabel)(target);
        return `${target} ${unitFor(target, unitPlural)}`;
    };
    if (goal.type === "eliminate") {
        return "Eliminate";
    }
    if (goal.type === "reduceEveryDay") {
        if (goal.target === 0) {
            return "Eliminate";
        }
        if (isScale)
            return formatTarget(goal.target);
        return `At most ${formatTarget(goal.target)} daily`;
    }
    if (goal.type === "reduceIndividualDays") {
        const { dailyTargets } = goal;
        const targets = [0, 1, 2, 3, 4, 5, 6].map((d) => dailyTargets[d]);
        const allSame = targets.every((t) => t === targets[0]);
        if (allSame) {
            if (targets[0] === 0) {
                return "Eliminate";
            }
            return `At most ${formatTarget(targets[0])} daily`;
        }
        const weekdayTargets = [
            dailyTargets[1],
            dailyTargets[2],
            dailyTargets[3],
            dailyTargets[4],
            dailyTargets[5],
        ];
        const weekendTargets = [dailyTargets[0], dailyTargets[6]];
        const weekdaysAllSame = weekdayTargets.every((t) => t === weekdayTargets[0]);
        const weekendsAllSame = weekendTargets.every((t) => t === weekendTargets[0]);
        if (weekdaysAllSame &&
            weekendsAllSame &&
            weekdayTargets[0] !== weekendTargets[0]) {
            const wd = weekdayTargets[0];
            const we = weekendTargets[0];
            const weekdayPart = wd === 0
                ? "Eliminate weekdays"
                : `At most ${formatTarget(wd)} weekdays`;
            const weekendPart = we === 0
                ? "Eliminate weekends"
                : `At most ${formatTarget(we)} weekends`;
            return `${weekdayPart}, ${weekendPart}`;
        }
        const counts = new Map();
        targets.forEach((t) => counts.set(t, (counts.get(t) || 0) + 1));
        const majority = Array.from(counts.entries()).sort((a, b) => b[1] - a[1])[0];
        if (majority) {
            const [majorityTarget, majorityCount] = majority;
            const exceptionDays = [];
            targets.forEach((t, idx) => {
                if (t !== majorityTarget)
                    exceptionDays.push(idx);
            });
            if (majorityCount >= 5 &&
                exceptionDays.length > 0 &&
                exceptionDays.length <= 2) {
                const exceptionGroups = new Map();
                exceptionDays.forEach((idx) => {
                    const t = targets[idx];
                    const arr = exceptionGroups.get(t) || [];
                    arr.push(idx);
                    exceptionGroups.set(t, arr);
                });
                const parts = [];
                Array.from(exceptionGroups.entries()).forEach(([t, dayIdxs]) => {
                    const daysLabel = dayIdxs.map((d) => DAY_LABELS[d]).join(", ");
                    if (t === 0) {
                        parts.push(`Eliminate ${daysLabel}`);
                    }
                    else {
                        parts.push(`At most ${formatTarget(t)} ${daysLabel}`);
                    }
                });
                const majorityPart = majorityTarget === 0
                    ? "Eliminate all other days"
                    : `At most ${formatTarget(majorityTarget)} all other days`;
                parts.push(majorityPart);
                return parts.join("; ");
            }
        }
        const groups = new Map();
        targets.forEach((t, idx) => {
            const arr = groups.get(t) || [];
            arr.push(idx);
            groups.set(t, arr);
        });
        const groupEntries = Array.from(groups.entries()).sort((a, b) => a[0] - b[0]);
        const MAX_GROUPS = 3;
        const parts = [];
        groupEntries.slice(0, MAX_GROUPS).forEach(([target, dayIdxs]) => {
            const daysLabel = dayIdxs.map((d) => DAY_LABELS[d]).join(", ");
            if (target === 0) {
                parts.push(`Eliminate ${daysLabel}`);
            }
            else {
                parts.push(`At most ${formatTarget(target)} ${daysLabel}`);
            }
        });
        if (groupEntries.length > MAX_GROUPS) {
            parts.push("other days");
        }
        return parts.join("; ");
    }
    return null;
}

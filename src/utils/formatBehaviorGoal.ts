import { Behavior } from "../schemas";

const DAY_LABELS: Record<number, string> = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

function unitFor(quantity: number, unitPlural: string): string {
  if (quantity === 1) {
    if (unitPlural.endsWith("s")) return unitPlural.slice(0, -1);
  }
  return unitPlural;
}

type DailyTargets = {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
};

export function formatBehaviorGoal(behavior: Behavior): string | null {
  if (!behavior.goal) return null;

  const goal = behavior.goal;
  const unitPlural =
    behavior.trackingType === "counter"
      ? behavior.trackingUnit || "times"
      : "minutes";

  if (goal.type === "eliminate") {
    return "Eliminate this behavior";
  }

  if (goal.type === "reduceEveryDay") {
    if (goal.target === 0) {
      return "Eliminate this behavior";
    }
    const unit = unitFor(goal.target, unitPlural);
    return `At most ${goal.target} ${unit} daily`;
  }

  if (goal.type === "reduceIndividualDays") {
    const { dailyTargets } = goal as { dailyTargets: DailyTargets };
    const targets = [0, 1, 2, 3, 4, 5, 6].map(
      (d) => dailyTargets[d as keyof DailyTargets]
    );

    const allSame = targets.every((t) => t === targets[0]);
    if (allSame) {
      if (targets[0] === 0) {
        return "Eliminate this behavior";
      }
      const unit = unitFor(targets[0], unitPlural);
      return `At most ${targets[0]} ${unit} daily`;
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

    if (weekdaysAllSame && weekendsAllSame && weekdayTargets[0] !== weekendTargets[0]) {
      const wd = weekdayTargets[0];
      const we = weekendTargets[0];

      const weekdayPart =
        wd === 0
          ? "Eliminate weekdays"
          : `At most ${wd} ${unitFor(wd, unitPlural)} weekdays`;
      const weekendPart =
        we === 0
          ? "Eliminate weekends"
          : `At most ${we} ${unitFor(we, unitPlural)} weekends`;

      return `${weekdayPart}, ${weekendPart}`;
    }

    const counts = new Map<number, number>();
    targets.forEach((t) => counts.set(t, (counts.get(t) || 0) + 1));
    const majority = Array.from(counts.entries()).sort((a, b) => b[1] - a[1])[0];
    if (majority) {
      const [majorityTarget, majorityCount] = majority;
      const exceptionDays: number[] = [];
      targets.forEach((t, idx) => {
        if (t !== majorityTarget) exceptionDays.push(idx);
      });
      if (majorityCount >= 5 && exceptionDays.length > 0 && exceptionDays.length <= 2) {
        const exceptionGroups = new Map<number, number[]>();
        exceptionDays.forEach((idx) => {
          const t = targets[idx];
          const arr = exceptionGroups.get(t) || [];
          arr.push(idx);
          exceptionGroups.set(t, arr);
        });

        const parts: string[] = [];
        Array.from(exceptionGroups.entries()).forEach(([t, dayIdxs]) => {
          const daysLabel = dayIdxs.map((d) => DAY_LABELS[d]).join(", ");
          if (t === 0) {
            parts.push(`Eliminate ${daysLabel}`);
          } else {
            parts.push(`At most ${t} ${unitFor(t, unitPlural)} ${daysLabel}`);
          }
        });

        const majorityPart =
          majorityTarget === 0
            ? "Eliminate all other days"
            : `At most ${majorityTarget} ${unitFor(majorityTarget, unitPlural)} all other days`;

        parts.push(majorityPart);
        return parts.join("; ");
      }
    }

    const groups = new Map<number, number[]>();
    targets.forEach((t, idx) => {
      const arr = groups.get(t) || [];
      arr.push(idx);
      groups.set(t, arr);
    });

    const groupEntries = Array.from(groups.entries()).sort((a, b) => a[0] - b[0]);

    const MAX_GROUPS = 3;
    const parts: string[] = [];

    groupEntries.slice(0, MAX_GROUPS).forEach(([target, dayIdxs]) => {
      const daysLabel = dayIdxs.map((d) => DAY_LABELS[d]).join(", ");
      if (target === 0) {
        parts.push(`Eliminate ${daysLabel}`);
      } else {
        const unit = unitFor(target, unitPlural);
        parts.push(`At most ${target} ${unit} ${daysLabel}`);
      }
    });

    if (groupEntries.length > MAX_GROUPS) {
      parts.push("other days");
    }

    return parts.join("; ");
  }

  return null;
}

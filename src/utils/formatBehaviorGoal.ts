import { Behavior } from "../schemas";
import { Goal } from "../schemas/goal";
import { getScaleLabel } from "./behaviorData";

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

/**
 * A window's end is exclusive, so "00:00" means "up to midnight" rather than
 * "at 00:00" — spelling it out avoids a range that reads as though it runs
 * backwards ("10:00–00:00").
 */
function formatWindowTime(time: string): string {
  return time === "00:00" ? "midnight" : time;
}

type ContainWindow = { dayOfWeek: number; startTime: string; endTime: string };

/**
 * Renders contain windows grouped by time range rather than one entry per day,
 * so the common "same hours every day" goal reads as "10:00–midnight, every day"
 * instead of the same range repeated seven times. Groups keep week order (Sun
 * first), matching DAY_LABELS.
 */
function formatContainWindows(
  windows: ContainWindow[],
  dayLabels: Record<number, string>,
): string {
  const byRange = new Map<string, number[]>();
  for (const w of [...windows].sort((a, b) => a.dayOfWeek - b.dayOfWeek)) {
    const range = `${formatWindowTime(w.startTime)}–${formatWindowTime(w.endTime)}`;
    const days = byRange.get(range);
    if (days) {
      if (!days.includes(w.dayOfWeek)) days.push(w.dayOfWeek);
    } else {
      byRange.set(range, [w.dayOfWeek]);
    }
  }

  const parts = [...byRange.entries()].map(([range, days]) => {
    if (days.length === 7) return `${range}, every day`;
    const labels = days.map((d) => dayLabels[d] || `Day ${d}`).join(", ");
    return `${labels} ${range}`;
  });

  return `Only ${parts.join(", ")}`;
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

export function formatBehaviorGoal(
  behavior: Behavior,
  goal?: Goal | null
): string | null {
  const effectiveGoal = goal ?? (behavior.goal as Goal | null | undefined);
  if (!effectiveGoal) return null;
  const isScale = behavior.trackingType === "scale";
  const unitPlural = isScale
    ? "level"
    : behavior.trackingType === "counter"
      ? behavior.trackingUnit || "times"
      : "minutes";
  return formatRichGoal(effectiveGoal, unitPlural, isScale);
}

// Original rich formatter, now factored so we can reuse with or without units
function formatRichGoal(
  goal: NonNullable<Behavior["goal"]>,
  unitPlural: string,
  isScale: boolean = false,
): string | null {
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

  const formatTarget = (target: number): string => {
    if (isScale) return getScaleLabel(target);
    return `${target} ${unitFor(target, unitPlural)}`;
  };

  if (goal.type === "eliminate") {
    return "Eliminate";
  }

  if (goal.type === "reduceEveryDay") {
    if (goal.target === 0) {
      return "Eliminate";
    }
    if (isScale) return formatTarget(goal.target);
    return `At most ${formatTarget(goal.target)} daily`;
  }

  if (goal.type === "contain") {
    const { allowedWindows } = goal as { allowedWindows: ContainWindow[] };
    if (allowedWindows.length === 0) return "Eliminate";
    return formatContainWindows(allowedWindows, DAY_LABELS);
  }

  if (goal.type === "reduceIndividualDays") {
    const { dailyTargets } = goal as { dailyTargets: DailyTargets };
    const targets = [0, 1, 2, 3, 4, 5, 6].map(
      (d) => dailyTargets[d as keyof DailyTargets]
    );

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
    const weekdaysAllSame = weekdayTargets.every(
      (t) => t === weekdayTargets[0]
    );
    const weekendsAllSame = weekendTargets.every(
      (t) => t === weekendTargets[0]
    );

    if (
      weekdaysAllSame &&
      weekendsAllSame &&
      weekdayTargets[0] !== weekendTargets[0]
    ) {
      const wd = weekdayTargets[0];
      const we = weekendTargets[0];

      const weekdayPart =
        wd === 0
          ? "Eliminate weekdays"
          : `At most ${formatTarget(wd)} weekdays`;
      const weekendPart =
        we === 0
          ? "Eliminate weekends"
          : `At most ${formatTarget(we)} weekends`;

      return `${weekdayPart}, ${weekendPart}`;
    }

    const counts = new Map<number, number>();
    targets.forEach((t) => counts.set(t, (counts.get(t) || 0) + 1));
    const majority = Array.from(counts.entries()).sort(
      (a, b) => b[1] - a[1]
    )[0];
    if (majority) {
      const [majorityTarget, majorityCount] = majority;
      const exceptionDays: number[] = [];
      targets.forEach((t, idx) => {
        if (t !== majorityTarget) exceptionDays.push(idx);
      });
      if (
        majorityCount >= 5 &&
        exceptionDays.length > 0 &&
        exceptionDays.length <= 2
      ) {
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
            parts.push(`At most ${formatTarget(t)} ${daysLabel}`);
          }
        });

        const majorityPart =
          majorityTarget === 0
            ? "Eliminate all other days"
            : `At most ${formatTarget(majorityTarget)} all other days`;

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

    const groupEntries = Array.from(groups.entries()).sort(
      (a, b) => a[0] - b[0]
    );

    const MAX_GROUPS = 3;
    const parts: string[] = [];

    groupEntries.slice(0, MAX_GROUPS).forEach(([target, dayIdxs]) => {
      const daysLabel = dayIdxs.map((d) => DAY_LABELS[d]).join(", ");
      if (target === 0) {
        parts.push(`Eliminate ${daysLabel}`);
      } else {
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

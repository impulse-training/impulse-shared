import { BehaviorStateGoalType } from "../schemas/behavior";
import { MilestoneRung } from "../schemas/milestoneAchievement";
export declare function buildLadder(goalType: BehaviorStateGoalType, customRungs?: MilestoneRung[]): MilestoneRung[];
/**
 * The ladder an experiment card shows: the behavior's rungs up to and
 * including the experiment's target, with the target itself as the final rung
 * (added when it isn't already a rung, so a 21-day target still gets a flag).
 */
export declare function buildExperimentLadder(goalType: BehaviorStateGoalType, customRungs: MilestoneRung[] | undefined, targetDays: number): MilestoneRung[];
export declare function computeMilestoneProgress(currentStreakDays: number, ladder: MilestoneRung[]): {
    lastAchievedRung: MilestoneRung | null;
    nextRung: MilestoneRung | null;
};

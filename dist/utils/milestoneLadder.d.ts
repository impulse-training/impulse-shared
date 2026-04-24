import { BehaviorStateGoalType } from "../schemas/behavior";
import { MilestoneRung } from "../schemas/milestoneAchievement";
export declare function buildLadder(goalType: BehaviorStateGoalType, customRungs?: MilestoneRung[]): MilestoneRung[];
export declare function computeMilestoneProgress(currentStreakDays: number, ladder: MilestoneRung[]): {
    lastAchievedRung: MilestoneRung | null;
    nextRung: MilestoneRung | null;
};

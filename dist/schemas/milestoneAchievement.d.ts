import { z } from "zod";
export declare const milestoneRungSchema: z.ZodObject<{
    days: z.ZodNumber;
    label: z.ZodString;
    isCustom: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    days: number;
    label: string;
    isCustom?: boolean | undefined;
}, {
    days: number;
    label: string;
    isCustom?: boolean | undefined;
}>;
export type MilestoneRung = z.infer<typeof milestoneRungSchema>;
/**
 * Stored at users/{userId}/behaviors/{behaviorId}/milestoneAchievements/{achievementId}
 *
 * Append-only: once earned, an achievement is permanent — it persists through relapses.
 */
export declare const milestoneAchievementSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    rungDays: z.ZodNumber;
    rungLabel: z.ZodString;
    achievedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    streakLengthAtAchievement: z.ZodNumber;
    reflectionSessionId: z.ZodOptional<z.ZodString>;
    reflectionSummary: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    rungDays: number;
    rungLabel: string;
    achievedAt: import("../types").Timestamp;
    streakLengthAtAchievement: number;
    id?: string | undefined;
    reflectionSessionId?: string | undefined;
    reflectionSummary?: string | undefined;
}, {
    rungDays: number;
    rungLabel: string;
    achievedAt: import("../types").Timestamp;
    streakLengthAtAchievement: number;
    id?: string | undefined;
    reflectionSessionId?: string | undefined;
    reflectionSummary?: string | undefined;
}>;
export type MilestoneAchievement = z.infer<typeof milestoneAchievementSchema>;
export declare const milestoneProgressSchema: z.ZodObject<{
    lastAchievedRung: z.ZodNullable<z.ZodObject<{
        days: z.ZodNumber;
        label: z.ZodString;
        isCustom: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        days: number;
        label: string;
        isCustom?: boolean | undefined;
    }, {
        days: number;
        label: string;
        isCustom?: boolean | undefined;
    }>>;
    nextRung: z.ZodNullable<z.ZodObject<{
        days: z.ZodNumber;
        label: z.ZodString;
        isCustom: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        days: number;
        label: string;
        isCustom?: boolean | undefined;
    }, {
        days: number;
        label: string;
        isCustom?: boolean | undefined;
    }>>;
    currentStreakDays: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    lastAchievedRung: {
        days: number;
        label: string;
        isCustom?: boolean | undefined;
    } | null;
    nextRung: {
        days: number;
        label: string;
        isCustom?: boolean | undefined;
    } | null;
    currentStreakDays: number;
}, {
    lastAchievedRung: {
        days: number;
        label: string;
        isCustom?: boolean | undefined;
    } | null;
    nextRung: {
        days: number;
        label: string;
        isCustom?: boolean | undefined;
    } | null;
    currentStreakDays: number;
}>;
export type MilestoneProgress = z.infer<typeof milestoneProgressSchema>;

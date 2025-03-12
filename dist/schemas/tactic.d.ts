/**
 * Tactic Schemas
 *
 * Defines Yup schemas for tactic data
 */
import * as yup from 'yup';
export declare const tacticTypes: readonly ["task", "affirmation", "image", "video", "link", "supportGroup", "breathingExercise"];
export declare const tacticSchema: yup.ObjectSchema<{
    id: string;
    type: NonNullable<"task" | "affirmation" | "image" | "video" | "link" | "supportGroup" | "breathingExercise" | undefined>;
    title: string;
    description: string | undefined;
    content: string | undefined;
    imageUri: string | undefined;
    videoUri: string | undefined;
    audioUri: string | undefined;
    linkUrl: string | undefined;
    supportGroupId: string | undefined;
    supportGroupName: string | undefined;
    completed: boolean | undefined;
    durationSeconds: number | undefined;
    allBehaviors: boolean | undefined;
    behaviorIds: (string | undefined)[] | undefined;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
    userId: string | undefined;
    isPublic: boolean | undefined;
}, yup.AnyObject, {
    id: undefined;
    type: undefined;
    title: undefined;
    description: undefined;
    content: undefined;
    imageUri: undefined;
    videoUri: undefined;
    audioUri: undefined;
    linkUrl: undefined;
    supportGroupId: undefined;
    supportGroupName: undefined;
    completed: undefined;
    durationSeconds: undefined;
    allBehaviors: undefined;
    behaviorIds: "";
    createdAt: undefined;
    updatedAt: undefined;
    userId: undefined;
    isPublic: undefined;
}, "">;
export declare const validateTactic: (data: unknown) => Promise<{
    content?: string | undefined;
    createdAt?: Date | undefined;
    userId?: string | undefined;
    description?: string | undefined;
    updatedAt?: Date | undefined;
    imageUri?: string | undefined;
    videoUri?: string | undefined;
    audioUri?: string | undefined;
    linkUrl?: string | undefined;
    supportGroupId?: string | undefined;
    supportGroupName?: string | undefined;
    completed?: boolean | undefined;
    durationSeconds?: number | undefined;
    allBehaviors?: boolean | undefined;
    behaviorIds?: (string | undefined)[] | undefined;
    isPublic?: boolean | undefined;
    id: string;
    type: NonNullable<"task" | "affirmation" | "image" | "video" | "link" | "supportGroup" | "breathingExercise" | undefined>;
    title: string;
}>;

/**
 * Tactic Schemas
 *
 * Defines Yup schemas for tactic data
 */
import * as yup from "yup";
export declare const tacticTypes: readonly ["action", "affirmation", "image", "video", "link", "supportGroup", "breathingExercise"];
export declare const tacticSchema: yup.ObjectSchema<{
    id: string | undefined;
    type: NonNullable<"action" | "affirmation" | "image" | "video" | "link" | "supportGroup" | "breathingExercise" | undefined>;
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
    behaviorIds: string[] | undefined;
    userId: string | undefined;
    isPublic: boolean | undefined;
    createdAt: import("..").Timestamp | undefined;
    updatedAt: import("..").Timestamp | undefined;
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
    userId: undefined;
    isPublic: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;

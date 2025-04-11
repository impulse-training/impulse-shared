import * as yup from "yup";
export declare const breathingExerciseTacticSchema: yup.ObjectSchema<{
    id: string | undefined;
    type: "breathingExercise";
    title: string | undefined;
    description: string | undefined;
    durationSeconds: number;
    imageAttachment: {
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
        } | undefined;
        type: NonNullable<"audio" | "image" | "video" | "document" | undefined>;
        uri: string;
        storagePath: string;
        contentType: string;
    } | undefined;
    allBehaviors: boolean | undefined;
    behaviorIds: string[] | undefined;
    routineIds: string[] | undefined;
    ordinal: number;
    userId: string | undefined;
    createdBy: string | undefined;
    supportGroupId: string | undefined;
    isPublic: boolean | undefined;
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
}, yup.AnyObject, {
    id: undefined;
    type: undefined;
    title: undefined;
    description: undefined;
    durationSeconds: undefined;
    imageAttachment: undefined;
    allBehaviors: undefined;
    behaviorIds: "";
    routineIds: "";
    ordinal: undefined;
    userId: undefined;
    createdBy: undefined;
    supportGroupId: undefined;
    isPublic: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type BreathingExerciseTactic = yup.InferType<typeof breathingExerciseTacticSchema>;

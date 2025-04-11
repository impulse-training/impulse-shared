import * as yup from "yup";
export declare const tacticBaseSchema: yup.ObjectSchema<{
    id: string | undefined;
    type: string;
    title: string | undefined;
    description: string | undefined;
    durationSeconds: number | undefined;
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

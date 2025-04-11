import * as yup from "yup";
export declare const videoTacticSchema: yup.ObjectSchema<{
    id: string | undefined;
    type: "video";
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
    };
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
    videoAttachment: {
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
    };
}, yup.AnyObject, never, "">;
export type VideoTactic = yup.InferType<typeof videoTacticSchema>;

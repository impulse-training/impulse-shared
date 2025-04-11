import * as yup from "yup";
export declare const imageTacticSchema: yup.ObjectSchema<{
    id: string | undefined;
    type: "image";
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
}, yup.AnyObject, never, "">;
export type ImageTactic = yup.InferType<typeof imageTacticSchema>;

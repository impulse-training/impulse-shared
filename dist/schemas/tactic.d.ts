/**
 * Tactic Schemas
 *
 * Defines Yup schemas for tactic data
 */
import * as yup from "yup";
export declare const tacticTypes: readonly ["action", "affirmation", "image", "video", "link", "supportGroup", "breathingExercise"];
export declare const tacticSchema: yup.ObjectSchema<{
    id: string | undefined;
    type: NonNullable<"image" | "video" | "action" | "affirmation" | "link" | "supportGroup" | "breathingExercise" | undefined>;
    title: string;
    description: string | undefined;
    content: string | undefined;
    imageAttachment: {
        storagePath?: string | undefined;
        contentType?: string | undefined;
        fileName?: string | undefined;
        sizeBytes?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        durationMs?: number | undefined;
        transcript?: string | undefined;
        metadata?: {} | undefined;
        type: NonNullable<"audio" | "image" | "video" | "document" | undefined>;
        uri: string;
    } | undefined;
    videoAttachment: {
        storagePath?: string | undefined;
        contentType?: string | undefined;
        fileName?: string | undefined;
        sizeBytes?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        durationMs?: number | undefined;
        transcript?: string | undefined;
        metadata?: {} | undefined;
        type: NonNullable<"audio" | "image" | "video" | "document" | undefined>;
        uri: string;
    } | undefined;
    audioAttachment: {
        storagePath?: string | undefined;
        contentType?: string | undefined;
        fileName?: string | undefined;
        sizeBytes?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        durationMs?: number | undefined;
        transcript?: string | undefined;
        metadata?: {} | undefined;
        type: NonNullable<"audio" | "image" | "video" | "document" | undefined>;
        uri: string;
    } | undefined;
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
    imageAttachment: {
        uri: undefined;
        storagePath: undefined;
        contentType: undefined;
        fileName: undefined;
        sizeBytes: undefined;
        type: undefined;
        width: undefined;
        height: undefined;
        durationMs: undefined;
        transcript: undefined;
        metadata: {};
    };
    videoAttachment: {
        uri: undefined;
        storagePath: undefined;
        contentType: undefined;
        fileName: undefined;
        sizeBytes: undefined;
        type: undefined;
        width: undefined;
        height: undefined;
        durationMs: undefined;
        transcript: undefined;
        metadata: {};
    };
    audioAttachment: {
        uri: undefined;
        storagePath: undefined;
        contentType: undefined;
        fileName: undefined;
        sizeBytes: undefined;
        type: undefined;
        width: undefined;
        height: undefined;
        durationMs: undefined;
        transcript: undefined;
        metadata: {};
    };
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

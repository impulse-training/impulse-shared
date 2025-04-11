import * as yup from "yup";
export declare const daySummarySchema: yup.ObjectSchema<{
    id: string | undefined;
    dateString: string;
    userId: string;
    impulseThreadOutcomesById: {
        [x: string]: NonNullable<"success" | "partial" | "setback" | undefined>;
    };
    outcome: "success" | "partial" | "setback" | undefined;
    behaviorDataTotalByBehaviorId: {
        [x: string]: {
            behaviorTrackingUnit?: string | undefined;
            trackingType: NonNullable<"counter" | "timer" | undefined>;
            behaviorId: string;
            behaviorName: string;
            value: number;
            formattedValue: string;
        };
    };
    tacticsUsed: ({
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        userId?: string | undefined;
        description?: string | undefined;
        title?: string | undefined;
        durationSeconds?: number | undefined;
        imageAttachment?: {
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
        allBehaviors?: boolean | undefined;
        behaviorIds?: string[] | undefined;
        routineIds?: string[] | undefined;
        createdBy?: string | undefined;
        supportGroupId?: string | undefined;
        isPublic?: boolean | undefined;
        type: "action";
        ordinal: number;
    } | {
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        userId?: string | undefined;
        description?: string | undefined;
        title?: string | undefined;
        durationSeconds?: number | undefined;
        imageAttachment?: {
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
        allBehaviors?: boolean | undefined;
        behaviorIds?: string[] | undefined;
        routineIds?: string[] | undefined;
        createdBy?: string | undefined;
        supportGroupId?: string | undefined;
        isPublic?: boolean | undefined;
        type: "affirmation";
        ordinal: number;
    } | {
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        userId?: string | undefined;
        description?: string | undefined;
        title?: string | undefined;
        durationSeconds?: number | undefined;
        imageAttachment?: {
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
        allBehaviors?: boolean | undefined;
        behaviorIds?: string[] | undefined;
        routineIds?: string[] | undefined;
        createdBy?: string | undefined;
        supportGroupId?: string | undefined;
        isPublic?: boolean | undefined;
        type: "audio";
        ordinal: number;
        audioAttachment: {
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
    } | {
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        userId?: string | undefined;
        description?: string | undefined;
        title?: string | undefined;
        durationSeconds?: number | undefined;
        allBehaviors?: boolean | undefined;
        behaviorIds?: string[] | undefined;
        routineIds?: string[] | undefined;
        createdBy?: string | undefined;
        supportGroupId?: string | undefined;
        isPublic?: boolean | undefined;
        type: "image";
        ordinal: number;
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
    } | {
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        userId?: string | undefined;
        description?: string | undefined;
        title?: string | undefined;
        durationSeconds?: number | undefined;
        imageAttachment?: {
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
        allBehaviors?: boolean | undefined;
        behaviorIds?: string[] | undefined;
        routineIds?: string[] | undefined;
        createdBy?: string | undefined;
        supportGroupId?: string | undefined;
        isPublic?: boolean | undefined;
        type: "link";
        data: {
            url: string;
        };
        ordinal: number;
    } | {
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        userId?: string | undefined;
        description?: string | undefined;
        title?: string | undefined;
        durationSeconds?: number | undefined;
        imageAttachment?: {
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
        allBehaviors?: boolean | undefined;
        behaviorIds?: string[] | undefined;
        routineIds?: string[] | undefined;
        createdBy?: string | undefined;
        supportGroupId?: string | undefined;
        isPublic?: boolean | undefined;
        type: "supportGroup";
        data: {
            supportGroupDoc?: import("../utils").DocumentReferenceLike<unknown> | undefined;
            defaultMessage: string;
        };
        ordinal: number;
    } | {
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        userId?: string | undefined;
        description?: string | undefined;
        title?: string | undefined;
        durationSeconds?: number | undefined;
        allBehaviors?: boolean | undefined;
        behaviorIds?: string[] | undefined;
        routineIds?: string[] | undefined;
        createdBy?: string | undefined;
        supportGroupId?: string | undefined;
        isPublic?: boolean | undefined;
        type: "video";
        ordinal: number;
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
    } | {
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        userId?: string | undefined;
        description?: string | undefined;
        title?: string | undefined;
        imageAttachment?: {
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
        allBehaviors?: boolean | undefined;
        behaviorIds?: string[] | undefined;
        routineIds?: string[] | undefined;
        createdBy?: string | undefined;
        supportGroupId?: string | undefined;
        isPublic?: boolean | undefined;
        type: "breathingExercise";
        ordinal: number;
        durationSeconds: number;
    })[];
    summaryText: string;
    sharedWithSupportGroupIds: string[];
    sharedWithUserIds: string[] | undefined;
    supportGroupPermissions: {
        [x: string]: {
            tactics: boolean;
            summary: boolean;
            insights: boolean;
            impulseMoments: boolean;
            conversations: boolean;
            behaviorData: boolean;
        };
    };
    recapCompletedAt: import("../types").Timestamp | undefined;
    createdAt: import("../types").Timestamp | undefined;
    updatedAt: import("../types").Timestamp | undefined;
}, yup.AnyObject, {
    id: undefined;
    dateString: undefined;
    userId: undefined;
    impulseThreadOutcomesById: undefined;
    outcome: undefined;
    behaviorDataTotalByBehaviorId: undefined;
    tacticsUsed: never[];
    summaryText: "";
    sharedWithSupportGroupIds: never[];
    sharedWithUserIds: "";
    supportGroupPermissions: undefined;
    recapCompletedAt: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type DaySummary = yup.InferType<typeof daySummarySchema>;
/**
 * Check if a value is a DaySummary
 */
export declare function isValidDaySummary(value: unknown): value is DaySummary;

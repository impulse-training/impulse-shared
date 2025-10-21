import { z } from "zod";
export declare const generalThreadSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    plan: z.ZodOptional<z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
        id: z.ZodString;
        _ref: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        _ref: import("../..").DocumentReferenceLike<unknown>;
    }, {
        id: string;
        _ref: import("../..").DocumentReferenceLike<unknown>;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        type: z.ZodType<"time", z.ZodTypeDef, "time">;
        ordinal: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodOptional<z.ZodBoolean>;
        summary: z.ZodOptional<z.ZodString>;
        tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
        questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>>;
        lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    } & {
        trigger: z.ZodObject<{
            hour: z.ZodNumber;
            minute: z.ZodNumber;
            weekdays: z.ZodArray<z.ZodNumber, "many">;
        }, "strip", z.ZodTypeAny, {
            hour: number;
            minute: number;
            weekdays: number[];
        }, {
            hour: number;
            minute: number;
            weekdays: number[];
        }>;
    }, z.UnknownKeysParam, z.ZodTypeAny, {
        type: "time";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        questions: import("../..").DocumentReferenceLike<unknown>[];
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
    }, {
        type: "time";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
    }>>, z.ZodIntersection<z.ZodObject<{
        id: z.ZodString;
        _ref: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        _ref: import("../..").DocumentReferenceLike<unknown>;
    }, {
        id: string;
        _ref: import("../..").DocumentReferenceLike<unknown>;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        type: z.ZodType<"location", z.ZodTypeDef, "location">;
        ordinal: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodOptional<z.ZodBoolean>;
        summary: z.ZodOptional<z.ZodString>;
        tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
        questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>>;
        lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    } & {
        trigger: z.ZodObject<{
            locationName: z.ZodString;
            triggerType: z.ZodEnum<["arrival", "departure"]>;
            latitude: z.ZodNumber;
            longitude: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            locationName: string;
            triggerType: "arrival" | "departure";
            latitude: number;
            longitude: number;
        }, {
            locationName: string;
            triggerType: "arrival" | "departure";
            latitude: number;
            longitude: number;
        }>;
    }, z.UnknownKeysParam, z.ZodTypeAny, {
        type: "location";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        questions: import("../..").DocumentReferenceLike<unknown>[];
        trigger: {
            locationName: string;
            triggerType: "arrival" | "departure";
            latitude: number;
            longitude: number;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
    }, {
        type: "location";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        trigger: {
            locationName: string;
            triggerType: "arrival" | "departure";
            latitude: number;
            longitude: number;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
    }>>, z.ZodIntersection<z.ZodObject<{
        id: z.ZodString;
        _ref: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        _ref: import("../..").DocumentReferenceLike<unknown>;
    }, {
        id: string;
        _ref: import("../..").DocumentReferenceLike<unknown>;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        type: z.ZodType<"recap", z.ZodTypeDef, "recap">;
        ordinal: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodOptional<z.ZodBoolean>;
        summary: z.ZodOptional<z.ZodString>;
        tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
        questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>>;
        lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    } & {
        trigger: z.ZodObject<{
            hour: z.ZodNumber;
            minute: z.ZodNumber;
            weekdays: z.ZodArray<z.ZodNumber, "many">;
        }, "strip", z.ZodTypeAny, {
            hour: number;
            minute: number;
            weekdays: number[];
        }, {
            hour: number;
            minute: number;
            weekdays: number[];
        }>;
        questionIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    }, z.UnknownKeysParam, z.ZodTypeAny, {
        type: "recap";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        questions: import("../..").DocumentReferenceLike<unknown>[];
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
        questionIds: string[];
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
    }, {
        type: "recap";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
        questionIds?: string[] | undefined;
    }>>]>>;
    date: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    userId: z.ZodString;
    mode: z.ZodDefault<z.ZodEnum<["text", "voice"]>>;
    isDraft: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    suggestedTactics: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
        replyTactic: z.ZodOptional<z.ZodObject<{
            tactic: z.ZodAny;
            currentStepIndex: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            currentStepIndex: number;
            tactic?: any;
        }, {
            currentStepIndex: number;
            tactic?: any;
        }>>;
    } & {
        type: z.ZodLiteral<"suggested_tactics">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            tactics: z.ZodArray<z.ZodObject<{
                tacticPath: z.ZodString;
                reason: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                tacticPath: string;
                reason?: string | undefined;
            }, {
                tacticPath: string;
                reason?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            tactics: {
                tacticPath: string;
                reason?: string | undefined;
            }[];
        }, {
            tactics: {
                tacticPath: string;
                reason?: string | undefined;
            }[];
        }>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "suggested_tactics";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            tactics: {
                tacticPath: string;
                reason?: string | undefined;
            }[];
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "suggested_tactics";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            tactics: {
                tacticPath: string;
                reason?: string | undefined;
            }[];
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>>;
    suggestedTacticsStartedRefreshingAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    emojiId: z.ZodNullable<z.ZodObject<{
        emoji: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        emoji: string;
    }, {
        name: string;
        emoji: string;
    }>>;
    trackingLogsById: z.ZodRecord<z.ZodString, z.ZodAny>;
    summaryData: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<["impulse", "general", "onboarding", "recap", "behavior", "dayRecap", "timePlan", "locationPlan", "adjustment"]>;
        tacticsByTitle: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny, "many">>;
        behaviorsByName: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny, "many">>;
        outcomeLogs: z.ZodArray<z.ZodAny, "many">;
        daySummaryLog: z.ZodOptional<z.ZodAny>;
        questionLogs: z.ZodArray<z.ZodAny, "many">;
        firstMessageLog: z.ZodOptional<z.ZodAny>;
        firstCallLog: z.ZodOptional<z.ZodAny>;
        hasContent: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
        tacticsByTitle: Record<string, any[]>;
        behaviorsByName: Record<string, any[]>;
        outcomeLogs: any[];
        questionLogs: any[];
        hasContent: boolean;
        daySummaryLog?: any;
        firstMessageLog?: any;
        firstCallLog?: any;
    }, {
        type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
        tacticsByTitle: Record<string, any[]>;
        behaviorsByName: Record<string, any[]>;
        outcomeLogs: any[];
        questionLogs: any[];
        hasContent: boolean;
        daySummaryLog?: any;
        firstMessageLog?: any;
        firstCallLog?: any;
    }>>;
    defaultSystemPrompt: z.ZodOptional<z.ZodString>;
    debriefSystemPrompt: z.ZodOptional<z.ZodString>;
    summary: z.ZodOptional<z.ZodString>;
    summaryRequestedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    summarizedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    strategyDoc: z.ZodOptional<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>>;
    agentConnectedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    allQuestionsAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    archiveAfter: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    sharingLevels: z.ZodOptional<z.ZodObject<{
        impulseMoment: z.ZodBoolean;
        plansUsed: z.ZodBoolean;
        outcome: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        outcome: boolean;
        impulseMoment: boolean;
        plansUsed: boolean;
    }, {
        outcome: boolean;
        impulseMoment: boolean;
        plansUsed: boolean;
    }>>;
    sharedWithUserIds: z.ZodArray<z.ZodString, "many">;
    sharedWithSupportGroups: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
    openAfter: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    firstOpenedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    responseStartedProcessingAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    assistantId: z.ZodOptional<z.ZodString>;
    assistantThreadId: z.ZodOptional<z.ZodString>;
    currentCall: z.ZodOptional<z.ZodObject<{
        logId: z.ZodString;
        token: z.ZodString;
        livekitRoomName: z.ZodString;
        livekitSessionId: z.ZodString;
        startedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        agentConnectedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        endedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        status: z.ZodEnum<["connecting", "connected", "ended"]>;
    }, "strip", z.ZodTypeAny, {
        status: "connecting" | "connected" | "ended";
        livekitSessionId: string;
        livekitRoomName: string;
        token: string;
        logId: string;
        startedAt: import("../../types").Timestamp;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
    }, {
        status: "connecting" | "connected" | "ended";
        livekitSessionId: string;
        livekitRoomName: string;
        token: string;
        logId: string;
        startedAt: import("../../types").Timestamp;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
    }>>;
} & {
    type: z.ZodLiteral<"general">;
}, "strip", z.ZodTypeAny, {
    type: "general";
    date: import("../../types").Timestamp;
    userId: string;
    dateString: string;
    mode: "text" | "voice";
    trackingLogsById: Record<string, any>;
    sharedWithUserIds: string[];
    emojiId: {
        name: string;
        emoji: string;
    } | null;
    isDraft: boolean;
    archiveAfter: import("../../types").Timestamp;
    sharedWithSupportGroups: import("../..").DocumentReferenceLike<unknown>[];
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    agentConnectedAt?: import("../../types").Timestamp | undefined;
    summary?: string | undefined;
    plan?: ({
        id: string;
        _ref: import("../..").DocumentReferenceLike<unknown>;
    } & {
        type: "time";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        questions: import("../..").DocumentReferenceLike<unknown>[];
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
    }) | ({
        id: string;
        _ref: import("../..").DocumentReferenceLike<unknown>;
    } & {
        type: "location";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        questions: import("../..").DocumentReferenceLike<unknown>[];
        trigger: {
            locationName: string;
            triggerType: "arrival" | "departure";
            latitude: number;
            longitude: number;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
    }) | ({
        id: string;
        _ref: import("../..").DocumentReferenceLike<unknown>;
    } & {
        type: "recap";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        questions: import("../..").DocumentReferenceLike<unknown>[];
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
        questionIds: string[];
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
    }) | undefined;
    tacticsByPath?: Record<string, any> | undefined;
    suggestedTactics?: {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "suggested_tactics";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            tactics: {
                tacticPath: string;
                reason?: string | undefined;
            }[];
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    } | undefined;
    suggestedTacticsStartedRefreshingAt?: import("../../types").Timestamp | undefined;
    summaryData?: {
        type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
        tacticsByTitle: Record<string, any[]>;
        behaviorsByName: Record<string, any[]>;
        outcomeLogs: any[];
        questionLogs: any[];
        hasContent: boolean;
        daySummaryLog?: any;
        firstMessageLog?: any;
        firstCallLog?: any;
    } | undefined;
    defaultSystemPrompt?: string | undefined;
    debriefSystemPrompt?: string | undefined;
    summaryRequestedAt?: import("../../types").Timestamp | undefined;
    summarizedAt?: import("../../types").Timestamp | undefined;
    strategyDoc?: import("../..").DocumentReferenceLike<unknown> | undefined;
    allQuestionsAnsweredAt?: import("../../types").Timestamp | undefined;
    sharingLevels?: {
        outcome: boolean;
        impulseMoment: boolean;
        plansUsed: boolean;
    } | undefined;
    openAfter?: import("../../types").Timestamp | undefined;
    firstOpenedAt?: import("../../types").Timestamp | undefined;
    responseStartedProcessingAt?: import("../../types").Timestamp | undefined;
    assistantId?: string | undefined;
    assistantThreadId?: string | undefined;
    currentCall?: {
        status: "connecting" | "connected" | "ended";
        livekitSessionId: string;
        livekitRoomName: string;
        token: string;
        logId: string;
        startedAt: import("../../types").Timestamp;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
    } | undefined;
}, {
    type: "general";
    date: import("../../types").Timestamp;
    userId: string;
    dateString: string;
    trackingLogsById: Record<string, any>;
    sharedWithUserIds: string[];
    emojiId: {
        name: string;
        emoji: string;
    } | null;
    archiveAfter: import("../../types").Timestamp;
    sharedWithSupportGroups: import("../..").DocumentReferenceLike<unknown>[];
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    mode?: "text" | "voice" | undefined;
    agentConnectedAt?: import("../../types").Timestamp | undefined;
    summary?: string | undefined;
    plan?: ({
        id: string;
        _ref: import("../..").DocumentReferenceLike<unknown>;
    } & {
        type: "time";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
    }) | ({
        id: string;
        _ref: import("../..").DocumentReferenceLike<unknown>;
    } & {
        type: "location";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        trigger: {
            locationName: string;
            triggerType: "arrival" | "departure";
            latitude: number;
            longitude: number;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
    }) | ({
        id: string;
        _ref: import("../..").DocumentReferenceLike<unknown>;
    } & {
        type: "recap";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
        questionIds?: string[] | undefined;
    }) | undefined;
    tacticsByPath?: Record<string, any> | undefined;
    isDraft?: boolean | undefined;
    suggestedTactics?: {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "suggested_tactics";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            tactics: {
                tacticPath: string;
                reason?: string | undefined;
            }[];
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    } | undefined;
    suggestedTacticsStartedRefreshingAt?: import("../../types").Timestamp | undefined;
    summaryData?: {
        type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
        tacticsByTitle: Record<string, any[]>;
        behaviorsByName: Record<string, any[]>;
        outcomeLogs: any[];
        questionLogs: any[];
        hasContent: boolean;
        daySummaryLog?: any;
        firstMessageLog?: any;
        firstCallLog?: any;
    } | undefined;
    defaultSystemPrompt?: string | undefined;
    debriefSystemPrompt?: string | undefined;
    summaryRequestedAt?: import("../../types").Timestamp | undefined;
    summarizedAt?: import("../../types").Timestamp | undefined;
    strategyDoc?: import("../..").DocumentReferenceLike<unknown> | undefined;
    allQuestionsAnsweredAt?: import("../../types").Timestamp | undefined;
    sharingLevels?: {
        outcome: boolean;
        impulseMoment: boolean;
        plansUsed: boolean;
    } | undefined;
    openAfter?: import("../../types").Timestamp | undefined;
    firstOpenedAt?: import("../../types").Timestamp | undefined;
    responseStartedProcessingAt?: import("../../types").Timestamp | undefined;
    assistantId?: string | undefined;
    assistantThreadId?: string | undefined;
    currentCall?: {
        status: "connecting" | "connected" | "ended";
        livekitSessionId: string;
        livekitRoomName: string;
        token: string;
        logId: string;
        startedAt: import("../../types").Timestamp;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
    } | undefined;
}>;
export type GeneralThread = z.infer<typeof generalThreadSchema>;

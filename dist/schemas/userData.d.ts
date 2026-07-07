import { z } from "zod";
export declare const userDataSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    lastActive: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    lastLogin: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    lastVisit: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    hasEverEngaged: z.ZodOptional<z.ZodBoolean>;
    recoveryKeyHash: z.ZodOptional<z.ZodString>;
    defaultSessionMode: z.ZodDefault<z.ZodEnum<["text", "voice"]>>;
    llmProvider: z.ZodOptional<z.ZodEnum<["openai", "anthropic"]>>;
    createdViaSimulator: z.ZodOptional<z.ZodBoolean>;
    role: z.ZodDefault<z.ZodEnum<["user", "coach", "support"]>>;
    notificationsEnabled: z.ZodDefault<z.ZodBoolean>;
    notifyOnSignUp: z.ZodOptional<z.ZodBoolean>;
    notifyOnCoachingApplication: z.ZodOptional<z.ZodBoolean>;
    expoPushToken: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    voipPushToken: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fcmCallToken: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    notificationSettings: z.ZodDefault<z.ZodObject<{
        debriefReminders: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        debriefReminders: boolean;
    }, {
        debriefReminders?: boolean | undefined;
    }>>;
    appVersion: z.ZodOptional<z.ZodString>;
    device: z.ZodOptional<z.ZodObject<{
        osName: z.ZodOptional<z.ZodString>;
        osVersion: z.ZodOptional<z.ZodString>;
        brand: z.ZodOptional<z.ZodString>;
        manufacturer: z.ZodOptional<z.ZodString>;
        modelName: z.ZodOptional<z.ZodString>;
        modelId: z.ZodOptional<z.ZodString>;
        deviceName: z.ZodOptional<z.ZodString>;
        isDevice: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        osVersion?: string | undefined;
        osName?: string | undefined;
        brand?: string | undefined;
        manufacturer?: string | undefined;
        modelName?: string | undefined;
        modelId?: string | undefined;
        deviceName?: string | undefined;
        isDevice?: boolean | undefined;
    }, {
        osVersion?: string | undefined;
        osName?: string | undefined;
        brand?: string | undefined;
        manufacturer?: string | undefined;
        modelName?: string | undefined;
        modelId?: string | undefined;
        deviceName?: string | undefined;
        isDevice?: boolean | undefined;
    }>>;
    isAppEnabled: z.ZodOptional<z.ZodBoolean>;
    deletionRequestedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    deletionRequestedBy: z.ZodOptional<z.ZodEnum<["user", "admin", "system"]>>;
    theme: z.ZodDefault<z.ZodEnum<["light", "dark", "system"]>>;
    weekStartsOn: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<0>, z.ZodLiteral<1>]>>;
    recap: z.ZodOptional<z.ZodObject<{
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
        reminderTime: z.ZodOptional<z.ZodObject<{
            hour: z.ZodNumber;
            minute: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            hour: number;
            minute: number;
        }, {
            hour: number;
            minute: number;
        }>>;
    }, "strip", z.ZodTypeAny, {
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
        reminderTime?: {
            hour: number;
            minute: number;
        } | undefined;
    }, {
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
        reminderTime?: {
            hour: number;
            minute: number;
        } | undefined;
    }>>;
    isImpulseTeam: z.ZodOptional<z.ZodBoolean>;
    addToAccountabilitySupportGroups: z.ZodOptional<z.ZodBoolean>;
    hasSetupExperiment: z.ZodOptional<z.ZodBoolean>;
    supportGroupSignupCompletedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    markedAsEligibleAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    calendarBehaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    isCoach: z.ZodOptional<z.ZodBoolean>;
    latestSupportGroupMessages: z.ZodOptional<z.ZodRecord<z.ZodEnum<["system", "social", "coach", "onboarding", "alignment"]>, z.ZodObject<{
        senderId: z.ZodString;
        message: z.ZodString;
        sentAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        sentAt: import("../types").Timestamp;
        senderId: string;
    }, {
        message: string;
        sentAt: import("../types").Timestamp;
        senderId: string;
    }>>>;
    country: z.ZodOptional<z.ZodString>;
    recoveryKeySaved: z.ZodOptional<z.ZodBoolean>;
    disclaimerAcceptedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    migrations: z.ZodOptional<z.ZodObject<{
        recommendedLibraryDone: z.ZodOptional<z.ZodBoolean>;
        starterLibraryDone: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        recommendedLibraryDone?: boolean | undefined;
        starterLibraryDone?: boolean | undefined;
    }, {
        recommendedLibraryDone?: boolean | undefined;
        starterLibraryDone?: boolean | undefined;
    }>>;
    firsts: z.ZodOptional<z.ZodRecord<z.ZodEnum<["impulseButton", "triedTactic", "voiceSession", "resistedUrge"]>, z.ZodObject<{
        achievedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
        sessionId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        achievedAt: import("../types").Timestamp;
        sessionId?: string | undefined;
    }, {
        achievedAt: import("../types").Timestamp;
        sessionId?: string | undefined;
    }>>>;
    seenRoadmapItemIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    roadmapNotificationsEnabled: z.ZodOptional<z.ZodBoolean>;
    zaraVoiceId: z.ZodOptional<z.ZodEnum<["alloy", "shimmer", "echo"]>>;
    zaraCoachId: z.ZodOptional<z.ZodString>;
    zaraSlot: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        dayOfWeek: z.ZodNumber;
        hour: z.ZodNumber;
        minute: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        dayOfWeek: number;
        hour: number;
        minute: number;
    }, {
        dayOfWeek: number;
        hour: number;
        minute: number;
    }>>>;
    coachAvailability: z.ZodOptional<z.ZodArray<z.ZodObject<{
        dayOfWeek: z.ZodNumber;
        startTime: z.ZodString;
        endTime: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        dayOfWeek: number;
        startTime: string;
        endTime: string;
    }, {
        dayOfWeek: number;
        startTime: string;
        endTime: string;
    }>, "many">>;
    concurrentUserAccountIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    pseudonym: z.ZodOptional<z.ZodString>;
    emojiId: z.ZodOptional<z.ZodObject<{
        emoji: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        emoji: string;
    }, {
        emoji: string;
    }>>;
    onboardingCompleted: z.ZodOptional<z.ZodBoolean>;
    behaviorNames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    coachInstructions: z.ZodOptional<z.ZodString>;
    ongoingSupport: z.ZodOptional<z.ZodObject<{
        status: z.ZodDefault<z.ZodEnum<["requested", "approved", "declined"]>>;
        requestedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
        resolvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        resolvedByCoachId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "declined" | "requested" | "approved";
        requestedAt: import("../types").Timestamp;
        resolvedAt?: import("../types").Timestamp | undefined;
        resolvedByCoachId?: string | undefined;
    }, {
        requestedAt: import("../types").Timestamp;
        status?: "declined" | "requested" | "approved" | undefined;
        resolvedAt?: import("../types").Timestamp | undefined;
        resolvedByCoachId?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    role: "user" | "coach" | "support";
    theme: "system" | "light" | "dark";
    notificationsEnabled: boolean;
    defaultSessionMode: "text" | "voice";
    expoPushToken: string | null;
    voipPushToken: string | null;
    fcmCallToken: string | null;
    notificationSettings: {
        debriefReminders: boolean;
    };
    weekStartsOn: 0 | 1;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    country?: string | undefined;
    appVersion?: string | undefined;
    behaviorNames?: string[] | undefined;
    emojiId?: {
        emoji: string;
    } | undefined;
    recap?: {
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
        reminderTime?: {
            hour: number;
            minute: number;
        } | undefined;
    } | undefined;
    lastActive?: import("../types").Timestamp | undefined;
    lastLogin?: import("../types").Timestamp | undefined;
    lastVisit?: import("../types").Timestamp | undefined;
    hasEverEngaged?: boolean | undefined;
    recoveryKeyHash?: string | undefined;
    llmProvider?: "openai" | "anthropic" | undefined;
    createdViaSimulator?: boolean | undefined;
    notifyOnSignUp?: boolean | undefined;
    notifyOnCoachingApplication?: boolean | undefined;
    device?: {
        osVersion?: string | undefined;
        osName?: string | undefined;
        brand?: string | undefined;
        manufacturer?: string | undefined;
        modelName?: string | undefined;
        modelId?: string | undefined;
        deviceName?: string | undefined;
        isDevice?: boolean | undefined;
    } | undefined;
    isAppEnabled?: boolean | undefined;
    deletionRequestedAt?: import("../types").Timestamp | undefined;
    deletionRequestedBy?: "user" | "system" | "admin" | undefined;
    isImpulseTeam?: boolean | undefined;
    addToAccountabilitySupportGroups?: boolean | undefined;
    hasSetupExperiment?: boolean | undefined;
    supportGroupSignupCompletedAt?: import("../types").Timestamp | undefined;
    markedAsEligibleAt?: import("../types").Timestamp | undefined;
    calendarBehaviorIds?: string[] | undefined;
    isCoach?: boolean | undefined;
    latestSupportGroupMessages?: Partial<Record<"onboarding" | "system" | "coach" | "alignment" | "social", {
        message: string;
        sentAt: import("../types").Timestamp;
        senderId: string;
    }>> | undefined;
    recoveryKeySaved?: boolean | undefined;
    disclaimerAcceptedAt?: import("../types").Timestamp | undefined;
    migrations?: {
        recommendedLibraryDone?: boolean | undefined;
        starterLibraryDone?: boolean | undefined;
    } | undefined;
    firsts?: Partial<Record<"impulseButton" | "triedTactic" | "voiceSession" | "resistedUrge", {
        achievedAt: import("../types").Timestamp;
        sessionId?: string | undefined;
    }>> | undefined;
    seenRoadmapItemIds?: string[] | undefined;
    roadmapNotificationsEnabled?: boolean | undefined;
    zaraVoiceId?: "alloy" | "shimmer" | "echo" | undefined;
    zaraCoachId?: string | undefined;
    zaraSlot?: {
        dayOfWeek: number;
        hour: number;
        minute: number;
    } | null | undefined;
    coachAvailability?: {
        dayOfWeek: number;
        startTime: string;
        endTime: string;
    }[] | undefined;
    concurrentUserAccountIds?: string[] | undefined;
    pseudonym?: string | undefined;
    onboardingCompleted?: boolean | undefined;
    coachInstructions?: string | undefined;
    ongoingSupport?: {
        status: "declined" | "requested" | "approved";
        requestedAt: import("../types").Timestamp;
        resolvedAt?: import("../types").Timestamp | undefined;
        resolvedByCoachId?: string | undefined;
    } | undefined;
}, {
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    country?: string | undefined;
    appVersion?: string | undefined;
    behaviorNames?: string[] | undefined;
    emojiId?: {
        emoji: string;
    } | undefined;
    recap?: {
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
        reminderTime?: {
            hour: number;
            minute: number;
        } | undefined;
    } | undefined;
    role?: "user" | "coach" | "support" | undefined;
    theme?: "system" | "light" | "dark" | undefined;
    notificationsEnabled?: boolean | undefined;
    lastActive?: import("../types").Timestamp | undefined;
    lastLogin?: import("../types").Timestamp | undefined;
    lastVisit?: import("../types").Timestamp | undefined;
    hasEverEngaged?: boolean | undefined;
    recoveryKeyHash?: string | undefined;
    defaultSessionMode?: "text" | "voice" | undefined;
    llmProvider?: "openai" | "anthropic" | undefined;
    createdViaSimulator?: boolean | undefined;
    notifyOnSignUp?: boolean | undefined;
    notifyOnCoachingApplication?: boolean | undefined;
    expoPushToken?: string | null | undefined;
    voipPushToken?: string | null | undefined;
    fcmCallToken?: string | null | undefined;
    notificationSettings?: {
        debriefReminders?: boolean | undefined;
    } | undefined;
    device?: {
        osVersion?: string | undefined;
        osName?: string | undefined;
        brand?: string | undefined;
        manufacturer?: string | undefined;
        modelName?: string | undefined;
        modelId?: string | undefined;
        deviceName?: string | undefined;
        isDevice?: boolean | undefined;
    } | undefined;
    isAppEnabled?: boolean | undefined;
    deletionRequestedAt?: import("../types").Timestamp | undefined;
    deletionRequestedBy?: "user" | "system" | "admin" | undefined;
    weekStartsOn?: 0 | 1 | undefined;
    isImpulseTeam?: boolean | undefined;
    addToAccountabilitySupportGroups?: boolean | undefined;
    hasSetupExperiment?: boolean | undefined;
    supportGroupSignupCompletedAt?: import("../types").Timestamp | undefined;
    markedAsEligibleAt?: import("../types").Timestamp | undefined;
    calendarBehaviorIds?: string[] | undefined;
    isCoach?: boolean | undefined;
    latestSupportGroupMessages?: Partial<Record<"onboarding" | "system" | "coach" | "alignment" | "social", {
        message: string;
        sentAt: import("../types").Timestamp;
        senderId: string;
    }>> | undefined;
    recoveryKeySaved?: boolean | undefined;
    disclaimerAcceptedAt?: import("../types").Timestamp | undefined;
    migrations?: {
        recommendedLibraryDone?: boolean | undefined;
        starterLibraryDone?: boolean | undefined;
    } | undefined;
    firsts?: Partial<Record<"impulseButton" | "triedTactic" | "voiceSession" | "resistedUrge", {
        achievedAt: import("../types").Timestamp;
        sessionId?: string | undefined;
    }>> | undefined;
    seenRoadmapItemIds?: string[] | undefined;
    roadmapNotificationsEnabled?: boolean | undefined;
    zaraVoiceId?: "alloy" | "shimmer" | "echo" | undefined;
    zaraCoachId?: string | undefined;
    zaraSlot?: {
        dayOfWeek: number;
        hour: number;
        minute: number;
    } | null | undefined;
    coachAvailability?: {
        dayOfWeek: number;
        startTime: string;
        endTime: string;
    }[] | undefined;
    concurrentUserAccountIds?: string[] | undefined;
    pseudonym?: string | undefined;
    onboardingCompleted?: boolean | undefined;
    coachInstructions?: string | undefined;
    ongoingSupport?: {
        requestedAt: import("../types").Timestamp;
        status?: "declined" | "requested" | "approved" | undefined;
        resolvedAt?: import("../types").Timestamp | undefined;
        resolvedByCoachId?: string | undefined;
    } | undefined;
}>;
export type UserData = z.infer<typeof userDataSchema>;
export declare const isUserData: (value: unknown) => value is UserData;

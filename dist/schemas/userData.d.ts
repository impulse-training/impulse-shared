import { z } from "zod";
/**
 * An optional user-authored reflection that closes the recap, asked AFTER the
 * night's behavior-anchored recap question has run its course.
 *
 * The recap is deliberately focused on the behavior the user is trying to
 * break, which makes it a fairly unsparing ritual by design. This is the one
 * place the user gets to point it somewhere of their own choosing — gratitude,
 * what went well, anything. It is a REFLECTION, not a tracked behavior: there
 * is no streak, goal, or adherence attached to it, which is what keeps it on
 * the right side of "Impulse only tracks behaviors you want to do less of".
 *
 * `prompt` is the user's own words and is handed to the assistant verbatim as
 * the beat's frame — the AI runs the conversation but never authors the
 * question.
 */
declare const recapClosingReflectionSchema: z.ZodObject<{
    enabled: z.ZodDefault<z.ZodBoolean>;
    prompt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    prompt?: string | undefined;
}, {
    prompt?: string | undefined;
    enabled?: boolean | undefined;
}>;
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
    tacticPreferences: z.ZodOptional<z.ZodObject<{
        suppressedTacticIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        pinnedTacticIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        suppressedMixOptionIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        suppressedGoToKeys: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        suppressedTacticIds?: string[] | undefined;
        pinnedTacticIds?: string[] | undefined;
        suppressedMixOptionIds?: string[] | undefined;
        suppressedGoToKeys?: string[] | undefined;
    }, {
        suppressedTacticIds?: string[] | undefined;
        pinnedTacticIds?: string[] | undefined;
        suppressedMixOptionIds?: string[] | undefined;
        suppressedGoToKeys?: string[] | undefined;
    }>>;
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
        nativeVersion: z.ZodOptional<z.ZodString>;
        installSource: z.ZodOptional<z.ZodEnum<["appstore", "testflight", "development", "simulator"]>>;
    }, "strip", z.ZodTypeAny, {
        osVersion?: string | undefined;
        osName?: string | undefined;
        brand?: string | undefined;
        manufacturer?: string | undefined;
        modelName?: string | undefined;
        modelId?: string | undefined;
        deviceName?: string | undefined;
        isDevice?: boolean | undefined;
        nativeVersion?: string | undefined;
        installSource?: "appstore" | "testflight" | "development" | "simulator" | undefined;
    }, {
        osVersion?: string | undefined;
        osName?: string | undefined;
        brand?: string | undefined;
        manufacturer?: string | undefined;
        modelName?: string | undefined;
        modelId?: string | undefined;
        deviceName?: string | undefined;
        isDevice?: boolean | undefined;
        nativeVersion?: string | undefined;
        installSource?: "appstore" | "testflight" | "development" | "simulator" | undefined;
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
        }, "strip", z.ZodTypeAny, {
            hour: number;
            minute: number;
        }, {
            hour: number;
            minute: number;
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
        paused: z.ZodOptional<z.ZodBoolean>;
        closingReflection: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodDefault<z.ZodBoolean>;
            prompt: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            enabled: boolean;
            prompt?: string | undefined;
        }, {
            prompt?: string | undefined;
            enabled?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        trigger: {
            hour: number;
            minute: number;
        };
        paused?: boolean | undefined;
        reminderTime?: {
            hour: number;
            minute: number;
        } | undefined;
        closingReflection?: {
            enabled: boolean;
            prompt?: string | undefined;
        } | undefined;
    }, {
        trigger: {
            hour: number;
            minute: number;
        };
        paused?: boolean | undefined;
        reminderTime?: {
            hour: number;
            minute: number;
        } | undefined;
        closingReflection?: {
            prompt?: string | undefined;
            enabled?: boolean | undefined;
        } | undefined;
    }>>;
    /**
     * protect_next_window — resisted-path containment (see
     * protectNextWindowTaskSchema): once a resisted urge is debriefed and
     * settled, the session turns to protecting the next vulnerable window
     * instead of just closing. The acted path's containment is contain_lapse;
     * this flag governs only the resisted path. Opt-in (default off) while it's
     * dogfooded.
     *
     * `lastOfferedDateString` is the once-per-local-day cap: stamped when the
     * protect_next_window task is actually injected, checked before injecting
     * another. Cap on OFFERS, not completions — a user who said "not now" this
     * morning shouldn't be re-asked tonight.
     */
    protectNextWindow: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        lastOfferedDateString: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
        lastOfferedDateString?: string | undefined;
    }, {
        enabled?: boolean | undefined;
        lastOfferedDateString?: string | undefined;
    }>>;
    isImpulseTeam: z.ZodOptional<z.ZodBoolean>;
    addToAccountabilitySupportGroups: z.ZodOptional<z.ZodBoolean>;
    hasSetupExperiment: z.ZodOptional<z.ZodBoolean>;
    supportGroupSignupCompletedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    markedAsEligibleAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    calendarBehaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    isCoach: z.ZodOptional<z.ZodBoolean>;
    coachWatch: z.ZodOptional<z.ZodObject<{
        notifyOnReturn: z.ZodBoolean;
        coachId: z.ZodString;
        armedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    }, "strip", z.ZodTypeAny, {
        coachId: string;
        notifyOnReturn: boolean;
        armedAt: import("../types").Timestamp;
    }, {
        coachId: string;
        notifyOnReturn: boolean;
        armedAt: import("../types").Timestamp;
    }>>;
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
    aiDataConsent: z.ZodOptional<z.ZodObject<{
        acceptedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
        version: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        acceptedAt: import("../types").Timestamp;
        version: number;
    }, {
        acceptedAt: import("../types").Timestamp;
        version: number;
    }>>;
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
    coachingEnabled: z.ZodOptional<z.ZodBoolean>;
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
        };
        paused?: boolean | undefined;
        reminderTime?: {
            hour: number;
            minute: number;
        } | undefined;
        closingReflection?: {
            enabled: boolean;
            prompt?: string | undefined;
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
    tacticPreferences?: {
        suppressedTacticIds?: string[] | undefined;
        pinnedTacticIds?: string[] | undefined;
        suppressedMixOptionIds?: string[] | undefined;
        suppressedGoToKeys?: string[] | undefined;
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
        nativeVersion?: string | undefined;
        installSource?: "appstore" | "testflight" | "development" | "simulator" | undefined;
    } | undefined;
    isAppEnabled?: boolean | undefined;
    deletionRequestedAt?: import("../types").Timestamp | undefined;
    deletionRequestedBy?: "user" | "system" | "admin" | undefined;
    protectNextWindow?: {
        enabled: boolean;
        lastOfferedDateString?: string | undefined;
    } | undefined;
    isImpulseTeam?: boolean | undefined;
    addToAccountabilitySupportGroups?: boolean | undefined;
    hasSetupExperiment?: boolean | undefined;
    supportGroupSignupCompletedAt?: import("../types").Timestamp | undefined;
    markedAsEligibleAt?: import("../types").Timestamp | undefined;
    calendarBehaviorIds?: string[] | undefined;
    isCoach?: boolean | undefined;
    coachWatch?: {
        coachId: string;
        notifyOnReturn: boolean;
        armedAt: import("../types").Timestamp;
    } | undefined;
    latestSupportGroupMessages?: Partial<Record<"onboarding" | "system" | "coach" | "alignment" | "social", {
        message: string;
        sentAt: import("../types").Timestamp;
        senderId: string;
    }>> | undefined;
    recoveryKeySaved?: boolean | undefined;
    disclaimerAcceptedAt?: import("../types").Timestamp | undefined;
    aiDataConsent?: {
        acceptedAt: import("../types").Timestamp;
        version: number;
    } | undefined;
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
    coachingEnabled?: boolean | undefined;
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
    role?: "user" | "coach" | "support" | undefined;
    behaviorNames?: string[] | undefined;
    emojiId?: {
        emoji: string;
    } | undefined;
    recap?: {
        trigger: {
            hour: number;
            minute: number;
        };
        paused?: boolean | undefined;
        reminderTime?: {
            hour: number;
            minute: number;
        } | undefined;
        closingReflection?: {
            prompt?: string | undefined;
            enabled?: boolean | undefined;
        } | undefined;
    } | undefined;
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
    tacticPreferences?: {
        suppressedTacticIds?: string[] | undefined;
        pinnedTacticIds?: string[] | undefined;
        suppressedMixOptionIds?: string[] | undefined;
        suppressedGoToKeys?: string[] | undefined;
    } | undefined;
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
        nativeVersion?: string | undefined;
        installSource?: "appstore" | "testflight" | "development" | "simulator" | undefined;
    } | undefined;
    isAppEnabled?: boolean | undefined;
    deletionRequestedAt?: import("../types").Timestamp | undefined;
    deletionRequestedBy?: "user" | "system" | "admin" | undefined;
    weekStartsOn?: 0 | 1 | undefined;
    protectNextWindow?: {
        enabled?: boolean | undefined;
        lastOfferedDateString?: string | undefined;
    } | undefined;
    isImpulseTeam?: boolean | undefined;
    addToAccountabilitySupportGroups?: boolean | undefined;
    hasSetupExperiment?: boolean | undefined;
    supportGroupSignupCompletedAt?: import("../types").Timestamp | undefined;
    markedAsEligibleAt?: import("../types").Timestamp | undefined;
    calendarBehaviorIds?: string[] | undefined;
    isCoach?: boolean | undefined;
    coachWatch?: {
        coachId: string;
        notifyOnReturn: boolean;
        armedAt: import("../types").Timestamp;
    } | undefined;
    latestSupportGroupMessages?: Partial<Record<"onboarding" | "system" | "coach" | "alignment" | "social", {
        message: string;
        sentAt: import("../types").Timestamp;
        senderId: string;
    }>> | undefined;
    recoveryKeySaved?: boolean | undefined;
    disclaimerAcceptedAt?: import("../types").Timestamp | undefined;
    aiDataConsent?: {
        acceptedAt: import("../types").Timestamp;
        version: number;
    } | undefined;
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
    coachingEnabled?: boolean | undefined;
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
export type RecapClosingReflection = z.infer<typeof recapClosingReflectionSchema>;
/**
 * The closing reflection is live only when the user turned it on AND wrote a
 * prompt — an enabled-but-blank config has nothing to ask, so every caller
 * (task writer, close guard, prompt builder) must agree it is off. Returns the
 * trimmed prompt so callers don't each re-trim.
 */
export declare const getActiveClosingReflectionPrompt: (userData: {
    recap?: {
        closingReflection?: RecapClosingReflection;
    };
} | undefined) => string | null;
export declare const isUserData: (value: unknown) => value is UserData;
export {};

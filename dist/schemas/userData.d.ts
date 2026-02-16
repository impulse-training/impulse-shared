import { z } from "zod";
export declare const userDataSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    recoveryKeyHash: z.ZodOptional<z.ZodString>;
    defaultThreadMode: z.ZodDefault<z.ZodEnum<["text", "voice"]>>;
    createdViaEmulator: z.ZodOptional<z.ZodBoolean>;
    role: z.ZodDefault<z.ZodEnum<["user", "coach", "support"]>>;
    notificationsEnabled: z.ZodDefault<z.ZodBoolean>;
    notifyOnSignUp: z.ZodOptional<z.ZodBoolean>;
    expoPushToken: z.ZodDefault<z.ZodNullable<z.ZodString>>;
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
        osName?: string | undefined;
        osVersion?: string | undefined;
        brand?: string | undefined;
        manufacturer?: string | undefined;
        modelName?: string | undefined;
        modelId?: string | undefined;
        deviceName?: string | undefined;
        isDevice?: boolean | undefined;
    }, {
        osName?: string | undefined;
        osVersion?: string | undefined;
        brand?: string | undefined;
        manufacturer?: string | undefined;
        modelName?: string | undefined;
        modelId?: string | undefined;
        deviceName?: string | undefined;
        isDevice?: boolean | undefined;
    }>>;
    isAppEnabled: z.ZodOptional<z.ZodBoolean>;
    deletionRequestedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    deletionRequestedBy: z.ZodOptional<z.ZodEnum<["user", "admin"]>>;
    tacticsEnabled: z.ZodDefault<z.ZodBoolean>;
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
    }, "strip", z.ZodTypeAny, {
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
    }, {
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
    }>>;
    isImpulseTeam: z.ZodOptional<z.ZodBoolean>;
    hasSetupExperiment: z.ZodOptional<z.ZodBoolean>;
    supportGroupSignupCompletedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    markedAsEligibleAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    calendarBehaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    isCoach: z.ZodOptional<z.ZodBoolean>;
    latestSupportGroupMessages: z.ZodOptional<z.ZodRecord<z.ZodEnum<["system", "social", "coach", "alignment"]>, z.ZodObject<{
        senderId: z.ZodString;
        message: z.ZodString;
        sentAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        senderId: string;
        sentAt: import("../types").Timestamp;
    }, {
        message: string;
        senderId: string;
        sentAt: import("../types").Timestamp;
    }>>>;
}, "strip", z.ZodTypeAny, {
    role: "user" | "coach" | "support";
    defaultThreadMode: "text" | "voice";
    notificationsEnabled: boolean;
    expoPushToken: string | null;
    notificationSettings: {
        debriefReminders: boolean;
    };
    tacticsEnabled: boolean;
    theme: "system" | "light" | "dark";
    weekStartsOn: 0 | 1;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    recap?: {
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
    } | undefined;
    recoveryKeyHash?: string | undefined;
    createdViaEmulator?: boolean | undefined;
    notifyOnSignUp?: boolean | undefined;
    appVersion?: string | undefined;
    device?: {
        osName?: string | undefined;
        osVersion?: string | undefined;
        brand?: string | undefined;
        manufacturer?: string | undefined;
        modelName?: string | undefined;
        modelId?: string | undefined;
        deviceName?: string | undefined;
        isDevice?: boolean | undefined;
    } | undefined;
    isAppEnabled?: boolean | undefined;
    deletionRequestedAt?: import("../types").Timestamp | undefined;
    deletionRequestedBy?: "user" | "admin" | undefined;
    isImpulseTeam?: boolean | undefined;
    hasSetupExperiment?: boolean | undefined;
    supportGroupSignupCompletedAt?: import("../types").Timestamp | undefined;
    markedAsEligibleAt?: import("../types").Timestamp | undefined;
    calendarBehaviorIds?: string[] | undefined;
    isCoach?: boolean | undefined;
    latestSupportGroupMessages?: Partial<Record<"system" | "alignment" | "coach" | "social", {
        message: string;
        senderId: string;
        sentAt: import("../types").Timestamp;
    }>> | undefined;
}, {
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    recap?: {
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
    } | undefined;
    role?: "user" | "coach" | "support" | undefined;
    recoveryKeyHash?: string | undefined;
    defaultThreadMode?: "text" | "voice" | undefined;
    createdViaEmulator?: boolean | undefined;
    notificationsEnabled?: boolean | undefined;
    notifyOnSignUp?: boolean | undefined;
    expoPushToken?: string | null | undefined;
    notificationSettings?: {
        debriefReminders?: boolean | undefined;
    } | undefined;
    appVersion?: string | undefined;
    device?: {
        osName?: string | undefined;
        osVersion?: string | undefined;
        brand?: string | undefined;
        manufacturer?: string | undefined;
        modelName?: string | undefined;
        modelId?: string | undefined;
        deviceName?: string | undefined;
        isDevice?: boolean | undefined;
    } | undefined;
    isAppEnabled?: boolean | undefined;
    deletionRequestedAt?: import("../types").Timestamp | undefined;
    deletionRequestedBy?: "user" | "admin" | undefined;
    tacticsEnabled?: boolean | undefined;
    theme?: "system" | "light" | "dark" | undefined;
    weekStartsOn?: 0 | 1 | undefined;
    isImpulseTeam?: boolean | undefined;
    hasSetupExperiment?: boolean | undefined;
    supportGroupSignupCompletedAt?: import("../types").Timestamp | undefined;
    markedAsEligibleAt?: import("../types").Timestamp | undefined;
    calendarBehaviorIds?: string[] | undefined;
    isCoach?: boolean | undefined;
    latestSupportGroupMessages?: Partial<Record<"system" | "alignment" | "coach" | "social", {
        message: string;
        senderId: string;
        sentAt: import("../types").Timestamp;
    }>> | undefined;
}>;
export type UserData = z.infer<typeof userDataSchema>;
export declare const isUserData: (value: unknown) => value is UserData;

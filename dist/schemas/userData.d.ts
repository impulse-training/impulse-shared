import { z } from "zod";
export declare const userDataSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    recoveryKeyHash: z.ZodOptional<z.ZodString>;
    defaultThreadMode: z.ZodDefault<z.ZodEnum<["text", "voice"]>>;
    role: z.ZodDefault<z.ZodEnum<["user", "coach", "support"]>>;
    notificationsEnabled: z.ZodDefault<z.ZodBoolean>;
    expoPushToken: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    notificationSettings: z.ZodDefault<z.ZodObject<{
        debriefReminders: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        debriefReminders: boolean;
    }, {
        debriefReminders?: boolean | undefined;
    }>>;
    appVersion: z.ZodOptional<z.ZodString>;
    tacticsEnabled: z.ZodDefault<z.ZodBoolean>;
    activeStrategyDoc: z.ZodOptional<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>>;
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
    addToTechSupportGroup: z.ZodOptional<z.ZodBoolean>;
    hasSetupExperiment: z.ZodOptional<z.ZodBoolean>;
    supportGroupSignupCompletedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    appVersion?: string | undefined;
    activeStrategyDoc?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown> | undefined;
    addToTechSupportGroup?: boolean | undefined;
    hasSetupExperiment?: boolean | undefined;
    supportGroupSignupCompletedAt?: import("../types").Timestamp | undefined;
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
    notificationsEnabled?: boolean | undefined;
    expoPushToken?: string | null | undefined;
    notificationSettings?: {
        debriefReminders?: boolean | undefined;
    } | undefined;
    appVersion?: string | undefined;
    tacticsEnabled?: boolean | undefined;
    activeStrategyDoc?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown> | undefined;
    theme?: "system" | "light" | "dark" | undefined;
    weekStartsOn?: 0 | 1 | undefined;
    addToTechSupportGroup?: boolean | undefined;
    hasSetupExperiment?: boolean | undefined;
    supportGroupSignupCompletedAt?: import("../types").Timestamp | undefined;
}>;
export type UserData = z.infer<typeof userDataSchema>;
export declare const isUserData: (value: unknown) => value is UserData;

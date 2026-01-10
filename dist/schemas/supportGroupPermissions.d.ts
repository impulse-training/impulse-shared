import z from "zod";
export declare const supportGroupPermissionsSchema: z.ZodObject<{
    dayOutcomes: z.ZodDefault<z.ZodBoolean>;
    impulseMoments: z.ZodDefault<z.ZodBoolean>;
    summary: z.ZodDefault<z.ZodBoolean>;
    threads: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    summary: boolean;
    dayOutcomes: boolean;
    impulseMoments: boolean;
    threads: boolean;
}, {
    summary?: boolean | undefined;
    dayOutcomes?: boolean | undefined;
    impulseMoments?: boolean | undefined;
    threads?: boolean | undefined;
}>;
export type SupportGroupPermissions = z.infer<typeof supportGroupPermissionsSchema>;
export declare const supportGroupNotificationPreferencesSchema: z.ZodObject<{
    messages: z.ZodDefault<z.ZodBoolean>;
    plan: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    plan: boolean;
    messages: boolean;
}, {
    plan?: boolean | undefined;
    messages?: boolean | undefined;
}>;
export type SupportGroupNotificationPreferences = z.infer<typeof supportGroupNotificationPreferencesSchema>;

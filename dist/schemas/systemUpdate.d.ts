import { z } from "zod";
export declare const otaSystemUpdateSchema: z.ZodObject<{
    type: z.ZodDefault<z.ZodLiteral<"ota">>;
    severity: z.ZodEnum<["normal", "severe", "silent"]>;
    iosUpdateId: z.ZodString;
    androidUpdateId: z.ZodOptional<z.ZodString>;
    appVersion: z.ZodOptional<z.ZodString>;
    /**
     * Monotonic patch number within `appVersion`, assigned by
     * publish-production.js — the second half of the version the app displays
     * ("0.2:3" is the third OTA patch on the 0.2 binary). Optional: OTA docs
     * published before patches were numbered don't have one.
     */
    patchNumber: z.ZodOptional<z.ZodNumber>;
    updateGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "ota";
    severity: "normal" | "severe" | "silent";
    iosUpdateId: string;
    appVersion?: string | undefined;
    androidUpdateId?: string | undefined;
    patchNumber?: number | undefined;
    updateGroupId?: string | null | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    severity: "normal" | "severe" | "silent";
    iosUpdateId: string;
    type?: "ota" | undefined;
    appVersion?: string | undefined;
    androidUpdateId?: string | undefined;
    patchNumber?: number | undefined;
    updateGroupId?: string | null | undefined;
}>;
export type OtaSystemUpdate = z.infer<typeof otaSystemUpdateSchema>;
export declare const nativeReleaseSystemUpdateSchema: z.ZodObject<{
    type: z.ZodLiteral<"nativeRelease">;
    platform: z.ZodDefault<z.ZodEnum<["ios", "android", "all"]>>;
    latestNativeVersion: z.ZodString;
    minNativeVersion: z.ZodString;
    blocking: z.ZodBoolean;
    message: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    iosUpgradeUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    androidUpgradeUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "nativeRelease";
    platform: "ios" | "android" | "all";
    latestNativeVersion: string;
    minNativeVersion: string;
    blocking: boolean;
    message?: string | null | undefined;
    iosUpgradeUrl?: string | null | undefined;
    androidUpgradeUrl?: string | null | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "nativeRelease";
    latestNativeVersion: string;
    minNativeVersion: string;
    blocking: boolean;
    message?: string | null | undefined;
    platform?: "ios" | "android" | "all" | undefined;
    iosUpgradeUrl?: string | null | undefined;
    androidUpgradeUrl?: string | null | undefined;
}>;
export type NativeReleaseSystemUpdate = z.infer<typeof nativeReleaseSystemUpdateSchema>;
export declare const systemUpdateSchema: z.ZodUnion<[z.ZodObject<{
    type: z.ZodLiteral<"nativeRelease">;
    platform: z.ZodDefault<z.ZodEnum<["ios", "android", "all"]>>;
    latestNativeVersion: z.ZodString;
    minNativeVersion: z.ZodString;
    blocking: z.ZodBoolean;
    message: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    iosUpgradeUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    androidUpgradeUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "nativeRelease";
    platform: "ios" | "android" | "all";
    latestNativeVersion: string;
    minNativeVersion: string;
    blocking: boolean;
    message?: string | null | undefined;
    iosUpgradeUrl?: string | null | undefined;
    androidUpgradeUrl?: string | null | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "nativeRelease";
    latestNativeVersion: string;
    minNativeVersion: string;
    blocking: boolean;
    message?: string | null | undefined;
    platform?: "ios" | "android" | "all" | undefined;
    iosUpgradeUrl?: string | null | undefined;
    androidUpgradeUrl?: string | null | undefined;
}>, z.ZodObject<{
    type: z.ZodDefault<z.ZodLiteral<"ota">>;
    severity: z.ZodEnum<["normal", "severe", "silent"]>;
    iosUpdateId: z.ZodString;
    androidUpdateId: z.ZodOptional<z.ZodString>;
    appVersion: z.ZodOptional<z.ZodString>;
    /**
     * Monotonic patch number within `appVersion`, assigned by
     * publish-production.js — the second half of the version the app displays
     * ("0.2:3" is the third OTA patch on the 0.2 binary). Optional: OTA docs
     * published before patches were numbered don't have one.
     */
    patchNumber: z.ZodOptional<z.ZodNumber>;
    updateGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "ota";
    severity: "normal" | "severe" | "silent";
    iosUpdateId: string;
    appVersion?: string | undefined;
    androidUpdateId?: string | undefined;
    patchNumber?: number | undefined;
    updateGroupId?: string | null | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    severity: "normal" | "severe" | "silent";
    iosUpdateId: string;
    type?: "ota" | undefined;
    appVersion?: string | undefined;
    androidUpdateId?: string | undefined;
    patchNumber?: number | undefined;
    updateGroupId?: string | null | undefined;
}>]>;
export type SystemUpdate = z.infer<typeof systemUpdateSchema>;
export declare const systemUpdateUserSchema: z.ZodObject<{
    firstOpenedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    downloadedAt: z.ZodOptional<z.ZodNullable<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>>;
    appliedAt: z.ZodOptional<z.ZodNullable<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>>;
}, "strip", z.ZodTypeAny, {
    firstOpenedAt: import("../types").Timestamp;
    appliedAt?: import("../types").Timestamp | null | undefined;
    downloadedAt?: import("../types").Timestamp | null | undefined;
}, {
    firstOpenedAt: import("../types").Timestamp;
    appliedAt?: import("../types").Timestamp | null | undefined;
    downloadedAt?: import("../types").Timestamp | null | undefined;
}>;
export type SystemUpdateUser = z.infer<typeof systemUpdateUserSchema>;

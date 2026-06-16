"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemUpdateUserSchema = exports.systemUpdateSchema = exports.nativeReleaseSystemUpdateSchema = exports.otaSystemUpdateSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
// OTA / JS-bundle update (expo-updates). `type` backfills to "ota" so legacy
// docs written before the discriminator was added still parse. `appVersion`
// and `androidUpdateId` are already written by publish-production.js / read by
// the app, so they're declared here too.
exports.otaSystemUpdateSchema = zod_1.z.object({
    type: zod_1.z.literal("ota").default("ota"),
    severity: zod_1.z.enum(["normal", "severe"]),
    iosUpdateId: zod_1.z.string(),
    androidUpdateId: zod_1.z.string().optional(),
    appVersion: zod_1.z.string().optional(),
    updateGroupId: zod_1.z.string().nullable().optional(),
    createdAt: timestampSchema_1.timestampSchema,
    updatedAt: timestampSchema_1.timestampSchema,
});
// Major / native-binary release. Targets users strictly below `minNativeVersion`
// and redirects them to TestFlight / the App Store; `blocking` forces the
// upgrade before the app can be used. Lives as a singleton per platform at
// `systemUpdates/nativeRelease-<platform>`.
exports.nativeReleaseSystemUpdateSchema = zod_1.z.object({
    type: zod_1.z.literal("nativeRelease"),
    platform: zod_1.z.enum(["ios", "android", "all"]).default("all"),
    latestNativeVersion: zod_1.z.string(),
    minNativeVersion: zod_1.z.string(),
    blocking: zod_1.z.boolean(),
    message: zod_1.z.string().nullable().optional(),
    iosUpgradeUrl: zod_1.z.string().nullable().optional(),
    androidUpgradeUrl: zod_1.z.string().nullable().optional(),
    createdAt: timestampSchema_1.timestampSchema,
    updatedAt: timestampSchema_1.timestampSchema,
});
// Order matters: a nativeRelease doc fails the OTA branch (no severity /
// iosUpdateId), and a legacy OTA doc (no `type`) fails the nativeRelease branch
// and matches OTA via the `type` default — so both keep validating.
exports.systemUpdateSchema = zod_1.z.union([
    exports.nativeReleaseSystemUpdateSchema,
    exports.otaSystemUpdateSchema,
]);
exports.systemUpdateUserSchema = zod_1.z.object({
    firstOpenedAt: timestampSchema_1.timestampSchema,
    downloadedAt: timestampSchema_1.timestampSchema.nullable().optional(),
    appliedAt: timestampSchema_1.timestampSchema.nullable().optional(),
});

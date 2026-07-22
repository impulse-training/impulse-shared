import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

// OTA / JS-bundle update (expo-updates). `type` backfills to "ota" so legacy
// docs written before the discriminator was added still parse. `appVersion`
// and `androidUpdateId` are already written by publish-production.js / read by
// the app, so they're declared here too.
export const otaSystemUpdateSchema = z.object({
  type: z.literal("ota").default("ota"),
  severity: z.enum(["normal", "severe"]),
  iosUpdateId: z.string(),
  androidUpdateId: z.string().optional(),
  appVersion: z.string().optional(),
  /**
   * Monotonic patch number within `appVersion`, assigned by
   * publish-production.js — the second half of the version the app displays
   * ("0.2:3" is the third OTA patch on the 0.2 binary). Optional: OTA docs
   * published before patches were numbered don't have one.
   */
  patchNumber: z.number().int().positive().optional(),
  updateGroupId: z.string().nullable().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

export type OtaSystemUpdate = z.infer<typeof otaSystemUpdateSchema>;

// Major / native-binary release. Targets users strictly below `minNativeVersion`
// and redirects them to TestFlight / the App Store; `blocking` forces the
// upgrade before the app can be used. Lives as a singleton per platform at
// `systemUpdates/nativeRelease-<platform>`.
export const nativeReleaseSystemUpdateSchema = z.object({
  type: z.literal("nativeRelease"),
  platform: z.enum(["ios", "android", "all"]).default("all"),
  latestNativeVersion: z.string(),
  minNativeVersion: z.string(),
  blocking: z.boolean(),
  message: z.string().nullable().optional(),
  iosUpgradeUrl: z.string().nullable().optional(),
  androidUpgradeUrl: z.string().nullable().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

export type NativeReleaseSystemUpdate = z.infer<
  typeof nativeReleaseSystemUpdateSchema
>;

// Order matters: a nativeRelease doc fails the OTA branch (no severity /
// iosUpdateId), and a legacy OTA doc (no `type`) fails the nativeRelease branch
// and matches OTA via the `type` default — so both keep validating.
export const systemUpdateSchema = z.union([
  nativeReleaseSystemUpdateSchema,
  otaSystemUpdateSchema,
]);

export type SystemUpdate = z.infer<typeof systemUpdateSchema>;

export const systemUpdateUserSchema = z.object({
  firstOpenedAt: timestampSchema,
  downloadedAt: timestampSchema.nullable().optional(),
  appliedAt: timestampSchema.nullable().optional(),
});

export type SystemUpdateUser = z.infer<typeof systemUpdateUserSchema>;

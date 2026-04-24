"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triggerHasLocation = exports.isValidTrigger = exports.triggerWithIdSchema = exports.triggerSchema = exports.triggerLocationSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const withId_1 = require("../../utils/withId");
// Optional location data for location-based triggers
exports.triggerLocationSchema = zod_1.z.object({
    locationName: zod_1.z.string().min(1, "Location name is required"),
    address: zod_1.z.string().min(1, "Address is required"),
    triggerType: zod_1.z.enum(["arrival", "departure"]),
    latitude: zod_1.z.number().min(-90).max(90),
    longitude: zod_1.z.number().min(-180).max(180),
});
// Single trigger schema — defined by a combination of tag group/option pairs
exports.triggerSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    // Tag-based trigger definition: tagGroupId → optionId
    tags: zod_1.z.record(zod_1.z.string(), zod_1.z.string()).default({}),
    behaviorIds: zod_1.z.array(zod_1.z.string()).optional(),
    // Legacy text description (being migrated to tags)
    text: zod_1.z.string().optional(),
    ordinal: zod_1.z.number().optional(),
    // Arrival/departure for location-based auto-triggering (coordinates come from the location tag group option)
    triggerType: zod_1.z.enum(["arrival", "departure"]).optional(),
    /** @deprecated Use triggerType + location tag group option coordinates instead */
    location: exports.triggerLocationSchema.optional(),
    lastOccurredAt: timestampSchema_1.timestampSchema.nullable(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
    deletedAt: timestampSchema_1.timestampSchema.optional(),
});
exports.triggerWithIdSchema = (0, withId_1.withIdSchema)(exports.triggerSchema);
const isValidTrigger = (value) => exports.triggerSchema.safeParse(value).success;
exports.isValidTrigger = isValidTrigger;
const triggerHasLocation = (trigger) => trigger.location !== undefined;
exports.triggerHasLocation = triggerHasLocation;

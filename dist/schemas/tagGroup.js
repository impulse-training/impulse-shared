"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagGroupSchema = exports.tagGroupOptionSchema = exports.LOCATION_TAG_GROUP_ID = void 0;
exports.tagOptionHasCoordinates = tagOptionHasCoordinates;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.LOCATION_TAG_GROUP_ID = "location";
exports.tagGroupOptionSchema = zod_1.z.object({
    id: zod_1.z.string(),
    label: zod_1.z.string(),
    // Optional location coordinates (used by location tag group options)
    latitude: zod_1.z.number().optional(),
    longitude: zod_1.z.number().optional(),
    address: zod_1.z.string().optional(),
});
exports.tagGroupSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    options: zod_1.z.array(exports.tagGroupOptionSchema),
    isPrimary: zod_1.z.boolean().optional().default(false),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
function tagOptionHasCoordinates(option) {
    return option.latitude != null && option.longitude != null;
}

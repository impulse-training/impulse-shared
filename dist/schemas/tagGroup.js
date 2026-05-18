"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagGroupSchema = exports.tagGroupOptionSchema = exports.locationOptionTypeSchema = exports.LOCATION_TAG_GROUP_ID = void 0;
exports.tagOptionHasLocationRef = tagOptionHasLocationRef;
exports.tagOptionIsPlace = tagOptionIsPlace;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.LOCATION_TAG_GROUP_ID = "location";
exports.locationOptionTypeSchema = zod_1.z.enum(["place", "setting"]);
exports.tagGroupOptionSchema = zod_1.z.object({
    id: zod_1.z.string(),
    label: zod_1.z.string(),
    // Opaque pointer to locally stored location data. Coordinates and addresses
    // must not be stored in Firestore tag group options.
    localLocationRef: zod_1.z.string().optional(),
    // "place" = real location with coordinates (Home, Work); "setting" = situational context (Commuting, Outside)
    type: exports.locationOptionTypeSchema.optional(),
});
exports.tagGroupSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    options: zod_1.z.array(exports.tagGroupOptionSchema),
    isPrimary: zod_1.z.boolean().optional().default(false),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
function tagOptionHasLocationRef(option) {
    return Boolean(option.localLocationRef);
}
function tagOptionIsPlace(option) {
    if (option.type)
        return option.type === "place";
    return Boolean(option.localLocationRef);
}

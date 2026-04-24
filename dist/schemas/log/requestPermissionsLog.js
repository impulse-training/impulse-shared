"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestPermissionsLogSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
exports.requestPermissionsLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("request_permissions"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        permissionType: zod_1.z.enum(["foreground_location"]),
        locationName: zod_1.z.string().optional(),
        respondedAt: timestampSchema_1.timestampSchema.optional(),
        granted: zod_1.z.boolean().optional(),
    }),
});

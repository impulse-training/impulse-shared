"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
const timestampSchema_1 = require("../../utils/timestampSchema");
exports.imageLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("image"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        imageId: zod_1.z.string(),
        acknowledgedAt: timestampSchema_1.timestampSchema.optional(),
    }),
});

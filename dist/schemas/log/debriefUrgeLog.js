"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debriefUrgeLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
const timestampSchema_1 = require("../../utils/timestampSchema");
exports.debriefUrgeLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("debriefUrge"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        actedOnUrge: zod_1.z.boolean().nullable().optional(), // undefined/null = not answered yet, true = acted, false = resisted
        behaviorId: zod_1.z.string().optional(),
        source: zod_1.z.enum(["scheduled", "manual"]).optional(),
        resolvedAt: timestampSchema_1.timestampSchema.optional(),
    }),
});

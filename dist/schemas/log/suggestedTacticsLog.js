"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suggestedTacticsLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.suggestedTacticsLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("suggested_tactics"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        tactics: zod_1.z.array(zod_1.z.object({
            tacticPath: zod_1.z.string(),
            reason: zod_1.z.string().optional(),
        })),
    }),
});

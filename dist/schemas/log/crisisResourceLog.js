"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crisisResourceLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.crisisResourceLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("crisis_resource"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        triggeredByLogId: zod_1.z.string(),
        riskLevel: zod_1.z.enum(["low", "high"]),
    }),
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanSupportEscalationLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.humanSupportEscalationLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("human_support_escalation"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        issueSummary: zod_1.z.string().optional(),
    }),
});

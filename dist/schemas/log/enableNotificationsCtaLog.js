"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableNotificationsCtaLogSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
exports.enableNotificationsCtaLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("enable_notifications_cta"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        triggeredByUserMessageLogId: zod_1.z.string(),
        respondedAt: timestampSchema_1.timestampSchema.optional(),
        enabled: zod_1.z.boolean().optional(),
    }),
});

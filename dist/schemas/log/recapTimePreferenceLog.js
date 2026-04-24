"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recapTimePreferenceLogSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
exports.recapTimePreferenceLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("recap_time_preference"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        /** The log that triggered this recap time preference prompt */
        triggeredByLogId: zod_1.z.string(),
        /** Hour the user selected (0-23) */
        hour: zod_1.z.number().min(0).max(23).optional(),
        /** Minute the user selected (0-59) */
        minute: zod_1.z.number().min(0).max(59).optional(),
        /** When the user responded to this prompt */
        respondedAt: timestampSchema_1.timestampSchema.optional(),
    }),
});

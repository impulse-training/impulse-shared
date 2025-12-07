"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debriefUrgeLogSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
exports.debriefUrgeLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("debriefUrge"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        // When the debrief should occur (countdown target)
        debriefAfter: timestampSchema_1.timestampSchema,
        // When the user actually debriefed (undefined = not yet debriefed)
        debriefedAt: timestampSchema_1.timestampSchema.optional(),
        // User's response to "did you act on the urge?" (only relevant after debrief)
        actedOnUrge: zod_1.z.boolean().optional(),
    }),
});

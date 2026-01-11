"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageBaseLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("../base");
// Message logs can be user, assistant, system, or eligibility logs. We create a common type, as they share
// a component for rendering.
exports.messageBaseLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.enum([
        "user_message",
        "assistant_message",
        "system_message",
        "eligible_to_join_impulse",
    ]),
    // Message logs are always displayed in the UI
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        // Keep loose for now to avoid coupling to OpenAI types at runtime
        message: zod_1.z.any(),
    }),
});

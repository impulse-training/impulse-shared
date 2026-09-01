"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageBaseLogSchema = exports.voiceTurnSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("../base");
exports.voiceTurnSchema = zod_1.z.object({
    callLogId: zod_1.z.string(),
    // The speaker was cut off (assistant turns only in practice).
    interrupted: zod_1.z.boolean().optional(),
    // Copied from a legacy call's transcriptItems subcollection after the fact.
    // The log write trigger skips these: they must not bump session recency,
    // unread state or the debrief timer for a call that ended weeks ago.
    backfilled: zod_1.z.boolean().optional(),
});
// Message logs can be user, assistant, or system messages. We create a common type because they share
// a component for rendering.
exports.messageBaseLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.enum(["user_message", "assistant_message", "system_message"]),
    // Message logs are always displayed in the UI
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        // Keep loose for now to avoid coupling to OpenAI types at runtime
        message: zod_1.z.any(),
    }),
    // Set on turns transcribed from a voice call. The call log named by
    // callLogId is the boundary card; the message logs carrying its id ARE the
    // transcript. Writers: the voice agent (live) and the transcript backfill.
    voice: exports.voiceTurnSchema.optional(),
});

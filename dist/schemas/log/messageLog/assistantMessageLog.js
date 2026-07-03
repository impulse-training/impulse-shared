"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assistantMessageLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.assistantMessageLogSchema = base_1.messageBaseLogSchema.extend({
    type: zod_1.z.literal("assistant_message"),
    // True on every paragraph of a multi-bubble response except the last. A
    // response that reads as multiple paragraphs is posted as one log per
    // paragraph with a reading-time pause between them (see
    // generateAndProcessAIResponse.ts) — this lets readers (e.g. the recap
    // close judge) tell an interim bubble from the true final one.
    isPartial: zod_1.z.boolean().optional(),
});

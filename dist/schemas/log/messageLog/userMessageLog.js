"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMessageLogSchema = exports.strategyForSchema = void 0;
const zod_1 = require("zod");
const attachment_1 = require("../../attachment");
const base_1 = require("./base");
/**
 * A message the app sends on the user's behalf to ask for a strategy, from a
 * screen that already knows which behaviors it is about (a starter strategy's
 * "Build a strategy"). The text says it in words; this says it exactly, so the
 * coach builds for these behaviors rather than guessing from the rest of the
 * conversation (2026-10-07: a Coffee request was read as social media).
 */
exports.strategyForSchema = zod_1.z.object({
    behaviorIds: zod_1.z.array(zod_1.z.string()).min(1),
    behaviorNames: zod_1.z.array(zod_1.z.string()),
});
exports.userMessageLogSchema = base_1.messageBaseLogSchema.extend({
    type: zod_1.z.literal("user_message"),
    audioAttachment: attachment_1.attachmentSchema.optional(),
    strategyFor: exports.strategyForSchema.optional(),
});

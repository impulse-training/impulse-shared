"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMessageLogSchema = void 0;
const zod_1 = require("zod");
const attachment_1 = require("../../attachment");
const base_1 = require("./base");
exports.userMessageLogSchema = base_1.messageBaseLogSchema.extend({
    type: zod_1.z.literal("user_message"),
    audioAttachment: attachment_1.attachmentSchema.optional(),
    replyTactic: zod_1.z
        .object({
        tactic: zod_1.z.any(),
        currentStepIndex: zod_1.z.number(),
    })
        .optional(),
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMessageLogSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const attachment_1 = require("../../attachment");
const base_1 = require("./base");
exports.userMessageLogSchema = base_1.messageBaseLogSchema.extend({
    type: zod_1.default.literal("user_message"),
    audioAttachment: attachment_1.attachmentSchema.optional(),
    replyTactic: zod_1.default
        .object({
        tactic: zod_1.default.any(),
        currentStepIndex: zod_1.default.number(),
    })
        .optional(),
});

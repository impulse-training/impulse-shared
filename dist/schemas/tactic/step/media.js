"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaStepSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const attachment_1 = require("../../attachment");
const base_1 = require("./base");
exports.mediaStepSchema = base_1.baseStepSchema.extend({
    mode: zod_1.default.literal("media"),
    media: zod_1.default.array(attachment_1.attachmentSchema).min(1),
});

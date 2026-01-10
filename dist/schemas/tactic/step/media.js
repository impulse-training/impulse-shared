"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaStepSchema = void 0;
const zod_1 = require("zod");
const attachment_1 = require("../../attachment");
const base_1 = require("./base");
exports.mediaStepSchema = base_1.baseStepSchema.extend({
    mode: zod_1.z.literal("media"),
    media: zod_1.z.array(attachment_1.attachmentSchema).min(1),
});

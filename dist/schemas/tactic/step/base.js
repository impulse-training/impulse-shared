"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseStepSchema = void 0;
const zod_1 = require("zod");
const attachment_1 = require("../../attachment");
exports.baseStepSchema = zod_1.z.object({
    // Make text optional at the base level so certain modes (e.g., breathing)
    // don't require it. Other modes will explicitly require non-empty text.
    text: zod_1.z.string().optional(), // label/instruction
    // Optional background image for non-media steps
    backgroundImage: attachment_1.attachmentSchema.optional(),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
});

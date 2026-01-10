"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseStepSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const attachment_1 = require("../../attachment");
exports.baseStepSchema = zod_1.default.object({
    // Make text optional at the base level so certain modes (e.g., breathing)
    // don't require it. Other modes will explicitly require non-empty text.
    text: zod_1.default.string().optional(), // label/instruction
    // Optional background image for non-media steps
    backgroundImage: attachment_1.attachmentSchema.optional(),
    tags: zod_1.default.array(zod_1.default.string()).optional(),
});

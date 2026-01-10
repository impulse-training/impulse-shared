"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageBaseLogSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_1 = require("../base");
// Message logs can be user, assistant, or system logs. We create a common type, as they share
// a component for rendering.
exports.messageBaseLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.default.enum(["user_message", "assistant_message", "system_message"]),
    // Message logs are always displayed in the UI
    isDisplayable: zod_1.default.literal(true),
    data: zod_1.default.object({
        // Keep loose for now to avoid coupling to OpenAI types at runtime
        message: zod_1.default.any(),
    }),
});

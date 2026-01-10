"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emojiIdDocSchema = exports.emojiIdSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.emojiIdSchema = zod_1.default.object({
    emoji: zod_1.default.string(),
});
exports.emojiIdDocSchema = zod_1.default.object({
    emojiId: exports.emojiIdSchema,
    isAvailable: zod_1.default.boolean(),
    // Used to establish a stable randomized ordering for sampling
    ordinal: zod_1.default.number().optional(),
});

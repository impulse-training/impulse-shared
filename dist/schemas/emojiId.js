"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emojiIdDocSchema = exports.emojiIdSchema = void 0;
const zod_1 = require("zod");
exports.emojiIdSchema = zod_1.z.object({
    emoji: zod_1.z.string(),
    name: zod_1.z.string(),
});
exports.emojiIdDocSchema = zod_1.z.object({
    emojiId: exports.emojiIdSchema,
    isAvailable: zod_1.z.boolean(),
    // Used to establish a stable randomized ordering for sampling
    ordinal: zod_1.z.number().optional(),
});

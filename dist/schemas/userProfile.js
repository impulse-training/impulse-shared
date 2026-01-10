"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfileSchema = void 0;
const zod_1 = require("zod");
const emojiId_1 = require("./emojiId");
exports.userProfileSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    invitationCode: zod_1.z.string(),
    emojiId: emojiId_1.emojiIdSchema.optional(),
});

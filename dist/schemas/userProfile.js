"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfileSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const emojiId_1 = require("./emojiId");
exports.userProfileSchema = zod_1.default.object({
    id: zod_1.default.string().optional(),
    invitationCode: zod_1.default.string(),
    emojiId: emojiId_1.emojiIdSchema.optional(),
});

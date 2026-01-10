"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifySupportGroupLogSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const objectOf_1 = require("../../utils/objectOf");
const emojiId_1 = require("../emojiId");
const userProfile_1 = require("../userProfile");
const base_1 = require("./base");
exports.notifySupportGroupLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.default.literal("notify_support_group"),
    isDisplayable: zod_1.default.literal(true),
    data: zod_1.default.object({
        message: zod_1.default.any(),
        // Snapshot of the sender's emoji identity (to avoid extra reads)
        emojiId: emojiId_1.emojiIdSchema.optional(),
        // A snapshot of the support groups this thread was shared with at the time of notification,
        // including member details so clients can display who was notified.
        supportGroupsById: (0, objectOf_1.objectOf)(zod_1.default.object({
            id: zod_1.default.string(),
            name: zod_1.default.string(),
            membersById: (0, objectOf_1.objectOf)(zod_1.default.object({
                userId: zod_1.default.string(),
                userProfile: userProfile_1.userProfileSchema,
            })),
        })),
    }),
});

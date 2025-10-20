"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifySupportGroupLogSchema = void 0;
const zod_1 = require("zod");
const objectOf_1 = require("../../utils/objectOf");
const userProfile_1 = require("../userProfile");
const base_1 = require("./base");
exports.notifySupportGroupLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("notify_support_group"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        message: zod_1.z.any(),
        // A snapshot of the support groups this thread was shared with at the time of notification,
        // including member details so clients can display who was notified.
        supportGroupsById: (0, objectOf_1.objectOf)(zod_1.z.object({
            id: zod_1.z.string(),
            name: zod_1.z.string(),
            membersById: (0, objectOf_1.objectOf)(zod_1.z.object({
                userId: zod_1.z.string(),
                userProfile: userProfile_1.userProfileSchema,
            })),
        })),
    }),
});

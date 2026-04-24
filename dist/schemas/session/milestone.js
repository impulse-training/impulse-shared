"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.milestoneSessionSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.milestoneSessionSchema = base_1.sessionBaseSchema.extend({
    type: zod_1.z.literal("milestone"),
    milestoneAchievementId: zod_1.z.string(),
    milestoneBehaviorId: zod_1.z.string(),
    rungDays: zod_1.z.number().int().positive(),
    rungLabel: zod_1.z.string(),
});

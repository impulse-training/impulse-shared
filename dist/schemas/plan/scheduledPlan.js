"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduledPlanSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.scheduledPlanSchema = (0, base_1.planBaseSchema)("scheduled").extend({
    hour: zod_1.z.number().min(0).max(23),
    minute: zod_1.z.number().min(0).max(59),
    weekdays: zod_1.z.array(zod_1.z.number().min(0).max(6)).min(1),
});

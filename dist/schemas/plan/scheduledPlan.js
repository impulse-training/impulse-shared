"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduledPlanIsEnabled = exports.scheduledPlanSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.scheduledPlanSchema = (0, base_1.planBaseSchema)("scheduled").extend({
    hour: zod_1.z.number().min(0).max(23),
    minute: zod_1.z.number().min(0).max(59),
    weekdays: zod_1.z.array(zod_1.z.number().min(0).max(6)).min(1),
    // A disabled plan keeps its schedule and tactics but stops firing: no
    // sessions are generated for it and any pending ones are removed. Absent
    // means enabled (every plan predates the field), so read through
    // `scheduledPlanIsEnabled`, never the raw field.
    enabled: zod_1.z.boolean().optional(),
});
const scheduledPlanIsEnabled = (plan) => plan.enabled !== false;
exports.scheduledPlanIsEnabled = scheduledPlanIsEnabled;

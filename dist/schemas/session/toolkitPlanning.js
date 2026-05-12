"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toolkitPlanningSessionSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.toolkitPlanningSessionSchema = base_1.sessionBaseSchema.extend({
    type: zod_1.z.literal("toolkitPlanning"),
    taskId: zod_1.z.string().optional(),
    entryPoint: zod_1.z.enum(["discover", "plan"]).optional(),
    triggerContext: zod_1.z
        .object({
        triggerId: zod_1.z.string(),
        triggerTitle: zod_1.z.string(),
    })
        .optional(),
});

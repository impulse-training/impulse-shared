"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triggerPlanSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.triggerPlanSchema = (0, base_1.planBaseSchema)("trigger").extend({
    isActive: zod_1.z.boolean().optional(),
});

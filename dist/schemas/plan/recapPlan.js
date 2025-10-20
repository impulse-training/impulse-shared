"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recapPlanSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
const timeTrigger_1 = require("./trigger/timeTrigger");
exports.recapPlanSchema = (0, base_1.planBaseSchema)("recap").extend({
    trigger: timeTrigger_1.timeTriggerSchema,
    questionIds: zod_1.z.array(zod_1.z.string()).optional().default([]),
});

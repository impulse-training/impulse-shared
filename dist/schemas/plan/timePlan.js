"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timePlanSchema = void 0;
const base_1 = require("./base");
const timeTrigger_1 = require("./trigger/timeTrigger");
exports.timePlanSchema = (0, base_1.planBaseSchema)("time").extend({
    trigger: timeTrigger_1.timeTriggerSchema.required(),
});

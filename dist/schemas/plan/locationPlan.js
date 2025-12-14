"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationPlanSchema = void 0;
const base_1 = require("./base");
const locationTrigger_1 = require("./trigger/locationTrigger");
exports.locationPlanSchema = (0, base_1.planBaseSchema)("location").extend({
    trigger: locationTrigger_1.locationTriggerSchema.required(),
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readyToDebriefLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
// Ready To Debrief Log Schema
// Simple marker/separator indicating the user finished a tactic flow and is ready to debrief.
exports.readyToDebriefLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("ready_to_debrief"),
    // Displayed in the UI as a thin separator/marker
    isDisplayable: zod_1.z.literal(true),
});

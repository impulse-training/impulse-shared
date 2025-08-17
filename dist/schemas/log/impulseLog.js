"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.impulseLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
// Impulse Log Schema
exports.impulseLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("impulse_button_pressed"),
    // Impulse logs are always displayed in the UI
    isDisplayable: zod_1.z.literal(true),
});

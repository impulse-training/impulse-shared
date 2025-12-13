"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationTriggerSchema = void 0;
const zod_1 = require("zod");
exports.locationTriggerSchema = zod_1.z.object({
    // Friendly name for the location (e.g., "Home", "Work", "Gym")
    locationName: zod_1.z.string(),
    // Full address string for display
    address: zod_1.z.string(),
    triggerType: zod_1.z.enum(["arrival", "departure"]),
    latitude: zod_1.z.number().min(-90).max(90),
    longitude: zod_1.z.number().min(-180).max(180),
});

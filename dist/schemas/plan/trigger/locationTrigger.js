"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationTriggerSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.locationTriggerSchema = zod_1.default.object({
    // Friendly name for the location (e.g., "Home", "Work", "Gym")
    locationName: zod_1.default.string().min(1, "Location name is required"),
    // Full address string for display
    address: zod_1.default.string().min(1, "Address is required"),
    triggerType: zod_1.default.enum(["arrival", "departure"]),
    latitude: zod_1.default.number().min(-90).max(90),
    longitude: zod_1.default.number().min(-180).max(180),
});

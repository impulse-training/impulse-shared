"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneCallStepSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.phoneCallStepSchema = base_1.baseStepSchema.extend({
    mode: zod_1.z.literal("phoneCall"),
    contactName: zod_1.z.string().min(1),
    phoneNumber: zod_1.z.string().min(1),
});

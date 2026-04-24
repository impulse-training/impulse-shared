"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalSessionSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.generalSessionSchema = base_1.sessionBaseSchema.extend({
    type: zod_1.z.literal("general"),
    intensity: zod_1.z.number().optional(),
});

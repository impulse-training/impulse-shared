"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zaraStepSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.zaraStepSchema = base_1.baseStepSchema.extend({
    mode: zod_1.z.literal("zara"),
    direction: zod_1.z.string().optional(),
});

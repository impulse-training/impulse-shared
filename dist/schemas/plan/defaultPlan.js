"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultPlanSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
exports.defaultPlanSchema = (0, base_1.planBaseSchema)("default").extend({
    lastUsedAt: timestampSchema_1.timestampSchema.optional(),
    numberOfUses: zod_1.z.number().int().nonnegative().default(0),
    numberOfSuccesses: zod_1.z.number().int().nonnegative().default(0),
    numberOfSetbacks: zod_1.z.number().int().nonnegative().default(0),
    isActive: zod_1.z.boolean().optional(),
});

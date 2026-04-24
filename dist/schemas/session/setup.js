"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSessionSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.setupSessionSchema = base_1.sessionBaseSchema.extend({
    type: zod_1.z.literal("setup"),
    isPhoneCentric: zod_1.z.boolean().optional(),
    behaviorId: zod_1.z.string().optional(),
});

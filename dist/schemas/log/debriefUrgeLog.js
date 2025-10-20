"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debriefUrgeLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.debriefUrgeLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("debriefUrge"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        actedOnUrge: zod_1.z.boolean().optional(), // undefined = not answered yet
    }),
});

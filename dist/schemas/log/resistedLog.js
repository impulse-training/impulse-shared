"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resistedLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.resistedLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("resisted"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        isSuccess: zod_1.z.boolean(),
    }),
});

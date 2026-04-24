"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.impulseStartedLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.impulseStartedLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("impulse_started"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        behaviorIds: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});

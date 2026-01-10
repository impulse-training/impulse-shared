"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeTriggerSchema = void 0;
const zod_1 = require("zod");
exports.timeTriggerSchema = zod_1.z.object({
    hour: zod_1.z.number(),
    minute: zod_1.z.number(),
    weekdays: zod_1.z.array(zod_1.z.number().min(0).max(6)).min(1),
});

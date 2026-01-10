"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTimezoneSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.userTimezoneSchema = zod_1.z.object({
    timezone: zod_1.z.string(),
    timezoneOffset: zod_1.z.number().optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});

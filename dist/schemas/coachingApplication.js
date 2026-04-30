"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coachingApplicationSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.coachingApplicationSchema = zod_1.z.object({
    id: zod_1.z.string(),
    userId: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    urgePattern: zod_1.z.string().optional(),
    note: zod_1.z.string().optional(),
    timezone: zod_1.z.string().optional(),
    sourceIpHash: zod_1.z.string().optional(),
    status: zod_1.z.enum(["new", "reviewed", "contacted", "enrolled", "declined"])
        .default("new"),
    reviewedBy: zod_1.z.string().optional(),
    reviewedAt: timestampSchema_1.timestampSchema.optional(),
    createdAt: timestampSchema_1.timestampSchema,
    updatedAt: timestampSchema_1.timestampSchema,
});

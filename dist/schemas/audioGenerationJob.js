"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audioGenerationJobSchema = exports.audioGenerationJobStatus = void 0;
const zod_1 = require("zod");
exports.audioGenerationJobStatus = zod_1.z.enum([
    "pending",
    "processing",
    "completed",
    "failed",
]);
// Results will store attachment-shaped objects (see attachment.ts in shared),
// including audio metadata like meterings. We keep this permissive to avoid
// duplicating the yup schema in zod here.
exports.audioGenerationJobSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    prompt: zod_1.z.string(),
    title: zod_1.z.string().optional(),
    style: zod_1.z.string().optional(),
    negativeTags: zod_1.z.string().optional(),
    voice: zod_1.z.enum(["m", "f"]).optional(),
    provider: zod_1.z.literal("kie").default("kie"),
    providerJobId: zod_1.z.string().optional(),
    status: exports.audioGenerationJobStatus,
    error: zod_1.z.string().optional(),
    results: zod_1.z.array(zod_1.z.any()).optional(),
    createdAt: zod_1.z.any(),
    updatedAt: zod_1.z.any(),
    statusUpdatedAt: zod_1.z.any().optional(),
    callbackReceivedAt: zod_1.z.any().optional(),
});

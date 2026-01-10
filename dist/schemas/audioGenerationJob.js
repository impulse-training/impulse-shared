"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.audioGenerationJobSchema = exports.audioGenerationJobStatus = void 0;
const zod_1 = __importDefault(require("zod"));
exports.audioGenerationJobStatus = zod_1.default.enum([
    "pending",
    "processing",
    "completed",
    "failed",
]);
// Results will store attachment-shaped objects (see attachment.ts in shared),
// including audio metadata like meterings. We keep this permissive to avoid
// duplicating the yup schema in zod here.
exports.audioGenerationJobSchema = zod_1.default.object({
    userId: zod_1.default.string(),
    prompt: zod_1.default.string(),
    title: zod_1.default.string().optional(),
    style: zod_1.default.string().optional(),
    negativeTags: zod_1.default.string().optional(),
    voice: zod_1.default.enum(["m", "f"]).optional(),
    provider: zod_1.default.literal("kie").default("kie"),
    providerJobId: zod_1.default.string().optional(),
    status: exports.audioGenerationJobStatus,
    error: zod_1.default.string().optional(),
    results: zod_1.default.array(zod_1.default.any()).optional(),
    createdAt: zod_1.default.any(),
    updatedAt: zod_1.default.any(),
    statusUpdatedAt: zod_1.default.any().optional(),
    callbackReceivedAt: zod_1.default.any().optional(),
});

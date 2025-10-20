"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.threadBaseSchema = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../../utils/documentReferenceSchema");
const timestampSchema_1 = require("../../utils/timestampSchema");
const emojiId_1 = require("../emojiId");
const log_1 = require("../log");
const plan_1 = require("../plan");
const threadSummary_1 = require("./threadSummary");
const threadTypeSchema = zod_1.z.enum([
    "impulse",
    "general",
    "onboarding",
    "recap",
    "behavior",
    "dayRecap",
    "timePlan",
    "locationPlan",
    "adjustment",
]);
// Thread schema
exports.threadBaseSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    // Any thread may have an optional plan
    plan: plan_1.planWithIdSchema.optional(),
    type: threadTypeSchema.default("general"),
    date: timestampSchema_1.timestampSchema,
    dateString: zod_1.z.string(),
    userId: zod_1.z.string(),
    mode: zod_1.z.enum(["text", "voice"]).default("text"),
    // Whether this thread is a draft (created before any logs exist)
    // Draft threads should be hidden in UI until a log is added
    isDraft: zod_1.z.boolean().optional().default(false),
    // For now, don't type this
    tacticsByPath: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
    suggestedTactics: log_1.suggestedTacticsLogSchema.optional(),
    suggestedTacticsStartedRefreshingAt: timestampSchema_1.timestampSchema.optional(),
    emojiId: emojiId_1.emojiIdSchema.nullable(),
    // Log summary data - written in after log write functions. We store tactic and behavior tracking
    // logs here (loosely typed until log schemas are migrated)
    trackingLogsById: zod_1.z.record(zod_1.z.string(), zod_1.z.any()),
    // Pre-computed summary data for thread cards - updated when trackingLogsById changes
    summaryData: threadSummary_1.threadSummarySchema.optional(),
    defaultSystemPrompt: zod_1.z.string().optional(),
    debriefSystemPrompt: zod_1.z.string().optional(),
    summary: zod_1.z.string().optional(),
    summaryRequestedAt: timestampSchema_1.timestampSchema.optional(),
    summarizedAt: timestampSchema_1.timestampSchema.optional(),
    strategyDoc: documentReferenceSchema_1.documentReferenceSchema.optional(),
    agentConnectedAt: timestampSchema_1.timestampSchema.optional(),
    allQuestionsAnsweredAt: timestampSchema_1.timestampSchema.optional(),
    archiveAfter: timestampSchema_1.timestampSchema,
    sharingLevels: zod_1.z
        .object({
        impulseMoment: zod_1.z.boolean(),
        plansUsed: zod_1.z.boolean(),
        outcome: zod_1.z.boolean(),
    })
        .optional(),
    // Allow for sharing with users
    sharedWithUserIds: zod_1.z.array(zod_1.z.string()),
    sharedWithSupportGroups: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema),
    openAfter: timestampSchema_1.timestampSchema.optional(),
    firstOpenedAt: timestampSchema_1.timestampSchema.optional(),
    responseStartedProcessingAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    // OpenAI Assistants API integration
    assistantId: zod_1.z.string().optional(),
    assistantThreadId: zod_1.z.string().optional(),
    // Current call status for global voice UI
    currentCall: zod_1.z
        .object({
        logId: zod_1.z.string(),
        token: zod_1.z.string(),
        livekitRoomName: zod_1.z.string(),
        livekitSessionId: zod_1.z.string(),
        startedAt: timestampSchema_1.timestampSchema,
        agentConnectedAt: timestampSchema_1.timestampSchema.optional(),
        endedAt: timestampSchema_1.timestampSchema.optional(),
        status: zod_1.z.enum(["connecting", "connected", "ended"]),
    })
        .optional(),
});

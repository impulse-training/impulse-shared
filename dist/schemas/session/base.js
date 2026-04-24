"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionBaseSchema = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../../utils/documentReferenceSchema");
const timestampSchema_1 = require("../../utils/timestampSchema");
const behaviorTrackingData_1 = require("../behaviorTrackingData");
const emojiId_1 = require("../emojiId");
const tactic_1 = require("../tactic/tactic");
const sessionSummary_1 = require("../sessionSummary");
const sessionTypeSchema = zod_1.z.enum([
    "impulse",
    "general",
    "onboarding",
    "recap",
    "behavior",
    "dayRecap",
    "timePlan",
    "locationPlan",
    "adjustment",
    "alignment",
    "commitment",
    "setup",
    "welcome",
    "tactic",
    "recoveryKey",
    "demo",
    "milestone",
]);
// Session schema
exports.sessionBaseSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    type: sessionTypeSchema.default("general"),
    title: zod_1.z.string(),
    behaviorIds: zod_1.z.array(zod_1.z.string()).optional(),
    date: timestampSchema_1.timestampSchema,
    dateString: zod_1.z.string(),
    userId: zod_1.z.string(),
    mode: zod_1.z.enum(["text", "voice"]).default("text"),
    currentTactic: tactic_1.tacticSchema.optional(),
    currentTacticStepIndex: zod_1.z.number().optional(),
    // Whether this session is a draft (created before any logs exist)
    // Draft sessions should be hidden in UI until a log is added
    isDraft: zod_1.z.boolean().optional().default(false),
    // Whether to show the tactics sheet in this session (defaults to true for impulse/general)
    showTactics: zod_1.z.boolean().optional(),
    // TODO: review if necessary
    emojiId: emojiId_1.emojiIdSchema.nullable(),
    // Pre-computed summary data for session cards - updated when session is closed
    summaryData: sessionSummary_1.sessionSummarySchema.optional(),
    behaviorDataTotals: zod_1.z.array(behaviorTrackingData_1.behaviorTrackingDataSchema).optional(),
    defaultSystemPrompt: zod_1.z.string().optional(),
    summary: zod_1.z.string().optional(),
    aiSummary: zod_1.z.string().optional(),
    summaryRequestedAt: timestampSchema_1.timestampSchema.optional(),
    summarizedAt: timestampSchema_1.timestampSchema.nullable(),
    reflectRequestedAt: timestampSchema_1.timestampSchema.optional(),
    // Where the session was created from
    origin: zod_1.z.enum(["native", "mac"]).optional(),
    triggerId: zod_1.z.string().nullable().optional(),
    agentConnectedAt: timestampSchema_1.timestampSchema.optional(),
    // Allow for sharing with users
    sharingMessage: zod_1.z.string().optional(),
    sharedWithUserIds: zod_1.z.array(zod_1.z.string()),
    sharedWithSupportGroups: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema),
    openAfter: timestampSchema_1.timestampSchema.optional(),
    firstOpenedAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    lastReadAt: timestampSchema_1.timestampSchema.optional(),
    unreadSince: timestampSchema_1.timestampSchema.optional(),
    responseStartedProcessingAt: timestampSchema_1.timestampSchema.optional(),
    responseRequestId: zod_1.z.string().optional(),
    planStartedProcessingAt: timestampSchema_1.timestampSchema.optional(),
    startedPlanIds: zod_1.z.array(zod_1.z.string()).optional(),
    completedPlanIds: zod_1.z.array(zod_1.z.string()).optional(),
    // ID of the active call log document (in users/{userId}/logs)
    activeCallLogId: zod_1.z.string().optional(),
    // Captured GPS location at session start
    location: zod_1.z
        .object({
        latitude: zod_1.z.number(),
        longitude: zod_1.z.number(),
        accuracy: zod_1.z.number().optional(),
    })
        .optional(),
    // Multi-select tags: tagGroupId → array of selected optionIds
    tags: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.string())).optional(),
    // Set when the AI calls showCloseButton — indicates the conversation has reached a natural end
    aiFinalizedAt: timestampSchema_1.timestampSchema.optional(),
    // Deletion state - set when the user initiates deletion from the UI
    startedDeletingAt: timestampSchema_1.timestampSchema.optional(),
    deletingError: zod_1.z.string().optional(),
});

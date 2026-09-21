"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionBaseSchema = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../../utils/documentReferenceSchema");
const timestampSchema_1 = require("../../utils/timestampSchema");
const behaviorTrackingData_1 = require("../behaviorTrackingData");
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
    "alignment", // TODO: Remove after 2026-05-26 — legacy value, replaced by "onboarding"
    "welcome",
    "tactic",
    "recoveryKey", // TODO: Remove after 2026-07-05 — replaced by "tasks" session type
    "tasks",
    "demo",
    "milestone",
    "toolkitPlanning",
    "zaraCheckIn", // Weekly voice check-in with a coach — excluded from the journal
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
    voiceEnabled: zod_1.z.boolean().optional(),
    currentTactic: tactic_1.tacticSchema.optional(),
    currentTacticStepIndex: zod_1.z.number().optional(),
    // Whether this session is a draft (created before any logs exist)
    // Draft sessions should be hidden in UI until a log is added
    isDraft: zod_1.z.boolean().optional().default(false),
    // Whether to show the tactics sheet in this session (defaults to true for impulse/general)
    showTactics: zod_1.z.boolean().optional(),
    // Pre-computed summary data for session cards - updated when session is closed
    summaryData: sessionSummary_1.sessionSummarySchema.optional(),
    behaviorDataTotals: zod_1.z.array(behaviorTrackingData_1.behaviorTrackingDataSchema).optional(),
    // Context the server stamped on the session when opening it (proactive
    // outreach, scheduled check-ins). Prepended to the per-type system prompt
    // on every respond turn — it augments the prompt, it does not replace it.
    seededInstructions: zod_1.z.string().optional(),
    // Deprecated pre-2026-08 name for seededInstructions. Old session docs
    // still carry it and readers fall back to it; never write it.
    defaultSystemPrompt: zod_1.z.string().optional(),
    summary: zod_1.z.string().optional(),
    aiSummary: zod_1.z.string().optional(),
    summaryRequestedAt: timestampSchema_1.timestampSchema.optional(),
    summarizedAt: timestampSchema_1.timestampSchema.nullable(),
    /**
     * Held by whichever taskSummarizeSession dispatch is currently doing the
     * work, so the others stand down.
     *
     * `summarizedAt` says the work is DONE; this says it is UNDERWAY, which is
     * the state that was missing. Summarization is enqueued per log write, so a
     * chatty session dispatches many tasks at once and they all used to read
     * "no summary yet" before any of them had written one — each then paying
     * for a summary and a full-transcript tactic extraction.
     *
     * Never written alongside `updatedAt`: that field is what the cooldown and
     * sessionNeedsSummary both read, and stamping it here would make the
     * session look freshly active and re-enqueue itself forever.
     */
    summarizeClaimedAt: timestampSchema_1.timestampSchema.optional(),
    reflectRequestedAt: timestampSchema_1.timestampSchema.optional(),
    // Where the session was created from
    origin: zod_1.z.enum(["native", "mac"]).optional(),
    // Which app feature/flow created this session (as opposed to `origin`,
    // which is about the client device). Currently only set on "behavior"
    // sessions created by the recap "adjust totals" flow.
    // "morningCheckIn": opened by the scheduled morning check-in (a recap for
    // yesterday, or a general session when yesterday was already confirmed).
    // The prompt builders read it to add the morning-call beats.
    source: zod_1.z.enum(["adjustment", "morningCheckIn"]).optional(),
    // Stamped by processMorningCheckIns when it delivers the morning check-in
    // into this session. Idempotency marker for the scheduler (one delivery per
    // session) and a record of how the user was reached.
    morningCheckIn: zod_1.z
        .object({
        deliveredAt: timestampSchema_1.timestampSchema,
        // "call": the phone rang (VoIP/FCM push accepted). "push": no call
        // token or the ring failed, so a regular notification went instead.
        deliveredAs: zod_1.z.enum(["call", "push"]),
        // The local date the check-in was for (the morning it fired).
        dateString: zod_1.z.string(),
    })
        .optional(),
    // True when this session represents a behavior total that wasn't tied to a
    // specific time of day (e.g. a recap adjustment with no time picked).
    // `date` still holds a real end-of-day timestamp so the session sorts last
    // among the day's journal entries and range queries still match it — the
    // UI uses this flag to hide the (meaningless) clock-time label.
    timeUnspecified: zod_1.z.boolean().optional(),
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
    // Denormalized from the newest user/assistant message log by the
    // afterUserLogWrite trigger. Recency signal for the chats list —
    // deliberately NOT updatedAt, which any session mutation bumps and which
    // the summarize cooldown compares against.
    lastMessageAt: timestampSchema_1.timestampSchema.optional(),
    lastMessagePreview: zod_1.z.string().optional(),
    // "Hide from home" watermark, set client-side from the chats rail. The rail
    // shows a thread only while `lastMessageAt > hiddenFromHomeAt`, so hiding
    // retires the thread AS IT STANDS rather than flagging it forever: the next
    // message moves lastMessageAt past the mark and the thread returns on its
    // own. A boolean would suppress a conversation the user had gone back to.
    // Home-rail only — the all-chats screen ignores it.
    hiddenFromHomeAt: timestampSchema_1.timestampSchema.optional(),
    responseStartedProcessingAt: timestampSchema_1.timestampSchema.optional(),
    responseRequestId: zod_1.z.string().optional(),
    responseError: zod_1.z.string().nullable().optional(),
    planStartedProcessingAt: timestampSchema_1.timestampSchema.optional(),
    startedPlanIds: zod_1.z.array(zod_1.z.string()).optional(),
    completedPlanIds: zod_1.z.array(zod_1.z.string()).optional(),
    // ID of the active call log document (in users/{userId}/logs)
    activeCallLogId: zod_1.z.string().optional(),
    // Coach guidance injected in real-time into a live voice session
    coachGuidanceItems: zod_1.z
        .array(zod_1.z.object({ id: zod_1.z.string(), text: zod_1.z.string(), sentAt: timestampSchema_1.timestampSchema }))
        .optional(),
    // Context the server learned mid-call, for an ElevenLabs call to hear. Its
    // prompt is fixed when the call is prepared and there is no server API into a
    // live conversation, so the app (which holds it) relays each new item.
    //
    // `respond` picks how. Without it the item is background (sendContextualUpdate),
    // which ElevenLabs never answers. With it the app sends it as a typed message
    // (sendUserMessage), the only client event that makes the agent speak: for
    // something done on screen the call must react to now (a tactic completed or
    // opened, the day's totals confirmed on the card). Its text says it is not the
    // user speaking, and its echoed user turn ("...") is never logged as one.
    liveCallContextUpdates: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        text: zod_1.z.string(),
        createdAt: timestampSchema_1.timestampSchema,
        respond: zod_1.z.boolean().optional(),
    }))
        .optional(),
    // Multi-select tags: tagGroupId → array of selected optionIds
    tags: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.string())).optional(),
    // Set when the AI calls showCloseButton — indicates the conversation has reached a natural end.
    // Cleared again if the assistant's next turn asks a question, so the close stays an offer.
    aiFinalizedAt: timestampSchema_1.timestampSchema.optional(),
    // Which stage decided the close. Recaps withhold showCloseButton from the session
    // AI and route the decision through judgeRecapClose ("reviewer"); every other
    // session type has the AI call the tool itself ("ai"). Recorded so the agreement
    // rate between the cheap prefilter and the reviewer stays auditable in Firestore
    // rather than only for as long as logs are retained.
    closeDecidedBy: zod_1.z.enum(["ai", "reviewer"]).optional(),
    // Deletion state - set when the user initiates deletion from the UI
    startedDeletingAt: timestampSchema_1.timestampSchema.optional(),
    deletingError: zod_1.z.string().optional(),
});

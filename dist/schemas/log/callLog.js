"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callLogSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const tactic_1 = require("../tactic");
const transcriptItem_1 = require("../transcriptItem");
const base_1 = require("./base");
// Call log Schema
exports.callLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("call"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        tactic: tactic_1.tacticSchema.optional(),
        agentConnectedAt: timestampSchema_1.timestampSchema.optional(),
        endedAt: timestampSchema_1.timestampSchema.optional(),
        // Voice provider plumbing. Both vendor groups are optional. Impulse calls
        // are LiveKit (current); the ElevenLabs fields are left over from the
        // earlier pipeline and only survive on old docs.
        livekitSessionId: zod_1.z.string().optional(),
        livekitRoomName: zod_1.z.string().optional(),
        elevenlabsAgentId: zod_1.z.string().optional(),
        elevenlabsConversationId: zod_1.z.string().optional(),
        token: zod_1.z.string().optional(),
        summary: zod_1.z.string().optional(),
        // True once the call's turns are written as user_message /
        // assistant_message logs in the session (each carrying `voice.callLogId`).
        // Readers that see this render the call as a boundary marker and let the
        // inline turns speak for themselves. Absent on legacy calls, whose
        // transcript lives only in the log's transcriptItems subcollection.
        transcriptInSession: zod_1.z.boolean().optional(),
        // Legacy calls only. Not persisted on the doc — hydrated at read time from
        // the log's transcriptItems subcollection when the call ended but the
        // summary hasn't landed yet, so getGptPayload can fall back to the
        // transcript.
        transcriptItems: zod_1.z.array(transcriptItem_1.transcriptItemSchema).optional(),
    }),
});

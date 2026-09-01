import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { tacticSchema } from "../tactic";
import { transcriptItemSchema } from "../transcriptItem";
import { logBaseSchema } from "./base";

// Call log Schema
export const callLogSchema = logBaseSchema.extend({
  type: z.literal("call"),
  isDisplayable: z.literal(true),
  data: z.object({
    tactic: tacticSchema.optional(),
    agentConnectedAt: timestampSchema.optional(),
    endedAt: timestampSchema.optional(),
    // Voice provider plumbing. Both vendor groups are optional. Impulse calls
    // are LiveKit (current); the ElevenLabs fields are left over from the
    // earlier pipeline and only survive on old docs.
    livekitSessionId: z.string().optional(),
    livekitRoomName: z.string().optional(),
    elevenlabsAgentId: z.string().optional(),
    elevenlabsConversationId: z.string().optional(),
    token: z.string().optional(),
    summary: z.string().optional(),
    // True once the call's turns are written as user_message /
    // assistant_message logs in the session (each carrying `voice.callLogId`).
    // Readers that see this render the call as a boundary marker and let the
    // inline turns speak for themselves. Absent on legacy calls, whose
    // transcript lives only in the log's transcriptItems subcollection.
    transcriptInSession: z.boolean().optional(),
    // Legacy calls only. Not persisted on the doc — hydrated at read time from
    // the log's transcriptItems subcollection when the call ended but the
    // summary hasn't landed yet, so getGptPayload can fall back to the
    // transcript.
    transcriptItems: z.array(transcriptItemSchema).optional(),
  }),
});

export type CallLog = z.infer<typeof callLogSchema>;

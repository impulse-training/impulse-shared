import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { tacticSchema } from "../tactic";
import { logBaseSchema } from "./base";

// Call log Schema
export const callLogSchema = logBaseSchema.extend({
  type: z.literal("call"),
  isDisplayable: z.literal(true),
  data: z.object({
    tactic: tacticSchema.optional(),
    agentConnectedAt: timestampSchema.optional(),
    endedAt: timestampSchema.optional(),
    // Voice provider plumbing. Both vendor groups are optional — a call log
    // either has LiveKit fields (legacy) OR ElevenLabs fields (current).
    livekitSessionId: z.string().optional(),
    livekitRoomName: z.string().optional(),
    elevenlabsAgentId: z.string().optional(),
    elevenlabsConversationId: z.string().optional(),
    token: z.string().optional(),
    summary: z.string().optional(),
  }),
});

export type CallLog = z.infer<typeof callLogSchema>;

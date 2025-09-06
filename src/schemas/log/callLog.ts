import { z } from "zod";
import { timestampSchema } from "../../utils";
import { tacticSchema } from "../tactic";
import { logBaseSchema } from "./base";

// Call log Schema
export const callLogSchema = logBaseSchema.extend({
  type: z.literal("call"),
  isDisplayable: z.literal(true),
  data: z.object({
    tactic: tacticSchema,
    agentConnectedAt: timestampSchema.optional(),
    endedAt: timestampSchema.optional(),
    livekitSessionId: z.string(),
    livekitRoomName: z.string(),
    token: z.string().optional(),
    summary: z.string().optional(),
  }),
});

export type CallLog = z.infer<typeof callLogSchema>;

import { z } from "zod";
import { timestampSchema } from "../../utils";
import { logBaseSchema } from "./base";

// Call log Schema
export const callLogSchema = logBaseSchema.extend({
  type: z.literal("call"),
  isDisplayable: z.literal(true),
  data: z.object({
    agentConnectedAt: timestampSchema,
    endedAt: timestampSchema,
    livekitSessionId: z.string(),
    livekitRoomName: z.string(),
    summary: z.string().optional(),
  }),
});

export type CallLog = z.infer<typeof callLogSchema>;

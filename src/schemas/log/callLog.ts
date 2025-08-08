import * as yup from "yup";
import { timestampSchema } from "../../utils";
import { logBaseSchema } from "./base";

// Call log Schema
export const callLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["call"]).required(),
  data: yup.object({
    agentConnectedAt: timestampSchema,
    endedAt: timestampSchema,
    livekitSessionId: yup.string().required(),
    livekitRoomName: yup.string().required(),
    summary: yup.string().optional(),
  }),
});

export type CallLog = yup.InferType<typeof callLogSchema>;

import { z } from "zod";
import { logBaseSchema } from "./base";
import { timestampSchema } from "../../utils/timestampSchema";

const responseButtonSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  responseText: z.string().min(1),
  style: z.enum(["primary", "secondary", "destructive"]).optional(),
});

export const mergeBehaviorsProposalLogSchema = logBaseSchema.extend({
  type: z.literal("merge_behaviors_proposal"),
  isDisplayable: z.literal(true),
  data: z.object({
    title: z.string().min(1),
    body: z.string().optional(),
    taskId: z.string().min(1),
    buttons: z.array(responseButtonSchema).min(1),
    selectedButtonId: z.string().optional(),
    selectedResponseText: z.string().optional(),
    respondedAt: timestampSchema.optional(),
  }),
});

export type MergeBehaviorsProposalLog = z.infer<
  typeof mergeBehaviorsProposalLogSchema
>;

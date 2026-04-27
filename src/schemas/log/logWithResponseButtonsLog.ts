import { z } from "zod";
import { logBaseSchema } from "./base";
import { timestampSchema } from "../../utils/timestampSchema";

export const responseButtonSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  responseText: z.string().min(1),
  style: z.enum(["primary", "secondary", "destructive"]).optional(),
});

export const logWithResponseButtonsLogSchema = logBaseSchema.extend({
  type: z.literal("log_with_response_buttons"),
  isDisplayable: z.literal(true),
  data: z.object({
    title: z.string().min(1),
    body: z.string().optional(),
    taskId: z.string().optional(),
    taskType: z.string().optional(),
    buttons: z.array(responseButtonSchema).min(1),
    selectedButtonId: z.string().optional(),
    selectedResponseText: z.string().optional(),
    respondedAt: timestampSchema.optional(),
  }),
});

export type ResponseButton = z.infer<typeof responseButtonSchema>;
export type LogWithResponseButtonsLog = z.infer<
  typeof logWithResponseButtonsLogSchema
>;

import { z } from "zod";
import { logBaseSchema } from "./base";
import { timestampSchema } from "../../utils/timestampSchema";

const debriefQuestionOptionLogSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  responseText: z.string().min(1),
  style: z.enum(["primary", "secondary", "destructive"]).optional(),
});

export const debriefQuestionLogSchema = logBaseSchema.extend({
  type: z.literal("debrief_question"),
  isDisplayable: z.literal(true),
  data: z.object({
    debriefQuestionId: z.string().min(1),
    behaviorId: z.string().min(1),
    behaviorName: z.string().optional(),
    question: z.string().min(1),
    options: z.array(debriefQuestionOptionLogSchema).min(1),
    taskId: z.string().min(1),
    selectedOptionId: z.string().optional(),
    selectedResponseText: z.string().optional(),
    respondedAt: timestampSchema.optional(),
  }),
});

export type DebriefQuestionLog = z.infer<typeof debriefQuestionLogSchema>;

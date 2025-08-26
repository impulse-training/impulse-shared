import { z } from "zod";
import { questionSchema } from "../question";
import { logBaseSchema } from "./base";

const responseSchema = z.object({
  responseType: z.enum(["text", "slider1To10", "recap"]),
  value: z.any(),
  formattedValue: z.string(),
  color: z.string().optional(),
});
export type Response = z.infer<typeof responseSchema>;

export const questionLogSchema = logBaseSchema.extend({
  type: z.literal("question"),
  // Question logs are always displayed in the UI
  isDisplayable: z.literal(true),
  data: z.object({
    questionId: z.string().optional(),
    question: questionSchema,
    response: responseSchema.optional(),
  }),
});

export type QuestionLog = z.infer<typeof questionLogSchema>;

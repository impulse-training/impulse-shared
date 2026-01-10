import { z } from "zod";
import { questionStepBaseSchema } from "./base";

export const slider1To10QuestionStepSchema = questionStepBaseSchema(
  "question-slider1To10"
).extend({
  sliderConfig: z.object({
    minLabel: z.string().optional(),
    maxLabel: z.string().optional(),
  }),
});

export type Slider1To10QuestionStep = z.infer<
  typeof slider1To10QuestionStepSchema
>;

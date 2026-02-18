import { z } from "zod";
import { metricStateSchema } from "../metricState";
import { questionBaseSchema } from "./base";

export const slider1To10QuestionSchema = questionBaseSchema(
  "slider1To10",
).extend({
  sliderConfig: z.object({
    minLabel: z.string().optional(),
    maxLabel: z.string().optional(),
  }),
  text: z.string(),
  state: metricStateSchema.optional(),
});

export type Slider1To10Question = z.infer<typeof slider1To10QuestionSchema>;

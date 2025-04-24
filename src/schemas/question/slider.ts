import * as yup from "yup";
import { questionBaseSchema } from "./base";

export const sliderQuestionSchema = questionBaseSchema("slider").shape({
  sliderConfig: yup
    .object({
      min: yup.number().required(),
      max: yup.number().required(),
      step: yup.number().default(1),
      minLabel: yup.string(),
      maxLabel: yup.string(),
      defaultValue: yup.number(),
    })
    .required(),
  suggestedResponses: yup.array().of(yup.string()).default([]),
});

export type SliderQuestion = yup.InferType<typeof sliderQuestionSchema>;

import * as yup from "yup";
import { guidelineBaseSchema } from "./base";

export const generalGuidelineSchema = guidelineBaseSchema("general").shape({
  data: yup.object({
    text: yup.string().required(),
  }),
});

export type GeneralGuideline = yup.InferType<typeof generalGuidelineSchema>;

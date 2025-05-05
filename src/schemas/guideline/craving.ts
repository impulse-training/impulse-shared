import * as yup from "yup";
import { guidelineBaseSchema } from "./base";

export const cravingGuidelineSchema = guidelineBaseSchema("craving").shape({
  data: yup.object({
    behaviorIds: yup.array().of(yup.string().required()).required(),
  }),
});

export type CravingGuideline = yup.InferType<typeof cravingGuidelineSchema>;

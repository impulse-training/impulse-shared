import * as yup from "yup";
import { guidelineBaseSchema } from "./base";

export const feelingGuidelineSchema = guidelineBaseSchema("feeling").shape({
  data: yup.object({
    trigger: yup.string().required(),
  }),
});

export type FeelingGuideline = yup.InferType<typeof feelingGuidelineSchema>;

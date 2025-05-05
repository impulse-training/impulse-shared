import * as yup from "yup";
import { guidelineBaseSchema } from "./base";

export const scheduledGuidelineSchema = guidelineBaseSchema("scheduled").shape({
  data: yup.object({
    hour: yup.number().required(),
    minute: yup.number().required(),
    triggerType: yup
      .mixed<"arrive" | "leave">()
      .oneOf(["arrive", "leave"])
      .required(),
    weekdays: yup
      .array()
      .of(yup.number().min(0).max(6).required())
      .required()
      .min(1),
  }),
});

export type ScheduledGuideline = yup.InferType<typeof scheduledGuidelineSchema>;

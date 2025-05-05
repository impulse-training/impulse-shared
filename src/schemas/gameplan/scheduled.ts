import * as yup from "yup";
import { gameplanBaseSchema } from "./base";

export const scheduledGameplanSchema = gameplanBaseSchema("scheduled").shape({
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

export type ScheduledGameplan = yup.InferType<typeof scheduledGameplanSchema>;

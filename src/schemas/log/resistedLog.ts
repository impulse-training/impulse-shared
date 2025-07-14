import * as yup from "yup";
import { logBaseSchema } from "./base";

export const resistedLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["resisted"]).required(),
  // Behavior tracked logs are always displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup
    .object({
      behaviorId: yup.string().optional(),
      behaviorName: yup.string().optional(),
    })
    .required(),
});

export type ResistedLog = yup.InferType<typeof resistedLogSchema>;

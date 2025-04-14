import * as yup from "yup";
import { tacticSchema } from "../tactic";
import { logBaseSchema } from "./base";

// Tactic Activity Log Schema
export const tacticLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["tactic_completed"]).required(),
  // Tactic logs are always displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup
    .object({
      tactic: tacticSchema,
    })
    .required(),
});

export type TacticLog = yup.InferType<typeof tacticLogSchema>;

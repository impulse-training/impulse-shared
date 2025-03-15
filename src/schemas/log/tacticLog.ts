import * as yup from "yup";
import { logBaseSchema } from ".";

// Tactic Activity Log Schema
export const tacticLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["tactic_completed", "tactic_viewed"]).required(),
  // Tactic logs are always displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup
    .object({
      tacticId: yup.string().required(),
      tacticTitle: yup.string().required(),
      tacticType: yup.string().required(),
    })
    .required(),
});

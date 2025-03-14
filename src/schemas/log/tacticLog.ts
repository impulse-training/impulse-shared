import * as yup from "yup";
import { logBaseSchema } from ".";
import { TacticLog } from "../../types";

// Tactic Activity Log Schema
export const tacticLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["tactic_completed", "tactic_viewed"]).required(),
  data: yup
    .object({
      tacticId: yup.string().required(),
      tacticTitle: yup.string().required(),
      tacticType: yup.string().required(),
    })
    .required(),
});

export const isTacticLog = (value: unknown): value is TacticLog => {
  try {
    tacticLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

import * as yup from "yup";
import { logBaseSchema } from ".";
import { ImpulseLog } from "../../types";

// Impulse Log Schema
export const impulseLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["impulse_button_pressed"]).required(),
  data: yup.object({}).required(),
});

export const isImpulseLog = (value: unknown): value is ImpulseLog => {
  try {
    impulseLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

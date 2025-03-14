import * as yup from "yup";
import { logBaseSchema } from ".";

// Impulse Log Schema
export const impulseLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["impulse_button_pressed"]).required(),
  data: yup.object({}).required(),
});

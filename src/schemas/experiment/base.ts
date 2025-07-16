import * as yup from "yup";
import { timestampSchema } from "../../utils";

export function experimentBaseSchema<K extends string>(type: K) {
  return yup.object({
    type: yup.mixed<K>().required().oneOf([type]),
    startedAt: timestampSchema.required(),
    hypothesis: yup.string().required(),
  });
}

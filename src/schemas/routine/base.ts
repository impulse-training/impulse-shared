import * as yup from "yup";
import { timestampSchema } from "../../utils";

export function routineBaseSchema<T extends string>(type: T) {
  return yup.object({
    id: yup.string(),
    name: yup.string().required(),
    type: yup.mixed<T>().oneOf([type]).required(),
    ordinal: yup.number(),
    createdAt: timestampSchema,
    updatedAt: timestampSchema,
  });
}

import * as yup from "yup";
import { documentReferenceSchema } from "../../utils";

export function questionBaseSchema<T extends string>(type: T) {
  return yup.object({
    id: yup.string(),
    gameplans: yup.array().of(documentReferenceSchema.required()).optional(),
    content: yup.string().required(),
    responseType: yup.mixed<T>().oneOf([type]).required(),
    scope: yup.string().oneOf(["impulse", "recap"]).optional(),
  });
}

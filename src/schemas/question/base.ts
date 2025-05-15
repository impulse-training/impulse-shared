import * as yup from "yup";

export function questionBaseSchema<T extends string>(type: T) {
  return yup.object({
    id: yup.string(),
    content: yup.string().required(),
    responseType: yup.mixed<T>().oneOf([type]).required(),
    scope: yup.string().oneOf(["impulse", "recap"]).optional(),
  });
}

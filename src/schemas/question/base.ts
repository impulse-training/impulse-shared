import * as yup from "yup";
import { documentReferenceSchema, timestampSchema } from "../../utils";

export function questionBaseSchema<T extends string>(type: T) {
  return yup.object({
    id: yup.string(),
    plans: yup.array().of(documentReferenceSchema.required()).optional(),
    content: yup.string().required(),
    lastAskedAt: timestampSchema,
    lastAnsweredAt: timestampSchema,
    numberOfAnswers: yup.number().optional().default(0),
    isTemplate: yup.boolean().optional().default(false),
    isPinned: yup.boolean(),
    responseType: yup.mixed<T>().oneOf([type]).required(),
    scope: yup
      .mixed<"impulse" | "recapPlan">()
      .oneOf(["impulse", "recapPlan"])
      .optional(),
  });
}

import * as yup from "yup";
import { documentReferenceSchema, timestampSchema } from "../../utils";

export function questionBaseSchema<T extends string>(type: T) {
  return yup.object({
    id: yup.string(),
    plans: yup.array().of(documentReferenceSchema.required()).optional(),
    text: yup.string().optional(), // Optional text to display before the question
    question: yup.string().required(), // The actual question content
    lastAskedAt: timestampSchema,
    lastAnsweredAt: timestampSchema,
    numberOfAnswers: yup.number().optional().default(undefined),
    isTemplate: yup.boolean().optional().default(false),
    isPinned: yup.boolean(),
    responseType: yup.mixed<T>().oneOf([type]).required(),
    scope: yup
      .mixed<"impulse" | "recapPlan">()
      .oneOf(["impulse", "recapPlan"])
      .optional(),
  });
}

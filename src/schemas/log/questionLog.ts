import * as yup from "yup";
import { logBaseSchema } from ".";

const responseTypes = ["text", "slider"] as const;

// Question Log Schema
export const questionLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["question"]).required(),
  // Question logs are always displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup
    .object({
      content: yup.string().required(),
      responseType: yup
        .mixed<"text" | "slider">()
        .oneOf(responseTypes)
        .required(),
      suggestedResponses: yup
        .array()
        .of(yup.string())
        .when("responseType", {
          is: "text",
          then: (schema) => schema.required().min(1),
          otherwise: (schema) => schema.default([]),
        }),
      sliderConfig: yup
        .object({
          min: yup.number().required(),
          max: yup.number().required(),
          step: yup.number().default(1),
          minLabel: yup.string(),
          maxLabel: yup.string(),
          defaultValue: yup.number(),
        })
        .when("responseType", {
          is: "slider",
          then: (schema) => schema.required(),
          otherwise: (schema) => schema.optional().default(undefined),
        }),
      response: yup.mixed().nullable().default(null), // This will store the user's response
    })
    .required(),
});

export type QuestionLog = yup.InferType<typeof questionLogSchema>;

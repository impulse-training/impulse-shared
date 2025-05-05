import * as yup from "yup";
import { timestampSchema } from "../../utils";
import { tacticSchema } from "../tactic";
import { logBaseSchema } from "./base";

// A guideline is a set of tactics
export const tacticsByIdSchema = yup.array().of(
  // We always provide the tactic with an id, but the document may or may not exist
  yup.object({
    tactic: tacticSchema,
    exists: yup.boolean().required(),
  })
);

// Guideline Log Schema
export const guidelineLogSchema = logBaseSchema.shape({
  type: yup.mixed<"guideline">().oneOf(["guideline"]).required(),
  // Guideline logs are always displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup.object({
    guideline: tacticsByIdSchema.required(),
    pastGuidelines: yup.array().of(tacticsByIdSchema.required()),
    introduction: yup.string(),
    acceptedAt: timestampSchema,
    shufflePressedAt: timestampSchema,
  }),
});

export type TacticsById = yup.InferType<typeof tacticsByIdSchema>;
export type GuidelineLog = yup.InferType<typeof guidelineLogSchema>;

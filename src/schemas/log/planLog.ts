import * as yup from "yup";
import { timestampSchema } from "../../utils";
import { tacticSchema } from "../tactic";
import { logBaseSchema } from "./base";

// A plan is a set of tactics
export const tacticsByIdSchema = yup.array().of(
  // We always provide the tactic with an id, but the document may or may not exist
  yup.object({
    tactic: tacticSchema,
    exists: yup.boolean().required(),
  })
);

// Plan Log Schema
export const planLogSchema = logBaseSchema.shape({
  type: yup.mixed<"plan">().oneOf(["plan"]).required(),
  // Plan logs are always displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup.object({
    plan: tacticsByIdSchema.required(),
    pastPlans: yup.array().of(tacticsByIdSchema.required()),
    introduction: yup.string(),
    acceptedAt: timestampSchema,
    shufflePressedAt: timestampSchema,
  }),
});

export type TacticsById = yup.InferType<typeof tacticsByIdSchema>;
export type PlanLog = yup.InferType<typeof planLogSchema>;

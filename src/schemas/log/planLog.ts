import * as yup from "yup";
import { timestampSchema, withIdSchema } from "../../utils";
import { Plan, planSchema } from "../plan";
import { logBaseSchema } from "./base";

// Plan Log Schema
export const planLogSchema = logBaseSchema.shape({
  type: yup.mixed<"plan">().oneOf(["plan"]).required(),
  // Plan logs are always displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup.object({
    plan: withIdSchema<Plan>(planSchema),
    introduction: yup.string(),
    acceptedAt: timestampSchema,
    // For future use: shuffle feature
    // pastPlans: yup.array().of(planSchema),
    // shufflePressedAt: timestampSchema,
  }),
});

export type PlanLog = yup.InferType<typeof planLogSchema>;

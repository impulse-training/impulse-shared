import * as yup from "yup";
import { outcomeSchema } from "../../utils/outcomes";
import { logBaseSchema } from "./base";

export const outcomeLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["outcome"]).required(),
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup
    .object({
      outcome: outcomeSchema,
    })
    .required(),
});

export type OutcomeLog = yup.InferType<typeof outcomeLogSchema>;

import * as yup from "yup";
import { threadBaseSchema } from "./base";

export const onboardingThreadSchema = threadBaseSchema.shape({
  type: yup.mixed<"onboarding">().oneOf(["onboarding"]).required(),
});
export type OnboardingThread = yup.InferType<typeof onboardingThreadSchema>;

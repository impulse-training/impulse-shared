import { z } from "zod";
import { threadBaseSchema } from "./base";

export const onboardingThreadSchema = threadBaseSchema.extend({
  type: z.literal("onboarding"),
});
export type OnboardingThread = z.infer<typeof onboardingThreadSchema>;

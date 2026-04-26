import { z } from "zod";
import { sessionBaseSchema } from "./base";

export const onboardingSessionSchema = sessionBaseSchema.extend({
  type: z.literal("onboarding"),
  notificationsEnabled: z.boolean().nullable(),
});
export type OnboardingSession = z.infer<typeof onboardingSessionSchema>;

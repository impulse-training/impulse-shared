import { z } from "zod";
import { sessionBaseSchema } from "./base";

export const welcomeSessionSchema = sessionBaseSchema.extend({
  type: z.literal("welcome"),
});
export type WelcomeSession = z.infer<typeof welcomeSessionSchema>;

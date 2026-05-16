import { z } from "zod";
import { baseStepSchema } from "./base";

export const phoneCallStepSchema = baseStepSchema.extend({
  mode: z.literal("phoneCall"),
  contactName: z.string().min(1),
  phoneNumber: z.string().min(1),
});

export type PhoneCallStep = z.infer<typeof phoneCallStepSchema>;

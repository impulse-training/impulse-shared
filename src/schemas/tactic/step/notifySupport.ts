import z from "zod";
import { baseStepSchema } from "./base";

export const notifySupportStepSchema = baseStepSchema.extend({
  mode: z.literal("notifySupport"),
  groupId: z.string(),
  text: z.string().min(1),
});

export type NotifySupportStep = z.infer<typeof notifySupportStepSchema>;

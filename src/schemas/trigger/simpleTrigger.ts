import { z } from "zod";
import { triggerBaseSchema } from "./base";

export const simpleTriggerSchema = triggerBaseSchema("simple").extend({
  text: z.string().min(1, "Trigger text is required"),
});

export type SimpleTrigger = z.infer<typeof simpleTriggerSchema>;

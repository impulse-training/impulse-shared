import { z } from "zod";

export const timeTriggerSchema = z.object({
  hour: z.number(),
  minute: z.number(),
  weekdays: z.array(z.number().min(0).max(6)).min(1),
});

export type TimeTrigger = z.infer<typeof timeTriggerSchema>;

import { z } from "zod";
import { logBaseSchema } from "./base";

export const triggerSelectionLogSchema = logBaseSchema.extend({
  type: z.literal("trigger_selection"),
  isDisplayable: z.literal(true),
  data: z.object({
    triggers: z.array(
      z.object({
        id: z.string(),
        // Label is a pre-rendered display string for the trigger
        label: z.string(),
      }),
    ),
    // null = "something else", undefined = not yet selected
    selectedTriggerId: z.string().nullable().optional(),
  }),
});

export type TriggerSelectionLog = z.infer<typeof triggerSelectionLogSchema>;

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
    // Quick-tap behavior options, shown alongside triggers when the user has
    // plans for behaviors. Same shape as triggers; label is a pre-rendered
    // (masked) display string for the behavior.
    behaviors: z
      .array(
        z.object({
          id: z.string(),
          label: z.string(),
        }),
      )
      .optional(),
    // null = "something else", undefined = not yet selected
    selectedTriggerId: z.string().nullable().optional(),
    // Set when the user taps a behavior chip instead of a trigger.
    selectedBehaviorId: z.string().nullable().optional(),
  }),
});

export type TriggerSelectionLog = z.infer<typeof triggerSelectionLogSchema>;

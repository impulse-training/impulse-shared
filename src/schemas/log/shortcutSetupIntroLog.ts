import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { logBaseSchema } from "./base";

export const shortcutSetupIntroLogSchema = logBaseSchema.extend({
  type: z.literal("shortcut_setup_intro"),
  isDisplayable: z.literal(true),
  data: z.object({
    shortcutType: z.enum(["back_tap", "lock_screen_widget"]),
    message: z.string(),
    respondedAt: timestampSchema.optional(),
    choice: z.enum(["voice", "text", "skip"]).optional(),
  }),
});

export type ShortcutSetupIntroLog = z.infer<
  typeof shortcutSetupIntroLogSchema
>;

import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { logBaseSchema } from "./base";

export const setupModeChoiceLogSchema = logBaseSchema.extend({
  type: z.literal("setup_mode_choice"),
  isDisplayable: z.literal(true),
  data: z.object({
    respondedAt: timestampSchema.optional(),
    choice: z.enum(["voice", "text"]).optional(),
  }),
});

export type SetupModeChoiceLog = z.infer<typeof setupModeChoiceLogSchema>;

import { z } from "zod";
import { logBaseSchema } from "./base";

// WidgetSetup Log Schema
export const widgetSetupLogSchema = logBaseSchema.extend({
  type: z.literal("widget_setup"),
  // WidgetSetup logs are always displayed in the UI
  isDisplayable: z.literal(true),
});

export type WidgetSetupLog = z.infer<typeof widgetSetupLogSchema>;

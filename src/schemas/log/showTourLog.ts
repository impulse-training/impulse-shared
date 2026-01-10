import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { logBaseSchema } from "./base";

export enum TourIcon {
  DockBehaviorsButton = "dockBehaviorsButton",
  DockMetricsButton = "dockMetricsButton",
}

export const tourStepSchema = z.object({
  elementRefName: z.string(),
  title: z.string(),
  description: z.string(),
  confirmButtonLabel: z.string().default("Ok"),
  nextOnImpulseButtonPress: z.boolean().optional(),
  borderRadius: z.number().optional(),
  innerPadding: z.number().optional(),
});
export type TourStep = z.infer<typeof tourStepSchema>;

export const showTourLogSchema = logBaseSchema.extend({
  type: z.literal("show_tour"),
  isDisplayable: z.literal(true),
  text: z.string(),
  data: z.object({
    steps: z.array(tourStepSchema),
    firstNavigateToRoute: z.string().optional(),
    startButtonLabel: z.string().optional(),
    completedAt: timestampSchema.optional(),
    includeCloseButton: z.boolean().default(false),
    closeButtonText: z.string().default("Close"),
    closeButtonHref: z.string().default("/"),
  }),
});

export type ShowTourLog = z.infer<typeof showTourLogSchema>;

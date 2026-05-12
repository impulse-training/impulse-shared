import { z } from "zod";
import { sessionBaseSchema } from "./base";

export const toolkitPlanningSessionSchema = sessionBaseSchema.extend({
  type: z.literal("toolkitPlanning"),
  taskId: z.string().optional(),
  entryPoint: z.enum(["discover", "plan"]).optional(),
  triggerContext: z
    .object({
      triggerId: z.string(),
      triggerTitle: z.string(),
    })
    .optional(),
});
export type ToolkitPlanningSession = z.infer<
  typeof toolkitPlanningSessionSchema
>;

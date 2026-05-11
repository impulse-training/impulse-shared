import { z } from "zod";
import { sessionBaseSchema } from "./base";

export const toolkitPlanningSessionSchema = sessionBaseSchema.extend({
  type: z.literal("toolkitPlanning"),
  taskId: z.string().optional(),
});
export type ToolkitPlanningSession = z.infer<
  typeof toolkitPlanningSessionSchema
>;

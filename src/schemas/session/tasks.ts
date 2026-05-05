import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { sessionBaseSchema } from "./base";

export const tasksSessionSchema = sessionBaseSchema.extend({
  type: z.literal("tasks"),
  completedAt: timestampSchema.nullable().optional(),
  taskId: z.string().optional(),
});
export type TasksSession = z.infer<typeof tasksSessionSchema>;

import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const taskStatusSchema = z.enum(["open", "completed", "dismissed"]);

export const taskBaseSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  status: taskStatusSchema.default("open"),
  title: z.string().min(1),
  instructions: z.string().min(1),
  context: z.string().optional(),
  createdBy: z.string().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
  completedAt: timestampSchema.optional(),
  dismissedAt: timestampSchema.optional(),
});

export const mergeBehaviorsTaskSchema = taskBaseSchema.extend({
  type: z.literal("merge_behaviors"),
  sourceBehaviorIds: z.array(z.string()).min(2),
  targetBehavior: z.object({
    name: z.string().min(1),
    description: z.string().optional(),
    trackingType: z.enum(["counter", "timer", "scale"]).optional(),
    synonyms: z.array(z.string()).optional(),
  }),
});

export const taskSchema = z.discriminatedUnion("type", [
  mergeBehaviorsTaskSchema,
]);

export type TaskStatus = z.infer<typeof taskStatusSchema>;
export type MergeBehaviorsTask = z.infer<typeof mergeBehaviorsTaskSchema>;
export type Task = z.infer<typeof taskSchema>;

export const isTask = (value: unknown): value is Task =>
  taskSchema.safeParse(value).success;

export const isMergeBehaviorsTask = (
  value: unknown,
): value is MergeBehaviorsTask =>
  mergeBehaviorsTaskSchema.safeParse(value).success;

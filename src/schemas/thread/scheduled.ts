import * as yup from "yup";
import { threadBaseSchema } from "./base";

export const scheduledThreadSchema = threadBaseSchema.shape({
  type: yup.mixed<"scheduled">().oneOf(["scheduled"]).required(),
  gameplanId: yup.string().required(),
});

export type ScheduledThread = yup.InferType<typeof scheduledThreadSchema>;

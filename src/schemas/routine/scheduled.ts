import * as yup from "yup";
import { routineBaseSchema } from "./base";

export const scheduledRoutineSchema = routineBaseSchema("scheduled").shape({
  data: yup.object({
    hour: yup.number().required(),
    minute: yup.number().required(),
    weekdays: yup.array().of(yup.number().min(0).max(6)).required().min(1),
  }),
});

export type ScheduledRoutine = yup.InferType<typeof scheduledRoutineSchema>;

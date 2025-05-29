import * as yup from "yup";
import { routineBaseSchema } from "./base";

export const timeRoutineSchema = routineBaseSchema("time").shape({
  data: yup.object({
    hour: yup.number().required(),
    minute: yup.number().required(),
    triggerType: yup
      .mixed<"arrive" | "leave">()
      .oneOf(["arrive", "leave"])
      .required(),
    weekdays: yup
      .array()
      .of(yup.number().min(0).max(6).required())
      .required()
      .min(1),
  }),
});

export type TimeRoutine = yup.InferType<typeof timeRoutineSchema>;

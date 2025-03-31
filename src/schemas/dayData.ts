import * as yup from "yup";
import { objectOf, timestampSchema } from "../utils";
import { outcomeSchema } from "../utils/outcomes";
import { logSchema } from "./log";

export const dayDataSchema = yup.object({
  dateString: yup.string().required(),
  userId: yup.string().required(),
  logsById: objectOf(logSchema),
  threadsOutcomesById: objectOf(outcomeSchema.required()),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

export function isValidDayData(value: unknown): value is DayData {
  return dayDataSchema.isValidSync(value);
}
export type DayData = yup.InferType<typeof dayDataSchema>;

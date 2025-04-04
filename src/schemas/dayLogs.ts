import * as yup from "yup";
import { objectOf, timestampSchema } from "../utils";
import { logSchema } from "./log";

export const dayLogsSchema = yup.object({
  dateString: yup.string().required(),
  userId: yup.string().required(),
  logsById: objectOf(logSchema),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

export function isValidDayData(value: unknown): value is DayData {
  return dayLogsSchema.isValidSync(value);
}
export type DayData = yup.InferType<typeof dayLogsSchema>;

import * as yup from "yup";
import { objectOf } from "../utils";
import { timestampSchema } from "../utils/timestampSchema";
import { behaviorTrackingDataSchema } from "./log";

// Thread schema
export const threadSchema = yup.object({
  id: yup.string(),
  title: yup.string().required(),
  type: yup
    .mixed<"impulse" | "general" | "dayRecap">()
    .oneOf(["impulse", "general", "dayRecap"])
    .default("general"),
  date: timestampSchema.required(),
  behaviorDataByLogId: objectOf(behaviorTrackingDataSchema),
  behaviorDataTotalsByBehaviorId: objectOf(behaviorTrackingDataSchema),
  // The date string is the date in the user's timezone
  dateString: yup.string().required(),
  updatedAt: timestampSchema,
  createdAt: timestampSchema,
});

// Export type inferred from schema
export type Thread = yup.InferType<typeof threadSchema>;

// Type guard function
export const isThread = (value: unknown): value is Thread => {
  try {
    threadSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

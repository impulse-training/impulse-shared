import * as yup from "yup";
import { objectOf } from "../utils";
import { timestampSchema } from "../utils/timestampSchema";
import { behaviorTrackingDataSchema, gameplanSchema } from "./log";

export type Outcome = "success" | "partial" | "setback";
export const outcomes: Outcome[] = ["success", "partial", "setback"];
export const outcomeSchema = yup.string().oneOf(outcomes);

// Thread schema
export const threadSchema = yup.object({
  id: yup.string(),
  title: yup.string().required(),
  type: yup
    .mixed<"impulse" | "general" | "dayRecap">()
    .oneOf(["impulse", "general", "dayRecap"])
    .default("general"),
  date: timestampSchema.required(),
  gameplan: gameplanSchema, // The gameplan is a list of tactics that the user has agreed to use
  dateString: yup.string().required(),
  behaviorDataByLogId: objectOf(behaviorTrackingDataSchema),
  behaviorDataTotals: yup.array().of(behaviorTrackingDataSchema),
  outcome: outcomeSchema,
  updatedAt: timestampSchema,
  createdAt: timestampSchema,
});

// Export type inferred from schema
export type Thread = yup.InferType<typeof threadSchema>;

// Type guard function
export const isValidThread = (value: unknown): value is Thread => {
  try {
    threadSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

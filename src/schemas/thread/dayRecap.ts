import * as yup from "yup";
import { timestampSchema } from "../../utils";
import { threadBaseSchema } from "./base";

export const dayRecapThreadSchema = threadBaseSchema.shape({
  type: yup.mixed<"dayRecap">().oneOf(["dayRecap"]).required(),
  confirmedAt: timestampSchema,
});

export type DayRecapThread = yup.InferType<typeof dayRecapThreadSchema>;

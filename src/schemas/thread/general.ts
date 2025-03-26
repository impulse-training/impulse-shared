import * as yup from "yup";
import { threadBaseSchema } from "./base";

export const generalThreadSchema = threadBaseSchema.shape({
  type: yup.mixed<"general">().oneOf(["general"]).required(),
});
export type GeneralThread = yup.InferType<typeof generalThreadSchema>;

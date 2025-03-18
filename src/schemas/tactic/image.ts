import * as yup from "yup";
import { attachmentSchema } from "../attachment";
import { tacticBaseSchema } from "./base";

export const imageTacticSchema = tacticBaseSchema.shape({
  type: yup.string().oneOf(["image"]).required(),
  imageAttachment: attachmentSchema.required(),
  canBeManuallyMarkedAsCompleted: yup.mixed<false>().oneOf([false]),
});
export type ImageTactic = yup.InferType<typeof imageTacticSchema>;

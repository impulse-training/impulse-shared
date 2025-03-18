import * as yup from "yup";
import { attachmentSchema } from "../attachment";
import { tacticBaseSchema } from "./base";

export const audioTacticSchema = tacticBaseSchema.shape({
  type: yup.string().oneOf(["audio"]).required(),
  audioAttachment: attachmentSchema.required(),
  canBeManuallyMarkedAsCompleted: yup.mixed<false>().oneOf([false]),
});

export type AudioTactic = yup.InferType<typeof audioTacticSchema>;

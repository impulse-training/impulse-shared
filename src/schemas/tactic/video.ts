import * as yup from "yup";
import { attachmentSchema } from "../attachment";
import { tacticBaseSchema } from "./base";

export const videoTacticSchema = tacticBaseSchema.shape({
  type: yup.string().oneOf(["video"]).required(),
  videoAttachment: attachmentSchema.required(),
  imageAttachment: attachmentSchema.required(),
});
export type VideoTactic = yup.InferType<typeof videoTacticSchema>;

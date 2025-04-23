import * as yup from "yup";
import { logBaseSchema } from "./base";

export const videoLogSchema = logBaseSchema.shape({
  type: yup.mixed<"video">().oneOf(["video"]).required(),
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  title: yup.string(),
  text: yup.string(),
  data: yup
    .object({
      sourceUri: yup.string().required("Source URI is required"),
    })
    .required(),
});

// Export the VideoLog type using yup.InferType
export type VideoLog = yup.InferType<typeof videoLogSchema>;

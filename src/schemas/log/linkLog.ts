import * as yup from "yup";
import { logBaseSchema } from "./base";

// Define the LinkLog schema

export const linkLogSchema = logBaseSchema.shape({
  type: yup.mixed<"link">().oneOf(["link"]).required(),
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  text: yup.string().required(),
  link: yup.string().required(),
  buttonText: yup.string().required(),
});

// Export the LinkLog type using yup.InferType
export type LinkLog = yup.InferType<typeof linkLogSchema>;

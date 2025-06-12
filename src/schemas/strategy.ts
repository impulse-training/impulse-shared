import * as yup from "yup";
import { timestampSchema, withId } from "../utils";
import { folderSchema } from "./folder";
import { gameplanSchema } from "./gameplan";
import { routineSchema } from "./routine";
import { userProfileSchema } from "./userProfile";

export const strategySchema = yup.object({
  id: yup.string(),
  name: yup.string().required(),
  description: yup.string(),
  isImported: yup.boolean().optional().default(undefined),
  gameplans: yup.array().of(withId(gameplanSchema)).required(),
  routines: yup.array().of(withId(routineSchema)).required(),
  folders: yup.array().of(withId(folderSchema)).required(),
  createdByProfile: userProfileSchema.optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
export type Strategy = yup.InferType<typeof strategySchema>;

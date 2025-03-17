import * as yup from "yup";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";
import { tacticBaseSchema } from "./base";

export const supportGroupTacticSchema = tacticBaseSchema.shape({
  type: yup.string().oneOf(["supportGroup"]).required(),
  data: yup.object({
    supportGroupDoc: documentReferenceSchema,
  }),
});

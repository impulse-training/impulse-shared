import * as yup from "yup";
import { ObjectSchema } from "yup";

type WithMaybeId = { id: string | undefined };

export const withId = (schema: ObjectSchema<yup.AnyObject, unknown>) =>
  schema.shape({
    id: yup.string().required(),
  });
export type WithId<T extends WithMaybeId> = T & { id: string };

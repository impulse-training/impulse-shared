import * as yup from "yup";
import {
  DocumentReferenceLike,
  documentReferenceSchema,
} from "./documentReferenceSchema";

type WithMaybeId = { id?: string | undefined };

export const withIdSchema = <T extends yup.AnyObject>(
  schema: yup.ObjectSchema<T> | yup.Lazy<yup.AnyObject>
): yup.Lazy<WithId<T>> =>
  yup.lazy(() => {
    // -- at resolution time we know the inner schema really is an ObjectSchema
    const obj = schema instanceof yup.Lazy ? schema.resolve({}) : schema;

    return yup
      .object({
        id: yup.string().required(),
        _ref: documentReferenceSchema.required(),
      })
      .concat(obj as yup.ObjectSchema<T>);
  }) as yup.Lazy<WithId<T>>;

export type WithId<T extends WithMaybeId> = T & {
  id: string;
  _ref: DocumentReferenceLike<T>;
};

import * as yup from "yup";
import { DocumentSnapshotLike } from "../types";
import {
  DocumentReferenceLike,
  documentReferenceSchema,
} from "./documentReferenceSchema";

type WithMaybeId = { id?: string | undefined };

/**
 * Adds id and _ref properties to a document data object
 * This is used to match the WithId type from impulse-shared
 */
export function withId<T extends Record<string, any>>(
  doc: DocumentSnapshotLike<T>
): WithId<T> {
  return {
    ...doc.data()!,
    _ref: doc.ref as unknown as DocumentReferenceLike<T>,
    id: doc.id,
  };
}

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

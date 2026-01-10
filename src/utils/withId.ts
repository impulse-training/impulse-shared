import { z } from "zod";
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

export const withIdSchema = <T extends z.ZodRawShape>(schema: z.ZodObject<T>) =>
  z
    .object({
      id: z.string(),
      _ref: documentReferenceSchema,
    })
    .and(schema);

export type WithId<T extends WithMaybeId> = T & {
  id: string;
  _ref: DocumentReferenceLike<T>;
};

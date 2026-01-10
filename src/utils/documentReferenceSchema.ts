import z from "zod";
import { DocumentSnapshotLike } from "../types/firebase";

// Ultimately, we have a problem because our "core" types include references to firestore
// constructs, such as snapshots and documents, however, they can either be firebase-admin or
// standard firebase objects. The mismatch in type definitions between firebase and firebase-admin
// prevent us from importing either or both libraries into our core package, and using those
// official type definitions. Instead, we use loose duck-typing for now, and in some cases, resort
// to using any types. We do this for now because our core library isn't really used in this regard
// - to derive correct firestore types through our schema and other core objects. Instead, we just
// provide basic ducktypes to prevent type errors. We should probably come back to this in future so
// our types are correct.
export interface DocumentReferenceLike<T> {
  id: string;
  path: string;
  get(): Promise<DocumentSnapshotLike<T>>;
  collection: (collectionPath: string) => any; // any for now
  parent: any;
  update(...args: any): Promise<any>;
  delete(): Promise<any>;
}

export const documentReferenceSchema = z.custom<DocumentReferenceLike<unknown>>(
  (value) => {
    if (value == null) return true;
    return (
      typeof value === "object" &&
      value !== null &&
      "id" in (value as any) &&
      typeof (value as any).id === "string"
    );
  },
  { message: 'Must be an object with an "id" property' }
);

export const collectionReferenceSchema = z.custom<unknown>(() => true);

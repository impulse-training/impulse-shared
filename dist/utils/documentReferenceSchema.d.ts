import z from "zod";
import { DocumentSnapshotLike } from "../types/firebase";
export interface DocumentReferenceLike<T> {
    id: string;
    path: string;
    get(): Promise<DocumentSnapshotLike<T>>;
    collection: (collectionPath: string) => any;
    parent: any;
    update(...args: any): Promise<any>;
    delete(): Promise<any>;
}
export declare const documentReferenceSchema: z.ZodType<DocumentReferenceLike<unknown>, z.ZodTypeDef, DocumentReferenceLike<unknown>>;
export declare const collectionReferenceSchema: z.ZodType<unknown, z.ZodTypeDef, unknown>;

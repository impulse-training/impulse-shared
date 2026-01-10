import { z } from "zod";
import { DocumentSnapshotLike } from "../types";
import { DocumentReferenceLike } from "./documentReferenceSchema";
type WithMaybeId = {
    id?: string | undefined;
};
/**
 * Adds id and _ref properties to a document data object
 * This is used to match the WithId type from impulse-shared
 */
export declare function withId<T extends Record<string, any>>(doc: DocumentSnapshotLike<T>): WithId<T>;
export declare const withIdSchema: <T extends z.ZodRawShape>(schema: z.ZodObject<T>) => z.ZodIntersection<z.ZodObject<{
    id: z.ZodString;
    _ref: z.ZodType<DocumentReferenceLike<unknown>, z.ZodTypeDef, DocumentReferenceLike<unknown>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    _ref: DocumentReferenceLike<unknown>;
}, {
    id: string;
    _ref: DocumentReferenceLike<unknown>;
}>, z.ZodObject<T, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<T>, any> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<T>, any>[k]; } : never, z.baseObjectInputType<T> extends infer T_2 ? { [k_1 in keyof T_2]: z.baseObjectInputType<T>[k_1]; } : never>>;
export type WithId<T extends WithMaybeId> = T & {
    id: string;
    _ref: DocumentReferenceLike<T>;
};
export {};

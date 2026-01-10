"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withIdSchema = void 0;
exports.withId = withId;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("./documentReferenceSchema");
/**
 * Adds id and _ref properties to a document data object
 * This is used to match the WithId type from impulse-shared
 */
function withId(doc) {
    return {
        ...doc.data(),
        _ref: doc.ref,
        id: doc.id,
    };
}
const withIdSchema = (schema) => zod_1.z
    .object({
    id: zod_1.z.string(),
    _ref: documentReferenceSchema_1.documentReferenceSchema,
})
    .and(schema);
exports.withIdSchema = withIdSchema;

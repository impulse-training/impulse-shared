"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withIdSchema = void 0;
exports.withId = withId;
const zod_1 = __importDefault(require("zod"));
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
const withIdSchema = (schema) => zod_1.default
    .object({
    id: zod_1.default.string(),
    _ref: documentReferenceSchema_1.documentReferenceSchema,
})
    .and(schema);
exports.withIdSchema = withIdSchema;

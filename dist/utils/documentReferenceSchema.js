"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionReferenceSchema = exports.documentReferenceSchema = void 0;
const zod_1 = require("zod");
exports.documentReferenceSchema = zod_1.z.custom((value) => {
    if (value == null)
        return true;
    return (typeof value === "object" &&
        value !== null &&
        "id" in value &&
        typeof value.id === "string");
}, { message: 'Must be an object with an "id" property' });
exports.collectionReferenceSchema = zod_1.z.custom(() => true);

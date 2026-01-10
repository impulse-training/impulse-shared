"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionReferenceSchema = exports.documentReferenceSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.documentReferenceSchema = zod_1.default.custom((value) => {
    if (value == null)
        return true;
    return (typeof value === "object" &&
        value !== null &&
        "id" in value &&
        typeof value.id === "string");
}, { message: 'Must be an object with an "id" property' });
exports.collectionReferenceSchema = zod_1.default.custom(() => true);

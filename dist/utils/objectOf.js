"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectOf = objectOf;
exports.optionalObjectOf = optionalObjectOf;
const zod_1 = __importDefault(require("zod"));
function objectOf(schema) {
    return zod_1.default.record(zod_1.default.string(), schema);
}
function optionalObjectOf(schema) {
    return zod_1.default.record(zod_1.default.string(), schema).optional();
}

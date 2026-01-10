"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectOf = objectOf;
exports.optionalObjectOf = optionalObjectOf;
const zod_1 = require("zod");
function objectOf(schema) {
    return zod_1.z.record(zod_1.z.string(), schema);
}
function optionalObjectOf(schema) {
    return zod_1.z.record(zod_1.z.string(), schema).optional();
}

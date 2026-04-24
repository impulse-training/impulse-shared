"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionPhaseSchema = void 0;
const zod_1 = require("zod");
exports.sessionPhaseSchema = zod_1.z.enum([
    "regulate",
    "shift",
    "reengage",
    "debrief",
]);

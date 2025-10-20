"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outcomeSchema = exports.outcomes = void 0;
const zod_1 = require("zod");
exports.outcomes = ["success", "partial", "setback"];
exports.outcomeSchema = zod_1.z.enum(["success", "partial", "setback"]);

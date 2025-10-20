"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insightSchema = void 0;
const zod_1 = require("zod");
exports.insightSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    text: zod_1.z.string(),
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tourStepSchema = void 0;
const zod_1 = require("zod");
exports.tourStepSchema = zod_1.z.object({
    elementRefName: zod_1.z.string().nullable(),
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    confirmButtonLabel: zod_1.z.string().default("Ok"),
    nextOnImpulseButtonPress: zod_1.z.boolean().optional(),
    borderRadius: zod_1.z.number().optional(),
    innerPadding: zod_1.z.number().optional(),
    minimumRectSize: zod_1.z
        .object({ width: zod_1.z.number(), height: zod_1.z.number() })
        .optional(),
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goalSchema = void 0;
const zod_1 = require("zod");
// Daily goals schema - supports eliminate or reduce with targets
exports.goalSchema = zod_1.z.discriminatedUnion("type", [
    // Eliminate - goal is to have 0 of this behavior
    zod_1.z.object({
        type: zod_1.z.literal("eliminate"),
    }),
    // Reduce with every day target
    zod_1.z.object({
        type: zod_1.z.literal("reduceEveryDay"),
        target: zod_1.z.number(),
    }),
    // Reduce with individual day targets
    zod_1.z.object({
        type: zod_1.z.literal("reduceIndividualDays"),
        dailyTargets: zod_1.z.object({
            0: zod_1.z.number(), // Sunday
            1: zod_1.z.number(), // Monday
            2: zod_1.z.number(), // Tuesday
            3: zod_1.z.number(), // Wednesday
            4: zod_1.z.number(), // Thursday
            5: zod_1.z.number(), // Friday
            6: zod_1.z.number(), // Saturday
        }),
    }),
]);

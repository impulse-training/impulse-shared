"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goalSchema = exports.allowedWindowSchema = void 0;
const zod_1 = require("zod");
exports.allowedWindowSchema = zod_1.z.object({
    dayOfWeek: zod_1.z.number().min(0).max(6),
    startTime: zod_1.z.string(),
    endTime: zod_1.z.string(),
});
// Daily goals schema - supports eliminate, reduce, or contain
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
    // Contain - restrict to allowed day+time windows
    zod_1.z.object({
        type: zod_1.z.literal("contain"),
        allowedWindows: zod_1.z.array(exports.allowedWindowSchema),
    }),
]);

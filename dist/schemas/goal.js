"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.goalSchema = void 0;
const zod_1 = __importDefault(require("zod"));
// Daily goals schema - supports eliminate or reduce with targets
exports.goalSchema = zod_1.default.discriminatedUnion("type", [
    // Eliminate - goal is to have 0 of this behavior
    zod_1.default.object({
        type: zod_1.default.literal("eliminate"),
    }),
    // Reduce with every day target
    zod_1.default.object({
        type: zod_1.default.literal("reduceEveryDay"),
        target: zod_1.default.number(),
    }),
    // Reduce with individual day targets
    zod_1.default.object({
        type: zod_1.default.literal("reduceIndividualDays"),
        dailyTargets: zod_1.default.object({
            0: zod_1.default.number(), // Sunday
            1: zod_1.default.number(), // Monday
            2: zod_1.default.number(), // Tuesday
            3: zod_1.default.number(), // Wednesday
            4: zod_1.default.number(), // Thursday
            5: zod_1.default.number(), // Friday
            6: zod_1.default.number(), // Saturday
        }),
    }),
]);

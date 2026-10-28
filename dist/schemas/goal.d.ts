import { z } from "zod";
export declare const allowedWindowSchema: z.ZodObject<{
    dayOfWeek: z.ZodNumber;
    startTime: z.ZodString;
    endTime: z.ZodString;
}, "strip", z.ZodTypeAny, {
    dayOfWeek: number;
    startTime: string;
    endTime: string;
}, {
    dayOfWeek: number;
    startTime: string;
    endTime: string;
}>;
export type AllowedWindow = z.infer<typeof allowedWindowSchema>;
export declare const goalSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"eliminate">;
}, "strip", z.ZodTypeAny, {
    type: "eliminate";
}, {
    type: "eliminate";
}>, z.ZodObject<{
    type: z.ZodLiteral<"reduceEveryDay">;
    target: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "reduceEveryDay";
    target: number;
}, {
    type: "reduceEveryDay";
    target: number;
}>, z.ZodObject<{
    type: z.ZodLiteral<"reduceIndividualDays">;
    dailyTargets: z.ZodObject<{
        0: z.ZodNumber;
        1: z.ZodNumber;
        2: z.ZodNumber;
        3: z.ZodNumber;
        4: z.ZodNumber;
        5: z.ZodNumber;
        6: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        0: number;
        1: number;
        2: number;
        5: number;
        3: number;
        6: number;
        4: number;
    }, {
        0: number;
        1: number;
        2: number;
        5: number;
        3: number;
        6: number;
        4: number;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "reduceIndividualDays";
    dailyTargets: {
        0: number;
        1: number;
        2: number;
        5: number;
        3: number;
        6: number;
        4: number;
    };
}, {
    type: "reduceIndividualDays";
    dailyTargets: {
        0: number;
        1: number;
        2: number;
        5: number;
        3: number;
        6: number;
        4: number;
    };
}>, z.ZodObject<{
    type: z.ZodLiteral<"contain">;
    allowedWindows: z.ZodArray<z.ZodObject<{
        dayOfWeek: z.ZodNumber;
        startTime: z.ZodString;
        endTime: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        dayOfWeek: number;
        startTime: string;
        endTime: string;
    }, {
        dayOfWeek: number;
        startTime: string;
        endTime: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "contain";
    allowedWindows: {
        dayOfWeek: number;
        startTime: string;
        endTime: string;
    }[];
}, {
    type: "contain";
    allowedWindows: {
        dayOfWeek: number;
        startTime: string;
        endTime: string;
    }[];
}>]>;
export type Goal = z.infer<typeof goalSchema>;

import z from "zod";
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
        5: number;
        1: number;
        2: number;
        4: number;
        3: number;
        6: number;
    }, {
        0: number;
        5: number;
        1: number;
        2: number;
        4: number;
        3: number;
        6: number;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "reduceIndividualDays";
    dailyTargets: {
        0: number;
        5: number;
        1: number;
        2: number;
        4: number;
        3: number;
        6: number;
    };
}, {
    type: "reduceIndividualDays";
    dailyTargets: {
        0: number;
        5: number;
        1: number;
        2: number;
        4: number;
        3: number;
        6: number;
    };
}>]>;
export type Goal = z.infer<typeof goalSchema>;

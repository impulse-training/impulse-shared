import z from "zod";
export declare const breathingLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    dateString: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"breathing">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        inhaleSeconds: z.ZodNumber;
        holdSeconds: z.ZodNumber;
        exhaleSeconds: z.ZodNumber;
        cycles: z.ZodNumber;
        completedCycles: z.ZodNumber;
        totalDurationSeconds: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        inhaleSeconds: number;
        holdSeconds: number;
        exhaleSeconds: number;
        cycles: number;
        completedCycles: number;
        totalDurationSeconds: number;
    }, {
        inhaleSeconds: number;
        holdSeconds: number;
        exhaleSeconds: number;
        cycles: number;
        completedCycles: number;
        totalDurationSeconds: number;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "breathing";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        inhaleSeconds: number;
        holdSeconds: number;
        exhaleSeconds: number;
        cycles: number;
        completedCycles: number;
        totalDurationSeconds: number;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    callLogDocPath?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "breathing";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        inhaleSeconds: number;
        holdSeconds: number;
        exhaleSeconds: number;
        cycles: number;
        completedCycles: number;
        totalDurationSeconds: number;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    callLogDocPath?: string | undefined;
}>;
export type BreathingLog = z.infer<typeof breathingLogSchema>;

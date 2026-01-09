import { z } from "zod";
import { behaviorTrackingDataSchema, BehaviorTrackingData } from "../behaviorTrackingData";
export { behaviorTrackingDataSchema, BehaviorTrackingData };
export declare const behaviorLogSchema: z.ZodObject<{
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
    type: z.ZodLiteral<"behavior">;
    isDisplayable: z.ZodLiteral<true>;
    isAdjustment: z.ZodDefault<z.ZodBoolean>;
    /** If true, Zara should respond to this behavior log */
    shouldZaraRespond: z.ZodOptional<z.ZodBoolean>;
    data: z.ZodObject<{
        behaviorId: z.ZodString;
        behaviorName: z.ZodString;
        behaviorTrackingUnit: z.ZodOptional<z.ZodString>;
        trackingType: z.ZodEnum<["counter", "timer"]>;
        value: z.ZodNumber;
        formattedValue: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    }, {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "behavior";
    userId: string;
    dateString: string;
    isDisplayable: true;
    isAdjustment: boolean;
    data: {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    callLogDocPath?: string | undefined;
    shouldZaraRespond?: boolean | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "behavior";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    callLogDocPath?: string | undefined;
    isAdjustment?: boolean | undefined;
    shouldZaraRespond?: boolean | undefined;
}>;
export type BehaviorLog = z.infer<typeof behaviorLogSchema>;

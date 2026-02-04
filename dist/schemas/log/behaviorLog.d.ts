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
        behaviorId: z.ZodOptional<z.ZodString>;
        behaviorName: z.ZodOptional<z.ZodString>;
        behaviorTrackingUnit: z.ZodOptional<z.ZodString>;
        trackingType: z.ZodOptional<z.ZodEnum<["counter", "timer"]>>;
        value: z.ZodOptional<z.ZodNumber>;
        formattedValue: z.ZodOptional<z.ZodString>;
    } & {
        /** Source of the log: scheduled debrief or manual entry */
        source: z.ZodOptional<z.ZodEnum<["scheduled", "manual"]>>;
        /** Outcome of the scheduled debrief prompt */
        debriefOutcome: z.ZodOptional<z.ZodEnum<["acted", "resisted", "still_there"]>>;
        /** When the debrief was resolved/answered */
        resolvedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    }, "strip", z.ZodTypeAny, {
        value?: number | undefined;
        behaviorId?: string | undefined;
        behaviorName?: string | undefined;
        behaviorTrackingUnit?: string | undefined;
        trackingType?: "counter" | "timer" | undefined;
        formattedValue?: string | undefined;
        source?: "scheduled" | "manual" | undefined;
        debriefOutcome?: "acted" | "resisted" | "still_there" | undefined;
        resolvedAt?: import("../../types").Timestamp | undefined;
    }, {
        value?: number | undefined;
        behaviorId?: string | undefined;
        behaviorName?: string | undefined;
        behaviorTrackingUnit?: string | undefined;
        trackingType?: "counter" | "timer" | undefined;
        formattedValue?: string | undefined;
        source?: "scheduled" | "manual" | undefined;
        debriefOutcome?: "acted" | "resisted" | "still_there" | undefined;
        resolvedAt?: import("../../types").Timestamp | undefined;
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
        value?: number | undefined;
        behaviorId?: string | undefined;
        behaviorName?: string | undefined;
        behaviorTrackingUnit?: string | undefined;
        trackingType?: "counter" | "timer" | undefined;
        formattedValue?: string | undefined;
        source?: "scheduled" | "manual" | undefined;
        debriefOutcome?: "acted" | "resisted" | "still_there" | undefined;
        resolvedAt?: import("../../types").Timestamp | undefined;
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
        value?: number | undefined;
        behaviorId?: string | undefined;
        behaviorName?: string | undefined;
        behaviorTrackingUnit?: string | undefined;
        trackingType?: "counter" | "timer" | undefined;
        formattedValue?: string | undefined;
        source?: "scheduled" | "manual" | undefined;
        debriefOutcome?: "acted" | "resisted" | "still_there" | undefined;
        resolvedAt?: import("../../types").Timestamp | undefined;
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

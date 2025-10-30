import { z } from "zod";
import { ImpulsePlan } from "./impulsePlan";
import { LocationPlan } from "./locationPlan";
import { RecapPlan } from "./recapPlan";
import { TimePlan } from "./timePlan";
export * from "./impulsePlan";
export * from "./locationPlan";
export * from "./recapPlan";
export * from "./timePlan";
export declare const planSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodType<"impulse", z.ZodTypeDef, "impulse">;
    ordinal: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodOptional<z.ZodBoolean>;
    summary: z.ZodOptional<z.ZodString>;
    tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
    questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>>;
    lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
} & {
    behaviorId: z.ZodString;
    behaviorRef: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
    isActive: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    type: "impulse";
    behaviorId: string;
    name: string;
    tactics: import("../..").DocumentReferenceLike<unknown>[];
    questions: import("../..").DocumentReferenceLike<unknown>[];
    behaviorRef: import("../..").DocumentReferenceLike<unknown>;
    isActive: boolean;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    summary?: string | undefined;
    isTemplate?: boolean | undefined;
    lastUsedAt?: import("../../types").Timestamp | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
}, {
    type: "impulse";
    behaviorId: string;
    name: string;
    tactics: import("../..").DocumentReferenceLike<unknown>[];
    behaviorRef: import("../..").DocumentReferenceLike<unknown>;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    summary?: string | undefined;
    isTemplate?: boolean | undefined;
    questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
    lastUsedAt?: import("../../types").Timestamp | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
    isActive?: boolean | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodType<"time", z.ZodTypeDef, "time">;
    ordinal: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodOptional<z.ZodBoolean>;
    summary: z.ZodOptional<z.ZodString>;
    tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
    questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>>;
    lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
} & {
    trigger: z.ZodObject<{
        hour: z.ZodNumber;
        minute: z.ZodNumber;
        weekdays: z.ZodArray<z.ZodNumber, "many">;
    }, "strip", z.ZodTypeAny, {
        hour: number;
        minute: number;
        weekdays: number[];
    }, {
        hour: number;
        minute: number;
        weekdays: number[];
    }>;
}, "strip", z.ZodTypeAny, {
    type: "time";
    name: string;
    tactics: import("../..").DocumentReferenceLike<unknown>[];
    questions: import("../..").DocumentReferenceLike<unknown>[];
    trigger: {
        hour: number;
        minute: number;
        weekdays: number[];
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    summary?: string | undefined;
    isTemplate?: boolean | undefined;
    lastUsedAt?: import("../../types").Timestamp | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
}, {
    type: "time";
    name: string;
    tactics: import("../..").DocumentReferenceLike<unknown>[];
    trigger: {
        hour: number;
        minute: number;
        weekdays: number[];
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    summary?: string | undefined;
    isTemplate?: boolean | undefined;
    questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
    lastUsedAt?: import("../../types").Timestamp | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodType<"location", z.ZodTypeDef, "location">;
    ordinal: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodOptional<z.ZodBoolean>;
    summary: z.ZodOptional<z.ZodString>;
    tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
    questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>>;
    lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
} & {
    trigger: z.ZodObject<{
        locationName: z.ZodString;
        triggerType: z.ZodEnum<["arrival", "departure"]>;
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        locationName: string;
        triggerType: "arrival" | "departure";
        latitude: number;
        longitude: number;
    }, {
        locationName: string;
        triggerType: "arrival" | "departure";
        latitude: number;
        longitude: number;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "location";
    name: string;
    tactics: import("../..").DocumentReferenceLike<unknown>[];
    questions: import("../..").DocumentReferenceLike<unknown>[];
    trigger: {
        locationName: string;
        triggerType: "arrival" | "departure";
        latitude: number;
        longitude: number;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    summary?: string | undefined;
    isTemplate?: boolean | undefined;
    lastUsedAt?: import("../../types").Timestamp | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
}, {
    type: "location";
    name: string;
    tactics: import("../..").DocumentReferenceLike<unknown>[];
    trigger: {
        locationName: string;
        triggerType: "arrival" | "departure";
        latitude: number;
        longitude: number;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    summary?: string | undefined;
    isTemplate?: boolean | undefined;
    questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
    lastUsedAt?: import("../../types").Timestamp | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodType<"recap", z.ZodTypeDef, "recap">;
    ordinal: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodOptional<z.ZodBoolean>;
    summary: z.ZodOptional<z.ZodString>;
    tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
    questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>>;
    lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
} & {
    trigger: z.ZodObject<{
        hour: z.ZodNumber;
        minute: z.ZodNumber;
        weekdays: z.ZodArray<z.ZodNumber, "many">;
    }, "strip", z.ZodTypeAny, {
        hour: number;
        minute: number;
        weekdays: number[];
    }, {
        hour: number;
        minute: number;
        weekdays: number[];
    }>;
    questionIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
}, "strip", z.ZodTypeAny, {
    type: "recap";
    name: string;
    tactics: import("../..").DocumentReferenceLike<unknown>[];
    questions: import("../..").DocumentReferenceLike<unknown>[];
    trigger: {
        hour: number;
        minute: number;
        weekdays: number[];
    };
    questionIds: string[];
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    summary?: string | undefined;
    isTemplate?: boolean | undefined;
    lastUsedAt?: import("../../types").Timestamp | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
}, {
    type: "recap";
    name: string;
    tactics: import("../..").DocumentReferenceLike<unknown>[];
    trigger: {
        hour: number;
        minute: number;
        weekdays: number[];
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    summary?: string | undefined;
    isTemplate?: boolean | undefined;
    questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
    lastUsedAt?: import("../../types").Timestamp | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
    questionIds?: string[] | undefined;
}>]>;
export type Plan = z.infer<typeof planSchema>;
export declare const planWithIdSchema: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
    id: z.ZodString;
    _ref: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    _ref: import("../..").DocumentReferenceLike<unknown>;
}, {
    id: string;
    _ref: import("../..").DocumentReferenceLike<unknown>;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodType<"impulse", z.ZodTypeDef, "impulse">;
    ordinal: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodOptional<z.ZodBoolean>;
    summary: z.ZodOptional<z.ZodString>;
    tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
    questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>>;
    lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
} & {
    behaviorId: z.ZodString;
    behaviorRef: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
    isActive: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, z.UnknownKeysParam, z.ZodTypeAny, {
    type: "impulse";
    behaviorId: string;
    name: string;
    tactics: import("../..").DocumentReferenceLike<unknown>[];
    questions: import("../..").DocumentReferenceLike<unknown>[];
    behaviorRef: import("../..").DocumentReferenceLike<unknown>;
    isActive: boolean;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    summary?: string | undefined;
    isTemplate?: boolean | undefined;
    lastUsedAt?: import("../../types").Timestamp | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
}, {
    type: "impulse";
    behaviorId: string;
    name: string;
    tactics: import("../..").DocumentReferenceLike<unknown>[];
    behaviorRef: import("../..").DocumentReferenceLike<unknown>;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    summary?: string | undefined;
    isTemplate?: boolean | undefined;
    questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
    lastUsedAt?: import("../../types").Timestamp | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
    isActive?: boolean | undefined;
}>>, z.ZodIntersection<z.ZodObject<{
    id: z.ZodString;
    _ref: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    _ref: import("../..").DocumentReferenceLike<unknown>;
}, {
    id: string;
    _ref: import("../..").DocumentReferenceLike<unknown>;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodType<"time", z.ZodTypeDef, "time">;
    ordinal: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodOptional<z.ZodBoolean>;
    summary: z.ZodOptional<z.ZodString>;
    tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
    questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>>;
    lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
} & {
    trigger: z.ZodObject<{
        hour: z.ZodNumber;
        minute: z.ZodNumber;
        weekdays: z.ZodArray<z.ZodNumber, "many">;
    }, "strip", z.ZodTypeAny, {
        hour: number;
        minute: number;
        weekdays: number[];
    }, {
        hour: number;
        minute: number;
        weekdays: number[];
    }>;
}, z.UnknownKeysParam, z.ZodTypeAny, {
    type: "time";
    name: string;
    tactics: import("../..").DocumentReferenceLike<unknown>[];
    questions: import("../..").DocumentReferenceLike<unknown>[];
    trigger: {
        hour: number;
        minute: number;
        weekdays: number[];
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    summary?: string | undefined;
    isTemplate?: boolean | undefined;
    lastUsedAt?: import("../../types").Timestamp | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
}, {
    type: "time";
    name: string;
    tactics: import("../..").DocumentReferenceLike<unknown>[];
    trigger: {
        hour: number;
        minute: number;
        weekdays: number[];
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    summary?: string | undefined;
    isTemplate?: boolean | undefined;
    questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
    lastUsedAt?: import("../../types").Timestamp | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
}>>, z.ZodIntersection<z.ZodObject<{
    id: z.ZodString;
    _ref: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    _ref: import("../..").DocumentReferenceLike<unknown>;
}, {
    id: string;
    _ref: import("../..").DocumentReferenceLike<unknown>;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodType<"location", z.ZodTypeDef, "location">;
    ordinal: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodOptional<z.ZodBoolean>;
    summary: z.ZodOptional<z.ZodString>;
    tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
    questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>>;
    lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
} & {
    trigger: z.ZodObject<{
        locationName: z.ZodString;
        triggerType: z.ZodEnum<["arrival", "departure"]>;
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        locationName: string;
        triggerType: "arrival" | "departure";
        latitude: number;
        longitude: number;
    }, {
        locationName: string;
        triggerType: "arrival" | "departure";
        latitude: number;
        longitude: number;
    }>;
}, z.UnknownKeysParam, z.ZodTypeAny, {
    type: "location";
    name: string;
    tactics: import("../..").DocumentReferenceLike<unknown>[];
    questions: import("../..").DocumentReferenceLike<unknown>[];
    trigger: {
        locationName: string;
        triggerType: "arrival" | "departure";
        latitude: number;
        longitude: number;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    summary?: string | undefined;
    isTemplate?: boolean | undefined;
    lastUsedAt?: import("../../types").Timestamp | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
}, {
    type: "location";
    name: string;
    tactics: import("../..").DocumentReferenceLike<unknown>[];
    trigger: {
        locationName: string;
        triggerType: "arrival" | "departure";
        latitude: number;
        longitude: number;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    summary?: string | undefined;
    isTemplate?: boolean | undefined;
    questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
    lastUsedAt?: import("../../types").Timestamp | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
}>>, z.ZodIntersection<z.ZodObject<{
    id: z.ZodString;
    _ref: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    _ref: import("../..").DocumentReferenceLike<unknown>;
}, {
    id: string;
    _ref: import("../..").DocumentReferenceLike<unknown>;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodType<"recap", z.ZodTypeDef, "recap">;
    ordinal: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodOptional<z.ZodBoolean>;
    summary: z.ZodOptional<z.ZodString>;
    tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
    questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>>;
    lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
} & {
    trigger: z.ZodObject<{
        hour: z.ZodNumber;
        minute: z.ZodNumber;
        weekdays: z.ZodArray<z.ZodNumber, "many">;
    }, "strip", z.ZodTypeAny, {
        hour: number;
        minute: number;
        weekdays: number[];
    }, {
        hour: number;
        minute: number;
        weekdays: number[];
    }>;
    questionIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
}, z.UnknownKeysParam, z.ZodTypeAny, {
    type: "recap";
    name: string;
    tactics: import("../..").DocumentReferenceLike<unknown>[];
    questions: import("../..").DocumentReferenceLike<unknown>[];
    trigger: {
        hour: number;
        minute: number;
        weekdays: number[];
    };
    questionIds: string[];
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    summary?: string | undefined;
    isTemplate?: boolean | undefined;
    lastUsedAt?: import("../../types").Timestamp | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
}, {
    type: "recap";
    name: string;
    tactics: import("../..").DocumentReferenceLike<unknown>[];
    trigger: {
        hour: number;
        minute: number;
        weekdays: number[];
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    summary?: string | undefined;
    isTemplate?: boolean | undefined;
    questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
    lastUsedAt?: import("../../types").Timestamp | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
    questionIds?: string[] | undefined;
}>>]>;
export declare const planIsTimePlan: (value: Plan) => value is TimePlan;
export declare const isValidTimePlan: (value: unknown) => value is TimePlan;
export declare const planIsRecapPlan: (value: Plan) => value is RecapPlan;
export declare const isValidRecapPlan: (value: unknown) => value is RecapPlan;
export declare const planIsLocationPlan: (value: Plan) => value is LocationPlan;
export declare const isValidLocationPlan: (value: unknown) => value is LocationPlan;
export declare const planIsImpulsePlan: (value: Plan) => value is ImpulsePlan;
export declare const isValidImpulsePlan: (value: unknown) => value is ImpulsePlan;

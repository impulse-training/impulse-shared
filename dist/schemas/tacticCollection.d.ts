import { z } from "zod";
/**
 * Where a generated collection came from. The Tactics screen builds
 * collections from evidence (a feeling's mix, "what's working") and the user
 * can save one as their own; `source` records that provenance so the screen
 * shows the saved copy in place of the generated one.
 */
export declare const tacticCollectionSourceSchema: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"feeling">;
    optionId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    kind: "feeling";
    optionId: string;
}, {
    kind: "feeling";
    optionId: string;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"working">;
}, "strip", z.ZodTypeAny, {
    kind: "working";
}, {
    kind: "working";
}>, z.ZodObject<{
    kind: z.ZodLiteral<"benefit">;
    need: z.ZodEnum<["relaxation", "stimulation", "escape", "connection", "control", "pleasure", "achievement", "boredom_relief", "comfort", "focus"]>;
    question: z.ZodString;
    feelingGroupId: z.ZodOptional<z.ZodString>;
    feelingOptionId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    need: "relaxation" | "stimulation" | "escape" | "connection" | "control" | "pleasure" | "achievement" | "boredom_relief" | "comfort" | "focus";
    question: string;
    kind: "benefit";
    feelingGroupId?: string | undefined;
    feelingOptionId?: string | undefined;
}, {
    need: "relaxation" | "stimulation" | "escape" | "connection" | "control" | "pleasure" | "achievement" | "boredom_relief" | "comfort" | "focus";
    question: string;
    kind: "benefit";
    feelingGroupId?: string | undefined;
    feelingOptionId?: string | undefined;
}>]>;
export type TacticCollectionSource = z.infer<typeof tacticCollectionSourceSchema>;
export declare const tacticCollectionSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    emoji: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tacticIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    items: z.ZodOptional<z.ZodArray<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">>;
    userHiddenTactics: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>>;
    createdByUid: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"feeling">;
        optionId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "feeling";
        optionId: string;
    }, {
        kind: "feeling";
        optionId: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"working">;
    }, "strip", z.ZodTypeAny, {
        kind: "working";
    }, {
        kind: "working";
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"benefit">;
        need: z.ZodEnum<["relaxation", "stimulation", "escape", "connection", "control", "pleasure", "achievement", "boredom_relief", "comfort", "focus"]>;
        question: z.ZodString;
        feelingGroupId: z.ZodOptional<z.ZodString>;
        feelingOptionId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        need: "relaxation" | "stimulation" | "escape" | "connection" | "control" | "pleasure" | "achievement" | "boredom_relief" | "comfort" | "focus";
        question: string;
        kind: "benefit";
        feelingGroupId?: string | undefined;
        feelingOptionId?: string | undefined;
    }, {
        need: "relaxation" | "stimulation" | "escape" | "connection" | "control" | "pleasure" | "achievement" | "boredom_relief" | "comfort" | "focus";
        question: string;
        kind: "benefit";
        feelingGroupId?: string | undefined;
        feelingOptionId?: string | undefined;
    }>]>>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    toppedUpTacticIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    toppedUpAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    tacticIds: string[];
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    source?: {
        kind: "feeling";
        optionId: string;
    } | {
        kind: "working";
    } | {
        need: "relaxation" | "stimulation" | "escape" | "connection" | "control" | "pleasure" | "achievement" | "boredom_relief" | "comfort" | "focus";
        question: string;
        kind: "benefit";
        feelingGroupId?: string | undefined;
        feelingOptionId?: string | undefined;
    } | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    createdByUid?: string | undefined;
    emoji?: string | undefined;
    items?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    userHiddenTactics?: Record<string, string[]> | undefined;
    toppedUpTacticIds?: string[] | undefined;
    toppedUpAt?: import("../types").Timestamp | undefined;
}, {
    name: string;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    source?: {
        kind: "feeling";
        optionId: string;
    } | {
        kind: "working";
    } | {
        need: "relaxation" | "stimulation" | "escape" | "connection" | "control" | "pleasure" | "achievement" | "boredom_relief" | "comfort" | "focus";
        question: string;
        kind: "benefit";
        feelingGroupId?: string | undefined;
        feelingOptionId?: string | undefined;
    } | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    createdByUid?: string | undefined;
    tacticIds?: string[] | undefined;
    emoji?: string | undefined;
    items?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    userHiddenTactics?: Record<string, string[]> | undefined;
    toppedUpTacticIds?: string[] | undefined;
    toppedUpAt?: import("../types").Timestamp | undefined;
}>;
export type TacticCollection = z.infer<typeof tacticCollectionSchema>;

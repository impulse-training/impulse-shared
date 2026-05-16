import { z } from "zod";
export declare const triggerPlanSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodType<"trigger", z.ZodTypeDef, "trigger">;
    ordinal: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodOptional<z.ZodBoolean>;
    summary: z.ZodOptional<z.ZodString>;
    tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
    tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>>;
    tags: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodNumber>>>;
    indications: z.ZodOptional<z.ZodObject<{
        tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
            tagGroupName: z.ZodString;
            optionLabels: z.ZodArray<z.ZodString, "many">;
            weight: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            weight: number;
            tagGroupName: string;
            optionLabels: string[];
        }, {
            weight: number;
            tagGroupName: string;
            optionLabels: string[];
        }>, "many">>;
        behaviorTemplateNames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        tags?: {
            weight: number;
            tagGroupName: string;
            optionLabels: string[];
        }[] | undefined;
        behaviorTemplateNames?: string[] | undefined;
    }, {
        tags?: {
            weight: number;
            tagGroupName: string;
            optionLabels: string[];
        }[] | undefined;
        behaviorTemplateNames?: string[] | undefined;
    }>>;
    isGenerated: z.ZodOptional<z.ZodBoolean>;
    generationSource: z.ZodOptional<z.ZodEnum<["impulse_debrief"]>>;
    generationSignature: z.ZodOptional<z.ZodString>;
    generatedFromTacticIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    generatedFromSessionCount: z.ZodOptional<z.ZodNumber>;
    planSteps: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"fixedTactic">;
        tacticRef: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
    }, "strip", z.ZodTypeAny, {
        type: "fixedTactic";
        tacticRef: import("../..").DocumentReferenceLike<unknown>;
    }, {
        type: "fixedTactic";
        tacticRef: import("../..").DocumentReferenceLike<unknown>;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"collectionPick">;
        collectionId: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "collectionPick";
        collectionId: string;
        label?: string | undefined;
    }, {
        type: "collectionPick";
        collectionId: string;
        label?: string | undefined;
    }>]>, "many">>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    numberOfUses: z.ZodOptional<z.ZodNumber>;
    numberOfSuccesses: z.ZodOptional<z.ZodNumber>;
    numberOfSetbacks: z.ZodOptional<z.ZodNumber>;
    lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
} & {
    isActive: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    type: "trigger";
    name: string;
    tactics: import("../..").DocumentReferenceLike<unknown>[];
    questions: import("../..").DocumentReferenceLike<unknown>[];
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    behaviorIds?: string[] | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    tags?: Record<string, Record<string, number>> | undefined;
    indications?: {
        tags?: {
            weight: number;
            tagGroupName: string;
            optionLabels: string[];
        }[] | undefined;
        behaviorTemplateNames?: string[] | undefined;
    } | undefined;
    summary?: string | undefined;
    isTemplate?: boolean | undefined;
    tacticsByPath?: Record<string, any> | undefined;
    isGenerated?: boolean | undefined;
    generationSource?: "impulse_debrief" | undefined;
    generationSignature?: string | undefined;
    generatedFromTacticIds?: string[] | undefined;
    generatedFromSessionCount?: number | undefined;
    planSteps?: ({
        type: "fixedTactic";
        tacticRef: import("../..").DocumentReferenceLike<unknown>;
    } | {
        type: "collectionPick";
        collectionId: string;
        label?: string | undefined;
    })[] | undefined;
    numberOfUses?: number | undefined;
    numberOfSuccesses?: number | undefined;
    numberOfSetbacks?: number | undefined;
    lastUsedAt?: import("../../types").Timestamp | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
    isActive?: boolean | undefined;
}, {
    type: "trigger";
    name: string;
    tactics: import("../..").DocumentReferenceLike<unknown>[];
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    behaviorIds?: string[] | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    tags?: Record<string, Record<string, number>> | undefined;
    indications?: {
        tags?: {
            weight: number;
            tagGroupName: string;
            optionLabels: string[];
        }[] | undefined;
        behaviorTemplateNames?: string[] | undefined;
    } | undefined;
    summary?: string | undefined;
    isTemplate?: boolean | undefined;
    tacticsByPath?: Record<string, any> | undefined;
    questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
    isGenerated?: boolean | undefined;
    generationSource?: "impulse_debrief" | undefined;
    generationSignature?: string | undefined;
    generatedFromTacticIds?: string[] | undefined;
    generatedFromSessionCount?: number | undefined;
    planSteps?: ({
        type: "fixedTactic";
        tacticRef: import("../..").DocumentReferenceLike<unknown>;
    } | {
        type: "collectionPick";
        collectionId: string;
        label?: string | undefined;
    })[] | undefined;
    numberOfUses?: number | undefined;
    numberOfSuccesses?: number | undefined;
    numberOfSetbacks?: number | undefined;
    lastUsedAt?: import("../../types").Timestamp | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
    isActive?: boolean | undefined;
}>;
export type TriggerPlan = z.infer<typeof triggerPlanSchema>;

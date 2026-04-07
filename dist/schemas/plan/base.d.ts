import { z } from "zod";
export declare const planTagIndicationSchema: z.ZodObject<{
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
}>;
export declare const planIndicationSchema: z.ZodObject<{
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
}>;
export declare function planBaseSchema<T extends string>(type: T): z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodType<T>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodOptional<z.ZodBoolean>;
    summary: z.ZodOptional<z.ZodString>;
    tactics: z.ZodArray<z.ZodType<import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">;
    tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">>>;
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
    numberOfUses: z.ZodOptional<z.ZodNumber>;
    numberOfSuccesses: z.ZodOptional<z.ZodNumber>;
    numberOfSetbacks: z.ZodOptional<z.ZodNumber>;
    lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
}, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodType<T>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodOptional<z.ZodBoolean>;
    summary: z.ZodOptional<z.ZodString>;
    tactics: z.ZodArray<z.ZodType<import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">;
    tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">>>;
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
    numberOfUses: z.ZodOptional<z.ZodNumber>;
    numberOfSuccesses: z.ZodOptional<z.ZodNumber>;
    numberOfSetbacks: z.ZodOptional<z.ZodNumber>;
    lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
}>, any> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodType<T>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodOptional<z.ZodBoolean>;
    summary: z.ZodOptional<z.ZodString>;
    tactics: z.ZodArray<z.ZodType<import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">;
    tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">>>;
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
    numberOfUses: z.ZodOptional<z.ZodNumber>;
    numberOfSuccesses: z.ZodOptional<z.ZodNumber>;
    numberOfSetbacks: z.ZodOptional<z.ZodNumber>;
    lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
}>, any>[k]; } : never, z.baseObjectInputType<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodType<T>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodOptional<z.ZodBoolean>;
    summary: z.ZodOptional<z.ZodString>;
    tactics: z.ZodArray<z.ZodType<import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">;
    tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">>>;
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
    numberOfUses: z.ZodOptional<z.ZodNumber>;
    numberOfSuccesses: z.ZodOptional<z.ZodNumber>;
    numberOfSetbacks: z.ZodOptional<z.ZodNumber>;
    lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
}> extends infer T_2 ? { [k_1 in keyof T_2]: z.baseObjectInputType<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodType<T>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodOptional<z.ZodBoolean>;
    summary: z.ZodOptional<z.ZodString>;
    tactics: z.ZodArray<z.ZodType<import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">;
    tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">>>;
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
    numberOfUses: z.ZodOptional<z.ZodNumber>;
    numberOfSuccesses: z.ZodOptional<z.ZodNumber>;
    numberOfSetbacks: z.ZodOptional<z.ZodNumber>;
    lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
}>[k_1]; } : never>;

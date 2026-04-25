import { z } from "zod";
export declare const plansLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    sessionId: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    impulseId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"plans">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        source: z.ZodUnion<[z.ZodLiteral<"trigger">, z.ZodLiteral<"scheduled">, z.ZodLiteral<"tags">, z.ZodLiteral<"improvised">]>;
        mode: z.ZodOptional<z.ZodEnum<["live", "planning"]>>;
        triggerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        plans: z.ZodArray<z.ZodObject<{
            planId: z.ZodString;
            plan: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
                numberOfUses: z.ZodOptional<z.ZodNumber>;
                numberOfSuccesses: z.ZodOptional<z.ZodNumber>;
                numberOfSetbacks: z.ZodOptional<z.ZodNumber>;
                lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            } & {
                isActive: z.ZodOptional<z.ZodBoolean>;
            }, z.UnknownKeysParam, z.ZodTypeAny, {
                type: "trigger";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                questions: import("../..").DocumentReferenceLike<unknown>[];
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                numberOfUses?: number | undefined;
                numberOfSuccesses?: number | undefined;
                numberOfSetbacks?: number | undefined;
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
                type: z.ZodType<"scheduled", z.ZodTypeDef, "scheduled">;
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
                numberOfUses: z.ZodOptional<z.ZodNumber>;
                numberOfSuccesses: z.ZodOptional<z.ZodNumber>;
                numberOfSetbacks: z.ZodOptional<z.ZodNumber>;
                lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            } & {
                hour: z.ZodNumber;
                minute: z.ZodNumber;
                weekdays: z.ZodArray<z.ZodNumber, "many">;
            }, z.UnknownKeysParam, z.ZodTypeAny, {
                type: "scheduled";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                questions: import("../..").DocumentReferenceLike<unknown>[];
                hour: number;
                minute: number;
                weekdays: number[];
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                numberOfUses?: number | undefined;
                numberOfSuccesses?: number | undefined;
                numberOfSetbacks?: number | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }, {
                type: "scheduled";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                hour: number;
                minute: number;
                weekdays: number[];
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                numberOfUses?: number | undefined;
                numberOfSuccesses?: number | undefined;
                numberOfSetbacks?: number | undefined;
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
                type: z.ZodType<"default", z.ZodTypeDef, "default">;
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
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            } & {
                lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                numberOfUses: z.ZodDefault<z.ZodNumber>;
                numberOfSuccesses: z.ZodDefault<z.ZodNumber>;
                numberOfSetbacks: z.ZodDefault<z.ZodNumber>;
                isActive: z.ZodOptional<z.ZodBoolean>;
            }, z.UnknownKeysParam, z.ZodTypeAny, {
                type: "default";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                questions: import("../..").DocumentReferenceLike<unknown>[];
                numberOfUses: number;
                numberOfSuccesses: number;
                numberOfSetbacks: number;
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                isActive?: boolean | undefined;
            }, {
                type: "default";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                numberOfUses?: number | undefined;
                numberOfSuccesses?: number | undefined;
                numberOfSetbacks?: number | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                isActive?: boolean | undefined;
            }>>]>;
            startedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            completedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        }, "strip", z.ZodTypeAny, {
            plan: ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "trigger";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                questions: import("../..").DocumentReferenceLike<unknown>[];
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                numberOfUses?: number | undefined;
                numberOfSuccesses?: number | undefined;
                numberOfSetbacks?: number | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                isActive?: boolean | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "scheduled";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                questions: import("../..").DocumentReferenceLike<unknown>[];
                hour: number;
                minute: number;
                weekdays: number[];
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                numberOfUses?: number | undefined;
                numberOfSuccesses?: number | undefined;
                numberOfSetbacks?: number | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "default";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                questions: import("../..").DocumentReferenceLike<unknown>[];
                numberOfUses: number;
                numberOfSuccesses: number;
                numberOfSetbacks: number;
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                isActive?: boolean | undefined;
            });
            planId: string;
            startedAt?: import("../../types").Timestamp | undefined;
            completedAt?: import("../../types").Timestamp | undefined;
        }, {
            plan: ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "trigger";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                numberOfUses?: number | undefined;
                numberOfSuccesses?: number | undefined;
                numberOfSetbacks?: number | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                isActive?: boolean | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "scheduled";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                hour: number;
                minute: number;
                weekdays: number[];
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                numberOfUses?: number | undefined;
                numberOfSuccesses?: number | undefined;
                numberOfSetbacks?: number | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "default";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                numberOfUses?: number | undefined;
                numberOfSuccesses?: number | undefined;
                numberOfSetbacks?: number | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                isActive?: boolean | undefined;
            });
            planId: string;
            startedAt?: import("../../types").Timestamp | undefined;
            completedAt?: import("../../types").Timestamp | undefined;
        }>, "many">;
        activeIndex: z.ZodOptional<z.ZodNumber>;
        acceptedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    }, "strip", z.ZodTypeAny, {
        source: "scheduled" | "tags" | "trigger" | "improvised";
        plans: {
            plan: ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "trigger";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                questions: import("../..").DocumentReferenceLike<unknown>[];
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                numberOfUses?: number | undefined;
                numberOfSuccesses?: number | undefined;
                numberOfSetbacks?: number | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                isActive?: boolean | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "scheduled";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                questions: import("../..").DocumentReferenceLike<unknown>[];
                hour: number;
                minute: number;
                weekdays: number[];
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                numberOfUses?: number | undefined;
                numberOfSuccesses?: number | undefined;
                numberOfSetbacks?: number | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "default";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                questions: import("../..").DocumentReferenceLike<unknown>[];
                numberOfUses: number;
                numberOfSuccesses: number;
                numberOfSetbacks: number;
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                isActive?: boolean | undefined;
            });
            planId: string;
            startedAt?: import("../../types").Timestamp | undefined;
            completedAt?: import("../../types").Timestamp | undefined;
        }[];
        mode?: "live" | "planning" | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        triggerId?: string | null | undefined;
        activeIndex?: number | undefined;
    }, {
        source: "scheduled" | "tags" | "trigger" | "improvised";
        plans: {
            plan: ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "trigger";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                numberOfUses?: number | undefined;
                numberOfSuccesses?: number | undefined;
                numberOfSetbacks?: number | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                isActive?: boolean | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "scheduled";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                hour: number;
                minute: number;
                weekdays: number[];
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                numberOfUses?: number | undefined;
                numberOfSuccesses?: number | undefined;
                numberOfSetbacks?: number | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "default";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                numberOfUses?: number | undefined;
                numberOfSuccesses?: number | undefined;
                numberOfSetbacks?: number | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                isActive?: boolean | undefined;
            });
            planId: string;
            startedAt?: import("../../types").Timestamp | undefined;
            completedAt?: import("../../types").Timestamp | undefined;
        }[];
        mode?: "live" | "planning" | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        triggerId?: string | null | undefined;
        activeIndex?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "plans";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        source: "scheduled" | "tags" | "trigger" | "improvised";
        plans: {
            plan: ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "trigger";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                questions: import("../..").DocumentReferenceLike<unknown>[];
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                numberOfUses?: number | undefined;
                numberOfSuccesses?: number | undefined;
                numberOfSetbacks?: number | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                isActive?: boolean | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "scheduled";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                questions: import("../..").DocumentReferenceLike<unknown>[];
                hour: number;
                minute: number;
                weekdays: number[];
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                numberOfUses?: number | undefined;
                numberOfSuccesses?: number | undefined;
                numberOfSetbacks?: number | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "default";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                questions: import("../..").DocumentReferenceLike<unknown>[];
                numberOfUses: number;
                numberOfSuccesses: number;
                numberOfSetbacks: number;
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                isActive?: boolean | undefined;
            });
            planId: string;
            startedAt?: import("../../types").Timestamp | undefined;
            completedAt?: import("../../types").Timestamp | undefined;
        }[];
        mode?: "live" | "planning" | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        triggerId?: string | null | undefined;
        activeIndex?: number | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "plans";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        source: "scheduled" | "tags" | "trigger" | "improvised";
        plans: {
            plan: ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "trigger";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                numberOfUses?: number | undefined;
                numberOfSuccesses?: number | undefined;
                numberOfSetbacks?: number | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                isActive?: boolean | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "scheduled";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                hour: number;
                minute: number;
                weekdays: number[];
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                numberOfUses?: number | undefined;
                numberOfSuccesses?: number | undefined;
                numberOfSetbacks?: number | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "default";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                numberOfUses?: number | undefined;
                numberOfSuccesses?: number | undefined;
                numberOfSetbacks?: number | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                isActive?: boolean | undefined;
            });
            planId: string;
            startedAt?: import("../../types").Timestamp | undefined;
            completedAt?: import("../../types").Timestamp | undefined;
        }[];
        mode?: "live" | "planning" | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        triggerId?: string | null | undefined;
        activeIndex?: number | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
}>;
export type PlansLog = z.infer<typeof plansLogSchema>;

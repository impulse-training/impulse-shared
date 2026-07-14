import { z } from "zod";
declare const strategyTriggerDraftSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tags: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>>;
    triggerType: z.ZodOptional<z.ZodEnum<["arrival", "departure"]>>;
    locationName: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    tags: Record<string, string | string[]>;
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    title?: string | undefined;
    triggerType?: "arrival" | "departure" | undefined;
    locationName?: string | undefined;
}, {
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    title?: string | undefined;
    tags?: Record<string, string | string[]> | undefined;
    triggerType?: "arrival" | "departure" | undefined;
    locationName?: string | undefined;
}>;
declare const strategyPlanDraftSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    tacticIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    newTactics: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        phase: z.ZodOptional<z.ZodEnum<["regulate", "shift", "reengage"]>>;
        links: z.ZodOptional<z.ZodArray<z.ZodObject<{
            url: z.ZodString;
            title: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            domain: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            url: string;
            title?: string | undefined;
            imageUrl?: string | undefined;
            domain?: string | undefined;
        }, {
            url: string;
            title?: string | undefined;
            imageUrl?: string | undefined;
            domain?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        description?: string | undefined;
        links?: {
            url: string;
            title?: string | undefined;
            imageUrl?: string | undefined;
            domain?: string | undefined;
        }[] | undefined;
        phase?: "shift" | "regulate" | "reengage" | undefined;
    }, {
        title: string;
        description?: string | undefined;
        links?: {
            url: string;
            title?: string | undefined;
            imageUrl?: string | undefined;
            domain?: string | undefined;
        }[] | undefined;
        phase?: "shift" | "regulate" | "reengage" | undefined;
    }>, "many">>;
    planType: z.ZodOptional<z.ZodEnum<["trigger", "scheduled"]>>;
    hour: z.ZodOptional<z.ZodNumber>;
    minute: z.ZodOptional<z.ZodNumber>;
    weekdays: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    tacticIds: string[];
    id?: string | undefined;
    newTactics?: {
        title: string;
        description?: string | undefined;
        links?: {
            url: string;
            title?: string | undefined;
            imageUrl?: string | undefined;
            domain?: string | undefined;
        }[] | undefined;
        phase?: "shift" | "regulate" | "reengage" | undefined;
    }[] | undefined;
    planType?: "scheduled" | "trigger" | undefined;
    hour?: number | undefined;
    minute?: number | undefined;
    weekdays?: number[] | undefined;
}, {
    name: string;
    id?: string | undefined;
    tacticIds?: string[] | undefined;
    newTactics?: {
        title: string;
        description?: string | undefined;
        links?: {
            url: string;
            title?: string | undefined;
            imageUrl?: string | undefined;
            domain?: string | undefined;
        }[] | undefined;
        phase?: "shift" | "regulate" | "reengage" | undefined;
    }[] | undefined;
    planType?: "scheduled" | "trigger" | undefined;
    hour?: number | undefined;
    minute?: number | undefined;
    weekdays?: number[] | undefined;
}>;
export declare const createTriggerStrategyOperationSchema: z.ZodObject<{
    type: z.ZodLiteral<"create_trigger">;
    clientId: z.ZodString;
    trigger: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        tags: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>>;
        triggerType: z.ZodOptional<z.ZodEnum<["arrival", "departure"]>>;
        locationName: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        tags: Record<string, string | string[]>;
        id?: string | undefined;
        behaviorIds?: string[] | undefined;
        title?: string | undefined;
        triggerType?: "arrival" | "departure" | undefined;
        locationName?: string | undefined;
    }, {
        id?: string | undefined;
        behaviorIds?: string[] | undefined;
        title?: string | undefined;
        tags?: Record<string, string | string[]> | undefined;
        triggerType?: "arrival" | "departure" | undefined;
        locationName?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "create_trigger";
    trigger: {
        tags: Record<string, string | string[]>;
        id?: string | undefined;
        behaviorIds?: string[] | undefined;
        title?: string | undefined;
        triggerType?: "arrival" | "departure" | undefined;
        locationName?: string | undefined;
    };
    clientId: string;
}, {
    type: "create_trigger";
    trigger: {
        id?: string | undefined;
        behaviorIds?: string[] | undefined;
        title?: string | undefined;
        tags?: Record<string, string | string[]> | undefined;
        triggerType?: "arrival" | "departure" | undefined;
        locationName?: string | undefined;
    };
    clientId: string;
}>;
export declare const createPlanStrategyOperationSchema: z.ZodObject<{
    type: z.ZodLiteral<"create_plan">;
    triggerClientId: z.ZodOptional<z.ZodString>;
    existingTriggerId: z.ZodOptional<z.ZodString>;
    existingBehaviorId: z.ZodOptional<z.ZodString>;
    plan: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        tacticIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        newTactics: z.ZodOptional<z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            phase: z.ZodOptional<z.ZodEnum<["regulate", "shift", "reengage"]>>;
            links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                url: z.ZodString;
                title: z.ZodOptional<z.ZodString>;
                imageUrl: z.ZodOptional<z.ZodString>;
                domain: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }, {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            description?: string | undefined;
            links?: {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }[] | undefined;
            phase?: "shift" | "regulate" | "reengage" | undefined;
        }, {
            title: string;
            description?: string | undefined;
            links?: {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }[] | undefined;
            phase?: "shift" | "regulate" | "reengage" | undefined;
        }>, "many">>;
        planType: z.ZodOptional<z.ZodEnum<["trigger", "scheduled"]>>;
        hour: z.ZodOptional<z.ZodNumber>;
        minute: z.ZodOptional<z.ZodNumber>;
        weekdays: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        tacticIds: string[];
        id?: string | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
            links?: {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }[] | undefined;
            phase?: "shift" | "regulate" | "reengage" | undefined;
        }[] | undefined;
        planType?: "scheduled" | "trigger" | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        weekdays?: number[] | undefined;
    }, {
        name: string;
        id?: string | undefined;
        tacticIds?: string[] | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
            links?: {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }[] | undefined;
            phase?: "shift" | "regulate" | "reengage" | undefined;
        }[] | undefined;
        planType?: "scheduled" | "trigger" | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        weekdays?: number[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "create_plan";
    plan: {
        name: string;
        tacticIds: string[];
        id?: string | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
            links?: {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }[] | undefined;
            phase?: "shift" | "regulate" | "reengage" | undefined;
        }[] | undefined;
        planType?: "scheduled" | "trigger" | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        weekdays?: number[] | undefined;
    };
    triggerClientId?: string | undefined;
    existingTriggerId?: string | undefined;
    existingBehaviorId?: string | undefined;
}, {
    type: "create_plan";
    plan: {
        name: string;
        id?: string | undefined;
        tacticIds?: string[] | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
            links?: {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }[] | undefined;
            phase?: "shift" | "regulate" | "reengage" | undefined;
        }[] | undefined;
        planType?: "scheduled" | "trigger" | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        weekdays?: number[] | undefined;
    };
    triggerClientId?: string | undefined;
    existingTriggerId?: string | undefined;
    existingBehaviorId?: string | undefined;
}>;
export declare const setBehaviorGoalStrategyOperationSchema: z.ZodObject<{
    type: z.ZodLiteral<"set_behavior_goal">;
    behaviorId: z.ZodString;
    goal: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
            3: number;
            5: number;
            6: number;
            4: number;
        }, {
            0: number;
            1: number;
            2: number;
            3: number;
            5: number;
            6: number;
            4: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "reduceIndividualDays";
        dailyTargets: {
            0: number;
            1: number;
            2: number;
            3: number;
            5: number;
            6: number;
            4: number;
        };
    }, {
        type: "reduceIndividualDays";
        dailyTargets: {
            0: number;
            1: number;
            2: number;
            3: number;
            5: number;
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
}, "strip", z.ZodTypeAny, {
    type: "set_behavior_goal";
    behaviorId: string;
    goal: {
        type: "eliminate";
    } | {
        type: "reduceEveryDay";
        target: number;
    } | {
        type: "reduceIndividualDays";
        dailyTargets: {
            0: number;
            1: number;
            2: number;
            3: number;
            5: number;
            6: number;
            4: number;
        };
    } | {
        type: "contain";
        allowedWindows: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        }[];
    };
}, {
    type: "set_behavior_goal";
    behaviorId: string;
    goal: {
        type: "eliminate";
    } | {
        type: "reduceEveryDay";
        target: number;
    } | {
        type: "reduceIndividualDays";
        dailyTargets: {
            0: number;
            1: number;
            2: number;
            3: number;
            5: number;
            6: number;
            4: number;
        };
    } | {
        type: "contain";
        allowedWindows: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        }[];
    };
}>;
export declare const strategyModificationOperationSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"create_trigger">;
    clientId: z.ZodString;
    trigger: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        tags: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>>;
        triggerType: z.ZodOptional<z.ZodEnum<["arrival", "departure"]>>;
        locationName: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        tags: Record<string, string | string[]>;
        id?: string | undefined;
        behaviorIds?: string[] | undefined;
        title?: string | undefined;
        triggerType?: "arrival" | "departure" | undefined;
        locationName?: string | undefined;
    }, {
        id?: string | undefined;
        behaviorIds?: string[] | undefined;
        title?: string | undefined;
        tags?: Record<string, string | string[]> | undefined;
        triggerType?: "arrival" | "departure" | undefined;
        locationName?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "create_trigger";
    trigger: {
        tags: Record<string, string | string[]>;
        id?: string | undefined;
        behaviorIds?: string[] | undefined;
        title?: string | undefined;
        triggerType?: "arrival" | "departure" | undefined;
        locationName?: string | undefined;
    };
    clientId: string;
}, {
    type: "create_trigger";
    trigger: {
        id?: string | undefined;
        behaviorIds?: string[] | undefined;
        title?: string | undefined;
        tags?: Record<string, string | string[]> | undefined;
        triggerType?: "arrival" | "departure" | undefined;
        locationName?: string | undefined;
    };
    clientId: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"create_plan">;
    triggerClientId: z.ZodOptional<z.ZodString>;
    existingTriggerId: z.ZodOptional<z.ZodString>;
    existingBehaviorId: z.ZodOptional<z.ZodString>;
    plan: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        tacticIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        newTactics: z.ZodOptional<z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            phase: z.ZodOptional<z.ZodEnum<["regulate", "shift", "reengage"]>>;
            links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                url: z.ZodString;
                title: z.ZodOptional<z.ZodString>;
                imageUrl: z.ZodOptional<z.ZodString>;
                domain: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }, {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            description?: string | undefined;
            links?: {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }[] | undefined;
            phase?: "shift" | "regulate" | "reengage" | undefined;
        }, {
            title: string;
            description?: string | undefined;
            links?: {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }[] | undefined;
            phase?: "shift" | "regulate" | "reengage" | undefined;
        }>, "many">>;
        planType: z.ZodOptional<z.ZodEnum<["trigger", "scheduled"]>>;
        hour: z.ZodOptional<z.ZodNumber>;
        minute: z.ZodOptional<z.ZodNumber>;
        weekdays: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        tacticIds: string[];
        id?: string | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
            links?: {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }[] | undefined;
            phase?: "shift" | "regulate" | "reengage" | undefined;
        }[] | undefined;
        planType?: "scheduled" | "trigger" | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        weekdays?: number[] | undefined;
    }, {
        name: string;
        id?: string | undefined;
        tacticIds?: string[] | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
            links?: {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }[] | undefined;
            phase?: "shift" | "regulate" | "reengage" | undefined;
        }[] | undefined;
        planType?: "scheduled" | "trigger" | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        weekdays?: number[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "create_plan";
    plan: {
        name: string;
        tacticIds: string[];
        id?: string | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
            links?: {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }[] | undefined;
            phase?: "shift" | "regulate" | "reengage" | undefined;
        }[] | undefined;
        planType?: "scheduled" | "trigger" | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        weekdays?: number[] | undefined;
    };
    triggerClientId?: string | undefined;
    existingTriggerId?: string | undefined;
    existingBehaviorId?: string | undefined;
}, {
    type: "create_plan";
    plan: {
        name: string;
        id?: string | undefined;
        tacticIds?: string[] | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
            links?: {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }[] | undefined;
            phase?: "shift" | "regulate" | "reengage" | undefined;
        }[] | undefined;
        planType?: "scheduled" | "trigger" | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        weekdays?: number[] | undefined;
    };
    triggerClientId?: string | undefined;
    existingTriggerId?: string | undefined;
    existingBehaviorId?: string | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"set_behavior_goal">;
    behaviorId: z.ZodString;
    goal: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
            3: number;
            5: number;
            6: number;
            4: number;
        }, {
            0: number;
            1: number;
            2: number;
            3: number;
            5: number;
            6: number;
            4: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "reduceIndividualDays";
        dailyTargets: {
            0: number;
            1: number;
            2: number;
            3: number;
            5: number;
            6: number;
            4: number;
        };
    }, {
        type: "reduceIndividualDays";
        dailyTargets: {
            0: number;
            1: number;
            2: number;
            3: number;
            5: number;
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
}, "strip", z.ZodTypeAny, {
    type: "set_behavior_goal";
    behaviorId: string;
    goal: {
        type: "eliminate";
    } | {
        type: "reduceEveryDay";
        target: number;
    } | {
        type: "reduceIndividualDays";
        dailyTargets: {
            0: number;
            1: number;
            2: number;
            3: number;
            5: number;
            6: number;
            4: number;
        };
    } | {
        type: "contain";
        allowedWindows: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        }[];
    };
}, {
    type: "set_behavior_goal";
    behaviorId: string;
    goal: {
        type: "eliminate";
    } | {
        type: "reduceEveryDay";
        target: number;
    } | {
        type: "reduceIndividualDays";
        dailyTargets: {
            0: number;
            1: number;
            2: number;
            3: number;
            5: number;
            6: number;
            4: number;
        };
    } | {
        type: "contain";
        allowedWindows: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        }[];
    };
}>]>;
export declare const proposedStrategyModificationLogSchema: z.ZodObject<{
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
    respondingToLogId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"proposed_strategy_modification">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        title: z.ZodString;
        summary: z.ZodOptional<z.ZodString>;
        status: z.ZodDefault<z.ZodEnum<["pending", "accepted", "declined", "superseded"]>>;
        operations: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"create_trigger">;
            clientId: z.ZodString;
            trigger: z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodString>;
                behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                tags: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>>;
                triggerType: z.ZodOptional<z.ZodEnum<["arrival", "departure"]>>;
                locationName: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                tags: Record<string, string | string[]>;
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            }, {
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string | string[]> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "create_trigger";
            trigger: {
                tags: Record<string, string | string[]>;
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        }, {
            type: "create_trigger";
            trigger: {
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string | string[]> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"create_plan">;
            triggerClientId: z.ZodOptional<z.ZodString>;
            existingTriggerId: z.ZodOptional<z.ZodString>;
            existingBehaviorId: z.ZodOptional<z.ZodString>;
            plan: z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
                tacticIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                newTactics: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                    phase: z.ZodOptional<z.ZodEnum<["regulate", "shift", "reengage"]>>;
                    links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        url: z.ZodString;
                        title: z.ZodOptional<z.ZodString>;
                        imageUrl: z.ZodOptional<z.ZodString>;
                        domain: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }, {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }, {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }>, "many">>;
                planType: z.ZodOptional<z.ZodEnum<["trigger", "scheduled"]>>;
                hour: z.ZodOptional<z.ZodNumber>;
                minute: z.ZodOptional<z.ZodNumber>;
                weekdays: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                tacticIds: string[];
                id?: string | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            }, {
                name: string;
                id?: string | undefined;
                tacticIds?: string[] | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "create_plan";
            plan: {
                name: string;
                tacticIds: string[];
                id?: string | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
            existingBehaviorId?: string | undefined;
        }, {
            type: "create_plan";
            plan: {
                name: string;
                id?: string | undefined;
                tacticIds?: string[] | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
            existingBehaviorId?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"set_behavior_goal">;
            behaviorId: z.ZodString;
            goal: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                }, {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            }, {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
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
        }, "strip", z.ZodTypeAny, {
            type: "set_behavior_goal";
            behaviorId: string;
            goal: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            } | {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            };
        }, {
            type: "set_behavior_goal";
            behaviorId: string;
            goal: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            } | {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            };
        }>]>, "many">;
        acceptedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        declinedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        /** The suggest_strategy session task this proposal realizes (weekly queue). */
        sourceTaskId: z.ZodOptional<z.ZodString>;
        /**
         * When the user chose "Talk it through" (or resolved the proposal), making
         * the card visible in the session thread. A pending, unrevealed proposal is
         * hidden — it's only reachable via the [SHOW_STRATEGY] full-screen view.
         */
        revealedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        /**
         * Revision lineage: a revision is a NEW pending log (append-only — the
         * thread stays temporally honest); the one it replaces is marked
         * "superseded" and points forward is not needed — this points BACK.
         */
        revision: z.ZodOptional<z.ZodNumber>;
        supersedesLogId: z.ZodOptional<z.ZodString>;
        supersededAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        createdTriggerIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        createdPlanIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        updatedBehaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        status: "declined" | "pending" | "accepted" | "superseded";
        title: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                tags: Record<string, string | string[]>;
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                tacticIds: string[];
                id?: string | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
            existingBehaviorId?: string | undefined;
        } | {
            type: "set_behavior_goal";
            behaviorId: string;
            goal: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            } | {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            };
        })[];
        summary?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        declinedAt?: import("../../types").Timestamp | undefined;
        sourceTaskId?: string | undefined;
        revealedAt?: import("../../types").Timestamp | undefined;
        revision?: number | undefined;
        supersedesLogId?: string | undefined;
        supersededAt?: import("../../types").Timestamp | undefined;
        createdTriggerIds?: string[] | undefined;
        createdPlanIds?: string[] | undefined;
        updatedBehaviorIds?: string[] | undefined;
    }, {
        title: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string | string[]> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                id?: string | undefined;
                tacticIds?: string[] | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
            existingBehaviorId?: string | undefined;
        } | {
            type: "set_behavior_goal";
            behaviorId: string;
            goal: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            } | {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            };
        })[];
        status?: "declined" | "pending" | "accepted" | "superseded" | undefined;
        summary?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        declinedAt?: import("../../types").Timestamp | undefined;
        sourceTaskId?: string | undefined;
        revealedAt?: import("../../types").Timestamp | undefined;
        revision?: number | undefined;
        supersedesLogId?: string | undefined;
        supersededAt?: import("../../types").Timestamp | undefined;
        createdTriggerIds?: string[] | undefined;
        createdPlanIds?: string[] | undefined;
        updatedBehaviorIds?: string[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "proposed_strategy_modification";
    userId: string;
    sessionId: string;
    dateString: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        status: "declined" | "pending" | "accepted" | "superseded";
        title: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                tags: Record<string, string | string[]>;
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                tacticIds: string[];
                id?: string | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
            existingBehaviorId?: string | undefined;
        } | {
            type: "set_behavior_goal";
            behaviorId: string;
            goal: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            } | {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            };
        })[];
        summary?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        declinedAt?: import("../../types").Timestamp | undefined;
        sourceTaskId?: string | undefined;
        revealedAt?: import("../../types").Timestamp | undefined;
        revision?: number | undefined;
        supersedesLogId?: string | undefined;
        supersededAt?: import("../../types").Timestamp | undefined;
        createdTriggerIds?: string[] | undefined;
        createdPlanIds?: string[] | undefined;
        updatedBehaviorIds?: string[] | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    respondingToLogId?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "proposed_strategy_modification";
    userId: string;
    sessionId: string;
    dateString: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        title: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string | string[]> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                id?: string | undefined;
                tacticIds?: string[] | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
            existingBehaviorId?: string | undefined;
        } | {
            type: "set_behavior_goal";
            behaviorId: string;
            goal: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            } | {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            };
        })[];
        status?: "declined" | "pending" | "accepted" | "superseded" | undefined;
        summary?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        declinedAt?: import("../../types").Timestamp | undefined;
        sourceTaskId?: string | undefined;
        revealedAt?: import("../../types").Timestamp | undefined;
        revision?: number | undefined;
        supersedesLogId?: string | undefined;
        supersededAt?: import("../../types").Timestamp | undefined;
        createdTriggerIds?: string[] | undefined;
        createdPlanIds?: string[] | undefined;
        updatedBehaviorIds?: string[] | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    respondingToLogId?: string | undefined;
}>;
export type StrategyTriggerDraft = z.infer<typeof strategyTriggerDraftSchema>;
export type StrategyPlanDraft = z.infer<typeof strategyPlanDraftSchema>;
export type CreateTriggerStrategyOperation = z.infer<typeof createTriggerStrategyOperationSchema>;
export type CreatePlanStrategyOperation = z.infer<typeof createPlanStrategyOperationSchema>;
export type SetBehaviorGoalStrategyOperation = z.infer<typeof setBehaviorGoalStrategyOperationSchema>;
export type StrategyModificationOperation = z.infer<typeof strategyModificationOperationSchema>;
export type ProposedStrategyModificationLog = z.infer<typeof proposedStrategyModificationLogSchema>;
export {};

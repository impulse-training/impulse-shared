import { z } from "zod";
export declare const chatCompletionMessageSchema: z.ZodObject<{
    role: z.ZodEnum<["assistant", "user", "system", "tool"]>;
    content: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull, z.ZodArray<z.ZodAny, "many">]>>;
    tool_call_id: z.ZodOptional<z.ZodString>;
    tool_calls: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodLiteral<"function">;
        function: z.ZodObject<{
            name: z.ZodString;
            arguments: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            arguments: string;
        }, {
            name: string;
            arguments: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }, {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }>, "many">>;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    role: "assistant" | "user" | "system" | "tool";
    name?: string | undefined;
    content?: string | any[] | null | undefined;
    tool_call_id?: string | undefined;
    tool_calls?: {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }[] | undefined;
}, {
    role: "assistant" | "user" | "system" | "tool";
    name?: string | undefined;
    content?: string | any[] | null | undefined;
    tool_call_id?: string | undefined;
    tool_calls?: {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }[] | undefined;
}>;
export declare const toolCallLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
    replyTactic: z.ZodOptional<z.ZodObject<{
        tactic: z.ZodAny;
        currentStepIndex: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        currentStepIndex: number;
        tactic?: any;
    }, {
        currentStepIndex: number;
        tactic?: any;
    }>>;
} & {
    isDisplayable: z.ZodLiteral<false>;
    type: z.ZodLiteral<"tool_call">;
    data: z.ZodObject<{
        message: z.ZodObject<{
            role: z.ZodEnum<["assistant", "user", "system", "tool"]>;
            content: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull, z.ZodArray<z.ZodAny, "many">]>>;
            tool_call_id: z.ZodOptional<z.ZodString>;
            tool_calls: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                type: z.ZodLiteral<"function">;
                function: z.ZodObject<{
                    name: z.ZodString;
                    arguments: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    arguments: string;
                }, {
                    name: string;
                    arguments: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                function: {
                    name: string;
                    arguments: string;
                };
                type: "function";
                id: string;
            }, {
                function: {
                    name: string;
                    arguments: string;
                };
                type: "function";
                id: string;
            }>, "many">>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            role: "assistant" | "user" | "system" | "tool";
            name?: string | undefined;
            content?: string | any[] | null | undefined;
            tool_call_id?: string | undefined;
            tool_calls?: {
                function: {
                    name: string;
                    arguments: string;
                };
                type: "function";
                id: string;
            }[] | undefined;
        }, {
            role: "assistant" | "user" | "system" | "tool";
            name?: string | undefined;
            content?: string | any[] | null | undefined;
            tool_call_id?: string | undefined;
            tool_calls?: {
                function: {
                    name: string;
                    arguments: string;
                };
                type: "function";
                id: string;
            }[] | undefined;
        }>;
        toolCallResults: z.ZodArray<z.ZodAny, "many">;
    }, "strip", z.ZodTypeAny, {
        message: {
            role: "assistant" | "user" | "system" | "tool";
            name?: string | undefined;
            content?: string | any[] | null | undefined;
            tool_call_id?: string | undefined;
            tool_calls?: {
                function: {
                    name: string;
                    arguments: string;
                };
                type: "function";
                id: string;
            }[] | undefined;
        };
        toolCallResults: any[];
    }, {
        message: {
            role: "assistant" | "user" | "system" | "tool";
            name?: string | undefined;
            content?: string | any[] | null | undefined;
            tool_call_id?: string | undefined;
            tool_calls?: {
                function: {
                    name: string;
                    arguments: string;
                };
                type: "function";
                id: string;
            }[] | undefined;
        };
        toolCallResults: any[];
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "tool_call";
    userId: string;
    dateString: string;
    isDisplayable: false;
    data: {
        message: {
            role: "assistant" | "user" | "system" | "tool";
            name?: string | undefined;
            content?: string | any[] | null | undefined;
            tool_call_id?: string | undefined;
            tool_calls?: {
                function: {
                    name: string;
                    arguments: string;
                };
                type: "function";
                id: string;
            }[] | undefined;
        };
        toolCallResults: any[];
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "tool_call";
    userId: string;
    dateString: string;
    isDisplayable: false;
    data: {
        message: {
            role: "assistant" | "user" | "system" | "tool";
            name?: string | undefined;
            content?: string | any[] | null | undefined;
            tool_call_id?: string | undefined;
            tool_calls?: {
                function: {
                    name: string;
                    arguments: string;
                };
                type: "function";
                id: string;
            }[] | undefined;
        };
        toolCallResults: any[];
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>;
export type ToolCallLog = z.infer<typeof toolCallLogSchema>;
export type ToolCallResult = any;
export type ChatCompletionMessageLike = z.infer<typeof chatCompletionMessageSchema>;

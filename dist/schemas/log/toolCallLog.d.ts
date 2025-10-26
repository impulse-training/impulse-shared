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
        id: string;
        type: "function";
    }, {
        function: {
            name: string;
            arguments: string;
        };
        id: string;
        type: "function";
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
        id: string;
        type: "function";
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
        id: string;
        type: "function";
    }[] | undefined;
}>;
export declare const toolCallLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    dateString: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    callLogDocPath: z.ZodOptional<z.ZodString>;
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
                id: string;
                type: "function";
            }, {
                function: {
                    name: string;
                    arguments: string;
                };
                id: string;
                type: "function";
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
                id: string;
                type: "function";
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
                id: string;
                type: "function";
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
                id: string;
                type: "function";
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
                id: string;
                type: "function";
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
                id: string;
                type: "function";
            }[] | undefined;
        };
        toolCallResults: any[];
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    callLogDocPath?: string | undefined;
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
                id: string;
                type: "function";
            }[] | undefined;
        };
        toolCallResults: any[];
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    callLogDocPath?: string | undefined;
}>;
export type ToolCallLog = z.infer<typeof toolCallLogSchema>;
export type ToolCallResult = any;
export type ChatCompletionMessageLike = z.infer<typeof chatCompletionMessageSchema>;

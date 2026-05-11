import { z } from "zod";
export declare const responseButtonSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    responseText: z.ZodString;
    style: z.ZodOptional<z.ZodEnum<["primary", "secondary", "destructive"]>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    label: string;
    responseText: string;
    style?: "primary" | "secondary" | "destructive" | undefined;
}, {
    id: string;
    label: string;
    responseText: string;
    style?: "primary" | "secondary" | "destructive" | undefined;
}>;
export declare const logWithResponseButtonsLogSchema: z.ZodObject<{
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
    type: z.ZodLiteral<"log_with_response_buttons">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        title: z.ZodString;
        body: z.ZodOptional<z.ZodString>;
        taskId: z.ZodOptional<z.ZodString>;
        taskType: z.ZodOptional<z.ZodString>;
        buttons: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            responseText: z.ZodString;
            style: z.ZodOptional<z.ZodEnum<["primary", "secondary", "destructive"]>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            label: string;
            responseText: string;
            style?: "primary" | "secondary" | "destructive" | undefined;
        }, {
            id: string;
            label: string;
            responseText: string;
            style?: "primary" | "secondary" | "destructive" | undefined;
        }>, "many">;
        selectedButtonId: z.ZodOptional<z.ZodString>;
        selectedResponseText: z.ZodOptional<z.ZodString>;
        respondedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        buttons: {
            id: string;
            label: string;
            responseText: string;
            style?: "primary" | "secondary" | "destructive" | undefined;
        }[];
        respondedAt?: import("../../types").Timestamp | undefined;
        body?: string | undefined;
        taskId?: string | undefined;
        selectedButtonId?: string | undefined;
        selectedResponseText?: string | undefined;
        taskType?: string | undefined;
    }, {
        title: string;
        buttons: {
            id: string;
            label: string;
            responseText: string;
            style?: "primary" | "secondary" | "destructive" | undefined;
        }[];
        respondedAt?: import("../../types").Timestamp | undefined;
        body?: string | undefined;
        taskId?: string | undefined;
        selectedButtonId?: string | undefined;
        selectedResponseText?: string | undefined;
        taskType?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "log_with_response_buttons";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        title: string;
        buttons: {
            id: string;
            label: string;
            responseText: string;
            style?: "primary" | "secondary" | "destructive" | undefined;
        }[];
        respondedAt?: import("../../types").Timestamp | undefined;
        body?: string | undefined;
        taskId?: string | undefined;
        selectedButtonId?: string | undefined;
        selectedResponseText?: string | undefined;
        taskType?: string | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "log_with_response_buttons";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        title: string;
        buttons: {
            id: string;
            label: string;
            responseText: string;
            style?: "primary" | "secondary" | "destructive" | undefined;
        }[];
        respondedAt?: import("../../types").Timestamp | undefined;
        body?: string | undefined;
        taskId?: string | undefined;
        selectedButtonId?: string | undefined;
        selectedResponseText?: string | undefined;
        taskType?: string | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
}>;
export type ResponseButton = z.infer<typeof responseButtonSchema>;
export type LogWithResponseButtonsLog = z.infer<typeof logWithResponseButtonsLogSchema>;

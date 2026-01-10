import { z } from "zod";
/**
 * Schema for notification data to be sent to devices
 */
export declare const notificationSchema: z.ZodObject<{
    title: z.ZodString;
    body: z.ZodString;
    data: z.ZodDefault<z.ZodAny>;
    sound: z.ZodDefault<z.ZodString>;
    badge: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    categoryId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    channelId: z.ZodDefault<z.ZodString>;
    priority: z.ZodDefault<z.ZodEnum<["default", "normal", "high"]>>;
    ttl: z.ZodDefault<z.ZodNumber>;
    expoReceiptIds: z.ZodDefault<z.ZodNullable<z.ZodArray<z.ZodString, "many">>>;
    receiptStatus: z.ZodDefault<z.ZodEnum<["pending", "complete"]>>;
    pushReceipts: z.ZodDefault<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    pushReceiptFetchError: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    completedAt: z.ZodDefault<z.ZodNullable<z.ZodAny>>;
    createdAt: z.ZodDefault<z.ZodNullable<z.ZodAny>>;
    updatedAt: z.ZodDefault<z.ZodNullable<z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    body: string;
    sound: string;
    badge: number | null;
    categoryId: string | null;
    channelId: string;
    priority: "default" | "high" | "normal";
    ttl: number;
    expoReceiptIds: string[] | null;
    receiptStatus: "pending" | "complete";
    pushReceipts: Record<string, any> | null;
    pushReceiptFetchError: string | null;
    createdAt?: any;
    updatedAt?: any;
    data?: any;
    completedAt?: any;
}, {
    title: string;
    body: string;
    createdAt?: any;
    updatedAt?: any;
    data?: any;
    completedAt?: any;
    sound?: string | undefined;
    badge?: number | null | undefined;
    categoryId?: string | null | undefined;
    channelId?: string | undefined;
    priority?: "default" | "high" | "normal" | undefined;
    ttl?: number | undefined;
    expoReceiptIds?: string[] | null | undefined;
    receiptStatus?: "pending" | "complete" | undefined;
    pushReceipts?: Record<string, any> | null | undefined;
    pushReceiptFetchError?: string | null | undefined;
}>;
export type Notification = z.infer<typeof notificationSchema>;
export declare const isValidNotification: (value: unknown) => value is Notification;

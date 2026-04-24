import { z } from "zod";
export declare const paymentTokenSchema: z.ZodObject<{
    stripeEventId: z.ZodString;
    stripeSessionId: z.ZodString;
    stripePaymentIntentId: z.ZodString;
    amount: z.ZodNumber;
    currency: z.ZodString;
    livemode: z.ZodBoolean;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    usedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    claimErrorAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    stripeEventId: string;
    stripeSessionId: string;
    stripePaymentIntentId: string;
    amount: number;
    currency: string;
    livemode: boolean;
    createdAt?: import("../types").Timestamp | undefined;
    usedAt?: import("../types").Timestamp | undefined;
    claimErrorAt?: import("../types").Timestamp | undefined;
}, {
    stripeEventId: string;
    stripeSessionId: string;
    stripePaymentIntentId: string;
    amount: number;
    currency: string;
    livemode: boolean;
    createdAt?: import("../types").Timestamp | undefined;
    usedAt?: import("../types").Timestamp | undefined;
    claimErrorAt?: import("../types").Timestamp | undefined;
}>;
export type PaymentToken = z.infer<typeof paymentTokenSchema>;

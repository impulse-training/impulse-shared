import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const paymentTokenSchema = z.object({
  stripeEventId: z.string().optional(),
  stripeSessionId: z.string().optional(),
  stripePaymentIntentId: z.string().optional(),
  amount: z.number().optional(),
  currency: z.string().optional(),
  livemode: z.boolean().optional(),
  createdAt: timestampSchema.optional(),
  usedAt: timestampSchema.optional(),
  claimErrorAt: timestampSchema.optional(),
});

export type PaymentToken = z.infer<typeof paymentTokenSchema>;

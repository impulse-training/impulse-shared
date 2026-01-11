import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const paymentTokenSchema = z.object({
  stripeEventId: z.string(),
  stripeSessionId: z.string(),
  stripePaymentIntentId: z.string(),
  amount: z.number(),
  currency: z.string(),
  livemode: z.boolean(),
  createdAt: timestampSchema.optional(),
  usedAt: timestampSchema.optional(),
  claimErrorAt: timestampSchema.optional(),
});

export type PaymentToken = z.infer<typeof paymentTokenSchema>;

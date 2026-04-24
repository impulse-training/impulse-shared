"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentTokenSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.paymentTokenSchema = zod_1.z.object({
    stripeEventId: zod_1.z.string(),
    stripeSessionId: zod_1.z.string(),
    stripePaymentIntentId: zod_1.z.string(),
    amount: zod_1.z.number(),
    currency: zod_1.z.string(),
    livemode: zod_1.z.boolean(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    usedAt: timestampSchema_1.timestampSchema.optional(),
    claimErrorAt: timestampSchema_1.timestampSchema.optional(),
});

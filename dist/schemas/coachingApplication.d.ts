import { z } from "zod";
import { Timestamp } from "../types/firebase";
export declare const coachingApplicationSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    email: z.ZodString;
    urgePattern: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    timezone: z.ZodOptional<z.ZodString>;
    sourceIpHash: z.ZodOptional<z.ZodString>;
    status: z.ZodDefault<z.ZodEnum<["new", "reviewed", "contacted", "enrolled", "declined"]>>;
    reviewedBy: z.ZodOptional<z.ZodString>;
    reviewedAt: z.ZodOptional<z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>>;
    createdAt: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
    updatedAt: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    status: "new" | "reviewed" | "contacted" | "enrolled" | "declined";
    name: string;
    email: string;
    userId?: string | undefined;
    urgePattern?: string | undefined;
    note?: string | undefined;
    timezone?: string | undefined;
    sourceIpHash?: string | undefined;
    reviewedBy?: string | undefined;
    reviewedAt?: Timestamp | undefined;
}, {
    id: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    name: string;
    email: string;
    status?: "new" | "reviewed" | "contacted" | "enrolled" | "declined" | undefined;
    userId?: string | undefined;
    urgePattern?: string | undefined;
    note?: string | undefined;
    timezone?: string | undefined;
    sourceIpHash?: string | undefined;
    reviewedBy?: string | undefined;
    reviewedAt?: Timestamp | undefined;
}>;
export type CoachingApplication = z.infer<typeof coachingApplicationSchema> & {
    createdAt: Timestamp;
    updatedAt: Timestamp;
};

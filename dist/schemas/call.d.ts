import { z } from "zod";
export declare const callSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    livekitRoomName: z.ZodString;
    startTime: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    durationMinutes: z.ZodNumber;
    bookedByUserId: z.ZodOptional<z.ZodString>;
    bookedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    livekitRoomName: string;
    startTime: import("../types").Timestamp;
    durationMinutes: number;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    bookedByUserId?: string | undefined;
    bookedAt?: import("../types").Timestamp | undefined;
}, {
    livekitRoomName: string;
    startTime: import("../types").Timestamp;
    durationMinutes: number;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    bookedByUserId?: string | undefined;
    bookedAt?: import("../types").Timestamp | undefined;
}>;
export type Call = z.infer<typeof callSchema>;

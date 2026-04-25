import { z } from "zod";
export declare const requestPermissionsLogSchema: z.ZodObject<{
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
    type: z.ZodLiteral<"request_permissions">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        permissionType: z.ZodEnum<["foreground_location"]>;
        locationName: z.ZodOptional<z.ZodString>;
        respondedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        granted: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        permissionType: "foreground_location";
        respondedAt?: import("../../types").Timestamp | undefined;
        locationName?: string | undefined;
        granted?: boolean | undefined;
    }, {
        permissionType: "foreground_location";
        respondedAt?: import("../../types").Timestamp | undefined;
        locationName?: string | undefined;
        granted?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "request_permissions";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        permissionType: "foreground_location";
        respondedAt?: import("../../types").Timestamp | undefined;
        locationName?: string | undefined;
        granted?: boolean | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "request_permissions";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        permissionType: "foreground_location";
        respondedAt?: import("../../types").Timestamp | undefined;
        locationName?: string | undefined;
        granted?: boolean | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
}>;
export type RequestPermissionsLog = z.infer<typeof requestPermissionsLogSchema>;

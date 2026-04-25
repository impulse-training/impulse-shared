import { z } from "zod";
export declare const firstKinds: readonly ["installWidget", "impulseButton", "triedTactic", "voiceSession", "resistedUrge"];
export declare const firstKindSchema: z.ZodEnum<["installWidget", "impulseButton", "triedTactic", "voiceSession", "resistedUrge"]>;
export type FirstKind = z.infer<typeof firstKindSchema>;
export interface FirstDefinition {
    label: string;
    order: number;
    route?: string;
}
export declare const FIRST_DEFINITIONS: Record<FirstKind, FirstDefinition>;
export declare const achievedFirstSchema: z.ZodObject<{
    achievedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    sessionId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    achievedAt: import("../types").Timestamp;
    sessionId?: string | undefined;
}, {
    achievedAt: import("../types").Timestamp;
    sessionId?: string | undefined;
}>;
export type AchievedFirst = z.infer<typeof achievedFirstSchema>;
export declare const firstsSchema: z.ZodRecord<z.ZodEnum<["installWidget", "impulseButton", "triedTactic", "voiceSession", "resistedUrge"]>, z.ZodObject<{
    achievedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    sessionId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    achievedAt: import("../types").Timestamp;
    sessionId?: string | undefined;
}, {
    achievedAt: import("../types").Timestamp;
    sessionId?: string | undefined;
}>>;
export type Firsts = z.infer<typeof firstsSchema>;
export declare function getNextFirst(achieved: Partial<Record<FirstKind, unknown>> | undefined): {
    kind: FirstKind;
    label: string;
    route?: string;
} | null;
export declare function getAllFirsts(achieved: Partial<Record<FirstKind, unknown>> | undefined): {
    kind: FirstKind;
    label: string;
    achieved: boolean;
    route?: string;
}[];

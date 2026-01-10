import z from "zod";
export declare const socialContexts: readonly ["alone", "with_partner", "with_friends", "public", "work"];
export declare const locationTypes: readonly ["home", "bedroom", "workplace", "commute", "outdoors", "gym", "other"];
export declare const timeBands: readonly ["late_night", "morning", "afternoon", "evening"];
export declare const triggerKinds: readonly ["situation"];
export declare const socialContextSchema: z.ZodEnum<["alone", "with_partner", "with_friends", "public", "work"]>;
export declare const locationTypeSchema: z.ZodEnum<["home", "bedroom", "workplace", "commute", "outdoors", "gym", "other"]>;
export declare const timeBandSchema: z.ZodEnum<["late_night", "morning", "afternoon", "evening"]>;
export declare const triggerKindSchema: z.ZodEnum<["situation"]>;
export declare const triggerSchema: z.ZodObject<{
    id: z.ZodString;
    uid: z.ZodString;
    title: z.ZodString;
    kind: z.ZodEnum<["situation"]>;
    facets: z.ZodObject<{
        situation: z.ZodOptional<z.ZodString>;
        emotion: z.ZodOptional<z.ZodString>;
        physio: z.ZodOptional<z.ZodString>;
        cognitive: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        emotion?: string | undefined;
        situation?: string | undefined;
        physio?: string | undefined;
        cognitive?: string | undefined;
    }, {
        emotion?: string | undefined;
        situation?: string | undefined;
        physio?: string | undefined;
        cognitive?: string | undefined;
    }>;
    context: z.ZodOptional<z.ZodObject<{
        social: z.ZodOptional<z.ZodEnum<["alone", "with_partner", "with_friends", "public", "work"]>>;
        locationType: z.ZodOptional<z.ZodEnum<["home", "bedroom", "workplace", "commute", "outdoors", "gym", "other"]>>;
        timeBand: z.ZodOptional<z.ZodEnum<["late_night", "morning", "afternoon", "evening"]>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        tags?: string[] | undefined;
        social?: "alone" | "with_partner" | "with_friends" | "public" | "work" | undefined;
        locationType?: "home" | "bedroom" | "workplace" | "commute" | "outdoors" | "gym" | "other" | undefined;
        timeBand?: "late_night" | "morning" | "afternoon" | "evening" | undefined;
    }, {
        tags?: string[] | undefined;
        social?: "alone" | "with_partner" | "with_friends" | "public" | "work" | undefined;
        locationType?: "home" | "bedroom" | "workplace" | "commute" | "outdoors" | "gym" | "other" | undefined;
        timeBand?: "late_night" | "morning" | "afternoon" | "evening" | undefined;
    }>>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    defaultPlanId: z.ZodOptional<z.ZodString>;
    activeExperimentId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    usage: z.ZodObject<{
        totalMoments: z.ZodOptional<z.ZodNumber>;
        lastUsedAt: z.ZodNullable<z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>>;
        "30dCount": z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        lastUsedAt?: import("../types").Timestamp | null | undefined;
        totalMoments?: number | undefined;
        "30dCount"?: number | undefined;
    }, {
        lastUsedAt?: import("../types").Timestamp | null | undefined;
        totalMoments?: number | undefined;
        "30dCount"?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    title: string;
    uid: string;
    kind: "situation";
    facets: {
        emotion?: string | undefined;
        situation?: string | undefined;
        physio?: string | undefined;
        cognitive?: string | undefined;
    };
    usage: {
        lastUsedAt?: import("../types").Timestamp | null | undefined;
        totalMoments?: number | undefined;
        "30dCount"?: number | undefined;
    };
    context?: {
        tags?: string[] | undefined;
        social?: "alone" | "with_partner" | "with_friends" | "public" | "work" | undefined;
        locationType?: "home" | "bedroom" | "workplace" | "commute" | "outdoors" | "gym" | "other" | undefined;
        timeBand?: "late_night" | "morning" | "afternoon" | "evening" | undefined;
    } | undefined;
    defaultPlanId?: string | undefined;
    activeExperimentId?: string | null | undefined;
}, {
    id: string;
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    title: string;
    uid: string;
    kind: "situation";
    facets: {
        emotion?: string | undefined;
        situation?: string | undefined;
        physio?: string | undefined;
        cognitive?: string | undefined;
    };
    usage: {
        lastUsedAt?: import("../types").Timestamp | null | undefined;
        totalMoments?: number | undefined;
        "30dCount"?: number | undefined;
    };
    context?: {
        tags?: string[] | undefined;
        social?: "alone" | "with_partner" | "with_friends" | "public" | "work" | undefined;
        locationType?: "home" | "bedroom" | "workplace" | "commute" | "outdoors" | "gym" | "other" | undefined;
        timeBand?: "late_night" | "morning" | "afternoon" | "evening" | undefined;
    } | undefined;
    defaultPlanId?: string | undefined;
    activeExperimentId?: string | null | undefined;
}>;
export type SocialContext = z.infer<typeof socialContextSchema>;
export type LocationType = z.infer<typeof locationTypeSchema>;
export type TimeBand = z.infer<typeof timeBandSchema>;
export type TriggerKind = z.infer<typeof triggerKindSchema>;
export type Trigger = z.infer<typeof triggerSchema>;
export declare const isTrigger: (value: unknown) => value is Trigger;

import { z } from "zod";
export declare const triggerLocationSchema: z.ZodObject<{
    locationName: z.ZodString;
    triggerType: z.ZodEnum<["arrival", "departure"]>;
    localLocationRef: z.ZodString;
}, "strip", z.ZodTypeAny, {
    triggerType: "arrival" | "departure";
    locationName: string;
    localLocationRef: string;
}, {
    triggerType: "arrival" | "departure";
    locationName: string;
    localLocationRef: string;
}>;
export type TriggerLocation = z.infer<typeof triggerLocationSchema>;
export declare const triggerSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    tags: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    text: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    triggerType: z.ZodOptional<z.ZodEnum<["arrival", "departure"]>>;
    /**
     * "Next up" for this situation: the ONE tactic the user agreed to try the
     * next time it comes round.
     *
     * Unlike the list it replaces, this IS deterministically delivered. The old
     * field was read by the AI as evidence and never injected, which meant a
     * promise the user made could simply not come up. An agreement that only
     * surfaces when a model remembers it is not an agreement.
     */
    agreement: z.ZodOptional<z.ZodObject<{
        tacticId: z.ZodString;
        tacticRefPath: z.ZodString;
        tacticTitle: z.ZodString;
        agreedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        agreedInSessionId: z.ZodOptional<z.ZodString>;
        lastHonouredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        honouredCount: z.ZodOptional<z.ZodNumber>;
        lastPassedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        passedCount: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        tacticId: string;
        tacticRefPath: string;
        tacticTitle: string;
        agreedAt: import("../../types").Timestamp;
        agreedInSessionId?: string | undefined;
        lastHonouredAt?: import("../../types").Timestamp | undefined;
        honouredCount?: number | undefined;
        lastPassedAt?: import("../../types").Timestamp | undefined;
        passedCount?: number | undefined;
    }, {
        tacticId: string;
        tacticRefPath: string;
        tacticTitle: string;
        agreedAt: import("../../types").Timestamp;
        agreedInSessionId?: string | undefined;
        lastHonouredAt?: import("../../types").Timestamp | undefined;
        honouredCount?: number | undefined;
        lastPassedAt?: import("../../types").Timestamp | undefined;
        passedCount?: number | undefined;
    }>>;
    /**
     * @deprecated The ordered go-to list, read by the AI as evidence only.
     * Superseded by `agreement`. Read only by the migration that collapses it
     * to its first entry.
     */
    tactics: z.ZodOptional<z.ZodArray<z.ZodType<import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">>;
    /** @deprecated Superseded by `agreement.agreedAt`. */
    tacticsAgreedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    /** @deprecated Use triggerType + location tag group option localLocationRef instead */
    location: z.ZodOptional<z.ZodObject<{
        locationName: z.ZodString;
        triggerType: z.ZodEnum<["arrival", "departure"]>;
        localLocationRef: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        triggerType: "arrival" | "departure";
        locationName: string;
        localLocationRef: string;
    }, {
        triggerType: "arrival" | "departure";
        locationName: string;
        localLocationRef: string;
    }>>;
    lastOccurredAt: z.ZodNullable<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodNullable<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>>;
}, "strip", z.ZodTypeAny, {
    tags: Record<string, string>;
    lastOccurredAt: import("../../types").Timestamp | null;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    behaviorIds?: string[] | undefined;
    text?: string | undefined;
    ordinal?: number | undefined;
    agreement?: {
        tacticId: string;
        tacticRefPath: string;
        tacticTitle: string;
        agreedAt: import("../../types").Timestamp;
        agreedInSessionId?: string | undefined;
        lastHonouredAt?: import("../../types").Timestamp | undefined;
        honouredCount?: number | undefined;
        lastPassedAt?: import("../../types").Timestamp | undefined;
        passedCount?: number | undefined;
    } | undefined;
    tactics?: import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    tacticsAgreedAt?: import("../../types").Timestamp | undefined;
    triggerType?: "arrival" | "departure" | undefined;
    deletedAt?: import("../../types").Timestamp | null | undefined;
    location?: {
        triggerType: "arrival" | "departure";
        locationName: string;
        localLocationRef: string;
    } | undefined;
}, {
    lastOccurredAt: import("../../types").Timestamp | null;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    behaviorIds?: string[] | undefined;
    text?: string | undefined;
    ordinal?: number | undefined;
    agreement?: {
        tacticId: string;
        tacticRefPath: string;
        tacticTitle: string;
        agreedAt: import("../../types").Timestamp;
        agreedInSessionId?: string | undefined;
        lastHonouredAt?: import("../../types").Timestamp | undefined;
        honouredCount?: number | undefined;
        lastPassedAt?: import("../../types").Timestamp | undefined;
        passedCount?: number | undefined;
    } | undefined;
    tactics?: import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    tacticsAgreedAt?: import("../../types").Timestamp | undefined;
    tags?: Record<string, string> | undefined;
    triggerType?: "arrival" | "departure" | undefined;
    deletedAt?: import("../../types").Timestamp | null | undefined;
    location?: {
        triggerType: "arrival" | "departure";
        locationName: string;
        localLocationRef: string;
    } | undefined;
}>;
export type Trigger = z.infer<typeof triggerSchema>;
export declare const triggerWithIdSchema: z.ZodIntersection<z.ZodObject<{
    id: z.ZodString;
    _ref: z.ZodType<import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    _ref: import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>;
}, {
    id: string;
    _ref: import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    tags: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    text: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    triggerType: z.ZodOptional<z.ZodEnum<["arrival", "departure"]>>;
    /**
     * "Next up" for this situation: the ONE tactic the user agreed to try the
     * next time it comes round.
     *
     * Unlike the list it replaces, this IS deterministically delivered. The old
     * field was read by the AI as evidence and never injected, which meant a
     * promise the user made could simply not come up. An agreement that only
     * surfaces when a model remembers it is not an agreement.
     */
    agreement: z.ZodOptional<z.ZodObject<{
        tacticId: z.ZodString;
        tacticRefPath: z.ZodString;
        tacticTitle: z.ZodString;
        agreedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        agreedInSessionId: z.ZodOptional<z.ZodString>;
        lastHonouredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        honouredCount: z.ZodOptional<z.ZodNumber>;
        lastPassedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        passedCount: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        tacticId: string;
        tacticRefPath: string;
        tacticTitle: string;
        agreedAt: import("../../types").Timestamp;
        agreedInSessionId?: string | undefined;
        lastHonouredAt?: import("../../types").Timestamp | undefined;
        honouredCount?: number | undefined;
        lastPassedAt?: import("../../types").Timestamp | undefined;
        passedCount?: number | undefined;
    }, {
        tacticId: string;
        tacticRefPath: string;
        tacticTitle: string;
        agreedAt: import("../../types").Timestamp;
        agreedInSessionId?: string | undefined;
        lastHonouredAt?: import("../../types").Timestamp | undefined;
        honouredCount?: number | undefined;
        lastPassedAt?: import("../../types").Timestamp | undefined;
        passedCount?: number | undefined;
    }>>;
    /**
     * @deprecated The ordered go-to list, read by the AI as evidence only.
     * Superseded by `agreement`. Read only by the migration that collapses it
     * to its first entry.
     */
    tactics: z.ZodOptional<z.ZodArray<z.ZodType<import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">>;
    /** @deprecated Superseded by `agreement.agreedAt`. */
    tacticsAgreedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    /** @deprecated Use triggerType + location tag group option localLocationRef instead */
    location: z.ZodOptional<z.ZodObject<{
        locationName: z.ZodString;
        triggerType: z.ZodEnum<["arrival", "departure"]>;
        localLocationRef: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        triggerType: "arrival" | "departure";
        locationName: string;
        localLocationRef: string;
    }, {
        triggerType: "arrival" | "departure";
        locationName: string;
        localLocationRef: string;
    }>>;
    lastOccurredAt: z.ZodNullable<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodNullable<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>>;
}, z.UnknownKeysParam, z.ZodTypeAny, {
    tags: Record<string, string>;
    lastOccurredAt: import("../../types").Timestamp | null;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    behaviorIds?: string[] | undefined;
    text?: string | undefined;
    ordinal?: number | undefined;
    agreement?: {
        tacticId: string;
        tacticRefPath: string;
        tacticTitle: string;
        agreedAt: import("../../types").Timestamp;
        agreedInSessionId?: string | undefined;
        lastHonouredAt?: import("../../types").Timestamp | undefined;
        honouredCount?: number | undefined;
        lastPassedAt?: import("../../types").Timestamp | undefined;
        passedCount?: number | undefined;
    } | undefined;
    tactics?: import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    tacticsAgreedAt?: import("../../types").Timestamp | undefined;
    triggerType?: "arrival" | "departure" | undefined;
    deletedAt?: import("../../types").Timestamp | null | undefined;
    location?: {
        triggerType: "arrival" | "departure";
        locationName: string;
        localLocationRef: string;
    } | undefined;
}, {
    lastOccurredAt: import("../../types").Timestamp | null;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    behaviorIds?: string[] | undefined;
    text?: string | undefined;
    ordinal?: number | undefined;
    agreement?: {
        tacticId: string;
        tacticRefPath: string;
        tacticTitle: string;
        agreedAt: import("../../types").Timestamp;
        agreedInSessionId?: string | undefined;
        lastHonouredAt?: import("../../types").Timestamp | undefined;
        honouredCount?: number | undefined;
        lastPassedAt?: import("../../types").Timestamp | undefined;
        passedCount?: number | undefined;
    } | undefined;
    tactics?: import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    tacticsAgreedAt?: import("../../types").Timestamp | undefined;
    tags?: Record<string, string> | undefined;
    triggerType?: "arrival" | "departure" | undefined;
    deletedAt?: import("../../types").Timestamp | null | undefined;
    location?: {
        triggerType: "arrival" | "departure";
        locationName: string;
        localLocationRef: string;
    } | undefined;
}>>;
export type TriggerWithId = z.infer<typeof triggerWithIdSchema>;
export declare const isValidTrigger: (value: unknown) => value is Trigger;
export declare const triggerHasLocation: (trigger: Trigger) => boolean;

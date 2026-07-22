import { z } from "zod";
/**
 * Created when the user manually updates session tags via the UI.
 * Non-displayable — exists solely to trigger an AI response so the assistant
 * can react to the updated context (e.g. suggest tactics).
 */
export declare const tagsUpdatedLogSchema: z.ZodObject<{
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
    respondingToLogId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"tags_updated">;
    isDisplayable: z.ZodLiteral<false>;
    data: z.ZodObject<{
        tags: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        /**
         * The session's behaviors AFTER this update — written only when the update
         * actually changed them (the tag bar's behavior picker, or a trigger that
         * brings its own behaviors). Absent for a tags-only edit.
         *
         * Its presence is the signal that the user re-scoped which behaviors this
         * moment is about, which is worth an AI response even mid-debrief; a
         * retrospective feeling/activity edit is not. See
         * `shouldRespondToLogWithAI`.
         */
        behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        tags: Record<string, string | string[]>;
        behaviorIds?: string[] | undefined;
    }, {
        tags: Record<string, string | string[]>;
        behaviorIds?: string[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "tags_updated";
    userId: string;
    sessionId: string;
    dateString: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: false;
    data: {
        tags: Record<string, string | string[]>;
        behaviorIds?: string[] | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    respondingToLogId?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "tags_updated";
    userId: string;
    sessionId: string;
    dateString: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: false;
    data: {
        tags: Record<string, string | string[]>;
        behaviorIds?: string[] | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    respondingToLogId?: string | undefined;
}>;
export type TagsUpdatedLog = z.infer<typeof tagsUpdatedLogSchema>;

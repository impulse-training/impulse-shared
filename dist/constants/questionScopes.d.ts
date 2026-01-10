import z from "zod";
/**
 * Canonical conversation/question scopes and helpers
 */
export declare const QUESTION_SCOPES: {
    readonly impulse: {
        readonly id: "impulse";
        readonly label: "During an impulse moment";
        readonly description: "Asked whenever you press the impulse button";
    };
    readonly setback: {
        readonly id: "setback";
        readonly label: "After a setback";
        readonly description: "After acting on an impulse moment (craving or urge)";
    };
    readonly success: {
        readonly id: "success";
        readonly label: "After a success";
        readonly description: "After resisting an impulse moment (craving or urge)";
    };
    readonly recap: {
        readonly id: "recap";
        readonly label: "Day recap";
        readonly description: "When reflecting on the day";
    };
};
export type QuestionScope = keyof typeof QUESTION_SCOPES;
export declare const QUESTION_SCOPE_VALUES: QuestionScope[];
export declare const questionScopeSchema: z.ZodEnum<["success" | "setback" | "impulse" | "recap", ...("success" | "setback" | "impulse" | "recap")[]]>;
export type QuestionScopeKey = keyof typeof QUESTION_SCOPES;
export declare const getQuestionScopeLabel: (scope: QuestionScopeKey | null | undefined) => "During an impulse moment" | "After a setback" | "After a success" | "Day recap" | "Unknown Scope";
export declare const getQuestionScopeDescription: (scope: QuestionScopeKey | null | undefined) => "Asked whenever you press the impulse button" | "After acting on an impulse moment (craving or urge)" | "After resisting an impulse moment (craving or urge)" | "When reflecting on the day" | "";

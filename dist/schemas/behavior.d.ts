/**
 * Behavior Schemas
 *
 * Defines Yup schemas for behavior data
 */
import * as yup from 'yup';
export declare const trackingTypes: readonly ["counter", "timer"];
export declare const behaviorSchema: yup.ObjectSchema<{
    id: string;
    name: string;
    description: string;
    trackingType: NonNullable<"counter" | "timer" | undefined>;
    gameplanTacticIds: (string | undefined)[];
    createdAt: Date;
    updatedAt: Date;
}, yup.AnyObject, {
    id: undefined;
    name: undefined;
    description: undefined;
    trackingType: undefined;
    gameplanTacticIds: never[];
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export declare const validateBehavior: (data: unknown) => Promise<{
    trackingType: NonNullable<"counter" | "timer" | undefined>;
    gameplanTacticIds: (string | undefined)[];
    id: string;
    createdAt: Date;
    name: string;
    description: string;
    updatedAt: Date;
}>;

import { z } from "zod";
export declare const tourStepSchema: z.ZodObject<{
    elementRefName: z.ZodNullable<z.ZodString>;
    title: z.ZodString;
    description: z.ZodString;
    confirmButtonLabel: z.ZodDefault<z.ZodString>;
    nextOnImpulseButtonPress: z.ZodOptional<z.ZodBoolean>;
    borderRadius: z.ZodOptional<z.ZodNumber>;
    innerPadding: z.ZodOptional<z.ZodNumber>;
    minimumRectSize: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    elementRefName: string | null;
    confirmButtonLabel: string;
    nextOnImpulseButtonPress?: boolean | undefined;
    borderRadius?: number | undefined;
    innerPadding?: number | undefined;
    minimumRectSize?: {
        width: number;
        height: number;
    } | undefined;
}, {
    title: string;
    description: string;
    elementRefName: string | null;
    confirmButtonLabel?: string | undefined;
    nextOnImpulseButtonPress?: boolean | undefined;
    borderRadius?: number | undefined;
    innerPadding?: number | undefined;
    minimumRectSize?: {
        width: number;
        height: number;
    } | undefined;
}>;
export type TourStep = z.infer<typeof tourStepSchema>;

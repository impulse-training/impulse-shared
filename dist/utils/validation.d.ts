import z from "zod";
export type ErrorObject = {
    [field: string]: string[];
};
export declare function makeValidationFn<S extends z.ZodTypeAny>(schema: S): (input: unknown) => ErrorObject;
export declare function zodErrorToErrorObject(err: z.ZodError): ErrorObject;

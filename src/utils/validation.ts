import { z } from "zod";

export type ErrorObject = {
  [field: string]: string[];
};

export function makeValidationFn<S extends z.ZodTypeAny>(schema: S) {
  return function validate(input: unknown) {
    const result = schema.safeParse(input);
    if (result.success) return {};
    return zodErrorToErrorObject(result.error);
  };
}

export function zodErrorToErrorObject(err: z.ZodError): ErrorObject {
  const object: ErrorObject = {};
  for (const issue of err.issues) {
    const path = issue.path.join(".");
    if (!object[path]) object[path] = [];
    object[path].push(issue.message);
  }
  return object;
}

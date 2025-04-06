import { ValidationError } from "yup";

export type ErrorObject = {
  [field: string]: string[];
};

type YupSchemaLike = {
  validateSync: (value: unknown, options?: any) => void;
};

export function makeValidationFn<S extends YupSchemaLike>(schema: S) {
  return function validate(input: unknown) {
    try {
      schema.validateSync(input, { abortEarly: false });
      return {};
    } catch (error: any) {
      return yupErrorToErrorObject(error);
    }
  };
}

export function yupErrorToErrorObject(err: ValidationError): ErrorObject {
  const object: ErrorObject = {};

  err.inner.forEach((x) => {
    if (x.path !== undefined) {
      object[x.path] = x.errors;
    }
  });

  return object;
}

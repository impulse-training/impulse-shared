import { z } from "zod";

export function objectOf<T extends z.ZodTypeAny>(schema: T) {
  return z.record(z.string(), schema);
}

export function optionalObjectOf<T extends z.ZodTypeAny>(schema: T) {
  return z.record(z.string(), schema).optional();
}

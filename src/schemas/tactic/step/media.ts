import z from "zod";
import { attachmentSchema } from "../../attachment";
import { baseStepSchema } from "./base";

export const mediaStepSchema = baseStepSchema.extend({
  mode: z.literal("media"),
  media: z.array(attachmentSchema).min(1),
});

export type MediaStep = z.infer<typeof mediaStepSchema>;

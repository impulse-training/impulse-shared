import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { logBaseSchema } from "./base";

export const requestPermissionsLogSchema = logBaseSchema.extend({
  type: z.literal("request_permissions"),
  isDisplayable: z.literal(true),
  data: z.object({
    permissionType: z.enum(["foreground_location"]),
    locationName: z.string().optional(),
    respondedAt: timestampSchema.optional(),
    granted: z.boolean().optional(),
  }),
});

export type RequestPermissionsLog = z.infer<
  typeof requestPermissionsLogSchema
>;

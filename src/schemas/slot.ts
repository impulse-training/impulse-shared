import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const slotSchema = z.object({
  id: z.string().optional(),
  coachId: z.string(),
  dayOfWeek: z.number().int().min(0).max(6),
  hour: z.number().int().min(0).max(23),
  minute: z.number().int().min(0).max(59),
  /**
   * IANA timezone the dayOfWeek/hour/minute are expressed in (the coach's
   * timezone, e.g. "America/Mexico_City"). Clients convert to the viewer's
   * local time for display. Optional for backwards compatibility with legacy
   * slots written before this field existed; readers should default it.
   */
  timezone: z.string().optional(),
  status: z.enum(["available", "claimed"]).default("available"),
  claimedByUserId: z.string().optional(),
  claimedAt: timestampSchema.optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type Slot = z.infer<typeof slotSchema>;

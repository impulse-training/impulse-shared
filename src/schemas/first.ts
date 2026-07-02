import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const firstKinds = [
  "impulseButton",
  "triedTactic",
  "voiceSession",
  "resistedUrge",
] as const;

export const firstKindSchema = z.enum(firstKinds);
export type FirstKind = z.infer<typeof firstKindSchema>;

export interface FirstDefinition {
  label: string;
  order: number;
  route?: string;
}

export const FIRST_DEFINITIONS: Record<FirstKind, FirstDefinition> = {
  impulseButton: {
    label: "Activate Impulse Mode in an impulse moment",
    order: 0,
  },
  triedTactic: {
    label: "Try a tactic in an impulse moment",
    order: 1,
  },
  voiceSession: {
    label: "Talk using voice mode during an impulse moment",
    order: 2,
  },
  resistedUrge: {
    label: "Resist an urge in an impulse moment",
    order: 3,
  },
};

export const achievedFirstSchema = z.object({
  achievedAt: timestampSchema,
  sessionId: z.string().optional(),
});
export type AchievedFirst = z.infer<typeof achievedFirstSchema>;

export const firstsSchema = z.record(firstKindSchema, achievedFirstSchema);
export type Firsts = z.infer<typeof firstsSchema>;

export function getNextFirst(
  achieved: Partial<Record<FirstKind, unknown>> | undefined,
): { kind: FirstKind; label: string; route?: string } | null {
  const sorted = (
    Object.entries(FIRST_DEFINITIONS) as [FirstKind, FirstDefinition][]
  ).sort(([, a], [, b]) => a.order - b.order);
  for (const [kind, def] of sorted) {
    if (!achieved?.[kind]) return { kind, label: def.label, route: def.route };
  }
  return null;
}

export function getAllFirsts(
  achieved: Partial<Record<FirstKind, unknown>> | undefined,
): { kind: FirstKind; label: string; achieved: boolean; route?: string }[] {
  return (Object.entries(FIRST_DEFINITIONS) as [FirstKind, FirstDefinition][])
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([kind, def]) => ({
      kind,
      label: def.label,
      achieved: !!achieved?.[kind],
      route: def.route,
    }));
}

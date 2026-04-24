import type { Behavior } from "../schemas/behavior";
import type { WithId } from "./withId";

const COLORS = {
  RED: "#C4362C",
  ORANGE: "#F97316",
  BROWN: "#6F4E37",
  GREEN: "#16A34A",
  BLUE: "#1D4ED8",
  PURPLE: "#7C5CFC",
  PINK: "#BE185D",
} as const;

export const BEHAVIOR_COLOR_OPTIONS = [
  COLORS.RED,
  COLORS.ORANGE,
  COLORS.BROWN,
  COLORS.GREEN,
  COLORS.BLUE,
  COLORS.PURPLE,
  COLORS.PINK,
];

const NAME_TO_COLOR: Record<string, string> = {
  // Digital
  "social media": COLORS.BLUE,
  "doom scrolling": COLORS.BLUE,
  doomscrolling: COLORS.BLUE,
  youtube: COLORS.ORANGE,
  "binge watching": COLORS.PURPLE,
  pornography: COLORS.RED,
  "video games": COLORS.BLUE,
  "phone checking": COLORS.BLUE,
  "news reading": COLORS.BLUE,
  // Substances
  alcohol: COLORS.BROWN,
  "smoking cigarettes": COLORS.ORANGE,
  vaping: COLORS.BROWN,
  coffee: COLORS.BROWN,
  caffeine: COLORS.BROWN,
  // BFRBs
  "hair pulling": COLORS.PINK,
  "skin picking": COLORS.PINK,
  "nail biting": COLORS.PINK,
  // Avoidance
  procrastination: COLORS.ORANGE,
  "compulsive cleaning": COLORS.GREEN,
  "focus avoidance": COLORS.ORANGE,
  // Emotional
  "negative self-talk": COLORS.PURPLE,
  "excessive worrying": COLORS.PURPLE,
  rumination: COLORS.PURPLE,
  "anger outbursts": COLORS.RED,
  gossiping: COLORS.PURPLE,
  // Financial
  gambling: COLORS.GREEN,
  overspending: COLORS.GREEN,
  "online shopping": COLORS.GREEN,
  // Eating
  overeating: COLORS.BROWN,
  "junk food": COLORS.ORANGE,
  "late night snacking": COLORS.BROWN,
  "sugar consumption": COLORS.ORANGE,
  // Common custom names
  twitter: COLORS.BLUE,
  "twitter/videos": COLORS.ORANGE,
  instagram: COLORS.PINK,
  tiktok: COLORS.BLUE,
  reddit: COLORS.ORANGE,
  weed: COLORS.GREEN,
  marijuana: COLORS.GREEN,
  cannabis: COLORS.GREEN,
  sugar: COLORS.ORANGE,
  smoking: COLORS.ORANGE,
};

export function guessBehaviorColor(name: string, index: number = 0): string {
  const lower = name.toLowerCase().trim();
  if (NAME_TO_COLOR[lower]) return NAME_TO_COLOR[lower];

  for (const [key, color] of Object.entries(NAME_TO_COLOR)) {
    if (lower.includes(key) || key.includes(lower)) return color;
  }

  return BEHAVIOR_COLOR_OPTIONS[index % BEHAVIOR_COLOR_OPTIONS.length];
}

export function getBehaviorColor(
  behavior: WithId<Behavior>,
  index: number = 0,
): string {
  if (behavior.color) return behavior.color;
  return BEHAVIOR_COLOR_OPTIONS[index % BEHAVIOR_COLOR_OPTIONS.length];
}

export function toPastel(hex: string, mix: number = 0.65): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const pr = Math.round(r + (255 - r) * mix);
  const pg = Math.round(g + (255 - g) * mix);
  const pb = Math.round(b + (255 - b) * mix);

  return `#${pr.toString(16).padStart(2, "0")}${pg.toString(16).padStart(2, "0")}${pb.toString(16).padStart(2, "0")}`;
}

export function getBehaviorPastelColor(
  behavior: WithId<Behavior>,
  index: number = 0,
): string {
  return toPastel(getBehaviorColor(behavior, index));
}

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

export function guessBehaviorColor(
  name: string,
  index: number = 0,
  usedColors: string[] = [],
): string {
  const lower = name.toLowerCase().trim();

  let guessed: string | undefined;
  if (NAME_TO_COLOR[lower]) {
    guessed = NAME_TO_COLOR[lower];
  } else {
    for (const [key, color] of Object.entries(NAME_TO_COLOR)) {
      if (lower.includes(key) || key.includes(lower)) {
        guessed = color;
        break;
      }
    }
  }

  if (!guessed) {
    guessed = BEHAVIOR_COLOR_OPTIONS[index % BEHAVIOR_COLOR_OPTIONS.length];
  }

  if (usedColors.length > 0 && usedColors.includes(guessed)) {
    const available = BEHAVIOR_COLOR_OPTIONS.filter(
      (c) => !usedColors.includes(c),
    );
    if (available.length > 0) return available[0];
  }

  return guessed;
}

export function getBehaviorColor(
  behavior: WithId<Behavior>,
  index: number = 0,
): string {
  if (behavior.color) return behavior.color;
  return BEHAVIOR_COLOR_OPTIONS[index % BEHAVIOR_COLOR_OPTIONS.length];
}

export const BEHAVIOR_DOT = {
  FILLED_SIZE: 6,
  FILLED_RADIUS: 3,
  RING_SIZE: 8,
  RING_RADIUS: 4,
  RING_BORDER_WIDTH: 2.5,
  RING_BG_OPACITY: "26",
} as const;

/**
 * Colour words, for behaviours the user has chosen to hide.
 *
 * A masked behaviour is one the user does not want named — on a screen
 * someone else might glance at, and much more so out loud on a call, where
 * "pornography" is a word the room hears. Masking has always been a display
 * decision the client made, which was fine while the coach only ever wrote to
 * that screen; it stopped being fine the moment the coach could speak.
 */
const COLOR_WORDS: Record<string, string> = {
  [COLORS.RED]: "red",
  [COLORS.ORANGE]: "orange",
  [COLORS.BROWN]: "brown",
  [COLORS.GREEN]: "green",
  [COLORS.BLUE]: "blue",
  [COLORS.PURPLE]: "purple",
  [COLORS.PINK]: "pink",
};

/** The colour word for a behaviour's swatch, or null for an unknown colour. */
export function behaviorColorWord(color: string | undefined): string | null {
  if (!color) return null;
  return COLOR_WORDS[color.toUpperCase()] ?? COLOR_WORDS[color] ?? null;
}

/**
 * What to call a behaviour when writing or saying it.
 *
 * The user sees a coloured swatch where a masked behaviour's name would be,
 * so the colour is the name they already use for it themselves — "the red
 * one". Anything we cannot colour falls back to a phrase that is still usable
 * in a sentence rather than to the name we are trying not to say.
 *
 * Deliberately the NAME, not a filter: a masked behaviour is tracked, ranked,
 * reflected on and counted exactly like any other. Dropping it from the
 * model's view would quietly stop coaching the thing the user most wanted
 * help with.
 */
export function behaviorDisplayName(behavior: {
  name?: string;
  masked?: boolean;
  color?: string;
}): string {
  if (!behavior.masked) return behavior.name ?? "";
  const word = behaviorColorWord(behavior.color);
  return word ? `the ${word} behavior` : "a hidden behavior";
}

/**
 * Shared color palette and name-to-color mapping for behaviors.
 * Used at creation time to assign a default color.
 */

const COLORS = {
  RED: "#C4362C",
  ORANGE: "#E8910C",
  AMBER: "#D97706",
  GREEN: "#2E8B57",
  CYAN: "#0891B2",
  BLUE: "#3B82F6",
  PURPLE: "#7C5CFC",
  PINK: "#BE185D",
  GRAY: "#6B7280",
} as const;

const NAME_TO_COLOR: Record<string, string> = {
  // Digital
  "social media": COLORS.BLUE,
  "doom scrolling": COLORS.BLUE,
  doomscrolling: COLORS.BLUE,
  youtube: COLORS.ORANGE,
  "binge watching": COLORS.PURPLE,
  pornography: COLORS.RED,
  "video games": COLORS.CYAN,
  "phone checking": COLORS.GRAY,
  "news reading": COLORS.GRAY,
  // Substances
  alcohol: COLORS.AMBER,
  "smoking cigarettes": COLORS.ORANGE,
  vaping: COLORS.GRAY,
  coffee: COLORS.AMBER,
  caffeine: COLORS.AMBER,
  // BFRBs
  "hair pulling": COLORS.PINK,
  "skin picking": COLORS.PINK,
  "nail biting": COLORS.PINK,
  // Avoidance
  procrastination: COLORS.ORANGE,
  "compulsive cleaning": COLORS.CYAN,
  "focus avoidance": COLORS.ORANGE,
  // Emotional
  "negative self-talk": COLORS.PURPLE,
  "excessive worrying": COLORS.PURPLE,
  rumination: COLORS.PURPLE,
  "anger outbursts": COLORS.RED,
  gossiping: COLORS.GRAY,
  // Financial
  gambling: COLORS.GREEN,
  overspending: COLORS.GREEN,
  "online shopping": COLORS.GREEN,
  // Eating
  overeating: COLORS.AMBER,
  "junk food": COLORS.ORANGE,
  "late night snacking": COLORS.AMBER,
  "sugar consumption": COLORS.ORANGE,
  // Common custom names
  twitter: COLORS.BLUE,
  "twitter/videos": COLORS.ORANGE,
  instagram: COLORS.PINK,
  tiktok: COLORS.CYAN,
  reddit: COLORS.ORANGE,
  weed: COLORS.GREEN,
  marijuana: COLORS.GREEN,
  cannabis: COLORS.GREEN,
  sugar: COLORS.ORANGE,
  smoking: COLORS.ORANGE,
};

const FALLBACK_COLORS = [
  COLORS.RED,
  COLORS.ORANGE,
  COLORS.GREEN,
  COLORS.PURPLE,
  COLORS.BLUE,
  COLORS.AMBER,
  COLORS.CYAN,
  COLORS.PINK,
];

/**
 * Guess a color for a behavior based on its name.
 * @param name - The behavior name
 * @param index - Fallback index for behaviors with no name match (default 0)
 */
export function guessBehaviorColor(name: string, index: number = 0): string {
  const lower = name.toLowerCase().trim();
  if (NAME_TO_COLOR[lower]) return NAME_TO_COLOR[lower];

  // Partial match: check if any known name is contained in the behavior name
  for (const [key, color] of Object.entries(NAME_TO_COLOR)) {
    if (lower.includes(key) || key.includes(lower)) return color;
  }

  return FALLBACK_COLORS[index % FALLBACK_COLORS.length];
}

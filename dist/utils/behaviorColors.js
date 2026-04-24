"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BEHAVIOR_COLOR_OPTIONS = void 0;
exports.guessBehaviorColor = guessBehaviorColor;
exports.getBehaviorColor = getBehaviorColor;
exports.toPastel = toPastel;
exports.getBehaviorPastelColor = getBehaviorPastelColor;
const COLORS = {
    RED: "#C4362C",
    ORANGE: "#F97316",
    BROWN: "#6F4E37",
    GREEN: "#16A34A",
    BLUE: "#1D4ED8",
    PURPLE: "#7C5CFC",
    PINK: "#BE185D",
};
exports.BEHAVIOR_COLOR_OPTIONS = [
    COLORS.RED,
    COLORS.ORANGE,
    COLORS.BROWN,
    COLORS.GREEN,
    COLORS.BLUE,
    COLORS.PURPLE,
    COLORS.PINK,
];
const NAME_TO_COLOR = {
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
function guessBehaviorColor(name, index = 0) {
    const lower = name.toLowerCase().trim();
    if (NAME_TO_COLOR[lower])
        return NAME_TO_COLOR[lower];
    for (const [key, color] of Object.entries(NAME_TO_COLOR)) {
        if (lower.includes(key) || key.includes(lower))
            return color;
    }
    return exports.BEHAVIOR_COLOR_OPTIONS[index % exports.BEHAVIOR_COLOR_OPTIONS.length];
}
function getBehaviorColor(behavior, index = 0) {
    if (behavior.color)
        return behavior.color;
    return exports.BEHAVIOR_COLOR_OPTIONS[index % exports.BEHAVIOR_COLOR_OPTIONS.length];
}
function toPastel(hex, mix = 0.65) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const pr = Math.round(r + (255 - r) * mix);
    const pg = Math.round(g + (255 - g) * mix);
    const pb = Math.round(b + (255 - b) * mix);
    return `#${pr.toString(16).padStart(2, "0")}${pg.toString(16).padStart(2, "0")}${pb.toString(16).padStart(2, "0")}`;
}
function getBehaviorPastelColor(behavior, index = 0) {
    return toPastel(getBehaviorColor(behavior, index));
}

import type { Behavior } from "../schemas/behavior";
import type { WithId } from "./withId";
export declare const BEHAVIOR_COLOR_OPTIONS: ("#C4362C" | "#F97316" | "#6F4E37" | "#16A34A" | "#1D4ED8" | "#7C5CFC" | "#BE185D")[];
export declare function guessBehaviorColor(name: string, index?: number, usedColors?: string[]): string;
export declare function getBehaviorColor(behavior: WithId<Behavior>, index?: number): string;
export declare const BEHAVIOR_DOT: {
    readonly FILLED_SIZE: 6;
    readonly FILLED_RADIUS: 3;
    readonly RING_SIZE: 8;
    readonly RING_RADIUS: 4;
    readonly RING_BORDER_WIDTH: 2.5;
    readonly RING_BG_OPACITY: "26";
};
/** The colour word for a behaviour's swatch, or null for an unknown colour. */
export declare function behaviorColorWord(color: string | undefined): string | null;
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
export declare function behaviorDisplayName(behavior: {
    name?: string;
    masked?: boolean;
    color?: string;
}): string;

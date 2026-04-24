import type { Behavior } from "../schemas/behavior";
import type { WithId } from "./withId";
export declare const BEHAVIOR_COLOR_OPTIONS: ("#C4362C" | "#F97316" | "#6F4E37" | "#16A34A" | "#1D4ED8" | "#7C5CFC" | "#BE185D")[];
export declare function guessBehaviorColor(name: string, index?: number): string;
export declare function getBehaviorColor(behavior: WithId<Behavior>, index?: number): string;
export declare function toPastel(hex: string, mix?: number): string;
export declare function getBehaviorPastelColor(behavior: WithId<Behavior>, index?: number): string;

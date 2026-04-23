import { BehaviorTrackingData } from "../schemas";
export declare const scaleLevels: readonly [{
    readonly value: 0;
    readonly label: "Zero";
}, {
    readonly value: 1;
    readonly label: "Low";
}, {
    readonly value: 2;
    readonly label: "Medium";
}, {
    readonly value: 3;
    readonly label: "High";
}];
export type ScaleLevel = (typeof scaleLevels)[number];
export declare function getScaleLabel(value: number): string;
type Args = {
    trackingType: BehaviorTrackingData["trackingType"];
    value: number;
    behaviorTrackingUnit?: BehaviorTrackingData["behaviorTrackingUnit"];
};
export declare function getFormattedValue({ trackingType, value, behaviorTrackingUnit, }: Args): any;
export {};

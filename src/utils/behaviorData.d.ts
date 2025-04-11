import { BehaviorTrackingData } from "../schemas";
type Args = {
    trackingType: BehaviorTrackingData["trackingType"];
    value: number;
    behaviorTrackingUnit?: BehaviorTrackingData["behaviorTrackingUnit"];
};
export declare function getFormattedValue({ trackingType, value, behaviorTrackingUnit, }: Args): any;
export {};

/**
 * Behavior Types
 *
 * TypeScript type definitions for behavior data
 */
import { InferType } from "yup";
import { behaviorSchema, trackingTypes } from "../schemas/behavior";
export type TrackingType = (typeof trackingTypes)[number];
export type Behavior = InferType<typeof behaviorSchema>;
export declare const isBehavior: (value: unknown) => value is Behavior;

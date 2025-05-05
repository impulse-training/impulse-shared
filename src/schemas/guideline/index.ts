import * as yup from "yup";
import { CravingGuideline, cravingGuidelineSchema } from "./craving";
import { FeelingGuideline, feelingGuidelineSchema } from "./general";
import { LocationGuideline, locationGuidelineSchema } from "./location";
import { ScheduledGuideline, scheduledGuidelineSchema } from "./scheduled";

export * from "./craving";
export * from "./general";
export * from "./location";
export * from "./scheduled";

export type Guideline =
  | ScheduledGuideline
  | LocationGuideline
  | CravingGuideline
  | FeelingGuideline;

// Utility to dynamically select the correct schema based on the Guideline type
export const GuidelineSchemas: Record<
  Guideline["type"],
  yup.ObjectSchema<Guideline>
> = {
  scheduled: scheduledGuidelineSchema,
  location: locationGuidelineSchema,
  craving: cravingGuidelineSchema,
  feeling: feelingGuidelineSchema,
} as any;

export const guidelineSchema = yup.lazy((value) => {
  if (typeof value.type === "string" && value.type in GuidelineSchemas) {
    return GuidelineSchemas[value.type as Guideline["type"]];
  }

  return yup.object({
    type: yup
      .mixed<Guideline["type"]>()
      .oneOf(Object.keys(GuidelineSchemas) as Guideline["type"][])
      .required(),
  });
}) as yup.Lazy<GuidelineTypes[Guideline["type"]]>;

// / This type represents the union of all possible validated Guideline objects
export type GuidelineTypes = {
  [K in Guideline["type"]]: yup.InferType<(typeof GuidelineSchemas)[K]>;
};

export const guidelineIsScheduledGuideline = (
  value: Omit<Guideline, "id">
): value is ScheduledGuideline => value.type === "scheduled";
export const isValidScheduledGuideline = (
  value: unknown
): value is ScheduledGuideline => {
  try {
    scheduledGuidelineSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const guidelineIsCravingGuideline = (
  value: Omit<Guideline, "id">
): value is CravingGuideline => value.type === "craving";
export const isValidCravingGuideline = (
  value: unknown
): value is CravingGuideline => {
  try {
    cravingGuidelineSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const guidelineIsLocationGuideline = (
  value: Omit<Guideline, "id">
): value is LocationGuideline => value.type === "location";
export const isValidLocationGuideline = (
  value: unknown
): value is LocationGuideline => {
  try {
    locationGuidelineSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const guidelineIsFeelingGuideline = (
  value: Omit<Guideline, "id">
): value is FeelingGuideline => value.type === "feeling";
export const isValidFeelingGuideline = (
  value: unknown
): value is FeelingGuideline => {
  try {
    feelingGuidelineSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

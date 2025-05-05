import * as yup from "yup";
import { CravingGameplan, cravingGameplanSchema } from "./craving";
import { GeneralGameplan, generalGameplanSchema } from "./general";
import { LocationGameplan, locationGameplanSchema } from "./location";
import { ScheduledGameplan, scheduledGameplanSchema } from "./scheduled";

export * from "./craving";
export * from "./general";
export * from "./location";
export * from "./scheduled";

export type Gameplan =
  | ScheduledGameplan
  | LocationGameplan
  | CravingGameplan
  | GeneralGameplan;

// Utility to dynamically select the correct schema based on the Gameplan type
export const GameplanSchemas: Record<
  Gameplan["type"],
  yup.ObjectSchema<Gameplan>
> = {
  scheduled: scheduledGameplanSchema,
  location: locationGameplanSchema,
  craving: cravingGameplanSchema,
  general: generalGameplanSchema,
} as any;

export const gameplanSchema = yup.lazy((value) => {
  if (typeof value.type === "string" && value.type in GameplanSchemas) {
    return GameplanSchemas[value.type as Gameplan["type"]];
  }

  return yup.object({
    type: yup
      .mixed<Gameplan["type"]>()
      .oneOf(Object.keys(GameplanSchemas) as Gameplan["type"][])
      .required(),
  });
}) as yup.Lazy<GameplanTypes[Gameplan["type"]]>;

// / This type represents the union of all possible validated Gameplan objects
export type GameplanTypes = {
  [K in Gameplan["type"]]: yup.InferType<(typeof GameplanSchemas)[K]>;
};

export const gameplanIsScheduledGameplan = (
  value: Omit<Gameplan, "id">
): value is ScheduledGameplan => value.type === "scheduled";
export const isValidScheduledGameplan = (
  value: unknown
): value is ScheduledGameplan => {
  try {
    scheduledGameplanSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const gameplanIsCravingGameplan = (
  value: Omit<Gameplan, "id">
): value is CravingGameplan => value.type === "craving";
export const isValidCravingGameplan = (
  value: unknown
): value is CravingGameplan => {
  try {
    cravingGameplanSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const gameplanIsLocationGameplan = (
  value: Omit<Gameplan, "id">
): value is LocationGameplan => value.type === "location";
export const isValidLocationGameplan = (
  value: unknown
): value is LocationGameplan => {
  try {
    locationGameplanSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const gameplanIsGeneralGameplan = (
  value: Omit<Gameplan, "id">
): value is GeneralGameplan => value.type === "general";
export const isValidGeneralGameplan = (
  value: unknown
): value is GeneralGameplan => {
  try {
    generalGameplanSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

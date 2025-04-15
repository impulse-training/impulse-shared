import * as yup from "yup";
import { ImpulseGameplan, impulseGameplanSchema } from "./impulse";
import { LocationGameplan, locationGameplanSchema } from "./location";
import { ScheduledGameplan, scheduledGameplanSchema } from "./scheduled";

export * from "./impulse";
export * from "./location";
export * from "./scheduled";

export type Gameplan = ScheduledGameplan | LocationGameplan | ImpulseGameplan;

// Utility to dynamically select the correct schema based on the Gameplan type
export const GameplanSchemas: Record<
  Gameplan["type"],
  yup.ObjectSchema<Gameplan>
> = {
  scheduled: scheduledGameplanSchema,
  location: locationGameplanSchema,
  impulse: impulseGameplanSchema,
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

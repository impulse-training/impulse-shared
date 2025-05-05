import * as yup from "yup";
import { gameplanBaseSchema } from "./base";

export const locationGameplanSchema = gameplanBaseSchema("location").shape({
  data: yup.object({
    locationName: yup.string().required(),
    triggerType: yup.string().oneOf(["arrival", "departure"]).required(),
    latitude: yup.number().min(-90).max(90).required(), // latitude ranges from -90 to 90
    longitude: yup.number().min(-180).max(180).required(), // longitude ranges from -180 to 180
  }),
});

export type LocationGameplan = yup.InferType<typeof locationGameplanSchema>;

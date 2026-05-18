import { z } from "zod";
export declare const LOCATION_TAG_GROUP_ID = "location";
export declare const locationOptionTypeSchema: z.ZodEnum<["place", "setting"]>;
export type LocationOptionType = z.infer<typeof locationOptionTypeSchema>;
export declare const tagGroupOptionSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    localLocationRef: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<["place", "setting"]>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    label: string;
    type?: "place" | "setting" | undefined;
    localLocationRef?: string | undefined;
}, {
    id: string;
    label: string;
    type?: "place" | "setting" | undefined;
    localLocationRef?: string | undefined;
}>;
export declare const tagGroupSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    options: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        localLocationRef: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodEnum<["place", "setting"]>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label: string;
        type?: "place" | "setting" | undefined;
        localLocationRef?: string | undefined;
    }, {
        id: string;
        label: string;
        type?: "place" | "setting" | undefined;
        localLocationRef?: string | undefined;
    }>, "many">;
    isPrimary: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    options: {
        id: string;
        label: string;
        type?: "place" | "setting" | undefined;
        localLocationRef?: string | undefined;
    }[];
    name: string;
    isPrimary: boolean;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
}, {
    options: {
        id: string;
        label: string;
        type?: "place" | "setting" | undefined;
        localLocationRef?: string | undefined;
    }[];
    name: string;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    isPrimary?: boolean | undefined;
}>;
export type TagGroupOption = z.infer<typeof tagGroupOptionSchema>;
export type TagGroup = z.infer<typeof tagGroupSchema>;
export declare function tagOptionHasLocationRef(option: TagGroupOption): boolean;
export declare function tagOptionIsPlace(option: TagGroupOption): boolean;

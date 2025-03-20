type WithMaybeId = { id: string | undefined };
export type WithId<T extends WithMaybeId> = T & { id: string };

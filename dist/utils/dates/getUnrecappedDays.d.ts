export type DaySummaryLike = {
    id: string;
    dayTotalsConfirmedAt?: unknown | null;
    recapStartedAt?: unknown | null;
};
export type UnrecappedDay = {
    dateString: string;
    label: string;
};
export declare function getUnrecappedDays(options: {
    dateRangeStart: Date;
    userSignUpDate?: Date | null;
    allDaySummaries: DaySummaryLike[];
    timeZone: string;
    today?: Date;
}): UnrecappedDay[];

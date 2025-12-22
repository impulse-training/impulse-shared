// Timezone-aware util to compute unrecapped days between a start date and yesterday (local to timeZone)
// - dateRangeStart: earliest date to consider (UTC Date)
// - userSignUpDate: if provided, clamp the start to this date's local day in timeZone
// - allDaySummaries: list with ids in 'yyyy-MM-dd' (local day key) and optional recap flags
// - timeZone: IANA time zone string, e.g. 'Australia/Adelaide'
// Returns a list sorted ascending by day: { dateString, label }
// Note: We avoid bringing in heavy tz libs by using Intl.DateTimeFormat and Date to derive local days.

export type DaySummaryLike = {
  id: string; // 'yyyy-MM-dd'
  recapRequirementsMetAt?: unknown | null;
  recapStartedAt?: unknown | null;
};

export type UnrecappedDay = {
  dateString: string; // 'yyyy-MM-dd' keyed to timeZone local day
  label: string; // 'Yesterday' | weekday | 'MMM d'
};

function toLocalParts(date: Date, timeZone: string) {
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const parts = fmt.formatToParts(date);
  const y = Number(parts.find((p) => p.type === "year")?.value);
  const m = Number(parts.find((p) => p.type === "month")?.value);
  const d = Number(parts.find((p) => p.type === "day")?.value);
  return { year: y, month: m, day: d };
}

function toLocalKey(date: Date, timeZone: string): string {
  const { year, month, day } = toLocalParts(date, timeZone);
  const mm = String(month).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  return `${year}-${mm}-${dd}`;
}

function addDaysUTC(date: Date, days: number): Date {
  const d = new Date(date.getTime());
  d.setUTCDate(d.getUTCDate() + days);
  return d;
}

function fromLocalYMDToUTCStartOfDay(ymd: string, timeZone: string): Date {
  // Construct a Date representing local midnight in the given time zone, then return its equivalent UTC moment.
  // We approximate by creating a date string and letting the engine interpret with the given timeZone via Intl.
  // For our use (keys and comparisons), we only need consistent y-m-d mapping.
  const [yearStr, monthStr, dayStr] = ymd.split("-");
  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);
  // Create a Date at UTC then adjust by the offset between local midnight and UTC.
  // Compute the offset by formatting a known Date in that zone.
  const ref = new Date(Date.UTC(year, month - 1, day, 0, 0, 0));
  // Get what the local key would be for this ref; if not matching, adjust by hours to reach local midnight.
  // Instead of complex offset math, we iterate at most 1 day around to find the same local YMD.
  for (let shiftHours of [0, -12, 12, -24, 24]) {
    const candidate = new Date(ref.getTime() + shiftHours * 60 * 60 * 1000);
    if (toLocalKey(candidate, timeZone) === ymd) return candidate;
  }
  return ref; // fallback
}

function formatLabel(date: Date, todayUTC: Date, timeZone: string): string {
  const dayMs = 24 * 60 * 60 * 1000;
  const localTodayKey = toLocalKey(todayUTC, timeZone);
  const localDateKey = toLocalKey(date, timeZone);

  // compute local day difference by walking keys
  // yesterday if localDateKey is the immediate previous local day key
  const yesterdayUTC = addDaysUTC(todayUTC, -1);
  const yesterdayKey = toLocalKey(yesterdayUTC, timeZone);
  if (localDateKey === yesterdayKey) return "Yesterday";

  // within last 6 days -> weekday name
  const diffDays = Math.floor(
    (fromLocalYMDToUTCStartOfDay(localTodayKey, timeZone).getTime() -
      fromLocalYMDToUTCStartOfDay(localDateKey, timeZone).getTime()) /
      dayMs
  );
  if (diffDays <= 6) {
    return new Intl.DateTimeFormat(undefined, {
      timeZone,
      weekday: "long",
    }).format(date);
  }

  // else MMM d
  return new Intl.DateTimeFormat(undefined, {
    timeZone,
    month: "short",
    day: "numeric",
  }).format(date);
}

export function getUnrecappedDays(options: {
  dateRangeStart: Date;
  userSignUpDate?: Date | null;
  allDaySummaries: DaySummaryLike[];
  timeZone: string;
  today?: Date; // for testing
}): UnrecappedDay[] {
  const { dateRangeStart, userSignUpDate, allDaySummaries, timeZone } = options;
  const todayUTC = options.today ?? new Date();

  // clamp start to signup local day if later
  let start = dateRangeStart;
  if (userSignUpDate) {
    // compare by local keys
    const startKey = toLocalKey(start, timeZone);
    const signupKey = toLocalKey(userSignUpDate, timeZone);
    const startUTC = fromLocalYMDToUTCStartOfDay(startKey, timeZone);
    const signupUTC = fromLocalYMDToUTCStartOfDay(signupKey, timeZone);
    if (signupUTC.getTime() > startUTC.getTime()) start = signupUTC;
    else start = startUTC;
  }

  // End is yesterday local
  const yesterdayUTC = addDaysUTC(todayUTC, -1);

  const results: UnrecappedDay[] = [];

  // Iterate by UTC days but evaluate local keys; stop when local key passes yesterday's local key
  let cursor = start;
  const yesterdayKey = toLocalKey(yesterdayUTC, timeZone);
  while (toLocalKey(cursor, timeZone) <= yesterdayKey) {
    const localKey = toLocalKey(cursor, timeZone);
    const summary = allDaySummaries.find((s) => s.id === localKey);
    if (!summary?.recapRequirementsMetAt && !summary?.recapStartedAt) {
      results.push({
        dateString: localKey,
        label: formatLabel(cursor, todayUTC, timeZone),
      });
    }
    cursor = addDaysUTC(cursor, 1);
  }

  return results;
}

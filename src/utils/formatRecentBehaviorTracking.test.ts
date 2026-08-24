import type { BehaviorLog } from "../schemas/log/behaviorLog";
import {
  formatRecentBehaviorTrackingForPrompt,
  formatTimeAgo,
} from "./formatRecentBehaviorTracking";

const NOW = Date.parse("2026-08-23T14:39:30Z");

/** Minimal Firestore Timestamp stand-in: the formatter only needs toMillis. */
const ts = (ms: number) => ({ toMillis: () => ms });

const log = (
  over: {
    minutesAgo: number;
    behaviorName?: string | null;
    formattedValue?: string;
    debriefOutcome?: BehaviorLog["data"]["debriefOutcome"];
    sessionId?: string;
  },
): BehaviorLog =>
  ({
    type: "behavior",
    sessionId: over.sessionId ?? "other-session",
    timestamp: ts(NOW - over.minutesAgo * 60_000),
    data: {
      behaviorId: "b1",
      ...(over.behaviorName === null
        ? {}
        : { behaviorName: over.behaviorName ?? "Social media & videos" }),
      formattedValue: over.formattedValue ?? "15m",
      ...(over.debriefOutcome ? { debriefOutcome: over.debriefOutcome } : {}),
    },
  }) as unknown as BehaviorLog;

describe("formatTimeAgo", () => {
  it("buckets coarsely", () => {
    expect(formatTimeAgo(-5_000)).toBe("just now");
    expect(formatTimeAgo(15_000)).toBe("just now");
    expect(formatTimeAgo(90_000)).toBe("just now");
    expect(formatTimeAgo(5 * 60_000)).toBe("5 minutes ago");
    expect(formatTimeAgo(59 * 60_000)).toBe("59 minutes ago");
    expect(formatTimeAgo(60 * 60_000)).toBe("an hour ago");
    expect(formatTimeAgo(95 * 60_000)).toBe("an hour and 35 minutes ago");
    expect(formatTimeAgo(3 * 60 * 60_000)).toBe("3 hours ago");
  });
});

describe("formatRecentBehaviorTrackingForPrompt", () => {
  it("returns empty when nothing is recent", () => {
    expect(formatRecentBehaviorTrackingForPrompt([], { now: NOW })).toBe("");
    expect(
      formatRecentBehaviorTrackingForPrompt([log({ minutesAgo: 60 * 9 })], {
        now: NOW,
      }),
    ).toBe("");
  });

  it("renders newest first with the time and the outcome", () => {
    const out = formatRecentBehaviorTrackingForPrompt(
      [
        log({ minutesAgo: 90, behaviorName: "Coffee", formattedValue: "2 cups" }),
        log({ minutesAgo: 0.2, debriefOutcome: "acted" }),
      ],
      { now: NOW },
    );

    expect(out).toContain("## RECENTLY TRACKED BEHAVIOR");
    const lines = out.split("\n").filter((l) => l.startsWith("- "));
    expect(lines).toEqual([
      "- Social media & videos - 15m (just now; they acted on the urge)",
      "- Coffee - 2 cups (an hour and 30 minutes ago)",
    ]);
  });

  it("marks logs from the current session so the transcript line gets a time", () => {
    const out = formatRecentBehaviorTrackingForPrompt(
      [log({ minutesAgo: 4, sessionId: "s1", debriefOutcome: "resisted" })],
      { now: NOW, sessionId: "s1" },
    );
    expect(out).toContain(
      "- Social media & videos - 15m (4 minutes ago, in this conversation; they resisted the urge)",
    );
  });

  it("skips the placeholder debrief row that has no behavior yet", () => {
    expect(
      formatRecentBehaviorTrackingForPrompt(
        [log({ minutesAgo: 1, behaviorName: null })],
        { now: NOW },
      ),
    ).toBe("");
  });

  it("omits the instruction line when guidance is null", () => {
    const out = formatRecentBehaviorTrackingForPrompt([log({ minutesAgo: 1 })], {
      now: NOW,
      guidance: null,
    });
    expect(out.split("\n").filter(Boolean)).toEqual([
      "## RECENTLY TRACKED BEHAVIOR",
      "- Social media & videos - 15m (just now)",
    ]);
  });

  it("caps the list", () => {
    const logs = Array.from({ length: 12 }, (_, i) =>
      log({ minutesAgo: i + 1, formattedValue: `${i}m` }),
    );
    const out = formatRecentBehaviorTrackingForPrompt(logs, { now: NOW, cap: 3 });
    expect(out.split("\n").filter((l) => l.startsWith("- "))).toHaveLength(3);
    expect(out).toContain("- Social media & videos - 0m (just now)");
  });
});

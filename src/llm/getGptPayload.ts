import { ChatCompletionMessageParam } from "openai/resources/chat";
import {
  BehaviorLog,
  Log,
  logIsAssistantMessageLog,
  logIsBehaviorLog,
  logIsCallLog,
  logIsDayTotalsPromptLog,
  logIsDebriefQuestionLog,
  logIsMetricLog,
  logIsPlansLog,
  logIsMergeBehaviorsProposalLog,
  logIsProposedStrategyModificationLog,
  logIsProposedGoalChangeLog,
  logIsResumeRecapRemindersCtaLog,
  logIsTacticLog,
  logIsToolCallLog,
  logIsUserMessageLog,
  logIsWeekOverviewLog,
  logIsWidgetSetupLog,
} from "../schemas/log";
import { buildPlansLogPayload } from "./buildPlansLogPayload";
import { DEFAULT_RECAP_TIME_LABEL } from "../constants";
import { isPostDebriefPhase, SessionPhase } from "../schemas/session/phase";
import { nowMs } from "../utils/clock";
import { formatTimeAgo } from "../utils/formatRecentBehaviorTracking";

interface PayloadOptions {
  forSummarization?: boolean;
  sessionPhase?: SessionPhase;
  sessionType?: string;
  /**
   * Tactic ids the user has completed in this session (from its tactic logs).
   * Lets the plan context mark which plan tactics are already done — the user
   * may complete steps out of order, and the plans log's own outcome field is
   * only synced by the client after the fact.
   */
  completedTacticIds?: string[];
}

/**
 * Drop the tactic-card `logId` from a replayed tool-call result before it goes
 * back to the model. suggestTactic / findOrCreateTactic return it, but no tool
 * ever reads a tactic logId back (tactic actions use tacticId), so it's dead
 * context — and being a random Firestore doc id, it also makes request bodies
 * nondeterministic across runs. The stored ToolCallLog keeps it; only the model
 * payload is trimmed. (Behavior logIds the model DOES need come from the system
 * prompt's [logId=...] markers, not tool results, so they're unaffected.)
 */
function stripReplayedToolResultIds(
  result: ChatCompletionMessageParam,
): ChatCompletionMessageParam {
  if (
    (result as { role?: string }).role !== "tool" ||
    typeof (result as { content?: unknown }).content !== "string"
  ) {
    return result;
  }
  const content = (result as { content: string }).content;
  try {
    const parsed = JSON.parse(content);
    if (parsed && typeof parsed === "object" && "logId" in parsed) {
      delete (parsed as { logId?: unknown }).logId;
      return { ...result, content: JSON.stringify(parsed) };
    }
  } catch {
    // Non-JSON tool content — leave as-is.
  }
  return result;
}

function buildBehaviorLogPayload(
  log: BehaviorLog,
  options?: PayloadOptions,
): ChatCompletionMessageParam[] {
  const { behaviorName, formattedValue, source, debriefOutcome } = log.data;

  const parts: string[] = [];

  if (debriefOutcome) {
    if (options?.forSummarization) {
      // Facts only — no AI conversation instructions
      if (debriefOutcome === "resisted") {
        parts.push(
          "<CONTEXT>The user resisted the urge.</CONTEXT>",
        );
      } else if (debriefOutcome === "acted") {
        parts.push(
          "<CONTEXT>The user acted on the urge.</CONTEXT>",
        );
      } else if (debriefOutcome === "still_there") {
        parts.push(
          "<CONTEXT>The user reported the urge was still present.</CONTEXT>",
        );
      }
    } else {
      if (debriefOutcome === "resisted") {
        parts.push(
          "<CONTEXT>The user resisted the urge and is now debriefing. Do not assume they engaged with any tactic that was suggested earlier — each tactic log in the transcript states whether it was completed or left unengaged. Only reference what the transcript actually shows.</CONTEXT>",
        );
      } else if (debriefOutcome === "acted") {
        parts.push(
          "<CONTEXT>The user acted on an urge. We're debriefing what happened and how to support them in a non-judgmental way.</CONTEXT>",
        );
      } else if (debriefOutcome === "still_there") {
        parts.push(
          "<CONTEXT>The user reports that the urge is still present. We're helping them process the urge and decide what to do next.</CONTEXT>",
        );
      }
    }
  }

  // When it happened, on every tracked behavior rather than only the ones with
  // no outcome. The time used to sit exclusively on the outcome-less fallback,
  // so the logs that matter most — the ones the user answered a debrief on —
  // were the ones that lost it, and the model had nothing but transcript
  // position to tell a lapse logged seconds ago from one logged hours ago.
  //
  // Relative, not a clock time: this module has no user timezone, so the old
  // `toLocaleTimeString` rendered the server's zone and would tell a Mexico
  // City user their 8:39 AM lapse happened at 2:39 PM. "15 minutes ago" is
  // both timezone-free and the thing we actually want the model to notice.
  const trackedMs = log.timestamp?.toMillis?.() ?? log.timestamp?.toDate?.().getTime();
  const timeAgo =
    typeof trackedMs === "number" ? formatTimeAgo(nowMs() - trackedMs) : null;

  if (behaviorName && formattedValue) {
    parts.push(
      timeAgo
        ? `<CONTEXT>Behavior tracked: ${behaviorName} - ${formattedValue} (${timeAgo}).</CONTEXT>`
        : `<CONTEXT>Behavior tracked: ${behaviorName} - ${formattedValue}.</CONTEXT>`,
    );
  }

  if (parts.length > 0) {
    return [
      {
        role: "user",
        content: parts.join(" "),
      },
    ];
  }

  return [];
}



export function getGptPayload(
  log: Log,
  isFinalLogInSession: boolean,
  options?: PayloadOptions,
): ChatCompletionMessageParam[] {
  if (log.type === "proposed_experiment") {
    const behaviorName =
      "behaviorName" in log
        ? (log as { behaviorName?: string }).behaviorName
        : undefined;
    const metricLabels =
      "metricLabels" in log
        ? (log as { metricLabels?: string[] }).metricLabels
        : undefined;
    const metricNames =
      "metrics" in log
        ? (
            log as {
              metrics?: Array<{
                name: string;
              }>;
            }
          ).metrics?.map((metric) => metric.name)
        : undefined;

    const behaviorText =
      behaviorName && behaviorName.trim().length > 0
        ? behaviorName
        : "the behavior you’re tracking";
    const metricsText =
      metricNames && metricNames.length > 0
        ? metricNames.join(", ")
        : metricLabels && metricLabels.length > 0
          ? metricLabels.join(", ")
          : "what you agreed to track";

    if (isFinalLogInSession) {
      return [
        {
          role: "user",
          content:
            "<SYSTEM>\n" +
            "The user has just accepted a proposed experiment.\n" +
            "Respond to the user using the following message TEMPLATE, adapting it to what you know about the user’s issue and the specific experiment configuration (e.g. behavior, metrics).\n" +
            "Keep the structure and tone, but substitute details appropriately. Do not add extra paragraphs or questions beyond this template.\n\n" +
            "BEHAVIOR:\n" +
            behaviorText +
            "\n\n" +
            "METRICS:\n" +
            metricsText +
            "\n\n" +
            "TEMPLATE:\n" +
            "You’re all set — the experiment has started - we’ll track " +
            behaviorText +
            " and " +
            metricsText +
            "\n\n" +
            `For now, just go about your day as usual. If you ${behaviorText}, log it in the app.\n\n` +
            "After " +
            DEFAULT_RECAP_TIME_LABEL +
            ", come back to do a short recap of how the day felt.\n\n" +
            "As you track over time, you’ll start seeing insights about how your behavior connects to the metrics you’re measuring.\n" +
            "</SYSTEM>",
        },
      ];
    }

    return [
      {
        role: "user",
        content:
          "<SYSTEM>The user has accepted the proposed experiment and it's now active. You do not need to re-explain the experiment; just treat this as context for future replies.</SYSTEM>",
      },
    ];
  }

  if (logIsProposedStrategyModificationLog(log)) {
    const title = log.data.title.trim();
    const summary = log.data.summary?.trim();
    const context = summary ? `${title}: ${summary}` : title;

    if (log.data.status === "accepted") {
      return [
        {
          role: "user",
          content: `<SYSTEM>The user accepted a suggested strategy update. Saved strategy: ${context}.</SYSTEM>`,
        },
      ];
    }
    if (log.data.status === "declined") {
      return [
        {
          role: "user",
          content: `<SYSTEM>The user DECLINED the suggested strategy update "${context}". Respect the decision without persuasion and move on (the next prepared item, or winding down).</SYSTEM>`,
        },
      ];
    }
    // Pending: the card is on screen awaiting a decision. This used to render
    // as nothing, so a card surfaced OUTSIDE a reconcile call (e.g. the next
    // prepared change advancing when a goal card is accepted) was invisible to
    // the model — it would ask an unrelated question while the user sat in
    // front of an unexplained card. Phrased as state, not a command: the log
    // re-renders every turn while pending, and the model may already have said
    // its one line.
    return [
      {
        role: "user",
        content:
          `<SYSTEM>A strategy proposal card "${context}" is in front of the user, awaiting their accept/decline. ` +
          `If you haven't already, say ONE short line pointing them to it — why it follows from what they said — and then wait. ` +
          `Do not restate the card's contents, do not explain how to accept or decline, and do not move the conversation onward past an undecided card.</SYSTEM>`,
      },
    ];
  }

  if (logIsProposedGoalChangeLog(log)) {
    const title = log.data.title.trim();
    const name = log.data.behaviorName?.trim();
    const label = name ? `"${title}" (${name})` : `"${title}"`;

    if (log.data.status !== "accepted" && log.data.status !== "declined") {
      // Same invisibility fix as the pending strategy card above.
      return [
        {
          role: "user",
          content:
            `<SYSTEM>A goal-change proposal card ${label} is in front of the user, awaiting their accept/decline. ` +
            `If you haven't already, say ONE short line pointing them to it, then wait. ` +
            `Do not restate the card's contents and do not move the conversation onward past an undecided card.</SYSTEM>`,
        },
      ];
    }

    return [
      {
        role: "user",
        content:
          log.data.status === "accepted"
            ? `<SYSTEM>The user ACCEPTED the proposed goal change ${label} — the behavior's goal has been updated. Acknowledge briefly and move the conversation forward (the next prepared item, or winding down); do not re-explain or re-pitch the goal.</SYSTEM>`
            : `<SYSTEM>The user DECLINED the proposed goal change ${label}. Respect the decision without persuasion and move on.</SYSTEM>`,
      },
    ];
  }

  if (logIsMergeBehaviorsProposalLog(log)) {
    const selected = log.data.selectedResponseText?.trim();
    if (selected) {
      return [
        {
          role: "user",
          content: selected,
        },
      ];
    }

    return [
      {
        role: "user",
        content: `<SYSTEM>Impulse showed the user a merge-behaviors proposal: ${log.data.title}. Task id: ${log.data.taskId}. No button has been selected yet.</SYSTEM>`,
      },
    ];
  }

  if (logIsDebriefQuestionLog(log)) {
    const selected = log.data.selectedResponseText?.trim();

    // Weekly-review and quick-question chips reuse this log type, but there
    // the selection IS the user's conversational reply and drives the flow.
    const isConversationalChip =
      log.data.debriefQuestionId.startsWith("weekly_review") ||
      log.data.debriefQuestionId.startsWith("quick_question");

    if (selected) {
      if (isConversationalChip) {
        return [
          {
            role: "user",
            content: selected,
          },
        ];
      }

      // User-configured tracking questions are incidental data capture, not a
      // conversational turn — frame the Q&A so the model doesn't make the
      // answer the topic of its next message.
      const capture = `Data capture: after tracking, the user was shown the question "${log.data.question}" and answered "${selected}".`;
      return [
        {
          role: "user",
          content:
            isFinalLogInSession && !options?.forSummarization
              ? `<SYSTEM>${capture} This is incidental data collection — do not comment on the answer or ask follow-up questions about it. Respond as you would have if the card hadn't appeared, continuing the conversation from where it left off.</SYSTEM>`
              : `<SYSTEM>${capture}</SYSTEM>`,
        },
      ];
    }

    return [
      {
        role: "user",
        content: `<SYSTEM>The user was shown a debrief question: "${log.data.question}". No option has been selected yet.</SYSTEM>`,
      },
    ];
  }

  if (logIsPlansLog(log)) {
    // Plans logs contain AI instructions that pollute summaries.
    // Actual plan usage is captured by separate tactic logs.
    if (options?.forSummarization) return [];
    return buildPlansLogPayload(
      log,
      isFinalLogInSession,
      options?.completedTacticIds,
    );
  }

  if (logIsUserMessageLog(log)) {
    return [
      {
        role: "user",
        content: log.data.message.content,
      },
    ];
  }

  // Handle AssistantMessageLog
  if (logIsAssistantMessageLog(log)) {
    // Recap follow-up reminders are pull notifications, not part of the conversation.
    // Including them causes the context to end on a stale assistant message, which
    // causes the LLM to return an empty response.
    if ((log as any).source === "recap_follow_up") {
      return [];
    }
    // Sanitize legacy [SHOW_STRATEGY] markers out of replayed history — a
    // marker in a past assistant message seeds the model to imitate it (we
    // observed marker-only replies born exactly this way). A message that was
    // only a marker is dropped entirely.
    const content = log.data.message.content;
    if (typeof content === "string" && content.includes("[SHOW_STRATEGY]")) {
      const cleaned = content.replace(/\[SHOW_STRATEGY\]/g, "").trim();
      if (!cleaned) return [];
      return [{ ...log.data.message, content: cleaned }];
    }
    return [log.data.message];
  }

  // Handle ToolCallLog
  if (logIsToolCallLog(log)) {
    const messages: ChatCompletionMessageParam[] = [];
    messages.push(log.data.message as ChatCompletionMessageParam);

    // Add tool result messages
    if (log.data.toolCallResults && log.data.toolCallResults.length > 0) {
      log.data.toolCallResults.forEach((result) => {
        messages.push(stripReplayedToolResultIds(result));
      });
    }

    return messages;
  }

  // Handle CallLog
  if (logIsCallLog(log)) {
    const messages: ChatCompletionMessageParam[] = [];

    if (!log.data.endedAt) return [];

    // The turns are inline as message logs right after this one, so the call
    // log is only a boundary. No summary either: it would duplicate them.
    if (log.data.transcriptInSession) {
      messages.push({
        role: "user",
        content:
          "<SYSTEM>The user had a voice call with the assistant. The turns spoken on that call follow as ordinary messages.</SYSTEM>",
      });
      return messages;
    }

    const transcriptItems = log.data.transcriptItems?.filter(
      (item) => item.type !== "partial" && item.text.trim().length > 0,
    );

    if (log.data.summary) {
      messages.push({
        role: "user",
        content: `<SYSTEM>Previous call summary: ${log.data.summary}</SYSTEM>`,
      });
    } else if (transcriptItems && transcriptItems.length > 0) {
      const transcript = transcriptItems
        .map(
          (item) =>
            `${item.role === "user" ? "User" : "Assistant"}: ${item.text}`,
        )
        .join("\n");
      messages.push({
        role: "user",
        content: `<SYSTEM>The user had a voice call with the assistant. A summary isn't available yet — full transcript:\n${transcript}</SYSTEM>`,
      });
    } else {
      messages.push({
        role: "user",
        content: "<SYSTEM>User had a previous call with the assistant</SYSTEM>",
      });
    }

    return messages;
  }

  if (logIsTacticLog(log)) {
    const tacticTitle = log.data.tactic.title;
    const isCompleted = log.data.completed === true;
    const response = log.data.response;
    const isPostDebrief = isPostDebriefPhase(options?.sessionPhase);

    // A completed step of the user's ASSIGNED plan (only plan-sheet
    // completions carry planId) gets a CHECKPOINT directive when it's the
    // latest thing in the session: credit the step, then ask how the urge is
    // doing — never march the user to the next step in the same message. The
    // plan is a strategy, not a script; if the urge passed, the remaining
    // steps were never needed (resolvePlanEarly), which is a success.
    const checkpointDirective =
      isCompleted &&
      log.data.planId &&
      isFinalLogInSession &&
      !isPostDebrief &&
      !options?.forSummarization
        ? " This was a step of the user's assigned plan. Reply in ONE short message: briefly credit them, then ask how the urge is doing now. Do NOT direct them to the next step of the plan in this message. If the user then says the urge has passed or they feel in control, call resolvePlanEarly and reinforce the win; if the urge is still present or they want to continue, point them to the next tactic of their plan they have NOT already completed — the user may do steps out of order, and if none remain the plan is simply done: never send them back to a completed tactic."
        : "";

    if (isCompleted && response) {
      return [
        {
          role: "user",
          content: `<SYSTEM>User completed tactic: ${tacticTitle}. Response: ${response.formattedValue}.${checkpointDirective}</SYSTEM>`,
        },
      ];
    }

    if (isCompleted) {
      return [
        {
          role: "user",
          content: `<SYSTEM>User completed tactic: ${tacticTitle}.${checkpointDirective}</SYSTEM>`,
        },
      ];
    }

    if (options?.forSummarization) {
      return [
        {
          role: "user",
          content: `<SYSTEM>Tactic suggested: "${tacticTitle}" — not started or completed.</SYSTEM>`,
        },
      ];
    }
    if (isPostDebrief) {
      return [
        {
          role: "user",
          content: `<SYSTEM>Earlier in this session Impulse suggested the tactic "${tacticTitle}", but the user did NOT start or complete it. Do not praise the user for doing this tactic.</SYSTEM>`,
        },
      ];
    }
    // Auto-advanced card that is the latest thing in the session: the app just
    // presented the plan's next tactic deterministically, and the assistant's
    // reply is the bridging line into it.
    if (log.data.autoAdvanced && isFinalLogInSession) {
      return [
        {
          role: "user",
          content:
            `<SYSTEM>The app just automatically presented the next tactic in the user's plan: "${tacticTitle}". ` +
            "Reply with one or two short sentences: first briefly credit the user for the tactic they just completed, then lead them straight into this one. " +
            "Do not ask whether they want to continue, do not re-explain the tactic's steps, and do NOT call suggestTactic — the card is already presented.</SYSTEM>",
        },
      ];
    }
    return [
      {
        role: "user",
        content: `<SYSTEM>Impulse suggested the tactic "${tacticTitle}". The user has not engaged with it yet — do not assume they have done it.</SYSTEM>`,
      },
    ];
  }

  if (logIsWidgetSetupLog(log)) {
    return [
      {
        role: "user",
        content: `<SYSTEM>The user has installed the Impulse widget!</SYSTEM>`,
      },
    ];
  }

  if (logIsResumeRecapRemindersCtaLog(log)) {
    if (!log.data.respondedAt) {
      return [
        {
          role: "user",
          content:
            "<SYSTEM>Impulse showed the user a card asking whether to turn their daily recap reminders back on (reminders were paused while they were away). Briefly introduce it: welcome them back without making their absence a thing, and note they can restart daily reminders with the card whenever they are ready. No button has been selected yet.</SYSTEM>",
        },
      ];
    }
    return [
      {
        role: "user",
        content:
          log.data.resumed === true
            ? "<SYSTEM>The user turned their daily recap reminders back on. Acknowledge briefly and move the conversation forward; do not celebrate excessively.</SYSTEM>"
            : "<SYSTEM>The user chose not to resume daily recap reminders for now. Respect the decision without persuasion and move on; they can re-enable later.</SYSTEM>",
      },
    ];
  }

  // Handle BehaviorLog
  if (logIsBehaviorLog(log)) {
    return buildBehaviorLogPayload(log, options);
  }

  // Handle DayTotalsPromptLog with confirmedAt (day totals confirmed)
  if (logIsDayTotalsPromptLog(log) && log.data.confirmedAt) {
    return [
      {
        role: "user",
        content:
          "<CONTEXT>The user has confirmed their day totals. Open the reflection. HOW to open tonight is owned by the TONIGHT'S RECAP section of your instructions — follow its guidance for this specific night (a milestone night opens by naming the win; an ordinary night opens broad on the day, not zeroed in on one behavior; a coach-chosen question gets woven in later, never fired as the opening line). Do not recite the user's numbers back to them.</CONTEXT>",
      },
    ];
  }

  // Handle MetricLog
  if (logIsMetricLog(log)) {
    const { metricName, value, minLabel, maxLabel, quadrant } = log.data;
    const scaleDesc =
      minLabel && maxLabel ? ` (${minLabel} to ${maxLabel})` : "";
    if (value == null) {
      return [
        {
          role: "user",
          content: `<CONTEXT>Metric "${metricName}"${scaleDesc} is awaiting user rating (1-5 scale).</CONTEXT>`,
        },
      ];
    }
    // Feeling metric (has quadrant) — use feeling-specific wording
    if (quadrant) {
      if (isFinalLogInSession && log.shouldZaraRespond) {
        return [
          {
            role: "user",
            content: `<CONTEXT>The user is feeling ${metricName} (${quadrant}), rated ${value}/5${scaleDesc}. They want to discuss this feeling.</CONTEXT>`,
          },
        ];
      }
      return [
        {
          role: "user",
          content: `<CONTEXT>User is feeling "${metricName}" (${quadrant}): ${value}/5${scaleDesc}.</CONTEXT>`,
        },
      ];
    }
    return [
      {
        role: "user",
        content: `<CONTEXT>User rated "${metricName}": ${value}/5${scaleDesc}.</CONTEXT>`,
      },
    ];
  }

  // Tags updated from UI — inform the AI so it can respond with tactic suggestions
  if (log.type === "tags_updated") {
    if (options?.forSummarization) return [];

    const tactics = (log as any).data?.recommendedTactics as
      | Array<{ tacticId: string; title: string; description?: string; phase?: string }>
      | undefined;

    // `behaviorIds` is only written when the update changed which behaviors
    // the session is about, so its presence means the user flagged a
    // behavior as also relevant — a different event from editing a tag, and
    // the one the reply should acknowledge.
    const behaviorsChanged =
      ((log.data as { behaviorIds?: string[] }).behaviorIds?.length ?? 0) > 0;
    const opener = behaviorsChanged
      ? "The user just flagged another behavior as relevant to this moment using the tag bar. "
      : "The user just updated their session tags using the tag bar. ";

    // recommendedTactics on a tags_updated log always come from the plan
    // matched for the session (extractRecommendedTacticsFromPlans). Whether
    // the plan sheet shows them depends on ownership: only the user's OWN
    // plans (planSource trigger/behavior) render there — engine-matched
    // plans are invisible and deliver inline, one suggestTactic card at a
    // time.
    if (tactics && tactics.length > 0) {
      const planSource = (log as any).data?.planSource as string | undefined;
      const isUserOwnedPlan =
        planSource === "trigger" || planSource === "behavior";

      if (isUserOwnedPlan) {
        const lines = tactics.map(
          (t) =>
            `- "${t.title}"${t.phase ? ` (${t.phase})` : ""}${t.description ? ` — ${t.description}` : ""}`,
        );
        return [
          {
            role: "user",
            content:
              "<SYSTEM>" + opener + "Their own plan was assigned. " +
              "The app is displaying the plan to the user in the plan sheet with these steps (in order):\n" +
              lines.join("\n") +
              "\n\nReply with ONE short sentence pointing them to the first step by name. " +
              "Do NOT call suggestTactic for these tactics and do NOT type out their step instructions — the plan sheet already shows them.</SYSTEM>",
          },
        ];
      }

      const lines = tactics.map(
        (t) =>
          `- [id=${t.tacticId}] "${t.title}"${t.phase ? ` (${t.phase})` : ""}${t.description ? ` — ${t.description}` : ""}`,
      );
      return [
        {
          role: "user",
          content:
            "<SYSTEM>" + opener +
            "Recommended tactics were matched for this moment — the user cannot see them yet. " +
            "Call suggestTactic with the FIRST tactic's ID to present it as a card, then reply with one short connecting line:\n" +
            lines.join("\n") +
            "</SYSTEM>",
        },
      ];
    }

    return [
      {
        role: "user",
        content:
          "<SYSTEM>" + opener +
          "Review the updated tags and behaviors in your context and respond appropriately.</SYSTEM>",
      },
    ];
  }

  if (log.type === "impulse_started") {
    if (options?.forSummarization) return [];

    if (options?.sessionType === "onboarding") {
      return [
        {
          role: "user",
          content:
            "<SYSTEM>The user just activated Impulse Mode via their shortcut (widget or back-tap). " +
            "This confirms their shortcut is installed and working. " +
            "Acknowledge their success and move on to the next step.</SYSTEM>",
        },
      ];
    }

    // Re-press: the user hit the impulse button again and this existing
    // session was reopened. The urge is still present or has returned.
    if ((log.data as { repress?: boolean }).repress === true) {
      return [
        {
          role: "user",
          content:
            "<SYSTEM>The user just pressed the impulse button again — the urge is still present or has returned. " +
            "Re-engage in ONE short message, matched to what you actually know: " +
            "if the session has an assigned plan, point them back to its current step by name (the plan sheet shows it); " +
            "if a suggested tactic card is pending (not yet engaged), point them back to it; " +
            "if you know their tags or behavior but no plan, lead them into a fitting tactic. " +
            "If you know NOTHING yet (no tags, no behavior, no plan — the user never answered the opening question), acknowledge the urge is still here and gently ask what's going on — that is the one case where re-asking is right. " +
            "Never reference a plan or tactic that doesn't exist, and never call setSessionTags without real user input to infer from.</SYSTEM>",
        },
      ];
    }

    return [];
  }

  if (log.type === "tactic_suggestions") {
    const data = (log as any).data;
    const suggestions = data?.suggestions as Array<{ theme: string; tacticId?: string; guidance?: string }> | undefined;
    if (!suggestions?.length) return [];

    const parts = suggestions.map((s) => {
      if (s.tacticId) return `"${s.theme}" (existing tactic ${s.tacticId})`;
      return `"${s.theme}" (template — needs personalization${s.guidance ? `, guidance: ${s.guidance}` : ""})`;
    });

    return [
      {
        role: "user" as const,
        content: `<SYSTEM>Tactic suggestion cards were shown to the user: ${parts.join("; ")}. For existing tactics, the user can add them via the + button. For templates, the user will tap to express interest and you should help personalize the tactic.</SYSTEM>`,
      },
    ];
  }

  if (logIsWeekOverviewLog(log)) {
    if (options?.forSummarization) return [];

    const cards = log.data.behaviors;
    if (!cards.length) return [];

    // The weekly review's prompt tells the coach to open on the week "from the
    // card". Without this branch the card was a pure display artifact — it fell
    // through to the empty return below, so the coach was told to read numbers
    // it had never been shown and opened on a generic "how was the week?"
    // instead. Worse, the week facts it DID get are recomputed from
    // daySummaries and are a different set (day-by-day met/missed) than the
    // card's (total, change vs last week), so the two could disagree on screen.
    const lines = cards.map((card) => {
      const parts = [card.weeklyTotalFormatted];

      if (card.pctChangeFromLastWeek != null) {
        const pct = Math.round(Math.abs(card.pctChangeFromLastWeek) * 100);
        // A card only earns a comparison when there IS a prior week, so 0% here
        // means genuinely level, not missing data.
        parts.push(
          pct === 0
            ? "level with last week"
            : `${card.pctChangeFromLastWeek < 0 ? "down" : "up"} ${pct}% vs last week`,
        );
      }

      // No trend here on purpose: the card's old "Trending up/down" was the
      // behavior state's short-window slope, a different fact from the change
      // vs last week beside it, and it read as the week getting worse next to
      // "down 74%". The day-by-day shape reaches the model through the week
      // block, and reaches the user as the card's sparkline.

      if (card.mainTriggers?.length) {
        parts.push(`most-tagged triggers: ${card.mainTriggers.join(", ")}`);
      }

      return `- ${card.name}: ${parts.join("; ")}`;
    });

    return [
      {
        role: "user" as const,
        content:
          "<SYSTEM>The user was just shown their week card(s) for " +
          `${log.data.weekStartDateString} to ${log.data.weekEndDateString}. ` +
          "These are the headline figures on screen in front of them:\n" +
          `${lines.join("\n")}\n` +
          "These are for CONSISTENCY, not a script: if you cite a total or a " +
          "change, use these exact figures so what you say matches the card " +
          "they can see. They do not replace the week's shape — still open on " +
          "the multi-day pattern (the run of days, where it slipped, where it " +
          "recovered) from the week block above. Whether it was a heavier or " +
          "a lighter week than last week is settled by the change figure " +
          "above and nothing else; say what the figures show without " +
          "inventing more than they support, then ask how the week went for " +
          "them; that question is the point of the opener.</SYSTEM>",
      },
    ];
  }

  // Return empty array for other (unsupported) log types
  return [];
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callLogSchema = exports.callTimingsSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const tactic_1 = require("../tactic");
const transcriptItem_1 = require("../transcriptItem");
const base_1 = require("./base");
/**
 * How long a voice call took to become a conversation, in milliseconds.
 *
 * Durations, not timestamps, and deliberately split by whose clock measured
 * them. The four `fromButton*` figures all come from ONE clock — the phone's,
 * started at the button press — because the two events that actually define the
 * user-facing number (the tap, and the first word they hear) both happen on the
 * device. Stitching that number out of client and server timestamps instead
 * would be measuring clock skew as much as latency.
 *
 * The remaining fields are each measured wholly inside one process, so they say
 * where the time went without ever being compared across machines.
 */
exports.callTimingsSchema = zod_1.z.object({
    /** Token request sent. Covers session creation and the doc round-trip. */
    fromButtonToTokenRequestMs: zod_1.z.number().optional(),
    /**
     * The call UI replaced the chat composer.
     *
     * Not a step in the connection chain — the call is coming up regardless of
     * what is painted — but it is the only part of the wait the user can SEE, and
     * it is the part they complain about. Every other figure here is about audio;
     * without this one, "it showed the text view for a second first" is
     * unfalsifiable.
     */
    fromButtonToVoiceUiMs: zod_1.z.number().optional(),
    /**
     * Which mode the composer painted in FIRST.
     *
     * "text" means the chat composer was genuinely on screen before the call UI
     * replaced it. "voice" means it never was, and any perceived delay is the
     * navigation animation or the loading gate — a different problem with a
     * different fix.
     */
    composerFirstMode: zod_1.z.enum(["text", "voice"]).optional(),
    /**
     * The caller heard the opener, played from the app bundle.
     *
     * The point of the whole early-capture harness: this should land within a few
     * hundred milliseconds of the press, against ~5s for an opener that waits for
     * a room, an agent and a model round-trip.
     */
    fromButtonToOpenerAudioMs: zod_1.z.number().optional(),
    /** The caller started their first utterance, per on-device recognition. */
    fromButtonToSpeechStartMs: zod_1.z.number().optional(),
    /** That utterance ended — the turn boundary the handover waits for. */
    fromButtonToSpeechEndMs: zod_1.z.number().optional(),
    /**
     * Turn boundary to the live microphone being unmuted.
     *
     * The seam. Local capture and the live track must never both feed the model,
     * so this is the window in which the caller is heard by exactly one of them —
     * small enough that a word spoken across it is at worst duplicated, never
     * dropped.
     */
    handoverMs: zod_1.z.number().optional(),
    /**
     * Whether the room finished connecting while the caller was mid-utterance.
     *
     * The case the harness exists to survive. If this is rare, the design can be
     * simplified; if it is the norm, the boundary-triggered handover is carrying
     * the feature.
     */
    connectedMidUtterance: zod_1.z.boolean().optional(),
    /**
     * How the caller's first utterance reached the model: forwarded as text from
     * on-device recognition, spoken live after handover, or never — they said
     * nothing before the room was ready.
     */
    firstUtteranceRoute: zod_1.z.enum(["forwarded", "live", "none"]).optional(),
    /**
     * Which canned opener the DEVICE played, so a bad line can be traced back.
     *
     * Only written by app bundles that play the opener themselves. Current
     * bundles nominate one and the agent plays it into the room instead; that id
     * is recorded as roomOpenerId. Two fields rather than one because the two
     * mean opposite things about who made the sound, and reading a call log that
     * conflates them is how you end up chasing a double greeting.
     */
    openerId: zod_1.z.string().optional(),
    /** Which canned opener the AGENT played into the room. */
    roomOpenerId: zod_1.z.string().optional(),
    /** Token landed on this device (today: written to Firestore, then synced). */
    fromButtonToTokenReceivedMs: zod_1.z.number().optional(),
    /** LiveKit room connected. */
    fromButtonToRoomConnectedMs: zod_1.z.number().optional(),
    /** THE headline: the first word the user actually hears. */
    fromButtonToFirstAudioMs: zod_1.z.number().optional(),
    /** issueCallToken wall time, server-side (Firestore writes + 3 LiveKit calls). */
    serverTokenMs: zod_1.z.number().optional(),
    /** Agent: building the per-session context and instructions. */
    agentContextBuildMs: zod_1.z.number().optional(),
    /** Agent: opening the OpenAI Realtime session. */
    agentRealtimeStartMs: zod_1.z.number().optional(),
    /** Agent: room join to asking the model for the opening line. */
    agentJoinToReplyMs: zod_1.z.number().optional(),
    /**
     * Agent: join to the caller actually being in the room.
     *
     * The agent is dispatched when the room is created, which happens while the
     * caller is still receiving their token and connecting, so it is normally
     * waiting for them rather than the other way round. This is how much slack
     * that wait provides — and the deferred work below is only free while it fits
     * inside it.
     */
    agentCallerPresentMs: zod_1.z.number().optional(),
    /**
     * Agent: join to the caller's media path actually being up.
     *
     * Read against agentCallerPresentMs, which is when they merely APPEARED in
     * the room. The server accepts a participant before their connection can
     * carry audio, and LiveKit buffers nothing, so anything spoken between these
     * two figures is lost. Measured at 270ms apart on a fast join and 1.8s on a
     * slow one — the second of which clipped the front off a 3.7s opener. The
     * agent now waits for this before speaking; a large gap here is a slow
     * connect, not a slow agent.
     */
    agentCallerReadyMs: zod_1.z.number().optional(),
    /**
     * Agent: join to the opener starting to play into the room.
     *
     * The room-side headline. Against agentCallerPresentMs it says how much of
     * the caller's silence the agent is responsible for, as opposed to how long
     * they spent connecting.
     */
    agentOpenerStartedMs: zod_1.z.number().optional(),
    /**
     * Agent: how long the caller's history took to build.
     *
     * Six parallel Firestore reads, no longer in front of the opener. Read it
     * against agentCallerPresentMs: while it is the shorter of the two it costs
     * the caller nothing, and when it stops being so the opener starts landing on
     * a prompt that is still filling in.
     */
    agentUserContextMs: zod_1.z.number().optional(),
    /**
     * Agent: join to the caller's microphone track being SUBSCRIBED.
     *
     * The three fields below exist because the agent's own logs cannot be read
     * after the fact — `lk agent logs` returns a short tail of the current pod's
     * stdout, never history, so every agent-side diagnosis so far has depended on
     * catching the pod mid-call. These are written to the call log, which
     * survives.
     *
     * They separate three failures that look identical from outside: a track that
     * never arrives, a track that arrives but carries silence (a Bluetooth route
     * still switching from A2DP to the mono call profile), and audio that arrives
     * fine while something downstream refuses to answer.
     */
    agentAudioSubscribedMs: zod_1.z.number().optional(),
    /** Agent: join to the first moment the model heard the caller speak. */
    agentFirstUserSpeechMs: zod_1.z.number().optional(),
    /** Agent: join to the first reply it generated. */
    agentFirstReplyMs: zod_1.z.number().optional(),
    /**
     * Which affordance started the call, so a slow path can be told from a slow
     * moment: "default_mode" is the impulse button opening straight into a call,
     * "toggle" is the user switching an existing session over.
     */
    entry: zod_1.z.enum(["default_mode", "toggle", "unknown"]).optional(),
});
// Call log Schema
exports.callLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("call"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        tactic: tactic_1.tacticSchema.optional(),
        agentConnectedAt: timestampSchema_1.timestampSchema.optional(),
        // See callTimingsSchema. Written by three processes (device, issueCallToken,
        // voice agent), so every writer uses update() with dotted paths — a
        // set({merge:true}) would store "timings.x" as a literal key.
        timings: exports.callTimingsSchema.optional(),
        endedAt: timestampSchema_1.timestampSchema.optional(),
        // Voice provider plumbing. Both vendor groups are optional. Impulse calls
        // are LiveKit (current); the ElevenLabs fields are left over from the
        // earlier pipeline and only survive on old docs.
        livekitSessionId: zod_1.z.string().optional(),
        livekitRoomName: zod_1.z.string().optional(),
        elevenlabsAgentId: zod_1.z.string().optional(),
        elevenlabsConversationId: zod_1.z.string().optional(),
        token: zod_1.z.string().optional(),
        summary: zod_1.z.string().optional(),
        // True once the call's turns are written as user_message /
        // assistant_message logs in the session (each carrying `voice.callLogId`).
        // Readers that see this render the call as a boundary marker and let the
        // inline turns speak for themselves. Absent on legacy calls, whose
        // transcript lives only in the log's transcriptItems subcollection.
        transcriptInSession: zod_1.z.boolean().optional(),
        // Legacy calls only. Not persisted on the doc — hydrated at read time from
        // the log's transcriptItems subcollection when the call ended but the
        // summary hasn't landed yet, so getGptPayload can fall back to the
        // transcript.
        transcriptItems: zod_1.z.array(transcriptItem_1.transcriptItemSchema).optional(),
    }),
});

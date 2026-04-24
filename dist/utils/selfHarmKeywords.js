"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELF_HARM_KEYWORDS = void 0;
exports.messageContainsSelfHarmKeywords = messageContainsSelfHarmKeywords;
/**
 * Keywords that trigger a self-harm risk assessment via LLM.
 * Cast a wide net — the LLM is the real filter, these just gate the API call.
 * All keywords are lowercase for case-insensitive matching.
 */
exports.SELF_HARM_KEYWORDS = [
    "want to die",
    "wanna die",
    "kill myself",
    "hurt myself",
    "harm myself",
    "end it all",
    "end my life",
    "self-harm",
    "self harm",
    "suicide",
    "suicidal",
    "don't want to be here",
    "dont want to be here",
    "can't go on",
    "cant go on",
    "better off without me",
    "better off dead",
    "no reason to live",
    "nothing to live for",
    "cutting myself",
    "overdose",
    "take my life",
    "wish i was dead",
    "wish i were dead",
    "not worth living",
    "rather be dead",
    "jump off",
    "slit my",
];
/**
 * Check whether a user message contains keywords that warrant a self-harm risk
 * assessment. This is a fast pre-filter — messages that pass are then sent to
 * an LLM for proper classification.
 */
function messageContainsSelfHarmKeywords(content) {
    const lower = content.toLowerCase();
    return exports.SELF_HARM_KEYWORDS.some((keyword) => lower.includes(keyword));
}

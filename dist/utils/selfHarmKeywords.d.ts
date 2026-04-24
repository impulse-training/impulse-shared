/**
 * Keywords that trigger a self-harm risk assessment via LLM.
 * Cast a wide net — the LLM is the real filter, these just gate the API call.
 * All keywords are lowercase for case-insensitive matching.
 */
export declare const SELF_HARM_KEYWORDS: string[];
/**
 * Check whether a user message contains keywords that warrant a self-harm risk
 * assessment. This is a fast pre-filter — messages that pass are then sent to
 * an LLM for proper classification.
 */
export declare function messageContainsSelfHarmKeywords(content: string): boolean;

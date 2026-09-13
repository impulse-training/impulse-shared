/**
 * What a model costs, in USD per 1,000,000 tokens.
 *
 * Lives in shared because BOTH runtimes spend money: impulse-functions meters
 * its OpenAI client, and impulse-voice-agent meters its own judges and the
 * realtime conversation. Two tables would drift, and the one that drifted
 * would be the one nobody was looking at.
 *
 * Prices are applied AT RECORD TIME and stored on the row. A row is a
 * historical fact about what was spent; recomputing last month at this
 * month's rates would quietly rewrite it.
 *
 * A model not in this table records `costUsd: null` rather than 0. Zero reads
 * as free; null reads as unknown, and the dashboard says so. A guessed price
 * produces a confidently wrong number, which defeats the point of having a
 * meter you trust.
 */

const PRICING_PAGE = "developers.openai.com/api/docs/pricing, checked 2026-09-12";

export interface ModelPrice {
  input: number;
  cachedInput: number;
  output: number;
  source: string;
}

/**
 * Realtime is billed per MODALITY, and the spread is not a detail: audio input
 * is $32/1M against text input at $4/1M. Pricing a realtime call at a single
 * blended rate would be wrong by up to 8x in whichever direction the call
 * happened to lean.
 */
export interface RealtimeModelPrice {
  audio: { input: number; cachedInput: number; output: number };
  text: { input: number; cachedInput: number; output: number };
  image: { input: number; cachedInput: number };
  source: string;
}

export const MODEL_PRICES: Record<string, ModelPrice> = {
  "gpt-5.4": { input: 2.5, cachedInput: 0.25, output: 15, source: PRICING_PAGE },
  "gpt-5.4-mini": { input: 0.75, cachedInput: 0.075, output: 4.5, source: PRICING_PAGE },
  "gpt-4.1-mini": { input: 0.4, cachedInput: 0.1, output: 1.6, source: PRICING_PAGE },
  "gpt-4o-mini": { input: 0.15, cachedInput: 0.075, output: 0.6, source: PRICING_PAGE },
};

export const REALTIME_MODEL_PRICES: Record<string, RealtimeModelPrice> = {
  "gpt-realtime-2.1": {
    audio: { input: 32, cachedInput: 0.4, output: 64 },
    text: { input: 4, cachedInput: 0.4, output: 24 },
    image: { input: 5, cachedInput: 0.5 },
    source: PRICING_PAGE,
  },
};

/** Match on the family, so a dated snapshot prices like its base model. */
function lookup<T>(table: Record<string, T>, model: string): T | null {
  if (table[model]) return table[model];
  const normalized = model.replace(/_/g, ".");
  if (table[normalized]) return table[normalized];
  return table[normalized.replace(/-\d{4}-\d{2}-\d{2}$/, "")] ?? null;
}

export function priceForModel(model: string): ModelPrice | null {
  return lookup(MODEL_PRICES, model);
}

export function realtimePriceForModel(model: string): RealtimeModelPrice | null {
  return lookup(REALTIME_MODEL_PRICES, model);
}

/**
 * What an ordinary chat call cost, or null when the model has no price.
 *
 * `inputTokens` from the API INCLUDES the cached ones, so the fresh portion is
 * the difference. Billing them all at the fresh rate is the easy mistake.
 */
export function costUsdFor(params: {
  model: string;
  inputTokens: number;
  cachedInputTokens: number;
  outputTokens: number;
}): number | null {
  const price = priceForModel(params.model);
  if (!price) return null;
  const freshInput = Math.max(0, params.inputTokens - params.cachedInputTokens);
  return (
    (freshInput * price.input +
      params.cachedInputTokens * price.cachedInput +
      params.outputTokens * price.output) /
    1_000_000
  );
}

/** The modality split a realtime response reports. */
export interface RealtimeTokenDetail {
  audioTokens: number;
  textTokens: number;
  imageTokens?: number;
  cachedTokens?: number;
  cachedTokensDetails?: { audioTokens: number; textTokens: number; imageTokens: number };
}

/**
 * What one realtime response cost, priced per modality.
 *
 * Cached audio is the reason a long call is affordable at all: $0.40/1M
 * against $32/1M fresh. When the response reports cached tokens without
 * saying which modality they were, they are attributed to audio — that is
 * where the overwhelming majority of a voice call's tokens live, and the
 * alternative (charging them at the fresh audio rate) overstates by 80x.
 */
export function realtimeCostUsdFor(params: {
  model: string;
  input: RealtimeTokenDetail;
  output: { audioTokens: number; textTokens: number };
}): number | null {
  const price = realtimePriceForModel(params.model);
  if (!price) return null;

  const cachedAudio =
    params.input.cachedTokensDetails?.audioTokens ?? params.input.cachedTokens ?? 0;
  const cachedText = params.input.cachedTokensDetails?.textTokens ?? 0;
  const cachedImage = params.input.cachedTokensDetails?.imageTokens ?? 0;

  const freshAudio = Math.max(0, params.input.audioTokens - cachedAudio);
  const freshText = Math.max(0, params.input.textTokens - cachedText);
  const freshImage = Math.max(0, (params.input.imageTokens ?? 0) - cachedImage);

  return (
    (freshAudio * price.audio.input +
      cachedAudio * price.audio.cachedInput +
      freshText * price.text.input +
      cachedText * price.text.cachedInput +
      freshImage * price.image.input +
      cachedImage * price.image.cachedInput +
      params.output.audioTokens * price.audio.output +
      params.output.textTokens * price.text.output) /
    1_000_000
  );
}

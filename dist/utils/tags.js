"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeTagValue = normalizeTagValue;
exports.normalizeTags = normalizeTags;
/**
 * Normalize a session tags value to always be string[].
 * Handles both legacy format (string) and new format (string[]).
 */
function normalizeTagValue(value) {
    if (!value)
        return [];
    if (Array.isArray(value))
        return value;
    return [value];
}
/**
 * Normalize all tag values in a tags record to string[].
 */
function normalizeTags(tags) {
    if (!tags)
        return {};
    const result = {};
    for (const [key, value] of Object.entries(tags)) {
        result[key] = normalizeTagValue(value);
    }
    return result;
}

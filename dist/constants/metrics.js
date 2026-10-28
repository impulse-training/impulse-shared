"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.METRIC_REGISTRY_BY_ID = exports.METRIC_REGISTRY = void 0;
exports.metricRegistryEntryFor = metricRegistryEntryFor;
exports.metricLevelLabelsFor = metricLevelLabelsFor;
const metric_1 = require("../schemas/metric");
exports.METRIC_REGISTRY = [
    {
        id: "happiness",
        label: "Happiness",
        description: "How happy do you feel?",
        scale: { word: "happy", low: "a little", high: "very" },
        levels: ["very down", "down", "normal", "happy", "very happy"],
        minContiguousTransitionDays: 7,
        desiredDirection: "higher",
    },
    {
        id: "motivation",
        label: "Motivation",
        description: "How motivated do you feel?",
        scale: { word: "motivated", low: "a little", high: "very" },
        levels: ["very unmotivated", "unmotivated", "normal", "motivated", "very motivated"],
        minContiguousTransitionDays: 7,
        desiredDirection: "higher",
    },
    {
        id: "mental-clarity",
        label: "Mental clarity",
        description: "How clear is your thinking?",
        scale: { word: "clear-headed", low: "somewhat", high: "very", lowWord: "foggy" },
        levels: ["very foggy", "foggy", "normal", "clear", "very clear"],
        minContiguousTransitionDays: 7,
        desiredDirection: "higher",
    },
    {
        id: "focus",
        label: "Focus",
        description: "How well can you concentrate?",
        scale: { word: "focused", low: "somewhat", high: "very" },
        levels: ["very distracted", "distracted", "normal", "focused", "very focused"],
        minContiguousTransitionDays: 7,
        desiredDirection: "higher",
    },
    {
        id: "energy",
        label: "Energy",
        description: "How energetic do you feel?",
        scale: { word: "energetic", low: "a little", high: "very", lowWord: "drained" },
        levels: ["drained", "low", "normal", "energetic", "very energetic"],
        minContiguousTransitionDays: 7,
        desiredDirection: "higher",
    },
    {
        id: "sleep-quality",
        label: "Sleep quality",
        description: "How well did you sleep?",
        scale: { word: "rested", low: "somewhat", high: "well" },
        levels: ["very poor", "poor", "normal", "good", "very good"],
        minContiguousTransitionDays: 7,
        desiredDirection: "higher",
    },
    {
        id: "anxiety",
        label: "Anxiety",
        description: "How anxious do you feel?",
        scale: { word: "anxious", low: "a little", high: "very" },
        levels: ["very calm", "calm", "normal", "anxious", "very anxious"],
        minContiguousTransitionDays: 7,
        desiredDirection: "lower",
    },
    {
        id: "productivity",
        label: "Productivity",
        description: "How productive were you?",
        scale: { word: "productive", low: "somewhat", high: "very" },
        levels: ["very unproductive", "unproductive", "normal", "productive", "very productive"],
        minContiguousTransitionDays: 7,
        desiredDirection: "higher",
    },
];
exports.METRIC_REGISTRY_BY_ID = Object.fromEntries(exports.METRIC_REGISTRY.map((metric) => [metric.id, metric]));
/**
 * The registry entry a metric came from: by `metricRegistryId`, else by name
 * (metrics seeded before the id was stored).
 */
function metricRegistryEntryFor(metric) {
    var _a;
    if (metric.metricRegistryId && exports.METRIC_REGISTRY_BY_ID[metric.metricRegistryId]) {
        return exports.METRIC_REGISTRY_BY_ID[metric.metricRegistryId];
    }
    const name = (_a = metric.name) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase();
    if (!name)
        return undefined;
    return exports.METRIC_REGISTRY.find((m) => m.label.toLowerCase() === name);
}
/**
 * A metric's five level labels: its own `levels`, else its registry entry's,
 * else generic ones (very low / low / normal / high / very high). The last two
 * only cover metric docs not yet migrated to levels.
 */
function metricLevelLabelsFor(metric) {
    var _a, _b;
    if (!metric)
        return metric_1.GENERIC_METRIC_LEVEL_LABELS;
    const own = metric_1.metricLevelLabelsSchema.safeParse(metric.levels);
    if (own.success)
        return own.data;
    return (_b = (_a = metricRegistryEntryFor(metric)) === null || _a === void 0 ? void 0 : _a.levels) !== null && _b !== void 0 ? _b : metric_1.GENERIC_METRIC_LEVEL_LABELS;
}

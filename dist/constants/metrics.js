"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.METRIC_REGISTRY_BY_ID = exports.METRIC_REGISTRY = void 0;
exports.METRIC_REGISTRY = [
    {
        id: "happiness",
        label: "Happiness",
        description: "How happy do you feel?",
        minContiguousTransitionDays: 7,
        desiredDirection: "higher",
    },
    {
        id: "motivation",
        label: "Motivation",
        description: "How motivated do you feel?",
        minContiguousTransitionDays: 7,
        desiredDirection: "higher",
    },
    {
        id: "mental-clarity",
        label: "Mental clarity",
        description: "How clear is your thinking?",
        minContiguousTransitionDays: 7,
        desiredDirection: "higher",
    },
    {
        id: "focus",
        label: "Focus",
        description: "How well can you concentrate?",
        minContiguousTransitionDays: 7,
        desiredDirection: "higher",
    },
    {
        id: "energy",
        label: "Energy",
        description: "How energetic do you feel?",
        minContiguousTransitionDays: 7,
        desiredDirection: "higher",
    },
    {
        id: "sleep-quality",
        label: "Sleep quality",
        description: "How well did you sleep?",
        minContiguousTransitionDays: 7,
        desiredDirection: "higher",
    },
    {
        id: "anxiety",
        label: "Anxiety",
        description: "How anxious do you feel?",
        minContiguousTransitionDays: 7,
        desiredDirection: "lower",
    },
    {
        id: "productivity",
        label: "Productivity",
        description: "How productive were you?",
        minContiguousTransitionDays: 7,
        desiredDirection: "higher",
    },
];
exports.METRIC_REGISTRY_BY_ID = Object.fromEntries(exports.METRIC_REGISTRY.map((metric) => [metric.id, metric]));

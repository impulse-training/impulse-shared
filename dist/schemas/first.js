"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstsSchema = exports.achievedFirstSchema = exports.FIRST_DEFINITIONS = exports.firstKindSchema = exports.firstKinds = void 0;
exports.getNextFirst = getNextFirst;
exports.getAllFirsts = getAllFirsts;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.firstKinds = [
    "impulseButton",
    "triedTactic",
    "voiceSession",
    "resistedUrge",
];
exports.firstKindSchema = zod_1.z.enum(exports.firstKinds);
exports.FIRST_DEFINITIONS = {
    impulseButton: {
        label: "Activate Impulse Mode in an impulse moment",
        order: 0,
    },
    triedTactic: {
        label: "Try a tactic in an impulse moment",
        order: 1,
    },
    voiceSession: {
        label: "Talk using voice mode during an impulse moment",
        order: 2,
    },
    resistedUrge: {
        label: "Resist an urge in an impulse moment",
        order: 3,
    },
};
exports.achievedFirstSchema = zod_1.z.object({
    achievedAt: timestampSchema_1.timestampSchema,
    sessionId: zod_1.z.string().optional(),
});
exports.firstsSchema = zod_1.z.record(exports.firstKindSchema, exports.achievedFirstSchema);
function getNextFirst(achieved) {
    const sorted = Object.entries(exports.FIRST_DEFINITIONS).sort(([, a], [, b]) => a.order - b.order);
    for (const [kind, def] of sorted) {
        if (!(achieved === null || achieved === void 0 ? void 0 : achieved[kind]))
            return { kind, label: def.label, route: def.route };
    }
    return null;
}
function getAllFirsts(achieved) {
    return Object.entries(exports.FIRST_DEFINITIONS)
        .sort(([, a], [, b]) => a.order - b.order)
        .map(([kind, def]) => ({
        kind,
        label: def.label,
        achieved: !!(achieved === null || achieved === void 0 ? void 0 : achieved[kind]),
        route: def.route,
    }));
}

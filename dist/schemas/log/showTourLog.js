"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showTourLogSchema = exports.tourStepSchema = exports.TourIcon = void 0;
const zod_1 = __importDefault(require("zod"));
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
var TourIcon;
(function (TourIcon) {
    TourIcon["DockBehaviorsButton"] = "dockBehaviorsButton";
    TourIcon["DockMetricsButton"] = "dockMetricsButton";
})(TourIcon || (exports.TourIcon = TourIcon = {}));
exports.tourStepSchema = zod_1.default.object({
    elementRefName: zod_1.default.string(),
    title: zod_1.default.string(),
    description: zod_1.default.string(),
    confirmButtonLabel: zod_1.default.string().default("Ok"),
    nextOnImpulseButtonPress: zod_1.default.boolean().optional(),
    borderRadius: zod_1.default.number().optional(),
    innerPadding: zod_1.default.number().optional(),
});
exports.showTourLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.default.literal("show_tour"),
    isDisplayable: zod_1.default.literal(true),
    text: zod_1.default.string(),
    data: zod_1.default.object({
        steps: zod_1.default.array(exports.tourStepSchema),
        firstNavigateToRoute: zod_1.default.string().optional(),
        startButtonLabel: zod_1.default.string().optional(),
        completedAt: timestampSchema_1.timestampSchema.optional(),
        includeCloseButton: zod_1.default.boolean().default(false),
        closeButtonText: zod_1.default.string().default("Close"),
        closeButtonHref: zod_1.default.string().default("/"),
    }),
});

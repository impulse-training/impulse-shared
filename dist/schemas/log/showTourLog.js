"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showTourLogSchema = exports.tourStepSchema = exports.TourIcon = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
var TourIcon;
(function (TourIcon) {
    TourIcon["DockBehaviorsButton"] = "dockBehaviorsButton";
    TourIcon["DockMetricsButton"] = "dockMetricsButton";
})(TourIcon || (exports.TourIcon = TourIcon = {}));
exports.tourStepSchema = zod_1.z.object({
    elementRefName: zod_1.z.string(),
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    confirmButtonLabel: zod_1.z.string().default("Ok"),
    nextOnImpulseButtonPress: zod_1.z.boolean().optional(),
    borderRadius: zod_1.z.number().optional(),
    innerPadding: zod_1.z.number().optional(),
});
exports.showTourLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("show_tour"),
    isDisplayable: zod_1.z.literal(true),
    text: zod_1.z.string(),
    data: zod_1.z.object({
        steps: zod_1.z.array(exports.tourStepSchema),
        firstNavigateToRoute: zod_1.z.string().optional(),
        startButtonLabel: zod_1.z.string().optional(),
        completedAt: timestampSchema_1.timestampSchema.optional(),
        includeCloseButton: zod_1.z.boolean().default(false),
        closeButtonText: zod_1.z.string().default("Close"),
        closeButtonHref: zod_1.z.string().default("/"),
    }),
});

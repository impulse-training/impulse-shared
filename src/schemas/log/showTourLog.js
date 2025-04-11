"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.showTourLogSchema = exports.tourStepSchema = exports.TourIcon = void 0;
const yup = __importStar(require("yup"));
const utils_1 = require("../../utils");
const base_1 = require("./base");
var TourIcon;
(function (TourIcon) {
    TourIcon["DockBehaviorsButton"] = "dockBehaviorsButton";
    TourIcon["DockMetricsButton"] = "dockMetricsButton";
})(TourIcon || (exports.TourIcon = TourIcon = {}));
exports.tourStepSchema = yup.object({
    elementRefName: yup.string().required(),
    title: yup.string().required(),
    description: yup.string().required(),
    confirmButtonLabel: yup.string().required().default("Ok"),
    nextOnImpulseButtonPress: yup.boolean(),
    borderRadius: yup.number(),
    innerPadding: yup.number(),
});
exports.showTourLogSchema = base_1.logBaseSchema.shape({
    type: yup.mixed().oneOf(["show_tour"]).required(),
    isDisplayable: yup.mixed().oneOf([true]).required(),
    text: yup.string().required(),
    data: yup.object({
        steps: yup.array().of(exports.tourStepSchema).required(),
        firstNavigateToRoute: yup.string(),
        startButtonLabel: yup.string(),
        completedAt: utils_1.timestampSchema,
        includeCloseButton: yup.boolean().default(false),
        closeButtonText: yup.string().default("Close"),
        closeButtonHref: yup.string().default("/"),
    }),
});

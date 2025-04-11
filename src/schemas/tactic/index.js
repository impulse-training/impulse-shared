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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidVideoTactic = exports.tacticIsVideoTactic = exports.isValidBreathingExerciseTactic = exports.tacticIsBreathingExerciseTactic = exports.isValidSupportGroupTactic = exports.tacticIsSupportGroupTactic = exports.isValidLinkTactic = exports.tacticIsLinkTactic = exports.isValidImageTactic = exports.tacticIsImageTactic = exports.isValidAudioTactic = exports.tacticIsAudioTactic = exports.isValidAffirmationTactic = exports.tacticIsAffirmationTactic = exports.isValidActionTactic = exports.tacticIsActionTactic = exports.tacticSchema = exports.tacticSchemas = void 0;
const yup = __importStar(require("yup"));
const action_1 = require("./action");
const affirmation_1 = require("./affirmation");
const audio_1 = require("./audio");
const breathingExercise_1 = require("./breathingExercise");
const image_1 = require("./image");
const link_1 = require("./link");
const supportGroup_1 = require("./supportGroup");
const video_1 = require("./video");
__exportStar(require("./action"), exports);
__exportStar(require("./affirmation"), exports);
__exportStar(require("./audio"), exports);
__exportStar(require("./breathingExercise"), exports);
__exportStar(require("./image"), exports);
__exportStar(require("./link"), exports);
__exportStar(require("./supportGroup"), exports);
__exportStar(require("./video"), exports);
// Map of tactic types to their schemas
exports.tacticSchemas = {
    action: action_1.actionTacticSchema,
    affirmation: affirmation_1.affirmationTacticSchema,
    audio: audio_1.audioTacticSchema,
    breathingExercise: breathingExercise_1.breathingExerciseTacticSchema,
    image: image_1.imageTacticSchema,
    link: link_1.linkTacticSchema,
    supportGroup: supportGroup_1.supportGroupTacticSchema,
    video: video_1.videoTacticSchema,
};
// Dynamic schema that selects the appropriate schema based on the tactic type
exports.tacticSchema = yup.lazy((value) => {
    if (typeof value?.type === "string" && value.type in exports.tacticSchemas) {
        return exports.tacticSchemas[value.type];
    }
    // Fallback schema for validation when type is missing or invalid
    return yup.object({
        type: yup
            .string()
            .oneOf(Object.keys(exports.tacticSchemas))
            .required("Tactic type is required"),
    });
});
const tacticIsActionTactic = (value) => value.type === "action";
exports.tacticIsActionTactic = tacticIsActionTactic;
const isValidActionTactic = (value) => {
    try {
        action_1.actionTacticSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidActionTactic = isValidActionTactic;
const tacticIsAffirmationTactic = (value) => value.type === "affirmation";
exports.tacticIsAffirmationTactic = tacticIsAffirmationTactic;
const isValidAffirmationTactic = (value) => {
    try {
        affirmation_1.affirmationTacticSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidAffirmationTactic = isValidAffirmationTactic;
const tacticIsAudioTactic = (value) => value.type === "audio";
exports.tacticIsAudioTactic = tacticIsAudioTactic;
const isValidAudioTactic = (value) => {
    try {
        audio_1.audioTacticSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidAudioTactic = isValidAudioTactic;
const tacticIsImageTactic = (value) => value.type === "image";
exports.tacticIsImageTactic = tacticIsImageTactic;
const isValidImageTactic = (value) => {
    try {
        image_1.imageTacticSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidImageTactic = isValidImageTactic;
const tacticIsLinkTactic = (value) => value.type === "link";
exports.tacticIsLinkTactic = tacticIsLinkTactic;
const isValidLinkTactic = (value) => {
    try {
        link_1.linkTacticSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidLinkTactic = isValidLinkTactic;
const tacticIsSupportGroupTactic = (value) => value.type === "supportGroup";
exports.tacticIsSupportGroupTactic = tacticIsSupportGroupTactic;
const isValidSupportGroupTactic = (value) => {
    try {
        supportGroup_1.supportGroupTacticSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidSupportGroupTactic = isValidSupportGroupTactic;
const tacticIsBreathingExerciseTactic = (value) => value.type === "breathingExercise";
exports.tacticIsBreathingExerciseTactic = tacticIsBreathingExerciseTactic;
const isValidBreathingExerciseTactic = (value) => {
    try {
        breathingExercise_1.breathingExerciseTacticSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidBreathingExerciseTactic = isValidBreathingExerciseTactic;
const tacticIsVideoTactic = (value) => value.type === "video";
exports.tacticIsVideoTactic = tacticIsVideoTactic;
const isValidVideoTactic = (value) => {
    try {
        video_1.videoTacticSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidVideoTactic = isValidVideoTactic;

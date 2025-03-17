"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidVideoTactic = exports.tacticIsVideoTactic = exports.isValidSupportGroupTactic = exports.tacticIsSupportGroupTactic = exports.isValidLinkTactic = exports.tacticIsLinkTactic = exports.isValidImageTactic = exports.tacticIsImageTactic = exports.isValidAudioTactic = exports.tacticIsAudioTactic = exports.isValidAffirmationTactic = exports.tacticIsAffirmationTactic = exports.isValidActionTactic = exports.tacticIsActionTactic = void 0;
const action_1 = require("../schemas/tactic/action");
const affirmation_1 = require("../schemas/tactic/affirmation");
const audio_1 = require("../schemas/tactic/audio");
const image_1 = require("../schemas/tactic/image");
const link_1 = require("../schemas/tactic/link");
const supportGroup_1 = require("../schemas/tactic/supportGroup");
const video_1 = require("../schemas/tactic/video");
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

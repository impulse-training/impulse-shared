"use strict";
/**
 * Default images for tactics
 * These are pre-defined background images that can be used for tactics
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultImages = void 0;
exports.getRandomDefaultImage = getRandomDefaultImage;
exports.getDefaultImageByName = getDefaultImageByName;
const baseImages = [
    // regulate
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fcalm-ocean.png?alt=media&token=ce21e6f5-b09a-40fb-9673-a48c3be8d56b",
        storagePath: "tactics/calm-ocean.png",
        contentType: "image/png",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Ftwilight.png?alt=media&token=a4c93ea6-b379-49c0-9d46-d0f40732173f",
        storagePath: "tactics/twilight.png",
        contentType: "image/png",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Frose-petals.png?alt=media&token=286a66b0-cd93-4f39-a590-d09c854e0649",
        storagePath: "tactics/rose-petals.png",
        contentType: "image/png",
    },
    // shift
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fsunrise-ember.png?alt=media&token=61d06da6-9fd8-4508-821e-1d4c9d8f9452",
        storagePath: "tactics/sunrise-ember.png",
        contentType: "image/png",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Ffresh-teal.png?alt=media&token=6027c4b1-3577-4dc8-a4b1-c79c7e826a4f",
        storagePath: "tactics/fresh-teal.png",
        contentType: "image/png",
    },
    // reengage
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fforest-path.png?alt=media&token=9ed59464-fbb9-4d42-a330-e5367b18d671",
        storagePath: "tactics/forest-path.png",
        contentType: "image/png",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fwarm-glow.png?alt=media&token=11738e50-60b7-4f8a-8ade-6f9b0647aa15",
        storagePath: "tactics/warm-glow.png",
        contentType: "image/png",
    },
    // neutral
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fdeep-space.png?alt=media&token=84751ce0-e990-46a0-8d28-1de3494fb6f7",
        storagePath: "tactics/deep-space.png",
        contentType: "image/png",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fsoft-dawn.png?alt=media&token=96704304-1359-4b7c-8509-f83fae3c1190",
        storagePath: "tactics/soft-dawn.png",
        contentType: "image/png",
    },
];
exports.defaultImages = baseImages;
/**
 * Get a random default image from the available options
 */
function getRandomDefaultImage() {
    const randomIndex = Math.floor(Math.random() * exports.defaultImages.length);
    return exports.defaultImages[randomIndex];
}
/**
 * Get a specific default image by its filename (without extension)
 */
function getDefaultImageByName(name) {
    return exports.defaultImages.find((img) => img.storagePath === `tactics/${name}.png`);
}

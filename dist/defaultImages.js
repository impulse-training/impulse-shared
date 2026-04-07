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
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fcalm-ocean.webp?alt=media&token=ce03c8ee-5d7d-4a64-b1c7-b451e00f81b9",
        storagePath: "tactics/calm-ocean.webp",
        contentType: "image/webp",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Ftwilight.webp?alt=media&token=de592169-bde2-4949-96b9-99649395615f",
        storagePath: "tactics/twilight.webp",
        contentType: "image/webp",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Frose-petals.webp?alt=media&token=a128398e-19c7-4822-8614-22f78193e9bf",
        storagePath: "tactics/rose-petals.webp",
        contentType: "image/webp",
    },
    // shift
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fsunrise-ember.webp?alt=media&token=ecf28c65-84b4-4e47-9615-14eb8e93d4ec",
        storagePath: "tactics/sunrise-ember.webp",
        contentType: "image/webp",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Ffresh-teal.webp?alt=media&token=2cff1473-0274-4f67-9591-864c3a056c68",
        storagePath: "tactics/fresh-teal.webp",
        contentType: "image/webp",
    },
    // reengage
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fforest-path.webp?alt=media&token=6f954255-13f7-4e53-bd4d-589e4114acf5",
        storagePath: "tactics/forest-path.webp",
        contentType: "image/webp",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fwarm-glow.webp?alt=media&token=88df70cc-5b0b-4c17-bfb9-bcef0ed938f8",
        storagePath: "tactics/warm-glow.webp",
        contentType: "image/webp",
    },
    // neutral
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fdeep-space.webp?alt=media&token=d6110dd1-f89f-40b4-8f67-4626fd6aa3c6",
        storagePath: "tactics/deep-space.webp",
        contentType: "image/webp",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fsoft-dawn.webp?alt=media&token=b5228b55-63b2-45b9-a0f5-6286bab6ae1c",
        storagePath: "tactics/soft-dawn.webp",
        contentType: "image/webp",
    },
    // batch 2
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Farctic-blue.webp?alt=media&token=57c44837-134b-47d4-be38-612e71b78f7c",
        storagePath: "tactics/arctic-blue.webp",
        contentType: "image/webp",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fgolden-hour.webp?alt=media&token=b4fb5857-8a67-4305-be2b-82303d59239c",
        storagePath: "tactics/golden-hour.webp",
        contentType: "image/webp",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fsage-mist.webp?alt=media&token=e7e7aac3-126b-4c35-b621-3c062d5a6cfb",
        storagePath: "tactics/sage-mist.webp",
        contentType: "image/webp",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fburgundy-wine.webp?alt=media&token=ad962c59-01cf-4934-8fca-7e7e5dd77965",
        storagePath: "tactics/burgundy-wine.webp",
        contentType: "image/webp",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fmidnight-navy.webp?alt=media&token=957dcbe3-eddf-4a56-bc82-4bb6246334c5",
        storagePath: "tactics/midnight-navy.webp",
        contentType: "image/webp",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fcopper-rust.webp?alt=media&token=952c5dd8-3ced-4faa-b518-024b3a2d6c55",
        storagePath: "tactics/copper-rust.webp",
        contentType: "image/webp",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Flavender-haze.webp?alt=media&token=b3a68441-5caf-4858-a32d-81e7e978ea65",
        storagePath: "tactics/lavender-haze.webp",
        contentType: "image/webp",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fsteel-storm.webp?alt=media&token=4ac1804e-901d-442f-a777-8bdbccd22b7f",
        storagePath: "tactics/steel-storm.webp",
        contentType: "image/webp",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fember-glow.webp?alt=media&token=d47475d3-29d2-4a0f-bbe4-b8a3b9178a01",
        storagePath: "tactics/ember-glow.webp",
        contentType: "image/webp",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Focean-depth.webp?alt=media&token=8d8cf8ef-fbbf-478a-9f0e-1dc494528920",
        storagePath: "tactics/ocean-depth.webp",
        contentType: "image/webp",
    },
    {
        uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fautumn-earth.webp?alt=media&token=ada05096-9420-49ac-a049-cbc680a43a6b",
        storagePath: "tactics/autumn-earth.webp",
        contentType: "image/webp",
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
    return exports.defaultImages.find((img) => img.storagePath === `tactics/${name}.webp`);
}

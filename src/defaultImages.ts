/**
 * Default images for tactics
 * These are pre-defined background images that can be used for tactics
 */

import { Attachment } from "./schemas";

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
  // batch 2
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Farctic-blue.png?alt=media&token=667c5c77-c635-48db-82bd-2b64f7689d86",
    storagePath: "tactics/arctic-blue.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fgolden-hour.png?alt=media&token=e9e88443-0b1f-426c-b3e9-ef1bca422935",
    storagePath: "tactics/golden-hour.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fsage-mist.png?alt=media&token=84d1ac57-9883-45de-b399-ae8c6ab91653",
    storagePath: "tactics/sage-mist.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fburgundy-wine.png?alt=media&token=64d07db9-9a57-40d7-bc9a-0a064cbc0c31",
    storagePath: "tactics/burgundy-wine.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fmidnight-navy.png?alt=media&token=f3d5ccdf-0de8-4fc4-9851-f8a84dec90d3",
    storagePath: "tactics/midnight-navy.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fcopper-rust.png?alt=media&token=eaf71215-056d-4194-b2c8-c934f6b987ff",
    storagePath: "tactics/copper-rust.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Flavender-haze.png?alt=media&token=b5163c58-91a7-44a7-8dee-2f1f3a8f8f17",
    storagePath: "tactics/lavender-haze.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fsteel-storm.png?alt=media&token=a6ddb02d-2c8d-4538-ba4f-8dc826e6a451",
    storagePath: "tactics/steel-storm.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fember-glow.png?alt=media&token=bda6642e-4000-4a85-8780-1b0f6d4b8dde",
    storagePath: "tactics/ember-glow.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Focean-depth.png?alt=media&token=f0aec1a4-e13e-46d8-8178-335a157de8ba",
    storagePath: "tactics/ocean-depth.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fautumn-earth.png?alt=media&token=4069e544-19eb-4e66-90d4-b0dce0d6a974",
    storagePath: "tactics/autumn-earth.png",
    contentType: "image/png",
  },
] as const;

export const defaultImages = baseImages;

/**
 * Get a random default image from the available options
 */
export function getRandomDefaultImage(): Attachment {
  const randomIndex = Math.floor(Math.random() * defaultImages.length);
  return defaultImages[randomIndex];
}

/**
 * Get a specific default image by its filename (without extension)
 */
export function getDefaultImageByName(
  name: string,
): Attachment | undefined {
  return defaultImages.find((img) =>
    img.storagePath === `tactics/${name}.png`,
  );
}

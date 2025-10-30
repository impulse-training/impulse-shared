/**
 * Default images for tactics
 * These are pre-defined background images that can be used for tactics
 */

import { Attachment } from "./schemas";

const baseImages = [
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fendless-constellation.png?alt=media&token=a4295eea-806b-4d39-ac5c-bf6c0bc7602e",
    storagePath: "tactics/endless-constellation.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fflat-mountains.png?alt=media&token=0e9a148b-d7cf-47e1-9fb8-32e1424c45cd",
    storagePath: "tactics/flat-mountains.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fhollowed-boxes.png?alt=media&token=a7cfaac5-02b3-4b6d-894e-98a56ca72474",
    storagePath: "tactics/hollowed-boxes.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fliquid-cheese.png?alt=media&token=6ac8285a-dd0e-492f-9d3a-c6fa2f4bd579",
    storagePath: "tactics/liquid-cheese.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fquantum-gradient.png?alt=media&token=908b6904-b144-4f55-b2ce-2cd2c99b1f4b",
    storagePath: "tactics/quantum-gradient.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fradiant-gradient.png?alt=media&token=4a89c2b2-be4d-404f-b747-28be891d7adf",
    storagePath: "tactics/radiant-gradient.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Frainbow-vortex.png?alt=media&token=7fa62fd7-cc50-47ec-8e54-d9d43fdae010",
    storagePath: "tactics/rainbow-vortex.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Frose-petals.png?alt=media&token=286a66b0-cd93-4f39-a590-d09c854e0649",
    storagePath: "tactics/rose-petals.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fslanted-gradient.png?alt=media&token=8725ecab-52f2-4dae-b3d5-0dd67e4ef599",
    storagePath: "tactics/slanted-gradient.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fsubtle-prism.png?alt=media&token=d7ac88b9-cae7-42ef-8ea1-e759eb02544c",
    storagePath: "tactics/subtle-prism.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fsun-tornado.png?alt=media&token=abacf3bd-e8fd-470c-b1df-8003ed1f7dbb",
    storagePath: "tactics/sun-tornado.png",
    contentType: "image/png",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fwintery-sunburst.png?alt=media&token=8858ca04-9a04-41f5-a10b-870e93f569fe",
    storagePath: "tactics/wintery-sunburst.png",
    contentType: "image/png",
  },
] as const;

export const defaultImages = baseImages;

/**
 * Get a random default image from the available options
 * @returns A random default image
 */
export function getRandomDefaultImage(): Attachment {
  const randomIndex = Math.floor(Math.random() * defaultImages.length);
  return defaultImages[randomIndex];
}

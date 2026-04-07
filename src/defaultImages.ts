/**
 * Default images for tactics
 * These are pre-defined background images that can be used for tactics
 */

import { Attachment } from "./schemas";

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
  // batch 3
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fstill-water.webp?alt=media&token=2e61e735-7851-4cdc-9483-120b7fa92781",
    storagePath: "tactics/still-water.webp",
    contentType: "image/webp",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fmoonlit-fog.webp?alt=media&token=965673c0-e391-4acf-8089-d7dac2d75d70",
    storagePath: "tactics/moonlit-fog.webp",
    contentType: "image/webp",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fdeep-breath.webp?alt=media&token=f533b218-0478-4b06-996e-4efe5b6cbb21",
    storagePath: "tactics/deep-breath.webp",
    contentType: "image/webp",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fwinter-lake.webp?alt=media&token=f057609c-f2f6-4336-8e53-1fd9ec7b1188",
    storagePath: "tactics/winter-lake.webp",
    contentType: "image/webp",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Frain-cloud.webp?alt=media&token=0a8578ca-850b-48e3-81b3-eba7e0090928",
    storagePath: "tactics/rain-cloud.webp",
    contentType: "image/webp",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fdesert-dusk.webp?alt=media&token=0b53919b-70bb-4676-ac0e-bed35d2b020c",
    storagePath: "tactics/desert-dusk.webp",
    contentType: "image/webp",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Felectric-plum.webp?alt=media&token=c6c13889-20eb-49b2-a1ef-8a6123e20ef6",
    storagePath: "tactics/electric-plum.webp",
    contentType: "image/webp",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fmoss-stone.webp?alt=media&token=0e66117f-57b0-47a3-b059-37473aed3759",
    storagePath: "tactics/moss-stone.webp",
    contentType: "image/webp",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fcanyon-rust.webp?alt=media&token=b6256ae6-92fc-4904-b983-513e1da552aa",
    storagePath: "tactics/canyon-rust.webp",
    contentType: "image/webp",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Ftidal-shift.webp?alt=media&token=694788eb-02e7-4029-961d-1e6936b96551",
    storagePath: "tactics/tidal-shift.webp",
    contentType: "image/webp",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Famber-horizon.webp?alt=media&token=9630c94d-b458-44a6-8037-67b05a333df9",
    storagePath: "tactics/amber-horizon.webp",
    contentType: "image/webp",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fviolet-dawn.webp?alt=media&token=16b494da-53d8-475b-8f7a-fe8a7e91b08f",
    storagePath: "tactics/violet-dawn.webp",
    contentType: "image/webp",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fsunlit-clay.webp?alt=media&token=2a0d8f9e-cecd-42ab-b575-ff608ee5caae",
    storagePath: "tactics/sunlit-clay.webp",
    contentType: "image/webp",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fspring-meadow.webp?alt=media&token=c36fa269-d391-416b-8495-12a1723ec065",
    storagePath: "tactics/spring-meadow.webp",
    contentType: "image/webp",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fcoral-reef.webp?alt=media&token=0c3862e0-9d01-4783-a05b-38ac2ba25fdb",
    storagePath: "tactics/coral-reef.webp",
    contentType: "image/webp",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fgranite.webp?alt=media&token=9d1fc0b2-7ca0-4ff7-8dee-7294a1cfcac5",
    storagePath: "tactics/granite.webp",
    contentType: "image/webp",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fdusk-violet.webp?alt=media&token=eff06d4b-74df-43f9-b354-752ca8ceafc2",
    storagePath: "tactics/dusk-violet.webp",
    contentType: "image/webp",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fsmoked-plum.webp?alt=media&token=459a2c0f-a6e6-4dbc-b6eb-ed21ae921d30",
    storagePath: "tactics/smoked-plum.webp",
    contentType: "image/webp",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Fcharcoal-ink.webp?alt=media&token=d60e6821-f0ac-48e6-adbb-004b3fdd4f8b",
    storagePath: "tactics/charcoal-ink.webp",
    contentType: "image/webp",
  },
  {
    uri: "https://firebasestorage.googleapis.com/v0/b/impulse-mode.firebasestorage.app/o/tactics%2Firon-oxide.webp?alt=media&token=8024f8f9-c7d2-433a-b185-7cf4eb3bd148",
    storagePath: "tactics/iron-oxide.webp",
    contentType: "image/webp",
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
    img.storagePath === `tactics/${name}.webp`,
  );
}

/**
 * Default images for tactics
 * These are pre-defined background images that can be used for tactics
 */
import { Attachment } from "./schemas";
export declare const defaultImages: readonly [{
    readonly uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fendless-constellation.png?alt=media&token=a4295eea-806b-4d39-ac5c-bf6c0bc7602e";
    readonly storagePath: "tactics/endless-constellation.png";
    readonly contentType: "image/png";
}, {
    readonly uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fflat-mountains.png?alt=media&token=0e9a148b-d7cf-47e1-9fb8-32e1424c45cd";
    readonly storagePath: "tactics/flat-mountains.png";
    readonly contentType: "image/png";
}, {
    readonly uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fhollowed-boxes.png?alt=media&token=a7cfaac5-02b3-4b6d-894e-98a56ca72474";
    readonly storagePath: "tactics/hollowed-boxes.png";
    readonly contentType: "image/png";
}, {
    readonly uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fliquid-cheese.png?alt=media&token=6ac8285a-dd0e-492f-9d3a-c6fa2f4bd579";
    readonly storagePath: "tactics/liquid-cheese.png";
    readonly contentType: "image/png";
}, {
    readonly uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fquantum-gradient.png?alt=media&token=908b6904-b144-4f55-b2ce-2cd2c99b1f4b";
    readonly storagePath: "tactics/quantum-gradient.png";
    readonly contentType: "image/png";
}, {
    readonly uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fradiant-gradient.png?alt=media&token=4a89c2b2-be4d-404f-b747-28be891d7adf";
    readonly storagePath: "tactics/radiant-gradient.png";
    readonly contentType: "image/png";
}, {
    readonly uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Frainbow-vortex.png?alt=media&token=7fa62fd7-cc50-47ec-8e54-d9d43fdae010";
    readonly storagePath: "tactics/rainbow-vortex.png";
    readonly contentType: "image/png";
}, {
    readonly uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Frose-petals.png?alt=media&token=286a66b0-cd93-4f39-a590-d09c854e0649";
    readonly storagePath: "tactics/rose-petals.png";
    readonly contentType: "image/png";
}, {
    readonly uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fslanted-gradient.png?alt=media&token=8725ecab-52f2-4dae-b3d5-0dd67e4ef599";
    readonly storagePath: "tactics/slanted-gradient.png";
    readonly contentType: "image/png";
}, {
    readonly uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fsubtle-prism.png?alt=media&token=d7ac88b9-cae7-42ef-8ea1-e759eb02544c";
    readonly storagePath: "tactics/subtle-prism.png";
    readonly contentType: "image/png";
}, {
    readonly uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fsun-tornado.png?alt=media&token=abacf3bd-e8fd-470c-b1df-8003ed1f7dbb";
    readonly storagePath: "tactics/sun-tornado.png";
    readonly contentType: "image/png";
}, {
    readonly uri: "https://firebasestorage.googleapis.com/v0/b/impulse-tmp.appspot.com/o/tactics%2Fwintery-sunburst.png?alt=media&token=8858ca04-9a04-41f5-a10b-870e93f569fe";
    readonly storagePath: "tactics/wintery-sunburst.png";
    readonly contentType: "image/png";
}];
/**
 * Get a random default image from the available options
 * @returns A random default image
 */
export declare function getRandomDefaultImage(): Attachment;

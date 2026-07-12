const PREVIEW_ORIGIN = "https://preview.rangeway.co";
const configuredOrigin = process.env.RANGEWAY_SITE_ORIGIN?.replace(/\/$/, "");
const configuredNoindex = process.env.RANGEWAY_NOINDEX;

export const SITE_ORIGIN = configuredOrigin || PREVIEW_ORIGIN;
export const SITE_NOINDEX =
  configuredNoindex === undefined ? SITE_ORIGIN === PREVIEW_ORIGIN : configuredNoindex !== "false";

if (SITE_ORIGIN === PREVIEW_ORIGIN && !SITE_NOINDEX) {
  throw new Error("The preview origin must remain noindexed.");
}

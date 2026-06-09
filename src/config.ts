/**
 * Site-wide configuration.
 *
 * CAMPAIGN_MODE controls the Climatize raise layer across the site.
 * Flipping this single flag is the only change required:
 *   true  — persistent "Invest in Mojave" CTA in the nav, the raise band
 *           sits directly below the homepage hero, /mojave leads with the
 *           campaign.
 *   false — the nav CTA disappears, the raise demotes to a standard
 *           homepage section, and the site reads as the pure brand site.
 */
export const CAMPAIGN_MODE = true;

/**
 * The Climatize campaign URL. Swap this for the live campaign page when it
 * goes up; every "Invest in Mojave" link on the site reads from here.
 */
export const CLIMATIZE_URL = "https://climatize.earth";

export const LINKS = {
  mojaveMicrosite: "https://rangewaymojave.com",
  fieldNotes: "https://fieldnotes.rangeway.co",
  newsroom: "https://newsroom.rangeway.co",
  investorHub: "https://investors.rangeway.co",
  linkedinJobs: "https://www.linkedin.com/company/rangewayenergy/jobs/",
  instagram: "https://instagram.com/RangewayEV",
  linkedin: "https://www.linkedin.com/company/rangewayenergy",
  x: "https://x.com/RangewayEV"
};

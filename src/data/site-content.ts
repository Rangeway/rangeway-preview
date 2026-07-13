import { LINKS } from "../config";

export const NAV_LINKS = [
  { href: "/network", label: "The Network" },
  { href: "/our-story", label: "Our Story" },
  { href: "/team", label: "Team" },
  { href: "/partners", label: "Partners" },
  { href: "/investors", label: "Investors" },
  { href: LINKS.newsroom, label: "Newsroom", external: true },
  { href: "/contact", label: "Contact" }
] as const;

export const EXPERIENCE_PRINCIPLES = [
  { title: "Good light", body: "Interiors that feel calm, warm, and considered." },
  { title: "Real comfort", body: "Climate control, generous seating, restrooms, and Wi-Fi." },
  { title: "Room to settle", body: "A pause that restores the person making the trip." },
  { title: "Easy momentum", body: "A confident experience from arrival to departure." }
] as const;

export const FORMATS = [
  { name: "Waystation", href: "/network/waystation", tagline: "Streamlined comfort" },
  { name: "Basecamp", href: "/network/basecamp", tagline: "The full-service destination" },
  { name: "Summit", href: "/network/summit", tagline: "Where the road meets rest" }
] as const;

export const PROJECTS = [
  { name: "Bozeman", status: "Raising capital", href: LINKS.bozemanMicrosite },
  { name: "Mojave", status: "Breaking ground", href: LINKS.mojaveMicrosite },
  { name: "St. Louis", status: "In development", href: LINKS.stLouisPress }
] as const;

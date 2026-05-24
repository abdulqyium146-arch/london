import type { ServiceSlug, AreaSlug } from "@/lib/constants";

// True geographic neighbors based on South London proximity
// Used to replace "all areas" sidebar with semantically meaningful neighbors
export const AREA_NEIGHBORS: Record<AreaSlug, AreaSlug[]> = {
  "dulwich":       ["east-dulwich", "herne-hill", "camberwell"],
  "east-dulwich":  ["dulwich", "peckham", "herne-hill"],
  "peckham":       ["east-dulwich", "camberwell", "southwark"],
  "camberwell":    ["peckham", "dulwich", "brixton", "southwark"],
  "brixton":       ["herne-hill", "camberwell"],
  "herne-hill":    ["dulwich", "east-dulwich", "brixton"],
  "southwark":     ["camberwell", "peckham"],
};

// Semantic service clusters — cross-link services within the same topical silo
export const SERVICE_CLUSTERS: Record<string, ServiceSlug[]> = {
  emergency:    ["emergency-locksmith", "burglary-repair", "lock-repair"],
  residential:  ["residential-locksmith", "lock-installation", "lock-repair", "upvc-door-lock-repair", "smart-lock-installation"],
  commercial:   ["commercial-locksmith", "lock-installation", "smart-lock-installation"],
  security:     ["lock-installation", "smart-lock-installation", "burglary-repair"],
  repair:       ["lock-repair", "upvc-door-lock-repair", "burglary-repair"],
  automotive:   ["automotive-locksmith"],
};

// Blog post → service money page mappings (blog acts as link funnel to money pages)
export const BLOG_TO_SERVICES: Record<string, ServiceSlug[]> = {
  "anti-snap-locks-south-london-guide": [
    "lock-installation",
    "burglary-repair",
    "residential-locksmith",
  ],
  "upvc-door-problems-guide": [
    "upvc-door-lock-repair",
    "lock-repair",
    "residential-locksmith",
  ],
  "how-to-choose-a-locksmith": [
    "emergency-locksmith",
    "residential-locksmith",
    "commercial-locksmith",
  ],
  "smart-locks-guide": [
    "smart-lock-installation",
    "lock-installation",
    "residential-locksmith",
  ],
  "burglary-repair-what-to-do": [
    "burglary-repair",
    "lock-installation",
    "residential-locksmith",
  ],
};

// Blog post → area page mappings (anchor local content to area pages)
export const BLOG_TO_AREAS: Record<string, AreaSlug[]> = {
  "anti-snap-locks-south-london-guide": ["dulwich", "east-dulwich", "peckham"],
  "upvc-door-problems-guide":           ["dulwich", "herne-hill", "camberwell"],
  "how-to-choose-a-locksmith":          ["dulwich", "east-dulwich", "brixton"],
  "smart-locks-guide":                  ["dulwich", "southwark", "peckham"],
  "burglary-repair-what-to-do":         ["dulwich", "brixton", "camberwell"],
};

// Service page contextual anchor text — varies anchor text to avoid over-optimisation
export const SERVICE_AREA_ANCHORS: Record<ServiceSlug, (areaName: string) => string[]> = {
  "emergency-locksmith":    (a) => [`emergency locksmith in ${a}`, `locked out in ${a}`, `${a} emergency locksmith`],
  "residential-locksmith":  (a) => [`residential locksmith in ${a}`, `home locksmith ${a}`, `locksmith in ${a}`],
  "commercial-locksmith":   (a) => [`commercial locksmith in ${a}`, `business locksmith ${a}`, `office locksmith ${a}`],
  "automotive-locksmith":   (a) => [`car locksmith in ${a}`, `automotive locksmith ${a}`, `vehicle locksmith ${a}`],
  "lock-repair":            (a) => [`lock repair in ${a}`, `${a} lock repair`, `fix locks in ${a}`],
  "lock-installation":      (a) => [`lock installation in ${a}`, `new locks in ${a}`, `${a} lock fitting`],
  "upvc-door-lock-repair":  (a) => [`UPVC door repair in ${a}`, `${a} UPVC lock repair`, `UPVC locksmith ${a}`],
  "burglary-repair":        (a) => [`burglary repair in ${a}`, `${a} burglary repair`, `break-in repair ${a}`],
  "smart-lock-installation":(a) => [`smart lock installation in ${a}`, `${a} smart locks`, `keyless locks ${a}`],
};

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
  "anti-snap-locks-south-london-guide":      ["lock-installation", "burglary-repair", "residential-locksmith"],
  "upvc-door-wont-lock-common-causes":       ["upvc-door-lock-repair", "lock-repair", "residential-locksmith"],
  "locksmith-costs-dulwich-guide":           ["emergency-locksmith", "residential-locksmith", "lock-installation"],
  "home-security-checklist-south-london":    ["residential-locksmith", "lock-installation", "burglary-repair"],
  "smart-locks-worth-it-guide":              ["smart-lock-installation", "lock-installation", "residential-locksmith"],
  "how-to-choose-a-locksmith-dulwich":       ["emergency-locksmith", "residential-locksmith", "commercial-locksmith"],
  "what-to-do-after-break-in-london":        ["burglary-repair", "lock-installation", "residential-locksmith"],
  "bs3621-insurance-approved-locks":         ["lock-installation", "residential-locksmith", "lock-repair"],
  "lock-snapping-how-burglars-break-in":     ["lock-installation", "burglary-repair", "residential-locksmith"],
  "master-key-systems-for-businesses":       ["commercial-locksmith", "lock-installation", "smart-lock-installation"],
  "change-locks-when-moving-house":          ["residential-locksmith", "lock-installation", "lock-repair"],
  "car-lockout-what-to-do":                  ["automotive-locksmith", "emergency-locksmith", "lock-repair"],
  "mortice-deadlock-vs-euro-cylinder":       ["lock-installation", "residential-locksmith", "lock-repair"],
  "ultion-vs-yale-platinum-anti-snap":       ["lock-installation", "residential-locksmith", "burglary-repair"],
  "door-frame-reinforcement-guide":          ["burglary-repair", "residential-locksmith", "lock-installation"],
  "commercial-lock-security-south-london":   ["commercial-locksmith", "lock-installation", "smart-lock-installation"],
  "upvc-door-maintenance-guide":             ["upvc-door-lock-repair", "lock-repair", "residential-locksmith"],
  "emergency-locksmith-what-to-expect":      ["emergency-locksmith", "residential-locksmith", "lock-repair"],
  "smart-lock-battery-life-guide":           ["smart-lock-installation", "lock-installation", "residential-locksmith"],
  "how-long-does-locksmith-take":            ["emergency-locksmith", "residential-locksmith", "automotive-locksmith"],
};

// Blog post → area page mappings (anchor local content to area pages)
export const BLOG_TO_AREAS: Record<string, AreaSlug[]> = {
  "anti-snap-locks-south-london-guide":      ["dulwich", "east-dulwich", "peckham"],
  "upvc-door-wont-lock-common-causes":       ["dulwich", "herne-hill", "camberwell"],
  "locksmith-costs-dulwich-guide":           ["dulwich", "east-dulwich", "peckham"],
  "home-security-checklist-south-london":    ["dulwich", "brixton", "camberwell"],
  "smart-locks-worth-it-guide":              ["dulwich", "southwark", "peckham"],
  "how-to-choose-a-locksmith-dulwich":       ["dulwich", "east-dulwich", "brixton"],
  "what-to-do-after-break-in-london":        ["dulwich", "brixton", "camberwell"],
  "bs3621-insurance-approved-locks":         ["dulwich", "herne-hill", "southwark"],
  "lock-snapping-how-burglars-break-in":     ["dulwich", "peckham", "brixton"],
  "master-key-systems-for-businesses":       ["southwark", "peckham", "camberwell"],
  "change-locks-when-moving-house":          ["dulwich", "east-dulwich", "herne-hill"],
  "car-lockout-what-to-do":                  ["dulwich", "peckham", "brixton"],
  "mortice-deadlock-vs-euro-cylinder":       ["dulwich", "camberwell", "herne-hill"],
  "ultion-vs-yale-platinum-anti-snap":       ["dulwich", "east-dulwich", "southwark"],
  "door-frame-reinforcement-guide":          ["dulwich", "brixton", "peckham"],
  "commercial-lock-security-south-london":   ["southwark", "camberwell", "peckham"],
  "upvc-door-maintenance-guide":             ["dulwich", "herne-hill", "east-dulwich"],
  "emergency-locksmith-what-to-expect":      ["dulwich", "east-dulwich", "camberwell"],
  "smart-lock-battery-life-guide":           ["dulwich", "southwark", "brixton"],
  "how-long-does-locksmith-take":            ["dulwich", "east-dulwich", "brixton"],
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

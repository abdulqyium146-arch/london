export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  verified: boolean;
  source: "google" | "checkatrade" | "direct";
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah M.",
    location: "East Dulwich",
    rating: 5,
    text: "Absolutely brilliant service. I snapped my key at 7pm on a Sunday and honestly expected a long wait. The locksmith arrived within 25 minutes, had the broken key out in no time, and cut me a new one on the spot. Professional, friendly and reasonably priced. Couldn't ask for more.",
    service: "Emergency Locksmith",
    date: "2025-04-12",
    verified: true,
    source: "google",
    initials: "SM",
  },
  {
    id: "t2",
    name: "James T.",
    location: "Dulwich",
    rating: 5,
    text: "Used TrustLock to upgrade all the locks in our Victorian terrace after getting the keys cut checked by a professional. Really solid advice — didn't try to upsell anything we didn't need. The new anti-snap cylinders and the five-lever mortice look and feel completely different to what was there before. Great job.",
    service: "Residential Locksmith",
    date: "2025-03-28",
    verified: true,
    source: "google",
    initials: "JT",
  },
  {
    id: "t3",
    name: "Priya K.",
    location: "Peckham",
    rating: 5,
    text: "My UPVC back door has been playing up for months — the handle kept dropping and I'd been sort of lifting the door to lock it which clearly wasn't right. TrustLock came out and diagnosed a failed gearbox, replaced it cleanly and the door now works perfectly. Should have called them sooner.",
    service: "UPVC Door Lock Repair",
    date: "2025-05-01",
    verified: true,
    source: "google",
    initials: "PK",
  },
  {
    id: "t4",
    name: "Michael O.",
    location: "Brixton",
    rating: 5,
    text: "We had a break-in attempt overnight — they'd tried to snap the cylinder but hadn't got in. TrustLock came out first thing in the morning, replaced the damaged cylinder, assessed the rest of the door, and gave me genuinely useful advice on what to prioritise. Really reassuring when you're shaken up about something like that.",
    service: "Burglary Repair",
    date: "2025-02-14",
    verified: true,
    source: "google",
    initials: "MO",
  },
  {
    id: "t5",
    name: "Clara W.",
    location: "Herne Hill",
    rating: 5,
    text: "Installed a Yale smart lock for us on our rental flat. We use it for short-term lets and the ability to set unique codes for each guest and revoke them remotely is exactly what we needed. The installation was neat and professional and the locksmith walked us through every feature. Really impressed.",
    service: "Smart Lock Installation",
    date: "2025-04-22",
    verified: true,
    source: "google",
    initials: "CW",
  },
  {
    id: "t6",
    name: "David H.",
    location: "Camberwell",
    rating: 5,
    text: "Fast, honest and fair. Got a quote over the phone before they came out — no price changes when the job was done. Would use again without hesitation.",
    service: "Lock Installation",
    date: "2025-01-30",
    verified: true,
    source: "checkatrade",
    initials: "DH",
  },
  {
    id: "t7",
    name: "Fatima A.",
    location: "Southwark",
    rating: 5,
    text: "My daughter had locked herself out while I was at work. I called TrustLock and they were there within half an hour. So relieved — she was kept updated by the locksmith and they were completely professional throughout. Would definitely recommend.",
    service: "Emergency Locksmith",
    date: "2025-03-05",
    verified: true,
    source: "google",
    initials: "FA",
  },
  {
    id: "t8",
    name: "Robert B.",
    location: "East Dulwich",
    rating: 5,
    text: "We have a small office on Lordship Lane and needed a master key system so different staff could access different areas. TrustLock assessed the property, designed a sensible key hierarchy, and installed everything within a week. The system works exactly as needed and the price was very competitive.",
    service: "Commercial Locksmith",
    date: "2025-05-10",
    verified: true,
    source: "google",
    initials: "RB",
  },
];

export function getFeaturedTestimonials(count = 6): Testimonial[] {
  return testimonials.slice(0, count);
}

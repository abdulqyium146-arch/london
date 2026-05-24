export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  // General
  {
    id: "faq-1",
    category: "General",
    question: "What areas does TrustLock cover?",
    answer:
      "We cover Dulwich, East Dulwich, Peckham, Camberwell, Brixton, Herne Hill, Southwark and the surrounding South London areas. If you're unsure whether we cover your postcode, just give us a call — we're happy to confirm.",
  },
  {
    id: "faq-2",
    category: "General",
    question: "What are your opening hours?",
    answer:
      "We operate from 9:00am to 8:00pm, seven days a week including bank holidays. For emergency lockouts within these hours, we aim to be with you within 30 minutes.",
  },
  {
    id: "faq-3",
    category: "General",
    question: "Are your locksmiths fully insured?",
    answer:
      "Yes. All our locksmiths carry full public liability insurance and are insured to work on residential and commercial properties. We can provide proof of insurance on request.",
  },
  {
    id: "faq-4",
    category: "General",
    question: "Do you provide a receipt or invoice?",
    answer:
      "Absolutely. We provide a full invoice for all work carried out, including parts and labour. This is particularly important if you need to submit a claim to your home or business insurance.",
  },
  // Pricing
  {
    id: "faq-5",
    category: "Pricing",
    question: "How much does a locksmith cost in Dulwich?",
    answer:
      "Costs vary depending on the work required. An emergency lockout starts from £65, a lock replacement from £55, and UPVC repairs from £75. We always provide a fixed quote before starting any work — no surprises.",
  },
  {
    id: "faq-6",
    category: "Pricing",
    question: "Is there a call-out charge?",
    answer:
      "We charge a small call-out fee for emergency response, which is deducted from the total cost of the work. We'll confirm the total price before we begin — we don't spring charges on you at the end.",
  },
  {
    id: "faq-7",
    category: "Pricing",
    question: "Do you charge more at weekends?",
    answer:
      "No. We charge the same rate seven days a week. There are no weekend or bank holiday surcharges.",
  },
  {
    id: "faq-8",
    category: "Pricing",
    question: "Can I get a quote before you arrive?",
    answer:
      "Yes, for most standard jobs we can give you a fixed quote over the phone based on your description of the issue. For more complex repairs or installations we'll confirm the price once we've assessed the situation on-site.",
  },
  // Emergency
  {
    id: "faq-9",
    category: "Emergency",
    question: "I'm locked out of my house — what should I do?",
    answer:
      "Call us straightaway on 07984 547185. Stay somewhere safe and warm while you wait. We'll confirm our arrival time and come directly to your address. Avoid trying to force entry yourself as this often causes additional damage.",
  },
  {
    id: "faq-10",
    category: "Emergency",
    question: "How quickly can you respond to a lockout in Dulwich?",
    answer:
      "For lockouts in Dulwich and the immediately surrounding areas, we typically arrive within 30 minutes. For slightly more distant areas such as Brixton or Southwark, allow up to 45 minutes.",
  },
  {
    id: "faq-11",
    category: "Emergency",
    question: "Can you open a door without damaging the lock?",
    answer:
      "In most cases, yes. We use specialist picking and bypass tools to open locks non-destructively. Drilling is only ever used as a last resort — for example, when a high-security anti-pick lock has been installed that genuinely cannot be bypassed any other way.",
  },
  {
    id: "faq-12",
    category: "Emergency",
    question: "What if my key has snapped in the lock?",
    answer:
      "Call us. Key extraction is one of the most common jobs we attend. We use specialist extraction tools to remove the broken key cleanly from the cylinder without causing damage, then cut you a replacement key on the spot.",
  },
  // Security
  {
    id: "faq-13",
    category: "Security",
    question: "What is an anti-snap lock and do I need one?",
    answer:
      "An anti-snap lock cylinder is designed to resist 'cylinder snapping' — the most common method used by burglars in the UK, where the external part of the lock is snapped off with brute force to expose the mechanism. If your front door has a standard euro cylinder, upgrading to an anti-snap version is strongly recommended. Most cost between £30–£80 fitted.",
  },
  {
    id: "faq-14",
    category: "Security",
    question: "What does BS3621 mean and why does it matter?",
    answer:
      "BS3621 is a British Standard for high-security locks. Many home insurance policies require that external doors be fitted with a BS3621 certified lock — and will refuse to pay out on burglary claims if they're not. We stock and fit BS3621 locks and can advise which is right for your door.",
  },
  {
    id: "faq-15",
    category: "Security",
    question: "How can I make my front door more secure?",
    answer:
      "The most effective upgrades are: (1) upgrading to an anti-snap cylinder, (2) fitting a five-lever mortice deadlock to BS3621, (3) reinforcing the door frame at the lock keep point, and (4) fitting a door chain or alarm contact. We can assess your current setup and advise on the highest-priority improvements for your property.",
  },
  {
    id: "faq-16",
    category: "Security",
    question: "Should I change the locks when I move into a new home?",
    answer:
      "Yes, always. You have no way of knowing how many keys exist for your new property — previous owners, estate agents, tradespeople and others may all have copies. Rekeying or replacing the lock cylinders is a small cost for complete peace of mind.",
  },
  // UPVC
  {
    id: "faq-17",
    category: "UPVC",
    question: "Why won't my UPVC door lock properly?",
    answer:
      "The most likely cause is a failed or worn gearbox — the internal mechanism that drives the multipoint locking bolts. Other causes include door misalignment (the door and frame have shifted relative to each other over time) and cylinder failure. We diagnose and fix all of these.",
  },
  {
    id: "faq-18",
    category: "UPVC",
    question: "My UPVC door handle has dropped — is this serious?",
    answer:
      "A dropped handle almost always means the internal gearbox has failed. Don't keep forcing the handle as this can cause additional damage. A gearbox replacement typically costs between £100–£180 including parts and labour.",
  },
];

export const faqCategories = [...new Set(faqs.map((f) => f.category))];

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter((f) => f.category === category);
}

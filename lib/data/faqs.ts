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
      "TrustLock covers Dulwich (SE22), East Dulwich (SE22), Herne Hill (SE24), Peckham (SE15), Camberwell (SE5), Brixton (SW2), Southwark (SE1) and the wider South London area. If you're not sure whether we reach your postcode, call 07984 547185 — we're happy to confirm before you commit.",
  },
  {
    id: "faq-2",
    category: "General",
    question: "What are your opening hours?",
    answer:
      "TrustLock is available 24 hours a day, 7 days a week — including weekends and bank holidays. Emergency lockout calls receive a target 30-minute response across Dulwich and neighbouring SE postcodes at any time of day or night.",
  },
  {
    id: "faq-3",
    category: "General",
    question: "Are your locksmiths fully insured?",
    answer:
      "Yes. Every TrustLock engineer carries £2 million public liability insurance and is DBS-checked. We can provide proof of insurance on request — many landlords and property managers ask, and we're accustomed to providing it. All work is covered from the moment we arrive to the moment we leave.",
  },
  {
    id: "faq-4",
    category: "General",
    question: "Do you provide a receipt or invoice?",
    answer:
      "Always. Every job receives a full itemised invoice showing parts (with brand, model and British Standard rating where applicable), labour, and total cost. This documentation is essential for home or business insurance claims following a break-in or security incident, and we format it to meet UK insurer requirements.",
  },
  // Pricing
  {
    id: "faq-5",
    category: "Pricing",
    question: "How much does a locksmith cost in Dulwich?",
    answer:
      "Costs depend on the work required. Emergency lockouts start from £65. Anti-snap cylinder replacement (supply and fit) starts from £55. UPVC gearbox replacement starts from £95 including parts. BS3621 mortice deadlock installation starts from £85. We always quote a fixed price before starting — the price we quote is the price on the invoice.",
  },
  {
    id: "faq-6",
    category: "Pricing",
    question: "Is there a call-out charge?",
    answer:
      "There is a small call-out fee for emergency response, which is applied against the total job cost — it's not charged on top of the work. The call-out fee is confirmed when you call, so you know the total cost before we set off. We don't add charges at the end of a job.",
  },
  {
    id: "faq-7",
    category: "Pricing",
    question: "Do you charge more at weekends or on bank holidays?",
    answer:
      "No. Our pricing is the same every day of the week, including bank holidays. The rate you're quoted on a Tuesday is identical to the rate on a Sunday. There are no weekend surcharges or bank holiday premiums.",
  },
  {
    id: "faq-8",
    category: "Pricing",
    question: "Can I get a quote before you arrive?",
    answer:
      "Yes, for most standard jobs. Give us a description of what you need — lock type, door type, whether it's a repair or replacement — and we'll give you a fixed price over the phone. For more complex diagnoses (such as identifying a failed UPVC mechanism on an unfamiliar door brand), we'll confirm the price on-site after a brief assessment and before starting any work.",
  },
  // Emergency
  {
    id: "faq-9",
    category: "Emergency",
    question: "I'm locked out of my house — what should I do?",
    answer:
      "Call us on 07984 547185 straight away. Stay somewhere safe and warm — if you're outside in poor weather, a nearby café or neighbour if possible. We'll confirm our estimated arrival time (typically 30 minutes for Dulwich SE22 addresses) and come directly to you. Don't attempt to force the door yourself — this usually causes additional damage that adds to the overall cost.",
  },
  {
    id: "faq-10",
    category: "Emergency",
    question: "How quickly can you respond to a lockout in Dulwich?",
    answer:
      "TrustLock aims to reach Dulwich (SE22) and East Dulwich (SE22) addresses within 30 minutes of your call. For Herne Hill (SE24), Camberwell (SE5) and Peckham (SE15), allow 35–40 minutes. For Brixton (SW2) and Southwark (SE1), up to 45 minutes. We give you a specific arrival estimate when you call — not a vague window.",
  },
  {
    id: "faq-11",
    category: "Emergency",
    question: "Can you open a door without damaging the lock?",
    answer:
      "In more than 90% of cases, yes. We use professional picking tools, bypass techniques and Single Point Entry (SPE) equipment that open locks non-destructively. Drilling is used only as a genuine last resort — for example, when a high-security anti-pick, anti-drill cylinder cannot be bypassed by any other means — and we always explain why before proceeding.",
  },
  {
    id: "faq-12",
    category: "Emergency",
    question: "What if my key has snapped inside the lock?",
    answer:
      "Call us — this is one of our most common emergency jobs. We use hook-tip and spiral extraction tools to grip the broken blade's serrations and draw it out cleanly without damaging the cylinder's pin stack. We then cut a replacement key to the same profile on-site. The whole process typically takes 20–40 minutes.",
  },
  // Security
  {
    id: "faq-13",
    category: "Security",
    question: "What is an anti-snap lock and do I need one?",
    answer:
      "An anti-snap cylinder (rated TS007:2012) is engineered to resist cylinder snapping — where the external portion of a euro cylinder is broken off with a tool to expose the locking cam. It is the most common residential burglary entry method in South London. If your external doors have standard euro cylinders, upgrading to TS007:2012-rated cylinders (Ultion, Yale Platinum, ABS Master) is the single most impactful security improvement you can make. Fitted cost typically ranges from £55–£85 per door.",
  },
  {
    id: "faq-14",
    category: "Security",
    question: "What does BS3621 mean and why does it matter?",
    answer:
      "BS3621:2007+A2:2012 is the British Standard for high-security five-lever mortice deadlocks for timber doors. Most UK home insurance policies specifically require a BS3621-certified lock on all final-exit doors — and will decline burglary claims if this requirement wasn't met. We stock and fit BS3621 locks from Yale, ERA and Chubb, and can confirm compliance in writing for your insurance provider.",
  },
  {
    id: "faq-15",
    category: "Security",
    question: "How can I make my front door more secure?",
    answer:
      "The four highest-impact improvements, in order of priority: (1) upgrade to a TS007:2012 three-star anti-snap cylinder, eliminating the cylinder snapping vulnerability; (2) ensure you have a BS3621 five-lever mortice deadlock as the primary lock; (3) fit a reinforced box keep with 100mm fixings at the strike plate, preventing door-kicking attacks; (4) add a door chain or door limiter as a secondary barrier. We carry out a free security assessment as part of any lock installation or repair visit.",
  },
  {
    id: "faq-16",
    category: "Security",
    question: "Should I change the locks when I move into a new home?",
    answer:
      "Yes — always. The number of key copies for a property in circulation when you move in is unknowable. Previous owners, their families, estate agents, contractors, property managers and former tenants may all hold working keys. Rekeying or replacing the cylinders (typically £55–£90 per door) gives you absolute certainty from day one. TrustLock can carry out a full property rekey on the day you take possession.",
  },
  // UPVC
  {
    id: "faq-17",
    category: "UPVC",
    question: "Why won't my UPVC door lock properly?",
    answer:
      "The three most common causes are: (1) a failed gearbox — the central mechanism that drives the multipoint locking bolts has stripped, usually presenting as a handle that moves freely without resistance or a door that only partially locks; (2) door misalignment — the door and frame have shifted so the locking points no longer meet the keeps cleanly; (3) cylinder wear — the cylinder is no longer engaging the cam correctly. We diagnose all three as part of the initial assessment and carry parts for the most common mechanism families.",
  },
  {
    id: "faq-18",
    category: "UPVC",
    question: "My UPVC door handle has dropped — is this serious?",
    answer:
      "A dropped handle almost always indicates a failed gearbox — the internal component that translates handle rotation into multi-point bolt movement. The follower hole (the square or oval socket that accepts the handle spindle) has stripped, so the spindle turns freely without driving the mechanism. Don't continue forcing the handle — this can cause secondary damage to the spindle and faceplate. Gearbox replacement typically costs £95–£180 including parts and labour and is carried out in a single visit.",
  },
];

export const faqCategories = [...new Set(faqs.map((f) => f.category))];

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter((f) => f.category === category);
}

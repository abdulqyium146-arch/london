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
  // Automotive
  {
    id: "faq-19",
    category: "Automotive",
    question: "How much does an automotive locksmith cost in South London?",
    answer:
      "A standard car lockout in South London costs £85–£150 with TrustLock, including attendance and non-destructive entry. Transponder key programming costs £150–£400 depending on make, model and key type. Basic key cutting without a chip is £40–£80. All prices are confirmed as a fixed quote before we start.",
  },
  {
    id: "faq-20",
    category: "Automotive",
    question: "Can you program a transponder key on-site?",
    answer:
      "Yes, for most common makes and models. Transponder keys contain a chip that must be programmed to the vehicle's ECU. We carry diagnostic equipment for the majority of mainstream manufacturers (Ford, Volkswagen, Vauxhall, BMW, Toyota and others). Some specialist or luxury vehicles require dealer-level programming tools — we will tell you honestly if that is the case.",
  },
  {
    id: "faq-21",
    category: "Automotive",
    question: "I have lost my car key completely — can you help without the original?",
    answer:
      "Yes. A locksmith can generate a replacement key from the vehicle's lock profile (cut from the door lock) without needing the original key. For modern cars with transponder chips, the new key is then programmed to the ECU on-site. The process takes 30–90 minutes depending on the vehicle. This is typically faster and cheaper than a main dealer.",
  },
  // Commercial
  {
    id: "faq-22",
    category: "Commercial",
    question: "Do you install master key systems for South London businesses?",
    answer:
      "Yes. We design and install master key systems for offices, retail premises, commercial buildings and multi-unit residential properties across South London. A master key system allows different staff to access different combinations of doors, with a single master key opening all. We use restricted-profile cylinders where key duplication requires an authorisation card — essential for key control over time.",
  },
  {
    id: "faq-23",
    category: "Commercial",
    question: "Can you attend a commercial property outside business hours?",
    answer:
      "Yes. TrustLock operates 24 hours a day, 7 days a week for both residential and commercial call-outs. Business lockouts, alarm activations requiring lock access, post-break-in emergency boarding and out-of-hours security repairs all receive the same response as residential emergencies. Commercial pricing is quoted fixed before attendance.",
  },
  {
    id: "faq-24",
    category: "Commercial",
    question: "What is the most important lock upgrade for a South London business?",
    answer:
      "For most businesses, the highest-return upgrade is fitting restricted-profile cylinders throughout the premises. These prevent key duplication by anyone other than the business owner — eliminating the most common commercial security exposure: former staff who retained key copies. Cost is £65–£120 per cylinder installed. Following that, a master key system with defined access levels is the next most impactful step.",
  },
  // Smart Locks
  {
    id: "faq-25",
    category: "Smart Locks",
    question: "Which smart locks do you install?",
    answer:
      "TrustLock installs and configures Yale Linus Smart Lock, Nuki Smart Lock Pro (4th generation), Ultion Smart cylinder, August Smart Lock Pro and Tedee smart lock. We recommend products based on your door type, connectivity requirements and whether you need smart home integration. All installations include full configuration of the app, access codes and connectivity testing.",
  },
  {
    id: "faq-26",
    category: "Smart Locks",
    question: "Are smart locks as secure as traditional locks?",
    answer:
      "The best smart locks — Ultion Smart, Yale Linus and Nuki Pro — combine TS007 3-star or equivalent mechanical security with smart access. This means they are at least as secure mechanically as the best traditional anti-snap cylinders, with the addition of remote access management. Cheap or unknown-brand smart locks may have weaker mechanical security or poor encryption. We only install products with verified mechanical and digital security credentials.",
  },
  {
    id: "faq-27",
    category: "Smart Locks",
    question: "Can you install a smart lock on any door?",
    answer:
      "Most standard UPVC, composite and timber doors can accept a smart lock or smart cylinder retrofit. The main requirements are that the door has a euro cylinder (most modern doors do) and sufficient space inside the door for the battery unit. Doors with non-standard cylinders, unusual profiles or certain high-security multipoint systems may need assessment first. Call us on 07984 547185 to discuss your specific door.",
  },
  // Security (additional)
  {
    id: "faq-28",
    category: "Security",
    question: "How do I know if my lock has been tampered with?",
    answer:
      "Signs of lock tampering include: fresh scratches around the cylinder face or keyway (indicating picking or bump key attempts), a cylinder that is slightly loose or rotated in the door (indicating snapping damage to the collar), difficulty turning the key when the lock previously operated smoothly (indicating internal damage), and visible deformation around the lock face plate. If you notice any of these, have a locksmith inspect the cylinder before assuming it is secure.",
  },
  {
    id: "faq-29",
    category: "Security",
    question: "What door reinforcement do you recommend for Victorian and Edwardian properties in Dulwich?",
    answer:
      "Period properties in Dulwich, Herne Hill and Camberwell typically have original or replaced timber door frames which are vulnerable to kick-in attacks at the keep plate. We recommend: (1) a security strike plate with 100mm+ screws penetrating into the structural masonry, (2) a BS3621 five-lever mortice deadlock on all timber external doors, (3) hinge bolts on the hinge side, and (4) a night chain or limiter as a secondary barrier. Together these address both cylinder snapping and forced-entry attacks.",
  },
  {
    id: "faq-30",
    category: "Security",
    question: "How often should I replace my door locks?",
    answer:
      "There is no fixed replacement schedule, but you should replace locks: when moving into any new property (always), after a break-in or attempted break-in, if keys are lost or you are uncertain who has copies, if the lock has become stiff or unreliable, and when an upgrade to current security standards is warranted (for example, replacing a standard cylinder with a TS007 3-star anti-snap version). Most quality locks last 10–15 years mechanically — but security standards improve, and a 10-year-old cylinder may no longer represent the best available protection.",
  },
];

export const faqCategories = [...new Set(faqs.map((f) => f.category))];

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter((f) => f.category === category);
}

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
  // Pricing (extended)
  {
    id: "faq-31",
    category: "Pricing",
    question: "How much do locksmiths charge in London?",
    answer:
      "Typical London locksmith prices in 2025: emergency door opening from £65–£120 during the day, £100–£180 at night with many firms — though TrustLock charges the same rate 24/7 with no out-of-hours premium. Lock repair or replacement typically runs £85–£150, lock installation £90–£180. The wide range reflects whether a national call-centre is dispatching a sub-contractor (higher cost, no accountability) versus a locally based locksmith like TrustLock operating directly from SE22. Always ask for a fixed quote before the locksmith travels — reputable firms provide one.",
  },
  {
    id: "faq-32",
    category: "Pricing",
    question: "Is it cheaper to rekey or replace locks?",
    answer:
      "Rekeying (changing the internal pin stack so existing keys no longer work) is cheaper — typically £25–£45 per cylinder when done alongside other work. It makes sense when the lock mechanism is in good condition and you simply need to invalidate old keys, such as when moving into a property or after a tenancy change. Replacing the entire cylinder is the right call when the existing lock is worn, does not meet current security standards (e.g. not TS007:2012 rated), or has been damaged. Anti-snap cylinder replacement at TrustLock starts from £55 — the security upgrade often justifies the modest additional cost over rekeying alone.",
  },
  {
    id: "faq-33",
    category: "Pricing",
    question: "How much is it to change a door lock in the UK?",
    answer:
      "A standard euro cylinder change (supply and fit) in the UK costs £55–£95 depending on the cylinder specification. A basic replacement cylinder costs from £55. An anti-snap TS007:2012-rated cylinder (Ultion, Yale Superior, ABS) costs from £75 fitted. A BS3621 five-lever mortice deadlock on a timber door costs from £85 fitted. UPVC multipoint gearbox replacement costs from £95. These are supply-and-fit prices — parts and labour included. At TrustLock, all prices are fixed quotes confirmed before work begins.",
  },
  {
    id: "faq-34",
    category: "Pricing",
    question: "Why are locksmiths so expensive?",
    answer:
      "Several factors drive locksmith costs: (1) specialist tools — quality picking sets, decoders and diagnostic equipment cost thousands of pounds; (2) 24/7 availability — maintaining round-the-clock cover is expensive to operate; (3) training and insurance — DBS checks, £2m public liability insurance, and ongoing skills training all add to overheads; (4) a fully stocked van carrying cylinders, gearboxes, and hardware for dozens of door types. The cost of a professional locksmith is almost always less than the damage caused by attempting forced entry yourself, and far less than the loss from a security breach. That said, there is significant price variation — national call centres tend to be more expensive and less accountable than locally based firms.",
  },
  {
    id: "faq-35",
    category: "Pricing",
    question: "How much is a full lock change for a house?",
    answer:
      "A full lock change for a typical three-bedroom house in South London — front door, back door, and any additional external doors — typically costs £180–£350 fitted depending on the cylinder specification chosen. This assumes euro cylinder doors; timber doors with five-lever mortice locks cost more per door (from £85 each). Anti-snap cylinder upgrades across all external doors of a standard semi-detached property in Dulwich or East Dulwich run approximately £200–£280 supply and fit. TrustLock provides a fixed whole-property quote with no per-door call-out charges.",
  },
  {
    id: "faq-36",
    category: "Pricing",
    question: "How much does a locksmith charge per hour?",
    answer:
      "Most reputable UK locksmiths — including TrustLock — charge per job rather than per hour. This gives you a predictable, fixed cost rather than an open-ended meter. A job-rate model benefits you because efficient locksmiths who complete work quickly are not penalised for their skill. If you encounter a locksmith who quotes strictly by the hour without a job-rate maximum, ask for a capped estimate before they start. Hourly rates where quoted range from £60–£100/hr in South London, but a job-rate fixed quote is always preferable.",
  },
  {
    id: "faq-37",
    category: "Pricing",
    question: "What's the average price to change a front door lock?",
    answer:
      "Changing a front door euro cylinder (supply and fit) averages £65–£95 in South London. For an anti-snap TS007:2012 cylinder — which we strongly recommend for any external door — the cost is from £75 fitted. If your front door has a separate five-lever mortice deadlock (common on older Dulwich timber doors), budgeting £85–£120 fitted is realistic. The price includes labour, the cylinder itself, and a new pair of keys. At TrustLock, this price is fixed on the phone — not revised upward on arrival.",
  },
  {
    id: "faq-38",
    category: "Pricing",
    question: "What is the average price to replace a lock cylinder?",
    answer:
      "In South London, a standard euro cylinder replacement costs from £55 fitted. An anti-snap TS007:2012 cylinder replacement costs from £75 fitted. High-security cylinders with restricted key profiles (Mul-T-Lock MT5+, Ultion) cost from £95 fitted. For UPVC doors requiring a specific cylinder size with secure scoring, measure the cylinder (screw hole to each end) before calling — common sizes are 35/35mm, 35/45mm, and 45/55mm. TrustLock carries the full range of standard sizes on the van.",
  },
  // General (extended)
  {
    id: "faq-39",
    category: "General",
    question: "Are locksmiths worth it?",
    answer:
      "Yes, for most scenarios. Attempting to force entry yourself typically causes £200–£500 of door or frame damage that a locksmith would have avoided by opening non-destructively in 20 minutes. For security upgrades, a professional ensures the lock is fitted correctly — an anti-snap cylinder installed at the wrong protrusion length (more than 3mm exposed) negates most of the security benefit. For automotive work, incorrect DIY transponder programming can lock out the ECU entirely, costing far more to rectify. The exception is very simple jobs — a loose door handle screw, for example — where a competent DIYer can self-resolve.",
  },
  {
    id: "faq-40",
    category: "General",
    question: "How do you pay for a locksmith?",
    answer:
      "TrustLock accepts payment by bank transfer, credit or debit card, and cash. Payment is taken on completion once you have seen the finished work and reviewed the invoice. We do not require upfront payment before attending. For larger commercial jobs or planned installations, we can invoice with standard 7-day payment terms. Every job receives a VAT invoice suitable for insurance claims and landlord records.",
  },
  {
    id: "faq-41",
    category: "General",
    question: "What locksmith services does TrustLock offer in South London?",
    answer:
      "TrustLock offers: emergency lockout response (24/7, from £65), residential lock installation and upgrade, UPVC door lock and gearbox repair, burglary repair and emergency boarding, automotive locksmith services (car lockout, key cutting, transponder programming), commercial locksmith services (master key systems, access control, restricted cylinders), smart lock installation and configuration, and window lock installation. All services are available across SE22, SE21, SE24, SE15, SE5, SW2 and SE1.",
  },
  // Security (extended)
  {
    id: "faq-42",
    category: "Security",
    question: "What door locks do police recommend in the UK?",
    answer:
      "The Metropolitan Police and UK police forces recommend locks approved under the Secured by Design (SBD) scheme — the official police accreditation for security products. SBD-approved locks must meet or exceed BS3621 (five-lever mortice deadlocks) or TS007:2012 three-star rating (anti-snap euro cylinders). The Police-preferred specification for front doors is: a TS007:2012 3-star anti-snap cylinder, a BS3621 mortice deadlock, a security strike plate with 100mm screws, and hinge bolts on the hinge side. Brands meeting these standards include Ultion, Mul-T-Lock MT5+, Yale Superior, and ABS Masters.",
  },
  {
    id: "faq-43",
    category: "Security",
    question: "Which lock brands are best for UK homes?",
    answer:
      "For anti-snap euro cylinders, the independently tested leaders are: Ultion (Brisant Secure) — Which? Best Buy and Sold Secure Diamond; Mul-T-Lock MT5+ — Sold Secure Diamond, excellent pick and drill resistance; Yale Superior — TS007 3-star, widely available and insurance-approved; ABS Masters — strong pick resistance, good value. For five-lever mortice deadlocks: Chubb 3G114, ERA Fortress, and Yale BS3621 are all solid choices. Avoid unbranded or very cheap cylinders sold online — they often claim ratings they do not hold.",
  },
  {
    id: "faq-44",
    category: "Security",
    question: "What are the signs of a bad or failing lock?",
    answer:
      "Key indicators that a lock needs attention: (1) the key requires significant force to turn — pin stack wear or internal corrosion; (2) the key is difficult to insert or remove — worn keyway or deformed pins; (3) the cylinder rotates slightly before the key engages the cam — anti-rotation collar failure, common after attempted snapping; (4) fresh scratches around the keyway or cylinder face — possible picking or bump key attempt; (5) the cylinder is visibly loose in the door — collar damaged, potentially from a snapping attempt; (6) the bolt does not fully extend or retract — cam wear or alignment issue. Any of these warrant inspection before relying on the lock for security.",
  },
  // Automotive (extended)
  {
    id: "faq-45",
    category: "Automotive",
    question: "Is it cheaper to use a locksmith or a car dealer for key replacement?",
    answer:
      "In most cases, a locksmith is significantly cheaper and faster. Main dealers charge £200–£600+ for a replacement transponder key including programming, and typically require the vehicle to be booked in and left for a day. A mobile automotive locksmith can attend your location, cut and program a replacement key on-site, and complete the job in 30–90 minutes for £150–£400 depending on the vehicle. The exception is certain luxury or specialist vehicles where manufacturer-level dealer tools are the only option for programming — a good locksmith will tell you honestly if this is the case rather than attempting the job.",
  },
  // Lock Knowledge (new category)
  {
    id: "faq-46",
    category: "Lock Knowledge",
    question: "What is key bumping?",
    answer:
      "Key bumping is an attack technique that exploits the pin tumbler mechanism used in most standard cylinder locks. A bump key (cut to the maximum depth on every cut) is inserted into the target lock and struck sharply while applying rotational tension. The impact momentarily separates the driver and key pins, allowing the cylinder to rotate. It takes seconds with practice and leaves minimal visible evidence. The defence is a cylinder with anti-bump features — quality anti-snap cylinders such as Ultion, Mul-T-Lock MT5+ and Yale Superior also incorporate anti-bump design. Standard cylinders offer no resistance to bumping.",
  },
  {
    id: "faq-47",
    category: "Lock Knowledge",
    question: "What types of keys cannot be cut at a standard key cutter?",
    answer:
      "Several key types require specialist equipment or authorisation to duplicate: (1) restricted profile keys (Mul-T-Lock MT5+, Ultion, Medeco) — the key profile is patented and blanks are only available to authorised distributors; duplication requires proof of ownership; (2) transponder car keys — the chip must be programmed to the vehicle's ECU, requiring diagnostic equipment; (3) Abloy disc-detainer keys — require specialist machinery not available at high-street key bars; (4) keys marked 'Do Not Duplicate' — while not legally enforceable in the UK, responsible key cutters will decline. For restricted key systems, this controlled duplication is a core security feature.",
  },
  {
    id: "faq-48",
    category: "Lock Knowledge",
    question: "What keys are not allowed to be copied in the UK?",
    answer:
      "In the UK, there is no law preventing the copying of most keys — including keys marked 'Do Not Copy' or 'Do Not Duplicate'. However, keys for restricted profile cylinders (Ultion, Mul-T-Lock MT5+, ABS Masters) are protected by patent: the blanks are not commercially available, so duplication without the manufacturer's authorisation card is practically impossible rather than legally prohibited. Keys to certain public infrastructure (Royal Mail, utility companies, London Underground) are protected under specific legislation. For home security, the practical protection comes from fitting a restricted-key cylinder, not from relying on a 'Do Not Copy' stamp.",
  },
  {
    id: "faq-49",
    category: "Lock Knowledge",
    question: "Are skeleton keys illegal to own in the UK?",
    answer:
      "Possessing skeleton keys or lock picks is not automatically illegal in England and Wales. The relevant offence under the Theft Act 1968 (Section 25) is 'going equipped' — carrying implements with intent to commit burglary. Mere possession without criminal intent is not an offence. However, if you are found with lock picks near a property you have no legitimate reason to be at, this can evidence intent. Professional locksmiths carry picks lawfully as tools of their trade. For the public, there is no general prohibition on owning them — but carrying them in circumstances suggesting criminal intent creates legal exposure.",
  },
  {
    id: "faq-50",
    category: "Lock Knowledge",
    question: "What is the most pick-resistant lock available?",
    answer:
      "The Abloy Protec2 (disc-detainer mechanism) has never been successfully picked in a competitive setting and is widely regarded as the most pick-resistant cylinder available. The Medeco Biaxial and Mul-T-Lock MT5+ are also exceptionally resistant to picking and are Sold Secure Diamond rated. For UK residential use, the Ultion and Mul-T-Lock MT5+ offer the strongest practical combination of pick resistance, drill resistance, and anti-snap protection within a euro cylinder format compatible with standard UPVC and composite doors.",
  },
  {
    id: "faq-51",
    category: "Lock Knowledge",
    question: "What locks can locksmiths not open?",
    answer:
      "A skilled locksmith can open the vast majority of residential and commercial locks non-destructively, including most high-security cylinders given sufficient time. In practice, some locks are highly resistant to non-destructive entry: Abloy Protec2 (disc-detainer), high-security Medeco cylinders, and correctly fitted Mul-T-Lock MT5+ cylinders with hardened steel bars. For these, destructive entry (drilling) is sometimes the only option — though this remains rare in residential lockouts. High-security safes with certain attack-resistant mechanisms (relockers, glass re-lockers) are beyond standard locksmith capabilities and require specialist safe technicians.",
  },
  {
    id: "faq-52",
    category: "Lock Knowledge",
    question: "What is a monkey tail bolt?",
    answer:
      "A monkey tail bolt (sometimes called a monkey tail espagnolette bolt) is a surface-mounted door bolt with a distinctive curved or scrolled handle at the top, traditionally used on cottage-style or stable-type doors — particularly bottom half-doors. The handle loops down to allow operation with a single finger or knuckle. They are common on wooden stable doors, bi-fold doors, and some period properties in South London conservation areas. For security, they should be used in addition to a key-operated lock rather than as a standalone security measure.",
  },
  {
    id: "faq-53",
    category: "Lock Knowledge",
    question: "Why do people put a rubber band on a door handle?",
    answer:
      "The rubber band trick loops a band around both inside and outside handles, running across the latch tongue. This keeps the latch bolt retracted so the door can be pushed open without turning the handle — useful when carrying items with both hands. From a security perspective, it is only relevant to spring latches (yale-type nightlatches) — deadbolts, multipoint locks, and mortice locks are completely unaffected. If your door relies solely on a latch (no deadbolt), someone outside could potentially use this method to prevent the latch re-engaging. Fitting a deadbolt or five-lever mortice lock removes any latch-based vulnerability entirely.",
  },
  {
    id: "faq-54",
    category: "Lock Knowledge",
    question: "What services does a professional locksmith provide beyond lockouts?",
    answer:
      "Beyond emergency lockouts, a professional locksmith provides: lock installation and security upgrades (anti-snap cylinders, BS3621 deadlocks, window locks); UPVC and composite door mechanism repair and gearbox replacement; burglary repair, door frame reinforcement, and emergency boarding; automotive services including car lockout, key cutting, and transponder programming; commercial services including master key systems, access control, and restricted cylinders; smart lock installation and configuration; security surveys and post-break-in assessments. TrustLock offers all of these services across South London, 24 hours a day.",
  },
  // Pricing (People Also Ask additions)
  {
    id: "faq-55",
    category: "Pricing",
    question: "Why are emergency locksmiths so expensive?",
    answer:
      "Emergency locksmith pricing reflects several unavoidable costs: maintaining 24/7 availability means a locksmith cannot batch jobs efficiently — every emergency call requires immediate travel regardless of time, traffic, or other bookings. A fully stocked van carrying cylinders, gearboxes, and equipment for dozens of door types is expensive to maintain. Training, insurance, and DBS checks are ongoing overheads. Nationally advertised 'emergency locksmiths' are often call centres dispatching sub-contractors with a significant mark-up built in. TrustLock charges a consistent rate at all hours — no night surcharge, no weekend premium — because we operate directly from SE22 without a call-centre layer. Emergency lockout pricing starts from £65.",
  },
  {
    id: "faq-56",
    category: "Pricing",
    question: "Can I get my locks changed for free in the UK?",
    answer:
      "Yes — in specific circumstances. (1) Home insurance: if your keys are stolen or lost in a burglary, most home insurance policies cover lock replacement as part of a claim, subject to your excess. (2) Council schemes: some London boroughs operate free or subsidised lock change schemes for elderly or vulnerable residents — contact your local council housing team. (3) Domestic abuse support: organisations including Refuge and Women's Aid can arrange emergency lock changes for survivors leaving dangerous situations. (4) New tenancy: landlords are legally responsible for ensuring locks are functional — if a lock is broken on a rented property, the landlord must replace it at no cost to the tenant. Outside these circumstances, professional supply-and-fit starts from £55.",
  },
  {
    id: "faq-57",
    category: "Pricing",
    question: "How much does it cost to open a safe?",
    answer:
      "Safe opening in South London typically costs £100–£400 depending on safe type, age, and whether non-destructive entry is possible. Standard relocking safes (forgotten combination, dead battery on electronic lock) can often be opened non-destructively for £100–£200. Fire safes and older mechanical combination safes require more time — typically £150–£250. High-security safes with anti-attack hardplates, glass re-lockers, or multiple bolt relockers may require specialist safe engineers and destructive entry, costing £300–£500+. TrustLock handles standard residential safe openings across SE22 and South London — for complex high-security safes, we advise on specialist referral.",
  },
  // General (People Also Ask additions)
  {
    id: "faq-58",
    category: "General",
    question: "How do you find a reliable locksmith?",
    answer:
      "The most reliable indicators: (1) Master Locksmiths Association (MLA) approved — the MLA vets members' identity, qualifications, and carries out undercover assessments; (2) Checkatrade or Which? Trusted Traders verified — these schemes independently confirm the tradesperson's identity and that reviews are from genuine customers; (3) local address — a locksmith with a verifiable physical address (not just a mobile number) is accountable; (4) fixed quote on the phone before travelling — any reputable locksmith can quote a firm price for standard jobs; (5) asks to see ID and proof of address before starting work — this is best practice, not an obstacle; (6) Google reviews with significant volume — 4.8+ from 50+ reviews carries weight. TrustLock is based at 46 Grove Vale SE22 8DY, Checkatrade verified, and gives fixed quotes before attendance.",
  },
  // Automotive (People Also Ask additions)
  {
    id: "faq-59",
    category: "Automotive",
    question: "Will a car fail its MOT if the central locking is not working?",
    answer:
      "Central locking failure alone is not an MOT failure point. The MOT test only covers safety-critical systems, and central locking is not one of them. However, related issues can cause MOT failure: a door that cannot be opened from the inside (a failed interior handle or jammed mechanism) is an MOT failure, as is a door that does not close and latch securely. If your central locking failure is accompanied by any door that won't open or close properly, those secondary issues would fail. For isolated central locking diagnosis and repair — remotes, actuators, or key fob programming — an automotive locksmith can resolve these without a main dealer visit.",
  },
  // Lock Knowledge (People Also Ask additions)
  {
    id: "faq-60",
    category: "Lock Knowledge",
    question: "What keys can Timpson cut?",
    answer:
      "Timpson and similar high-street key bars can cut standard Yale-profile keys, basic mortice keys (flat/corrugated profiles), and some standard car keys without transponder chips. They cannot cut: restricted profile keys (Ultion, Mul-T-Lock MT5+, ABS Masters) — the blanks are not available to high-street retailers; transponder car keys requiring ECU programming; Abloy disc-detainer keys; high-security keys with patents on blank supply. For anything beyond a straightforward duplicate of a standard key, a professional locksmith is required. If your key is marked with a brand name like Ultion, Mul-T-Lock, or Medeco, assume it cannot be high-street cut.",
  },
  {
    id: "faq-61",
    category: "Lock Knowledge",
    question: "What is the hardest lock to cut through?",
    answer:
      "Resistance to cutting depends on the attack tool. For bolt cutters: the Abloy Protec padlock, Squire SS100CS, and Abus Granit Plus 37/80 use hardened boron steel shackles that defeat standard bolt cutters. For angle grinders: hardened steel anti-cut shrouds and close-shackle designs where the cutting disc cannot gain purchase. For door locks: a hardened anti-drill steel plate behind the cylinder face and a hardened steel lock guard (Mul-T-Lock or similar) over the cylinder body prevent rotary cutting tools from reaching the mechanism. Fitting a cylinder guard is the most practical anti-cut upgrade for a domestic door.",
  },
  {
    id: "faq-62",
    category: "Security",
    question: "What kind of door lock is most secure?",
    answer:
      "For a front door in the UK, the most secure configuration is: a TS007:2012 3-star anti-snap euro cylinder (Ultion, Mul-T-Lock MT5+, or Yale Superior) combined with a BS3621:2007 five-lever mortice deadlock, a security-grade box strike plate fixed with 100mm screws into the structural masonry, and hinge bolts on the hinge side. No single lock provides complete security — it is the combination of cylinder attack resistance, kick-in resistance at the keep, and hinge reinforcement that matters. For UPVC doors where a mortice lock cannot be fitted, a high-security multipoint mechanism with a TS007 cylinder is the equivalent standard.",
  },
];

export const faqCategories = [...new Set(faqs.map((f) => f.category))];

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter((f) => f.category === category);
}

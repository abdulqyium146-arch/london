export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  heroTagline: string;
  icon: string;
  image: string;
  emergencyService: boolean;
  priceFrom: string;
  responseTime: string;
  features: string[];
  benefits: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  emergencyScenarios: string[];
  faqs: { question: string; answer: string }[];
  content: {
    section1: { heading: string; body: string };
    section2: { heading: string; body: string };
    section3: { heading: string; body: string };
  };
  relatedServices: string[];
  keywords: string[];
}

export const services: Service[] = [
  {
    slug: "emergency-locksmith",
    title: "Emergency Locksmith Dulwich",
    shortTitle: "Emergency Locksmith",
    metaTitle: "Emergency Locksmith Dulwich | 30-Min Response – TrustLock",
    metaDescription:
      "Locked out in Dulwich or South London? TrustLock's emergency locksmiths reach most SE22 addresses within 30 minutes. Non-destructive entry, fixed price, available 24/7. Call 07984 547185.",
    headline: "Emergency Locksmith in Dulwich — Here in 30 Minutes",
    heroTagline: "Locked out? We're already on our way.",
    intro:
      "Being locked out of your home is one of those situations nobody plans for — and it always seems to happen at the worst possible moment. We've resolved more than 2,500 lockouts across Dulwich, East Dulwich, Peckham, Camberwell, Herne Hill and Brixton since 2014. Whether you've snapped a key in the cylinder, lost your keys entirely, or come home to a lock that simply won't cooperate, our emergency locksmiths aim to reach you within 30 minutes and open the door without causing damage wherever humanly possible.",
    icon: "AlertCircle",
    image: "/images/services/emergency-locksmith.jpg",
    emergencyService: true,
    priceFrom: "£65",
    responseTime: "30 minutes",
    features: [
      "Non-destructive picking and bypass techniques",
      "All cylinder types — Yale, Chubb, ERA, Mul-T-Lock, Ultion",
      "UPVC multipoint and composite door lockouts",
      "Residential and commercial call-outs",
      "SE22, SE21, SE15, SE5, SE24, SW2 and SE1 coverage",
      "Fixed price confirmed before we touch anything",
      "DBS-checked, fully insured locksmiths",
    ],
    benefits: [
      {
        title: "Non-Destructive Entry First",
        description:
          "We carry professional Single Point Entry (SPE) tools, lock picks and bypass equipment so we try every non-destructive technique before considering a drill. Over 90% of our lockouts are resolved without damage to the lock or door.",
      },
      {
        title: "Fixed Price, No Surprises",
        description:
          "We quote a firm price on the phone before we arrive and again before we start work. The number we give you is the number on the invoice — no hidden call-out surcharges added at the end.",
      },
      {
        title: "Experienced, Local Locksmiths",
        description:
          "Every engineer has at least five years of hands-on experience and lives or works in South London. We know the streets, the door types — Victorian terraces, Edwardian flats, 1980s UPVC — and the locks common to this area.",
      },
      {
        title: "Every Lock Type Covered",
        description:
          "Standard Yale night latches, five-lever Chubb mortice deadlocks, ERA multipoint UPVC cylinders, Mul-T-Lock MT5+ high-security cylinders, composite door mechanisms — we carry the tools and parts for all of them.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Call and Confirm",
        description:
          "Ring 07984 547185. We'll ask your address, the door type, and what's happened. This takes about 90 seconds and lets us bring exactly the right equipment first time.",
      },
      {
        step: 2,
        title: "We Arrive — Usually Within 30 Minutes",
        description:
          "Our nearest available locksmith heads directly to you. We'll send a text when we're ten minutes away. No vague arrival windows.",
      },
      {
        step: 3,
        title: "Non-Destructive Entry",
        description:
          "We assess the lock, choose the least invasive technique — picking, manipulation, decoding or bypass — and work carefully. We explain what we're doing throughout so you're never left wondering.",
      },
      {
        step: 4,
        title: "Security Check and Advice",
        description:
          "Once you're back inside, we inspect the lock for any damage or vulnerabilities. If a repair or upgrade is needed, we'll explain why, quote on the spot, and can carry out the work immediately if you'd like.",
      },
    ],
    emergencyScenarios: [
      "Front door locked with keys left inside",
      "Key snapped inside the euro cylinder",
      "Lost or stolen house keys — lock change needed",
      "UPVC multipoint mechanism seized with door closed",
      "Night latch jammed — can't turn from either side",
      "Locked out of a rental property between tenancies",
      "Business locked out before the morning shift",
    ],
    faqs: [
      {
        question: "How quickly can you reach me in Dulwich?",
        answer:
          "TrustLock reaches most Dulwich addresses (SE22, SE21) within 30 minutes of your call. For neighbouring areas like Peckham (SE15), Camberwell (SE5) and Herne Hill (SE24), allow up to 40 minutes. We'll give you a specific time when you call.",
      },
      {
        question: "Will you damage my lock getting in?",
        answer:
          "Rarely. More than 90% of our lockouts are resolved non-destructively using picking, manipulation or bypass tools. Drilling is only used when a high-security anti-drill cylinder physically cannot be bypassed — and we'll always explain why before doing it.",
      },
      {
        question: "How much does an emergency locksmith cost in Dulwich?",
        answer:
          "Emergency lockouts start from £65 — 24 hours a day, 7 days a week. Lock replacement on the same visit starts from an additional £55 depending on the cylinder required. We confirm the exact price before starting.",
      },
      {
        question: "Do you operate on weekends and bank holidays?",
        answer:
          "Yes — 24 hours a day, every day including bank holidays, at the same rates. There are no night, weekend or bank holiday surcharges.",
      },
      {
        question: "Can you replace the lock on the same visit?",
        answer:
          "Yes. Our vans carry anti-snap euro cylinders in 35mm, 40mm, 45mm, 50mm and 55mm sizes, plus common night latch and mortice deadlock cylinders. Most replacement jobs are completed in the same visit.",
      },
    ],
    content: {
      section1: {
        heading: "What Actually Happens When You Call an Emergency Locksmith",
        body: "TrustLock is a Dulwich-based locksmith service that has been responding to emergency lockouts across SE22, SE21, SE15, SE5, SE24, SW2 and SE1 since 2014. When you call, we take three key details — your address, the door type, and what's happened — then dispatch the nearest available engineer. Most Dulwich calls receive a 30-minute arrival.\n\nOur engineers carry professional-grade SPE (Single Point Entry) tools, tension wrenches, pick sets, and bypass equipment for common UPVC multipoint mechanisms. The vast majority of lockouts — including seized night latches, failed UPVC mechanisms, and standard mortice locks — are resolved without damage. For high-security cylinders rated to TS007:2012 three-star, we use decoding techniques before considering any destructive method.",
      },
      section2: {
        heading: "Why We Don't Drill First",
        body: "Some locksmiths drill locks as their default approach. It's faster for them, but it adds unnecessary cost for you — a drilled cylinder means a mandatory replacement on top of the call-out fee. We invest in ongoing training and proper bypass tooling because resolving a lockout non-destructively is always the better outcome for the customer.\n\nWhen a lock genuinely cannot be opened any other way — because anti-drill hardened steel inserts have engaged, or a high-security Mul-T-Lock MT5+ cylinder is involved — we'll explain precisely why before touching anything. You make the informed decision; we carry it out.",
      },
      section3: {
        heading: "Insurance-Compliant Documentation",
        body: "TrustLock locksmiths carry £2 million public liability insurance and work to British Standard BS3621:2007+A2:2012 practices. If your lockout followed a break-in attempt or you need to claim through home insurance, we provide a written job report detailing the cause of the lockout, the entry method used, and any locks replaced. This documentation is accepted by all major UK home insurers.\n\nAny replacement cylinder we fit during an emergency visit can be upgraded to TS007:2012 three-star anti-snap specification — the grade recommended by Secured by Design and required by many insurance policies in South London.",
      },
    },
    relatedServices: [
      "lock-repair",
      "lock-installation",
      "burglary-repair",
      "upvc-door-lock-repair",
    ],
    keywords: [
      "emergency locksmith Dulwich",
      "locksmith near me SE22",
      "locked out Dulwich",
      "emergency locksmith South London",
      "locksmith SE22",
      "24 hour locksmith Dulwich",
      "locked out SE21",
    ],
  },
  {
    slug: "residential-locksmith",
    title: "Residential Locksmith Dulwich",
    shortTitle: "Residential Locksmith",
    metaTitle: "Residential Locksmith Dulwich | BS3621 & Anti-Snap – TrustLock",
    metaDescription:
      "Expert residential locksmith in Dulwich since 2014. BS3621 insurance-approved locks, anti-snap cylinder upgrades, new property rekeying and home security assessments across SE22 and South London.",
    headline: "Residential Locksmith in Dulwich — Protecting South London Homes",
    heroTagline: "Securing Dulwich homes since 2014.",
    intro:
      "Your home security is only as strong as the weakest lock on your weakest door. We've been fitting, upgrading and repairing locks in Dulwich's Victorian and Edwardian terraces, 1970s purpose-built flats and modern new-builds since 2014 — and we've seen every type of vulnerability these properties can have. Whether you're moving into a new property on Grove Vale, upgrading locks to satisfy your home insurance after a move to East Dulwich, or simply want to know your front door is as secure as it should be, our residential locksmith service gives you honest advice and quality work without the upsell.",
    icon: "Home",
    image: "/images/services/residential-locksmith.jpg",
    emergencyService: false,
    priceFrom: "£55",
    responseTime: "Same day",
    features: [
      "BS3621:2007+A2:2012 insurance-approved mortice deadlocks",
      "TS007:2012 three-star anti-snap cylinder upgrades",
      "New property rekeying and cylinder replacement",
      "Key cutting and duplication — most blanks in stock",
      "Home security vulnerability assessment",
      "All door types: timber, UPVC, composite, aluminium",
      "Dulwich, East Dulwich, Herne Hill and surrounding SE postcodes",
    ],
    benefits: [
      {
        title: "Locks Your Insurance Will Accept",
        description:
          "We fit BS3621:2007+A2:2012 certified five-lever mortice deadlocks and TS007 three-star cylinders. These meet the requirements written into most UK home insurance policies for external door security.",
      },
      {
        title: "Anti-Snap Protection as Standard",
        description:
          "Cylinder snapping is responsible for the majority of lock-related burglaries in South London. We fit Ultion, Yale Platinum, ABS Master and ERA Fortress anti-snap cylinders — all rated TS007:2012 — as a default recommendation on all external doors.",
      },
      {
        title: "Peace of Mind When You Move In",
        description:
          "When you buy or rent a property in Dulwich, the number of key copies in circulation is unknown. Previous owners, estate agents, contractors, managing agents — all may hold working keys. We rekey or replace cylinders on the day you ask, giving you complete certainty from that point forward.",
      },
      {
        title: "Genuinely Honest Advice",
        description:
          "We assess your current setup and recommend only what's genuinely needed. If your locks are in good condition and the right grade for your insurance policy, we'll tell you that — even if it means we leave without a sale.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Security Walk-Round",
        description:
          "We assess every external door and accessible ground-floor window, checking lock grade, cylinder type, door condition and frame integrity. We note any vulnerabilities and rate them by risk level.",
      },
      {
        step: 2,
        title: "Plain-Language Recommendations",
        description:
          "We explain exactly what we found, what it means, and what we'd recommend — with options at different price points. No pressure, no technical jargon, no exaggerated risk claims.",
      },
      {
        step: 3,
        title: "Professional Installation",
        description:
          "Every lock is fitted to manufacturer specification and British Standard requirements. Cylinders are sized precisely for the door thickness, strike plates are properly morticed, and all fixings are to the correct torque.",
      },
      {
        step: 4,
        title: "Keys and Documentation",
        description:
          "You receive all keys cut from the new lock, an invoice listing parts and labour, and — where relevant — a certificate confirming the installed lock grade for insurance purposes.",
      },
    ],
    emergencyScenarios: [
      "Moving into a new Dulwich property and unsure how many keys exist",
      "Lock damaged after a break-in attempt on Grove Vale or Lordship Lane",
      "Lost or stolen house keys — full cylinder replacement needed",
      "Home insurance requiring BS3621 lock to validate policy",
      "Landlord replacing cylinders between tenancies in SE22",
      "Old lock failing — key won't turn smoothly any more",
    ],
    faqs: [
      {
        question: "Do you fit British Standard BS3621 locks?",
        answer:
          "Yes. We stock BS3621:2007+A2:2012 certified five-lever mortice deadlocks from Yale, ERA and Chubb. We'll advise on the correct backset and case size for your specific door before ordering anything.",
      },
      {
        question: "What is an anti-snap cylinder and why do I need one?",
        answer:
          "An anti-snap cylinder (rated TS007:2012) is engineered to resist cylinder snapping — the most common lock-attack method in London. When the outer section is attacked, it snaps at a designed break point that leaves the internal mechanism fully intact and the door secure. We fit Ultion, Yale Platinum and ABS cylinders, all independently tested to this standard.",
      },
      {
        question: "Can you cut spare keys during the same visit?",
        answer:
          "Yes. We carry key-cutting equipment and blanks for the most common lock profiles used in South London properties, including Yale 1A, Chubb 3K78, ERA 5-lever and standard euro cylinders. Most spares are cut in under five minutes.",
      },
      {
        question: "How much does it cost to change locks in Dulwich?",
        answer:
          "A standard anti-snap euro cylinder replacement (supply and fit) starts from £55. A BS3621 five-lever mortice deadlock installation starts from £85 including the lock. We confirm the exact price on the phone before visiting.",
      },
    ],
    content: {
      section1: {
        heading: "The Lock Vulnerability Most Dulwich Homeowners Don't Know About",
        body: "The majority of homes in Dulwich — particularly the Victorian and Edwardian terraces on roads like Herne Hill Road, Lordship Lane and Croxted Road — were built with wooden doors that have been fitted with euro cylinder locks over the past 30 years. A standard euro cylinder can be snapped using a pair of mole grips or a modified screwdriver in under 20 seconds. This technique, known as cylinder snapping, accounts for a significant proportion of residential burglaries across South London.\n\nThe fix is straightforward: replace the standard cylinder with a TS007:2012-rated anti-snap variant — either an Ultion, Yale Platinum, ABS Master or ERA Fortress. Anti-snap cylinders are engineered with a deliberate break point that sits outside the door; if forced, the outer section snaps away cleanly leaving the inner mechanism — and your lock — completely intact. The upgrade costs from £55 fitted and is one of the most effective security investments you can make.",
      },
      section2: {
        heading: "Fitting Locks in Dulwich's Period Properties",
        body: "Victorian and Edwardian terraces present specific challenges that a locksmith who only works on modern properties may not anticipate. Door frames expand and contract with South London's weather, making precise door alignment critical for multipoint UPVC mechanisms. Older timber doors may have shrunk or warped, affecting strike plate alignment for mortice locks. And historic properties often have non-standard door thicknesses that require correctly-sized cylinders rather than off-the-shelf standard lengths.\n\nWe've worked on Dulwich's housing stock for over a decade. We measure carefully, carry cylinders in the full range of common sizes (35mm to 65mm), and adjust strike plates and keep boxes precisely. The result is a lock that operates smoothly and engages fully — which matters as much for day-to-day use as it does for security.",
      },
      section3: {
        heading: "Moving In? Change the Cylinders on Day One",
        body: "When you move into a property in Dulwich, East Dulwich or anywhere in SE22 or SE21, the safest assumption is that multiple key copies are in circulation. Previous owners, their friends and family, estate agents who accompanied viewings, contractors who did work during the sale process — the list can be longer than you'd expect. Rekeying or replacing the door cylinders is a small cost (typically £55–£90 per door) that gives you absolute certainty that only the keys in your hand will work.\n\nTrustLock can carry out a full property rekey on the same day you take possession. We also offer a new homeowner security package that includes cylinder replacement, a security assessment of all external entry points, and written documentation for your home insurance provider.",
      },
    },
    relatedServices: [
      "emergency-locksmith",
      "lock-installation",
      "smart-lock-installation",
      "upvc-door-lock-repair",
    ],
    keywords: [
      "residential locksmith Dulwich",
      "home locksmith SE22",
      "lock change Dulwich",
      "anti-snap lock Dulwich",
      "BS3621 lock Dulwich",
      "new locks fitted SE22",
      "lock upgrade South London",
    ],
  },
  {
    slug: "commercial-locksmith",
    title: "Commercial Locksmith Dulwich",
    shortTitle: "Commercial Locksmith",
    metaTitle: "Commercial Locksmith Dulwich | Master Keys & Access – TrustLock",
    metaDescription:
      "Professional commercial locksmith serving Dulwich businesses since 2014. Master key systems, access control, high-security lock installation and emergency business lockouts across South London.",
    headline: "Commercial Locksmith for Dulwich Businesses — Access, Security, Control",
    heroTagline: "Securing South London businesses, professionally.",
    intro:
      "Running a business in Dulwich — whether it's a shop on Lordship Lane, a clinic on Herne Hill Road, or a warehouse off Crystal Palace Road — means your security needs are fundamentally different from a residential property. Keys get lost, staff leave, access needs to be managed across multiple people and areas, and a lock failure at the wrong moment can cost you real money. We've been providing commercial locksmith services to South London businesses since 2014, and we understand the difference between a locksmith who does the occasional commercial job and one who genuinely understands commercial security requirements.",
    icon: "Building2",
    image: "/images/services/commercial-locksmith.jpg",
    emergencyService: true,
    priceFrom: "£85",
    responseTime: "Same day",
    features: [
      "Master key hierarchy design and installation",
      "High-security commercial cylinder fitting (Mul-T-Lock, ASSA Abloy)",
      "Electronic access control and fob entry systems",
      "Emergency business lockout response",
      "Post-staff-departure cylinder changes",
      "Multi-site key management solutions",
      "Commercial security compliance advice",
    ],
    benefits: [
      {
        title: "Master Key Systems That Scale",
        description:
          "We design master key hierarchies — from two-level (master + individual) to full grandmaster systems with sub-master tiers — that give different staff appropriate access without key proliferation. Every key cut is registered and controlled.",
      },
      {
        title: "Access Control Beyond Physical Keys",
        description:
          "From standalone keypad entry to networked fob access control with audit logs, we install and configure systems that remove the key management headache entirely and give you a record of who accessed what and when.",
      },
      {
        title: "Minimal Disruption to Your Business",
        description:
          "We schedule commercial work around your operating hours — early morning before opening, during quiet periods, or across a weekend. We confirm arrival times, work efficiently, and clean up after ourselves.",
      },
      {
        title: "Commercial Security Compliance",
        description:
          "We advise on lock grades relevant to your commercial insurance policy, Secured by Design requirements, and any industry-specific standards applicable to your sector. Documentation is provided for compliance purposes.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Site Survey",
        description:
          "We visit your premises to assess all entry points, map the access requirements by role (who needs access to what), and evaluate your current security hardware. This takes 30–60 minutes depending on premises size.",
      },
      {
        step: 2,
        title: "Security and Access Plan",
        description:
          "We produce a written proposal covering recommended works, specific product specifications, key control plan, and fixed pricing. No obligation to proceed.",
      },
      {
        step: 3,
        title: "Professional Installation",
        description:
          "All works are completed by our experienced commercial team. We work methodically through the agreed plan, keep you informed throughout, and test every lock and access point before signing off.",
      },
      {
        step: 4,
        title: "Key Register and Ongoing Support",
        description:
          "We provide a full key register documenting every key issued. We remain available for additions to the system, key cutting, access code changes, and follow-up work as your business evolves.",
      },
    ],
    emergencyScenarios: [
      "Business locked out before the morning shift on Lordship Lane",
      "Former employee retained building keys after leaving",
      "Lock mechanism failed overnight — premises unsecured",
      "Break-in damage — urgent lock replacement needed",
      "Keypad battery died — staff can't access the premises",
      "Multi-site business needing coordinated security upgrade",
    ],
    faqs: [
      {
        question: "Can you design and install a master key system for our office?",
        answer:
          "Yes. We design master key hierarchies from simple two-level systems (one master key for management, individual keys for staff) up to grandmaster systems with department-level sub-masters. Every key cut is registered; the system is patented to prevent unauthorised duplication.",
      },
      {
        question: "A member of staff left without returning their keys — what should I do?",
        answer:
          "Call us the same day. We can rekey the affected cylinders so that only the new key set works, invalidating any copies the former employee may have. For high-security patented key systems, rekeying may not be possible and cylinder replacement will be needed — we'll advise on the right approach for your specific system.",
      },
      {
        question: "Do you work with commercial shutters and roller doors?",
        answer:
          "We handle lock cylinders and locking mechanisms on commercial shutters. For motorised shutter repairs, we partner with specialist shutter engineers and can coordinate the entire job from a single point of contact.",
      },
      {
        question: "Can you help after a break-in at our business premises?",
        answer:
          "Yes — this is treated as an emergency. We replace damaged locks, reinforce entry points, arrange boarding where needed, and provide written documentation for your business insurance claim. We typically reach South London commercial premises within an hour of your call.",
      },
    ],
    content: {
      section1: {
        heading: "Commercial Security Is Different — Here's Why It Matters",
        body: "TrustLock provides commercial locksmith services to independent retailers, professional offices, medical and dental practices, letting agencies, gyms and light industrial premises across Dulwich, East Dulwich, Camberwell, Peckham and Southwark. The security challenge for a business is categorically different from a home: there are multiple keyholders, staff turnover is a constant risk, operating hours create vulnerability windows, and the consequences of a security failure — theft of stock, equipment or data — are financial as well as personal.\n\nWe take time to understand how your business actually operates before recommending anything. The goal is always security that works seamlessly with your day-to-day rather than creating operational friction.",
      },
      section2: {
        heading: "Staff Departures Are the Most Overlooked Security Risk",
        body: "The most common commercial security call we receive is from business owners who've just had a difficult parting with an employee and suddenly realised that person still has a working key. For businesses using standard lock cylinders, the only reliable solution is rekeying — replacing the cylinders so existing keys no longer work.\n\nFor businesses with patented key systems (Mul-T-Lock MT5+, ASSA Abloy Cliq, or similar), the advantage is that keys cannot be copied without authorisation, which reduces — though doesn't eliminate — the risk. We advise on the right system for your staff turnover rate, site size and budget, and can install or expand a restricted key system in a single visit.",
      },
      section3: {
        heading: "Electronic Access Control: Fobs, Keypads and Audit Trails",
        body: "Physical key management becomes impractical above around 10 keyholders. When staff numbers grow, when you have multiple shifts, or when you need to manage contractor access alongside permanent staff, electronic access control is the right solution.\n\nWe install standalone and networked access control systems from manufacturers including Paxton, Comelit and Yale. Standalone keypad systems (from around £180 installed) are ideal for smaller premises. Networked fob systems — where access can be granted or revoked remotely and every entry is time-stamped and logged — suit growing businesses managing 20+ users. We configure every system, train the designated administrator, and provide ongoing support for access changes.",
      },
    },
    relatedServices: [
      "emergency-locksmith",
      "smart-lock-installation",
      "lock-installation",
      "burglary-repair",
    ],
    keywords: [
      "commercial locksmith Dulwich",
      "business locksmith South London",
      "master key system South London",
      "access control Dulwich",
      "office locksmith SE22",
      "commercial lock installation SE15",
    ],
  },
  {
    slug: "automotive-locksmith",
    title: "Automotive Locksmith Dulwich",
    shortTitle: "Automotive Locksmith",
    metaTitle: "Automotive Locksmith Dulwich | Car Lockouts & Keys – TrustLock",
    metaDescription:
      "Locked out of your car in Dulwich? TrustLock's automotive locksmiths reach you within 45 minutes. Car lockouts, replacement key cutting, transponder programming across South London.",
    headline: "Automotive Locksmith in Dulwich — Car Lockouts Resolved Fast",
    heroTagline: "Locked out of your car? We'll sort it out.",
    intro:
      "Car lockouts happen at the worst possible moments — outside Dulwich Park, at East Dulwich station, in a supermarket car park before the school run. We respond to automotive lockout and car key emergencies across Dulwich, Peckham, Camberwell, Herne Hill and the wider South London area, reaching most locations within 45 minutes. Whether you've locked the keys inside, broken a blade in the ignition, or lost every copy of your car key, we carry the equipment to resolve most automotive lock problems without a main dealer visit.",
    icon: "Car",
    image: "/images/services/automotive-locksmith.jpg",
    emergencyService: true,
    priceFrom: "£75",
    responseTime: "45 minutes",
    features: [
      "Non-destructive vehicle entry — no broken seals or trim",
      "Car key cutting by key code or key profile",
      "Transponder chip key programming (T5, ID46, ID63, PCF7961)",
      "Remote fob replacement and pairing",
      "Broken key extraction from door and ignition",
      "Most common UK makes and models covered",
      "Mobile service — we come to your vehicle's location",
    ],
    benefits: [
      {
        title: "We Come to Your Vehicle",
        description:
          "No tow truck needed. We come to wherever the vehicle is — home, roadside, car park or petrol forecourt — across Dulwich and South London. Most situations are resolved in under an hour.",
      },
      {
        title: "Significant Saving Over Main Dealer",
        description:
          "Main dealer key replacement can cost £250–£600 and involve days of waiting. We cut and program replacement transponder keys for most common vehicles at a fraction of that price, with same-day availability.",
      },
      {
        title: "Non-Destructive Entry Techniques",
        description:
          "We use slim jim tools, air wedge systems and proprietary opening tools specific to vehicle makes and models. We do not break windows, damage seals or leave marks on door frames.",
      },
      {
        title: "On-Site Transponder Programming",
        description:
          "Modern car keys contain RFID transponder chips (common types include Texas Instruments T5, Philips Crypto ID46, and Megamos ID63) that communicate with the vehicle's immobiliser. We program replacement chips on-site using manufacturer-grade diagnostic equipment.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Tell Us Your Vehicle Details",
        description:
          "Give us your vehicle make, model, year and your current location. This takes 60 seconds and means we bring the correct opening tools and key blanks first time, without a wasted trip.",
      },
      {
        step: 2,
        title: "We Come to You",
        description:
          "Our automotive locksmith heads to your vehicle's exact location. We'll send you an ETA by text and call when we're two minutes away.",
      },
      {
        step: 3,
        title: "Entry and Key Resolution",
        description:
          "We open the vehicle non-destructively, extract any broken key material from locks or ignition, and cut or program a replacement key if required. All work is completed at your location.",
      },
      {
        step: 4,
        title: "Full Function Check",
        description:
          "We test all locks, the ignition, the remote fob and the transponder communication before leaving. You drive away confident everything is working correctly.",
      },
    ],
    emergencyScenarios: [
      "Keys locked inside the car at Dulwich Park or East Dulwich station",
      "Lost all copies of car keys — no spare available",
      "Key blade snapped in door lock or ignition barrel",
      "Remote fob replaced but car won't recognise it",
      "Transponder key not starting the engine",
      "Key stuck in ignition and won't turn or remove",
    ],
    faqs: [
      {
        question: "Can you make a replacement key if I've lost all copies?",
        answer:
          "For most common UK vehicles — Ford, Vauxhall, Volkswagen, BMW, Mercedes, Toyota, Honda, Nissan — yes. We cut a new key from the vehicle's key code (derivable from the VIN) and program the transponder chip to the immobiliser. For some newer vehicles with proximity keys and advanced security, dealer-level programming may be required.",
      },
      {
        question: "Is it cheaper to use an automotive locksmith than a main dealer?",
        answer:
          "Typically significantly cheaper. A main dealer replacement key for a common vehicle can cost £250–£450 and take two to five days. We complete most replacements same-day for £75–£200 depending on vehicle and key type.",
      },
      {
        question: "Do you cover all car makes?",
        answer:
          "We cover the most common UK vehicles including Ford (Focus, Fiesta, Transit), Volkswagen (Golf, Polo, Passat), BMW (1 Series, 3 Series), Mercedes (A, C, E Class), Vauxhall (Astra, Corsa), Toyota, Honda, Nissan and Renault. Call us with your make and model to confirm before we travel.",
      },
      {
        question: "My car key broke in the lock — what happens?",
        answer:
          "We extract the broken blade using specialist extraction hooks designed for vehicle lock barrels — the same principle as a domestic lock extraction, but with vehicle-specific tooling. We then cut a replacement key to the original blade profile. The whole process typically takes 30–45 minutes.",
      },
    ],
    content: {
      section1: {
        heading: "Car Lockouts in Dulwich and South London — We Come to You",
        body: "TrustLock's automotive locksmith service covers car lockouts across SE22, SE21, SE15, SE5, SE24, SW2 and SE1. A car lockout can mean keys locked inside the vehicle, a lost or stolen key set, a broken blade in a door lock, or a key that won't turn in the ignition. In every case, the right approach is a mobile locksmith who comes to the vehicle's location rather than a tow to a garage.\n\nWe use automotive-specific opening tools — air wedge kits, long reach tools and manufacturer-appropriate slim jim devices — that open vehicle doors without causing any damage to seals, trim panels or door frames. Our engineers work cleanly and carefully, and the vehicle is returned to you in exactly the condition we found it.",
      },
      section2: {
        heading: "Replacement Car Keys Without the Dealership Price Tag",
        body: "The most common car key type in the UK today is the transponder key — a cut metal blade combined with an RFID transponder chip encased in a plastic head. When you insert and turn the key, the transponder chip broadcasts a rolling code that the vehicle's immobiliser ECU validates. If the code isn't recognised, the engine won't start even if the blade is cut correctly.\n\nWe carry a range of compatible transponder chips — including the widely-used Texas Instruments T5, Philips Crypto ID46, Megamos ID63 and Hitag2 — and program them to your vehicle's immobiliser using OBD-based programming equipment. This gives you a fully functional replacement key at a fraction of the dealer price and without the multi-day wait.",
      },
      section3: {
        heading: "Broken Key Extraction — Careful and Precise",
        body: "Key blades break inside locks for several reasons: metal fatigue in older keys, the blade was cut from a worn blank, or someone applied excessive force when the lock was stiff. Whatever the cause, the broken piece needs to come out without damaging the lock mechanism — which requires the right tools and a steady hand.\n\nWe use hook-tipped extraction tools that grip the broken section's serrations and draw it outward. For fragments that have been pushed deep into the barrel, we use illuminated inspection cameras to locate the piece before extracting. Once clear, we assess the lock mechanism for damage, then cut a new key from the original blade profile. The process is completed at your location and typically takes 30–50 minutes.",
      },
    },
    relatedServices: [
      "emergency-locksmith",
      "lock-repair",
    ],
    keywords: [
      "automotive locksmith Dulwich",
      "car lockout Dulwich",
      "car key replacement South London",
      "transponder key programming London",
      "locked out of car SE22",
      "replacement car key Dulwich",
    ],
  },
  {
    slug: "lock-repair",
    title: "Lock Repair Dulwich",
    shortTitle: "Lock Repair",
    metaTitle: "Lock Repair Dulwich | Same-Day Lock Repairs – TrustLock",
    metaDescription:
      "Professional lock repair in Dulwich and South London. Stiff cylinders, seized UPVC mechanisms, broken key extraction and gearbox repair. Same-day service across SE22.",
    headline: "Lock Repair in Dulwich — Same-Day Service, Lasting Fixes",
    heroTagline: "Stiff lock? Seized mechanism? Fixed today.",
    intro:
      "A lock that's becoming stiff, a key that needs force to turn, a handle that drops without engaging the bolts — these aren't just annoyances. They're warning signs of a mechanism that's failing, and a complete seizure leaving you locked in or out is often only weeks away. We carry out lock repairs across Dulwich and South London seven days a week, diagnosing the root cause — worn cylinder, failed UPVC gearbox, misaligned door, broken cam follower — and fixing it properly rather than masking the symptom.",
    icon: "Wrench",
    image: "/images/services/lock-repair.jpg",
    emergencyService: false,
    priceFrom: "£55",
    responseTime: "Same day",
    features: [
      "Broken key extraction from cylinder or ignition",
      "Stiff and seized euro cylinder replacement",
      "UPVC multipoint gearbox repair and replacement",
      "Cam and cam follower replacement",
      "Hook bolt and roller cam realignment",
      "Door frame and keep adjustment",
      "All door types — timber, UPVC, composite, steel",
    ],
    benefits: [
      {
        title: "Honest Repair-vs-Replace Assessment",
        description:
          "We tell you plainly whether a repair is worthwhile or whether replacement gives better long-term value. If your mechanism is 12 years old and repeatedly failing, a quality replacement part is usually the better investment.",
      },
      {
        title: "Specialist Extraction and Repair Tools",
        description:
          "Broken key extraction, UPVC gearbox removal and cylinder bypass all require specific tools that general handymen don't carry. We bring the right equipment and get it right the first time.",
      },
      {
        title: "Repairs That Last",
        description:
          "We use quality replacement parts — ERA, Fullex, Avocet, Mila and Fuhr mechanisms, Yale and Ultion cylinders — not cheap copies. A proper fix means you won't be calling us back for the same issue in six months.",
      },
      {
        title: "Same-Day Priority",
        description:
          "A faulty lock is a live security vulnerability. We treat lock repair calls as high priority and aim for same-day attendance across all SE and SW postcodes we cover.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Diagnose the Root Cause",
        description:
          "We test the cylinder, mechanism, handle, cam follower, door alignment and frame condition to identify exactly what's failing — not just the symptom. Stiff locking often has three or four potential causes and treating the wrong one wastes your money.",
      },
      {
        step: 2,
        title: "Quote and Advise",
        description:
          "We give you a fixed price to repair the identified fault, and an honest opinion on whether repair or full replacement is better value given the age and type of the lock.",
      },
      {
        step: 3,
        title: "On-Site Repair",
        description:
          "The repair is completed at your property. For most cylinder, gearbox and extraction jobs we carry the necessary parts. For unusual or discontinued mechanisms we'll source the correct part and return — usually within 24 hours.",
      },
      {
        step: 4,
        title: "Test Under Load",
        description:
          "We test the repaired lock with the door fully closed, engaging all locking points and confirming smooth operation before we leave. If the door alignment has contributed to the failure, we adjust it as part of the repair.",
      },
    ],
    emergencyScenarios: [
      "Key snapped inside the cylinder — door inaccessible",
      "Lock won't turn even with the correct key",
      "UPVC door won't engage all locking points",
      "Lock making grinding or clicking noise when turned",
      "Handle operates but bolts won't extend or retract",
      "Lock stiffening progressively over recent weeks",
    ],
    faqs: [
      {
        question: "Can you remove a snapped key from a lock?",
        answer:
          "Yes. Broken key extraction is one of our most frequent jobs. We use hook-tip and spiral extraction tools to grip and draw the broken blade out without damaging the cylinder's pin stack. We then cut a replacement key to the same profile on-site.",
      },
      {
        question: "My UPVC door won't lock — is it a lock problem or a door problem?",
        answer:
          "Usually both are involved. The most common cause is a failed gearbox combined with slight door misalignment. The gearbox failure is a mechanical lock repair; the misalignment requires hinge and keep adjustment. We address both in the same visit.",
      },
      {
        question: "Is it worth repairing an old lock?",
        answer:
          "It depends on the lock's age, type and cost. If it's a standard euro cylinder over ten years old without anti-snap protection, a new Ultion or Yale Platinum cylinder offers better security and costs only slightly more than a repair. We give you an honest recommendation either way.",
      },
      {
        question: "How much does lock repair cost in Dulwich?",
        answer:
          "Lock repair starts from £55, depending on the fault. Broken key extraction is typically £55–£75. UPVC gearbox replacement starts from £95 including the part. We confirm the exact price after diagnosis, before starting work.",
      },
    ],
    content: {
      section1: {
        heading: "Why a Stiff Lock Is More Than an Inconvenience",
        body: "A lock that requires increasing force to operate is telling you something important: the mechanism is failing. The most common causes are cylinder wear (the pins and driver springs have degraded), UPVC gearbox wear (the cam follower is stripping), door sagging or settlement causing the bolt to bind against the keep, and key wear — an original key cut from a worn blank can gradually deform the cylinder's pin stack.\n\nThe right response depends on the cause. Catching a gearbox failure early typically means a gearbox replacement — a clean, straightforward job. Ignoring it until the mechanism fails completely can mean a lockout at an inconvenient time, additional damage to the door frame, and a more involved repair.",
      },
      section2: {
        heading: "UPVC Multipoint Lock Repairs — What's Actually Failing",
        body: "A UPVC multipoint locking system is significantly more complex than a traditional mortice lock. The central gearbox (sometimes called the central case) drives multiple locking points — hook bolts, roller cams, mushroom cams, and deadbolts — from a single handle movement. Failure modes include gearbox wear (the follower hole that the handle spindle engages strips over time), hook bolt seizure (hooks corrode or deform and won't retract), and cam damage.\n\nWe stock mechanisms from ERA, Fullex, Avocet, Fuhr and Mila — the brands most commonly found in South London properties. Correct part identification matters: installing the wrong mechanism length or spindle size can cause new failures. We identify the correct part by measuring the existing case, not by guessing the brand from memory.",
      },
      section3: {
        heading: "Snapped Key Extraction — What Not to Do First",
        body: "When a key snaps inside a lock cylinder, the instinctive response is often to try to extract it with tweezers, a pin or a knife blade. In most cases this makes things significantly worse — pushing the fragment further into the barrel, widening the key way, or scratching the cylinder face. The correct approach uses tools designed specifically for the job: extraction hooks that engage the serrations on the broken blade and pull rather than push.\n\nWe carry a full extraction kit covering the common UK key profiles — Yale 1A/1A-AL, Chubb 3K78, ERA 5-lever mortice and standard euro cylinder profiles. In the majority of cases the fragment comes out cleanly in under five minutes. We then inspect the cylinder for any secondary damage before cutting a replacement key from the lock's key code.",
      },
    },
    relatedServices: [
      "emergency-locksmith",
      "lock-installation",
      "upvc-door-lock-repair",
    ],
    keywords: [
      "lock repair Dulwich",
      "broken key extraction Dulwich",
      "UPVC lock repair SE22",
      "lock repair South London",
      "snapped key removal Dulwich",
      "gearbox repair SE22",
    ],
  },
  {
    slug: "lock-installation",
    title: "Lock Installation Dulwich",
    shortTitle: "Lock Installation",
    metaTitle: "Lock Installation Dulwich | BS3621 & Anti-Snap Locks – TrustLock",
    metaDescription:
      "Expert lock installation across Dulwich and South London. BS3621 mortice deadlocks, TS007 anti-snap cylinders, UPVC multipoint and smart locks fitted professionally. Call TrustLock.",
    headline: "Professional Lock Installation in Dulwich — Fitted Right, First Time",
    heroTagline: "New locks. Correct size. Properly installed.",
    intro:
      "A lock is only as effective as its installation. A cylinder that's 5mm too long creates a snapping attack lever arm. A deadbolt that doesn't fully engage its strike plate offers only the illusion of security. A mortice case fitted at the wrong height leaves the door structurally weak at the lock point. We've been installing locks in Dulwich and South London properties since 2014 — we understand the standards, the common door types, and the installation details that determine whether a lock actually works as intended.",
    icon: "Lock",
    image: "/images/services/lock-installation.jpg",
    emergencyService: false,
    priceFrom: "£65",
    responseTime: "Same day",
    features: [
      "BS3621:2007+A2:2012 five-lever mortice deadlock installation",
      "TS007:2012 three-star anti-snap cylinder fitting",
      "UPVC multipoint lock and mechanism installation",
      "Composite door lock replacement and upgrade",
      "Smart lock and keypad entry installation",
      "Measurement, alignment and full adjustment included",
      "Restricted and patented key system installation",
    ],
    benefits: [
      {
        title: "Precision Installation Every Time",
        description:
          "Cylinder length is measured to the exact door thickness. Mortice cases are cut to precise dimensions. Strike plates and keeps are properly morticed into the door frame — not surface-mounted. Everything is checked under load before we leave.",
      },
      {
        title: "Trusted Lock Brands",
        description:
          "We supply and fit Yale, ERA, Ultion, Mul-T-Lock, ABS, Avocet and Chubb — UK-tested brands whose products meet or exceed British Standards. We don't fit cheap imported hardware that bypasses independent testing.",
      },
      {
        title: "Insurance Compliance Confirmed",
        description:
          "We check the specific wording of your home insurance schedule where available and install locks that satisfy the stated requirements. We provide written confirmation of the lock grade, brand and standard for your records.",
      },
      {
        title: "Honest Product Guidance",
        description:
          "Not sure whether you need a sash lock, a deadlock, a nightlatch or a multipoint mechanism? We explain the options in plain English, with price differences and security trade-offs clearly stated. You choose based on understanding, not sales pressure.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Door and Frame Assessment",
        description:
          "We assess the door material, thickness, existing hardware, and frame condition. We check the existing mortice dimensions if replacing a lock in-kind, and evaluate whether any frame reinforcement is needed.",
      },
      {
        step: 2,
        title: "Product Recommendation",
        description:
          "We recommend specific products — named brand, model and British Standard rating — with a clear explanation of why each is suitable for your door and security requirements.",
      },
      {
        step: 3,
        title: "Careful Installation",
        description:
          "Installation is carried out to manufacturer specification. Mortice cases are cut precisely, cylinders are correctly sized and set, strike plates are morticed into the frame, and all fixings are tightened to the correct torque.",
      },
      {
        step: 4,
        title: "Key Handover and Testing",
        description:
          "We test the lock with every key cut, confirm smooth operation under door pressure, and hand over all keys with the invoice confirming the lock specification. Documentation for insurance is included where relevant.",
      },
    ],
    emergencyScenarios: [
      "New property requiring fresh lock installation on all external doors",
      "Old mortice lock worn beyond repair — replacement needed",
      "Insurance renewal requiring BS3621 upgrade to maintain cover",
      "Composite door lock worn or damaged — like-for-like replacement",
      "Adding a BS3621 deadlock alongside an existing nightlatch",
    ],
    faqs: [
      {
        question: "What type of lock should I install on my front door?",
        answer:
          "For most Dulwich timber front doors, we recommend a combination of a BS3621:2007+A2:2012 five-lever mortice deadlock and a TS007:2012 three-star anti-snap cylinder nightlatch. This combination satisfies most home insurance requirements and protects against cylinder snapping and lever attacks.",
      },
      {
        question: "Can you install a lock on a composite door?",
        answer:
          "Yes. Composite doors typically use multipoint mechanisms with specific euro cylinder sizes. We identify the correct mechanism for your door profile (common brands include Avocet ABS, Ultion, Yale Platinum) and install it with the correct cylinder length — critical for avoiding an anti-snap vulnerability.",
      },
      {
        question: "How long does lock installation take?",
        answer:
          "A cylinder replacement takes 20–30 minutes. A new BS3621 mortice deadlock installation (cutting the mortice, fitting the case, strike plate, and testing) takes 60–90 minutes. A full multipoint mechanism replacement on a UPVC or composite door takes 60–120 minutes.",
      },
      {
        question: "Does the cylinder size matter for anti-snap protection?",
        answer:
          "Critically yes. A cylinder that protrudes more than 3mm beyond the face of the door furniture creates a lever arm that makes snapping attacks easier. We measure door thickness precisely and fit cylinders flush to the rose, eliminating this vulnerability.",
      },
    ],
    content: {
      section1: {
        heading: "Why Professional Installation Changes Everything",
        body: "A BS3621-rated mortice deadlock fitted by an inexperienced installer can fail to provide BS3621 protection if the mortice case is set too shallow, the strike plate isn't properly recessed, or the door is misaligned so the bolt doesn't fully extend into the keep. The lock carries the certification; the protection requires the installation to match it.\n\nEvery lock we install is fitted to the manufacturer's published specification. Mortice dimensions are checked against the case size. Cylinder length is measured to the door thickness. Strike plates are morticed into the frame — not screwed to the surface — and backed with reinforced steel keep boxes where the frame material warrants it. These details matter for security, and they matter for whether an insurance claim is paid following a break-in.",
      },
      section2: {
        heading: "The Lock Brands We Recommend — and Why",
        body: "TrustLock supplies and installs locks from Yale, ERA, Ultion, Mul-T-Lock, ABS, Avocet and Chubb. Each brand has product lines that meet specific British Standards — BS3621:2007+A2:2012 for mortice deadlocks, TS007:2012 for cylinders, BS EN 12209 for mechanical locking devices.\n\nFor anti-snap cylinders, our first recommendation is the Ultion three-star (TS007:2012), which has an internal anti-snap point, anti-pick pins and anti-drill hardened steel at both ends. The Yale Platinum and ABS Master are strong alternatives for specific door profiles. For mortice deadlocks, ERA Fortress and Chubb 5-lever produce consistent, well-manufactured products with a long service life. We don't fit own-brand or unbranded hardware — standards certification is a minimum, not a selling point.",
      },
      section3: {
        heading: "BS3621 and TS007 — What They Mean for Your Insurance",
        body: "BS3621:2007+A2:2012 is the British Standard specification for high-security mortice deadlocks for timber doors. TS007:2012 is the Kitemark standard for attack-resistant euro cylinders, rated one to three stars by resistance level. Three-star is the highest grade and the one recommended by Secured by Design, the UK police-backed security programme.\n\nMany home insurance policies require BS3621-rated locks on all final exit doors. Some policies have been updated to require TS007 cylinders specifically. Installing the wrong product — or having it installed incorrectly — can result in a claim being rejected. We check requirements before installation and document compliance after. If your policy wording is unclear, we can advise on what the standard requires in practice.",
      },
    },
    relatedServices: [
      "residential-locksmith",
      "smart-lock-installation",
      "lock-repair",
      "upvc-door-lock-repair",
    ],
    keywords: [
      "lock installation Dulwich",
      "new locks fitted Dulwich",
      "BS3621 lock fitting SE22",
      "lock fitting South London",
      "Yale lock installation Dulwich",
      "anti-snap lock fitted SE22",
    ],
  },
  {
    slug: "upvc-door-lock-repair",
    title: "UPVC Door Lock Repair Dulwich",
    shortTitle: "UPVC Door Lock Repair",
    metaTitle: "UPVC Door Lock Repair Dulwich | Multipoint Specialists – TrustLock",
    metaDescription:
      "UPVC door not locking in Dulwich? TrustLock's UPVC specialists carry ERA, Fullex, Avocet and Mila multipoint mechanisms. Most repairs completed same day across SE22 and South London.",
    headline: "UPVC Door Lock Repair in Dulwich — Multipoint Specialists",
    heroTagline: "UPVC door playing up? We carry the parts.",
    intro:
      "UPVC door lock failures are the single most common call we receive across Dulwich and South London. A door that won't lock properly, a handle that drops without engaging the bolts, or a mechanism that's getting progressively stiffer — these are all signs that the multipoint gearbox or locking mechanism is failing. Unlike a general handyman, we carry a comprehensive range of replacement UPVC mechanisms from ERA, Fullex, Avocet, Mila and Fuhr, and we can diagnose the specific failure point and replace the correct part in a single visit in the vast majority of cases.",
    icon: "DoorOpen",
    image: "/images/services/upvc-door-lock-repair.jpg",
    emergencyService: true,
    priceFrom: "£75",
    responseTime: "Same day",
    features: [
      "Multipoint mechanism diagnosis and replacement",
      "Gearbox and cam follower replacement",
      "Hook bolt, roller cam and mushroom cam repair",
      "Anti-snap cylinder upgrade for UPVC doors",
      "Handle, spindle and backplate replacement",
      "Door alignment and hinge adjustment",
      "All UPVC brands — Rehau, VEKA, Profile 22, Eurocell",
    ],
    benefits: [
      {
        title: "UPVC-Specific Expertise",
        description:
          "UPVC multipoint mechanisms differ fundamentally from mortice locks. Correct diagnosis requires familiarity with mechanism types (espagnolette, shootbolt, hook bolt), gearbox configurations, and door profile families. We carry that knowledge and the right parts.",
      },
      {
        title: "Comprehensive Parts Stock",
        description:
          "We carry ERA Fortress, Fullex Crimebeater, Avocet ABS, Mila Excalibar and Fuhr 856 mechanisms, plus a range of anti-snap cylinders sized for standard UPVC doors. Most faults are resolved in a single visit without parts ordering.",
      },
      {
        title: "Same-Day Security Restoration",
        description:
          "An unlockable door is a live security risk. We treat UPVC lock failures as priority calls and aim for same-day attendance. Once repaired, your door is fully secure again — not temporarily patched.",
      },
      {
        title: "Quality Parts, Long-Term Fix",
        description:
          "We don't fit unbranded copies or cheap imported gearboxes. The mechanisms we install are from established UK hardware suppliers and carry manufacturer warranties. A proper repair means you're not calling us again for the same fault.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Full Mechanism Diagnosis",
        description:
          "We test the handle, spindle, gearbox, every locking point, the cylinder, and the door-to-frame alignment. We identify the specific failure — not just the symptom — before recommending any repair.",
      },
      {
        step: 2,
        title: "Part Identification and Quote",
        description:
          "We identify the correct replacement part by measuring the existing mechanism's case size, spindle size, and locking point configuration. You receive a fixed price before we start any work.",
      },
      {
        step: 3,
        title: "Expert Replacement",
        description:
          "The failed mechanism or component is removed and replaced with the correct part, fitted precisely. Handle height, spindle engagement and door alignment are adjusted where needed.",
      },
      {
        step: 4,
        title: "Full Locking Point Test",
        description:
          "We test every locking point — hooks, rollers, deadbolts, anti-lift pins — with the door closed under realistic pressure. Everything must operate smoothly and fully engage before we consider the job complete.",
      },
    ],
    emergencyScenarios: [
      "UPVC door won't lock from inside after returning home",
      "Handle has dropped fully — no resistance when lifted",
      "Key turns but locking bolts won't extend",
      "Door won't close flush — mechanism seems jammed",
      "Locked out due to UPVC mechanism failure mid-operation",
      "UPVC door increasingly stiff to lock over past weeks",
    ],
    faqs: [
      {
        question: "My UPVC door handle has dropped — is this serious?",
        answer:
          "A dropped handle almost always means the gearbox (the central case that translates handle movement into locking point engagement) has failed. The follower hole in the gearbox has stripped, so the spindle turns freely without driving the mechanism. A gearbox replacement typically costs £95–£180 including parts and is completed in a single visit.",
      },
      {
        question: "How long do UPVC lock mechanisms last?",
        answer:
          "Most quality UPVC multipoint mechanisms have a service life of 10–15 years with normal use. Mechanisms subjected to repeated forcing — as a gradual misalignment causes residents to force the handle — often fail in 6–8 years. Twice-yearly lubrication with UPVC-specific lubricant (not WD-40, which attacks UPVC seals) extends life significantly.",
      },
      {
        question: "Can you replace just the cylinder in a UPVC door?",
        answer:
          "Yes, if the multipoint mechanism is functioning correctly and only the cylinder needs replacing — for a security upgrade, key change, or lost key situation. We always recommend upgrading to a TS007:2012 anti-snap cylinder at the same time, as the UPVC door euro cylinder is a common snapping target.",
      },
      {
        question: "Is it worth repairing a UPVC lock or replacing the whole door?",
        answer:
          "In the vast majority of cases, only the mechanism needs attention — the UPVC door profile and frame are typically still sound for decades. A mechanism replacement (£95–£200) is far more cost-effective than door replacement (£800–£2,000+) and achieves exactly the same security result.",
      },
    ],
    content: {
      section1: {
        heading: "Why UPVC Locks Fail — the Engineering Behind the Fault",
        body: "A UPVC multipoint locking mechanism is a substantially more complex piece of hardware than a standard mortice lock. The central gearbox drives four to eight separate locking points — hook bolts, roller cams, mushroom cams, anti-lift pins and deadbolts — from a single handle movement. Each locking point operates via a compression spring and a cam or hook mounted on a central rack driven by the gearbox.\n\nThe most common failure mode is gearbox follower wear: the square or oval hole that accepts the door handle spindle gradually strips, until the spindle can no longer transfer rotation to the gearbox rack. This presents as a handle that drops freely or provides inconsistent locking. Secondary failures include hook bolt seizure (hooks corrode or physically deform under repeated forcing) and cam damage (roller or mushroom cams crack and fail to engage with the door frame's keep).",
      },
      section2: {
        heading: "Identifying the Right Mechanism — Why It's Not as Simple as It Looks",
        body: "The UK UPVC door market has hundreds of different multipoint mechanisms from dozens of manufacturers. Mechanisms vary by case height (typically 200mm, 450mm or 600mm), number and position of locking points, spindle size (7mm, 8mm or 9mm square), backset, handing (left or right), and whether the gearbox is a split spindle or through spindle design.\n\nInstalling the wrong mechanism — even one that looks visually similar — can mean locking points that don't align with the door frame's strike plate positions, or spindle engagement that's too loose or tight. We measure the existing mechanism rather than guessing from memory, and carry the most common sizes for the ERA Fortress, Fullex Crimebeater, and Avocet ABS families, which between them cover the majority of UPVC doors across South London.",
      },
      section3: {
        heading: "Anti-Snap Cylinder Upgrades for UPVC Doors",
        body: "UPVC doors are disproportionately vulnerable to cylinder snapping attacks because the euro cylinder sits in an exposed position and the surrounding door material provides a good anchor for a snap tool. If your UPVC door still has a standard euro cylinder, the risk of cylinder snapping is real — particularly in areas like Dulwich, Peckham and Camberwell where burglary rates for this type of property remain above the national average.\n\nUpgrading to a TS007:2012 three-star anti-snap cylinder (Ultion, Yale Platinum, ABS Master) involves removing the existing cylinder and fitting the correctly-sized replacement. Cylinder length is critical — it must be matched to the door thickness so the cylinder sits flush with the door furniture. We carry anti-snap cylinders from 28mm to 80mm (28/28, 35/35, 35/40, 40/45, 45/50 and 55/55 configurations) to ensure a correct fit for any standard UPVC door profile.",
      },
    },
    relatedServices: [
      "lock-repair",
      "lock-installation",
      "burglary-repair",
      "residential-locksmith",
    ],
    keywords: [
      "UPVC door lock repair Dulwich",
      "UPVC lock repair SE22",
      "multipoint lock repair Dulwich",
      "UPVC gearbox replacement South London",
      "UPVC door won't lock Dulwich",
      "multipoint mechanism Dulwich",
    ],
  },
  {
    slug: "burglary-repair",
    title: "Burglary Repair Dulwich",
    shortTitle: "Burglary Repair",
    metaTitle: "Burglary Repair Dulwich | Emergency Break-In Repairs – TrustLock",
    metaDescription:
      "Emergency burglary repair in Dulwich and South London. Damaged locks replaced, door frames reinforced, boarding arranged, insurance documentation provided. Fast response across SE22.",
    headline: "Emergency Burglary Repair in Dulwich — Your Property Secured Today",
    heroTagline: "Break-in? We secure your property fast.",
    intro:
      "Discovering a break-in is one of the most distressing experiences you can have. We've helped hundreds of residents and business owners across Dulwich, East Dulwich, Peckham, Camberwell and South London in this situation, and we understand that what you need in that moment isn't a sales pitch — it's a calm, competent professional who secures your property quickly, explains what happened clearly, and gives you what you need to make an insurance claim. That's exactly what we do.",
    icon: "ShieldAlert",
    image: "/images/services/burglary-repair.jpg",
    emergencyService: true,
    priceFrom: "£85",
    responseTime: "1 hour",
    features: [
      "Emergency lock replacement — TS007 cylinders as standard",
      "Damaged door frame reinforcement with box keep and steel fixings",
      "Boarding up of broken glazing — arranged same visit",
      "Full written documentation for insurance claim",
      "Post-break-in security assessment and upgrade plan",
      "Sensitive, respectful service throughout",
      "SE22, SE21, SE15, SE5, SE24, SW2 and SE1 coverage",
    ],
    benefits: [
      {
        title: "Property Secured Within Hours",
        description:
          "We prioritise break-in calls and aim to reach you within one hour. Damaged locks are replaced, compromised frames are reinforced, and any unsecured entry points are made secure before we leave.",
      },
      {
        title: "Insurance Documentation Included",
        description:
          "We provide a written job report documenting every damaged element, the repair method used, and the specification of any replacement hardware installed. This is the documentation your insurer needs — and we provide it as standard.",
      },
      {
        title: "Security Upgrade Advice — Not Pressure",
        description:
          "After securing the immediate breach, we walk you through what happened, how the entry was made, and what upgrades would make a repeat significantly less likely. We give you a written quote and leave the decision with you.",
      },
      {
        title: "Calm, Professional Presence",
        description:
          "We've attended hundreds of break-in calls and we understand the emotional impact. We work efficiently, explain clearly what we're doing and why, and treat your property with care throughout.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Call Us After the Police",
        description:
          "Call the police first — don't disturb anything until they've attended. Once they're done, call us on 07984 547185. We'll head straight to you and aim to arrive within an hour.",
      },
      {
        step: 2,
        title: "Document the Damage",
        description:
          "We photograph and record every damaged element — locks, cylinders, door frame, keep plates, hinges, glazing — for your insurance claim. We explain what was attacked, how, and what technique was used.",
      },
      {
        step: 3,
        title: "Immediate Security",
        description:
          "We replace compromised locks with new TS007-rated cylinders, reinforce damaged frame sections with steel box keeps and long-screw strike plates, and coordinate boarding for any broken glazing.",
      },
      {
        step: 4,
        title: "Written Report and Security Review",
        description:
          "You receive a signed job report for your insurer and, if you'd like it, a written security assessment with prioritised recommendations for preventing a repeat. No obligation to act on the recommendations immediately.",
      },
    ],
    emergencyScenarios: [
      "Front door forced open — frame split at the lock keep",
      "Cylinder drilled out by intruder — door swinging open",
      "Rear door kicked in while front of house was occupied",
      "Window used as entry point — lock mechanism damaged",
      "Lock snapped during an attempted break-in",
      "Business premises broken into overnight — urgent securing needed",
    ],
    faqs: [
      {
        question: "What should I do immediately after a break-in?",
        answer:
          "Call 999 if the intruder may still be on the premises. Otherwise call 101 to report, preserve the scene for police attendance, then call us. Don't touch any disturbed items before police have visited. Photograph everything you can once the police have attended.",
      },
      {
        question: "Will my insurance cover the locksmith costs?",
        answer:
          "Most home and business insurance policies include emergency locksmith and repair costs following a break-in. We provide a signed, itemised job report — including parts specification and labour — that your insurer will need to process the claim. Keep the original damaged hardware if your insurer asks for evidence.",
      },
      {
        question: "Can you repair a door frame that's been kicked in?",
        answer:
          "We can reinforce and replace the locking components of the frame — the keep plate area, using box keeps and long-screw fixing kits that bite deep into the structural frame rather than the surface timber. For significant structural frame damage (split uprights, splintered sill sections), we work alongside trusted joiners and can coordinate the full repair.",
      },
      {
        question: "How do most break-ins in Dulwich actually happen?",
        answer:
          "The two most common methods in this area are cylinder snapping (snapping the euro cylinder to expose the cam mechanism) and door kicking (forcing the door until the frame gives at the strike plate). Both are substantially mitigated by TS007 anti-snap cylinders and reinforced box keeps — upgrades we routinely fit following break-in repairs.",
      },
    ],
    content: {
      section1: {
        heading: "Securing Your Home After a Break-In — What We Do",
        body: "TrustLock's priority when attending a burglary repair call is speed and thoroughness. We understand that a property that can't be secured is an ongoing emergency — particularly overnight or when the occupant needs to leave. We replace any compromised lock cylinders with new TS007:2012-rated anti-snap cylinders, reinforce strike plate areas where the frame has been attacked using box keeps with 100mm fixing screws, and arrange boarding or glazing repair contacts for any broken windows.\n\nWe don't just make the property technically lockable and leave. We walk through every entry point systematically, identify any secondary vulnerabilities the intruder may have tested, and make sure nothing is overlooked. The written report we produce documents everything and is formatted to meet the requirements of UK home and business insurers.",
      },
      section2: {
        heading: "Understanding How Most Break-Ins in South London Happen",
        body: "Metropolitan Police data consistently shows that the majority of residential burglaries in South London postcodes — including SE22, SE15, SE5, SE24 and SW2 — involve one of two entry methods: cylinder snapping or door kicking. Cylinder snapping targets the exposed portion of the euro cylinder on UPVC and composite doors, using a modified screwdriver or pair of mole grips to snap the external section and expose the driving cam. Door kicking targets the strike plate and frame, relying on inadequate fixings or shallow morticing to cause the frame to give at the lock keep.\n\nUnderstanding the specific method used in your break-in tells us precisely what to reinforce. Anti-snap cylinders eliminate the cylinder snapping vulnerability. Long-screw strike plates and box keeps, fixed into structural timber rather than surface material, address the door-kicking vulnerability. We implement both in every post-break-in repair as a baseline.",
      },
      section3: {
        heading: "Reducing the Risk of a Repeat — What the Data Shows",
        body: "Properties that have been burgled are statistically more likely to experience a repeat break-in — often by the same offender, who knows the property layout and has already assessed the security weaknesses. The risk is highest in the weeks immediately following the original incident.\n\nThe most effective deterrents following a break-in are: replacing standard cylinders with TS007 three-star anti-snap variants, installing reinforced box keep strike plates with 100mm fixing screws, adding a door chain or door limiter (which prevents the door being forced open even if the lock fails), and ensuring all accessible rear and side entry points are equally secured. We prioritise these in our post-break-in security review and provide written quotations for any recommended work so you can proceed in your own time.",
      },
    },
    relatedServices: [
      "emergency-locksmith",
      "lock-installation",
      "upvc-door-lock-repair",
      "residential-locksmith",
    ],
    keywords: [
      "burglary repair Dulwich",
      "break-in repair South London",
      "emergency board up Dulwich",
      "lock replacement after break-in SE22",
      "burglary damage repair London",
      "post break-in locksmith SE22",
    ],
  },
  {
    slug: "smart-lock-installation",
    title: "Smart Lock Installation Dulwich",
    shortTitle: "Smart Lock Installation",
    metaTitle: "Smart Lock Installation Dulwich | Yale, Nuki, Ultion – TrustLock",
    metaDescription:
      "Professional smart lock installation in Dulwich. Yale Linus, Nuki Smart Lock 3.0, August Pro and Ultion Smart cylinders fitted and configured. Keyless entry for homes and businesses in SE22.",
    headline: "Smart Lock Installation in Dulwich — Convenience Without Compromise",
    heroTagline: "Keyless entry, professionally installed.",
    intro:
      "Smart locks have moved well beyond early-adopter territory. The reliability, security and practical advantages of a well-chosen, professionally installed smart lock are now genuinely compelling — and the question most people ask us isn't 'should I get one?' but 'which one is right for my door?' We install and configure smart locks from Yale, Nuki, August and Ultion across Dulwich and South London, ensuring the hardware is fitted correctly, the app is fully configured before we leave, and you understand how to use every feature.",
    icon: "Smartphone",
    image: "/images/services/smart-lock-installation.jpg",
    emergencyService: false,
    priceFrom: "£120",
    responseTime: "Same day",
    features: [
      "Yale Linus Smart Lock — integrates with Yale Alarm ecosystem",
      "Nuki Smart Lock 3.0 — Bluetooth and Wi-Fi, Apple HomeKit",
      "August Smart Lock Pro — Z-Wave, Alexa and Google Home",
      "Ultion Smart cylinder — TS007 security with smart access",
      "Keypad, app, fob and physical key access options",
      "Guest access codes with expiry scheduling",
      "Full app configuration and user setup included",
    ],
    benefits: [
      {
        title: "Never Locked Out Again",
        description:
          "With smartphone app access, keypad entry and a physical key backup, getting locked out becomes near-impossible. You can even unlock the door remotely for a family member or delivery via the app.",
      },
      {
        title: "Guest Access Without Key Cutting",
        description:
          "Issue time-limited access codes for Airbnb guests, house-sitters, cleaners or contractors — and revoke them instantly when no longer needed. No key cutting, no key returns, no uncertainty.",
      },
      {
        title: "Activity Logs That Matter",
        description:
          "Smart locks record every door event — who entered, at what time, and via which credential. For landlords, Airbnb hosts, families with teenagers, or businesses monitoring contractor access, this visibility is genuinely useful.",
      },
      {
        title: "Full Configuration Before We Leave",
        description:
          "We don't just fit the hardware. We configure the app on your phone, set up all user accounts, test every access method, and run through the features with you so you're completely comfortable using it on day one.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Door Compatibility Assessment",
        description:
          "We assess your door type, cylinder hole position, door thickness, and existing hardware to confirm smart lock compatibility before recommending any product. Not all smart locks fit all doors.",
      },
      {
        step: 2,
        title: "Product Recommendation",
        description:
          "We recommend the best smart lock for your specific door, security requirements, smart home ecosystem (Apple HomeKit, Amazon Alexa, Google Home) and budget — with clear explanation of the differences.",
      },
      {
        step: 3,
        title: "Installation and Full Configuration",
        description:
          "The lock is fitted precisely, paired to your Wi-Fi or Bluetooth network, and fully configured — app installed, user accounts created, access codes set, backup key cut.",
      },
      {
        step: 4,
        title: "Hands-On Demonstration",
        description:
          "We walk you through every access method and show you how to manage users, set schedules and read the activity log. We stay until you're completely comfortable.",
      },
    ],
    emergencyScenarios: [
      "Landlord wanting to manage tenant access remotely without key cutting",
      "Airbnb host needing guest code management between stays",
      "Family wanting keypad access for children arriving home from school",
      "Business needing staff access logs for compliance purposes",
      "Property manager wanting to reduce key management overhead",
    ],
    faqs: [
      {
        question: "Are smart locks as secure as traditional locks?",
        answer:
          "Quality smart locks from Ultion, Yale and Nuki use the same high-security mechanical cylinders as their non-smart equivalents, with electronic access layers added. Ultion Smart, for example, combines a TS007:2012-rated three-star anti-snap cylinder with Bluetooth access — giving you the same physical attack resistance as the best traditional lock, plus the convenience of app control.",
      },
      {
        question: "Will a smart lock work with my existing door?",
        answer:
          "Most smart locks are designed as retrofit solutions that fit over your existing cylinder or hardware. We assess compatibility before recommending anything — door thickness, cylinder position, battery housing clearance and door handing all affect which products will fit cleanly.",
      },
      {
        question: "What happens if the battery runs out?",
        answer:
          "All quality smart locks include a physical key override — the backup key works regardless of battery state. Most models send low-battery alerts via the app well before the battery reaches critical level. Some (including the Nuki 3.0) allow emergency USB charging via the exterior. We advise on battery replacement intervals based on usage.",
      },
      {
        question: "Can smart locks integrate with Amazon Alexa or Apple HomeKit?",
        answer:
          "Many can. The Nuki Smart Lock 3.0 and August Smart Lock Pro support Apple HomeKit, Amazon Alexa and Google Home natively. The Yale Linus integrates with Yale's own ecosystem and supports Alexa. We match the product to your existing smart home setup.",
      },
    ],
    content: {
      section1: {
        heading: "Why Smart Locks Make Practical Sense in 2025",
        body: "The case for smart locks has become straightforward. For rental property owners in Dulwich and across South London, app-controlled access codes eliminate key handovers entirely — a practical issue that causes real problems at scale. For families, the arrival-home notification and keypad entry for children is a genuine quality-of-life improvement. For remote workers who regularly let in tradespeople, or people who've simply lost too many keys over the years, the combination of app access and a keypad backup removes a recurring source of stress.\n\nThe security case is equally strong when you choose correctly. The days of early smart locks being trivially bypassed via Bluetooth sniffing are long past — current products from Ultion, Yale and Nuki use AES-256 encryption for wireless communication, rolling access codes rather than static ones, and physical anti-snap, anti-pick, anti-drill cylinders that meet or exceed the mechanical security of the best traditional locks.",
      },
      section2: {
        heading: "Smart Lock Products We Install",
        body: "We install and configure four primary smart lock systems for the South London market:\n\nUltion Smart: A retrofit euro cylinder with Bluetooth access. Rated TS007:2012 three-star — the highest physical security grade available. Fits standard euro cylinder doors including most UPVC, composite and timber doors. Access via app, physical key. Ideal for security-conscious homeowners who want smart access without compromising on physical attack resistance.\n\nYale Linus Smart Lock: Full lock body replacement offering app, keypad and physical key access. Integrates with Yale's Smart Home Alarm ecosystem for combined security management. Best for timber doors and new installations.\n\nNuki Smart Lock 3.0: A retrofit solution that mounts over your existing thumb-turn, adding Bluetooth and Wi-Fi access without replacing the cylinder. Supports Apple HomeKit, Amazon Alexa and Google Home natively. Best for renters or those who prefer to retain their existing cylinder.\n\nAugust Smart Lock Pro: Similar retrofit approach with Z-Wave Plus integration for broader home automation compatibility.",
      },
      section3: {
        heading: "Why Professional Smart Lock Installation Matters",
        body: "Smart lock installation involves mechanical precision, network configuration and app setup in combination. A poorly mounted lock — where the fixing screws aren't properly seated, the door handing is set incorrectly, or the cylinder length is wrong — can cause the lock to behave unpredictably, fail to engage fully, or create a physical security gap. An improperly configured app means access credentials don't work reliably, guest codes fail to expire, or the homeowner loses admin access.\n\nWe've installed smart locks across Dulwich's housing stock — Victorian terraces with non-standard door thicknesses, 1970s flat entrance doors with heavy-duty frames, and modern composite doors with tight tolerances. We confirm compatibility before committing to a product, fit with precision, configure completely, and stay until every access method is working and every household member knows how to use it.",
      },
    },
    relatedServices: [
      "lock-installation",
      "residential-locksmith",
      "commercial-locksmith",
    ],
    keywords: [
      "smart lock installation Dulwich",
      "keyless entry Dulwich",
      "Yale smart lock installation SE22",
      "smart lock fitting South London",
      "Nuki lock installation Dulwich",
      "Ultion smart cylinder SE22",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

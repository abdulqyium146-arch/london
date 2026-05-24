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
    metaTitle: "Emergency Locksmith Dulwich | Fast Response – TrustLock",
    metaDescription:
      "Locked out in Dulwich or South London? TrustLock's emergency locksmith service delivers fast, damage-free entry. Available 9am–8pm, 7 days a week. Call now.",
    headline: "Emergency Locksmith in Dulwich — Fast, Calm, Professional",
    heroTagline: "Locked out? We're on our way.",
    intro:
      "Being locked out of your home or business is stressful. Whether you've snapped your key, lost it, or the lock has simply jammed, our experienced emergency locksmiths in Dulwich provide fast, non-destructive entry so you can get back inside quickly and safely.",
    icon: "AlertCircle",
    image: "/images/services/emergency-locksmith.jpg",
    emergencyService: true,
    priceFrom: "£65",
    responseTime: "30 minutes",
    features: [
      "Non-destructive entry techniques",
      "All lock types covered",
      "Residential and commercial",
      "Dulwich and South London coverage",
      "No hidden call-out charges",
      "Fully insured locksmiths",
    ],
    benefits: [
      {
        title: "Non-Destructive Entry",
        description:
          "We use specialist tools and techniques to open your lock without causing damage wherever possible, saving you the cost of unnecessary replacements.",
      },
      {
        title: "Clear, Upfront Pricing",
        description:
          "We quote before we start. No surprise bills, no inflated emergency rates. You know exactly what you'll pay.",
      },
      {
        title: "Experienced Locksmiths",
        description:
          "Every job is handled by a fully trained, insured locksmith with years of hands-on experience across Dulwich and South London.",
      },
      {
        title: "All Lock Types Covered",
        description:
          "From standard Yale cylinders to high-security deadbolts, UPVC multipoint locks and smart locks — we handle them all.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Call Us",
        description:
          "Ring our direct line. We'll answer promptly, ask a few quick questions, and confirm our arrival time.",
      },
      {
        step: 2,
        title: "We Arrive",
        description:
          "Our locksmith arrives at your address, typically within 30 minutes across Dulwich and surrounding areas.",
      },
      {
        step: 3,
        title: "Safe Entry",
        description:
          "We assess your lock and use the most appropriate non-destructive technique to gain entry as quickly as possible.",
      },
      {
        step: 4,
        title: "Lock Review",
        description:
          "Once inside, we check your lock for damage or vulnerabilities and advise on any repairs or upgrades needed.",
      },
    ],
    emergencyScenarios: [
      "Locked out of your home late in the evening",
      "Key snapped inside the lock cylinder",
      "Lost or stolen house keys",
      "Lock jammed and won't turn",
      "Locked out after a break-in attempt",
      "Landlord locked out of a rental property",
      "Business locked out before opening",
    ],
    faqs: [
      {
        question: "How quickly can you reach me in Dulwich?",
        answer:
          "In most cases we can reach you within 30 minutes across Dulwich, East Dulwich, and nearby South London areas. We'll confirm an estimated arrival time when you call.",
      },
      {
        question: "Will you damage my lock to get in?",
        answer:
          "Our first priority is always non-destructive entry. We use specialist pick tools and bypass techniques that leave your lock and door undamaged in the vast majority of cases. Drilling is only considered as a last resort.",
      },
      {
        question: "How much does an emergency locksmith cost in Dulwich?",
        answer:
          "Our emergency call-outs start from £65 during standard hours. We always give you a fixed quote before starting any work — no hidden fees.",
      },
      {
        question: "Do you work on weekends?",
        answer:
          "Yes. We operate 9am to 8pm every day of the week including weekends and bank holidays.",
      },
      {
        question: "Can you replace the lock on the same visit?",
        answer:
          "Absolutely. Our vans carry a wide range of replacement cylinders and locks so in most cases we can fit a new lock the same day.",
      },
    ],
    content: {
      section1: {
        heading: "What Happens When You Call an Emergency Locksmith",
        body: "A genuine emergency locksmith should make the situation feel manageable — not more stressful. When you call TrustLock, we walk you through exactly what will happen, confirm a fixed price before we start, and aim to arrive at your door within 30 minutes.\n\nWe've handled thousands of lockouts across Dulwich and South London. Whether it's a Yale cylinder that's failed, a multipoint UPVC lock that's seized, or a Chubb deadbolt you can't turn — we've seen it before and we know how to resolve it cleanly.",
      },
      section2: {
        heading: "Why Non-Destructive Entry Matters",
        body: "Some locksmiths will drill a lock as their first option. It's quicker for them — but it means you need to buy a new lock on top of the call-out fee. We invest in proper bypass tools and picking techniques so your existing lock can often be salvaged.\n\nIf a lock genuinely can't be opened non-destructively — because it's been damaged, anti-drill components have engaged, or it's an extremely high-security cylinder — we'll explain why before touching anything, so you can make an informed decision.",
      },
      section3: {
        heading: "Insurance-Approved and Fully Accredited",
        body: "Our locksmiths carry public liability insurance and work to British Standard practices. We can provide documentation for insurance claims following lockouts or break-in attempts, and all replacement locks we fit can be matched to BS3621 standards where required by your home insurance policy.",
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
      "locksmith near me",
      "locked out Dulwich",
      "locksmith SE22",
      "emergency locksmith South London",
      "24 hour locksmith Dulwich",
    ],
  },
  {
    slug: "residential-locksmith",
    title: "Residential Locksmith Dulwich",
    shortTitle: "Residential Locksmith",
    metaTitle: "Residential Locksmith Dulwich | Home Security – TrustLock",
    metaDescription:
      "Expert residential locksmith services in Dulwich. Lock upgrades, new installations, key cutting and home security assessments. Insurance-approved locks fitted.",
    headline: "Residential Locksmith Services in Dulwich & South London",
    heroTagline: "Protecting South London homes since 2014.",
    intro:
      "Your home deserves locks you can actually trust. Whether you're moving into a new property, upgrading ageing locks, or following advice from your insurance provider, our residential locksmith service covers everything from a simple cylinder swap to a full home security overhaul.",
    icon: "Home",
    image: "/images/services/residential-locksmith.jpg",
    emergencyService: false,
    priceFrom: "£55",
    responseTime: "Same day",
    features: [
      "BS3621 insurance-approved locks",
      "Anti-snap cylinder upgrades",
      "New build lock installation",
      "Key cutting and duplication",
      "Home security assessments",
      "All door types and mechanisms",
    ],
    benefits: [
      {
        title: "Insurance-Approved Locks",
        description:
          "We stock and fit BS3621 certified locks that satisfy most UK home insurance policy requirements, so you remain fully covered.",
      },
      {
        title: "Anti-Snap Protection",
        description:
          "Cylinder snapping is the most common burglary method in London. We upgrade vulnerable cylinders to anti-snap versions as standard.",
      },
      {
        title: "New Property Security",
        description:
          "Moving into a new home? We'll rekey or replace all locks so you know exactly who holds a working key.",
      },
      {
        title: "No-Pressure Advice",
        description:
          "We assess your current setup and recommend only what's genuinely necessary — never upselling for the sake of it.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Security Assessment",
        description:
          "We review your existing locks, door condition, and entry points to identify any vulnerabilities.",
      },
      {
        step: 2,
        title: "Honest Recommendations",
        description:
          "We explain our findings in plain language and recommend appropriate solutions with clear pricing.",
      },
      {
        step: 3,
        title: "Professional Installation",
        description:
          "Locks are fitted to manufacturer and British Standard specifications with no shortcuts.",
      },
      {
        step: 4,
        title: "Keys and Documentation",
        description:
          "You receive all keys and, where needed, documentation for insurance purposes.",
      },
    ],
    emergencyScenarios: [
      "Moving into a new property in Dulwich",
      "Lock damaged after a break-in attempt",
      "Lost or stolen keys — lock rekeying needed",
      "Upgrading locks to meet insurance requirements",
      "Landlord replacing locks between tenancies",
    ],
    faqs: [
      {
        question: "Do you fit British Standard BS3621 locks?",
        answer:
          "Yes. We stock a range of BS3621 certified locks and can advise on which is most suitable for your door type and insurance requirements.",
      },
      {
        question: "What is an anti-snap lock cylinder?",
        answer:
          "Anti-snap cylinders are designed to resist the most common lock-attack method used by burglars in the UK, where the visible part of the cylinder is snapped off using brute force. We strongly recommend these for all external doors.",
      },
      {
        question: "Can you cut spare keys on the same visit?",
        answer:
          "In most cases, yes. We carry key cutting equipment and a broad range of blanks, so we can usually cut additional keys during the same appointment.",
      },
      {
        question: "How much does it cost to change locks in Dulwich?",
        answer:
          "A standard cylinder replacement typically starts from £55 including parts. We always provide a fixed quote before beginning any work.",
      },
    ],
    content: {
      section1: {
        heading: "Why the Right Lock Matters More Than You Think",
        body: "Many homes in Dulwich and East Dulwich still have original lock cylinders that offer very little real protection. A standard euro cylinder can be snapped in seconds with a pair of mole grips — a technique used in the majority of residential burglaries across South London.\n\nUpgrading to an anti-snap, anti-pick, anti-drill cylinder is one of the most cost-effective security improvements you can make. It costs less than most people expect, and it can be the difference between a failed break-in attempt and a successful one.",
      },
      section2: {
        heading: "Home Security for Dulwich's Period Properties",
        body: "Many homes in Dulwich are Victorian or Edwardian terraces with original wooden doors, letter boxes at lock height, and doors that have been modified over decades. We understand the particular challenges these properties present and have experience fitting modern security hardware that works within the constraints of older door frames and materials.",
      },
      section3: {
        heading: "New to the Property? Change Your Locks First",
        body: "It's impossible to know how many copies of the previous owner's keys are in circulation. Former residents, estate agents, tradespeople — any number of people could have had access. Rekeying or replacing the lock cylinders when you move in is a small investment that gives you complete peace of mind from day one.",
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
      "new locks fitted Dulwich",
    ],
  },
  {
    slug: "commercial-locksmith",
    title: "Commercial Locksmith Dulwich",
    shortTitle: "Commercial Locksmith",
    metaTitle: "Commercial Locksmith Dulwich | Business Security – TrustLock",
    metaDescription:
      "Professional commercial locksmith in Dulwich and South London. Master key systems, access control, high-security locks for offices, shops and commercial premises.",
    headline: "Commercial Locksmith Services for Dulwich Businesses",
    heroTagline: "Securing South London businesses professionally.",
    intro:
      "Commercial properties have unique security demands. From retail units on Lordship Lane to offices and warehouses across South London, we provide professional locksmith services tailored to the needs of businesses — including master key systems, high-security lock installations, and access control.",
    icon: "Building2",
    image: "/images/services/commercial-locksmith.jpg",
    emergencyService: true,
    priceFrom: "£85",
    responseTime: "Same day",
    features: [
      "Master key system design and installation",
      "High-security commercial lock fitting",
      "Access control systems",
      "Keypad and fob entry systems",
      "Emergency business lockout response",
      "Multi-site keying solutions",
    ],
    benefits: [
      {
        title: "Master Key Systems",
        description:
          "We design and install master key hierarchies that give different levels of access to different staff, simplifying key management for your business.",
      },
      {
        title: "Access Control",
        description:
          "From simple keypad entry to full fob-based access control systems, we integrate modern solutions that make managing who comes and goes straightforward.",
      },
      {
        title: "Minimal Business Disruption",
        description:
          "We work around your business hours and can schedule work outside of peak times to keep disruption to an absolute minimum.",
      },
      {
        title: "Security Compliance",
        description:
          "We advise on lock grades and standards relevant to your commercial insurance policy and any applicable industry regulations.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Site Survey",
        description:
          "We visit your premises to assess entry points, current security, and your specific operational requirements.",
      },
      {
        step: 2,
        title: "Security Plan",
        description:
          "We produce a clear proposal covering recommended works, product specifications and fixed pricing.",
      },
      {
        step: 3,
        title: "Professional Installation",
        description:
          "Works are completed by our experienced commercial locksmiths, with minimal disruption to your operations.",
      },
      {
        step: 4,
        title: "Ongoing Support",
        description:
          "We remain available for follow-up work, additional key cutting, and system expansion as your business grows.",
      },
    ],
    emergencyScenarios: [
      "Business locked out before opening hours",
      "Former employee retained keys",
      "Lock mechanism failed overnight",
      "Break-in repair needed urgently",
      "Security upgrade following incident",
    ],
    faqs: [
      {
        question: "Can you create a master key system for our office?",
        answer:
          "Yes. We design and install master key systems that allow different staff members different levels of access — for example, cleaners access common areas only, while managers can access all rooms with a single key.",
      },
      {
        question: "Do you work with commercial shutters and roller doors?",
        answer:
          "We handle the lock mechanisms on commercial shutters and roller doors. For motorised shutter motor repairs, we work alongside specialist shutter engineers and can coordinate the work.",
      },
      {
        question: "Can you help after a break-in to our business premises?",
        answer:
          "Absolutely. We respond to commercial break-ins, repair or replace damaged locks, board up if needed, and can arrange emergency glazing contacts. We also provide documentation for your insurance claim.",
      },
    ],
    content: {
      section1: {
        heading: "Commercial Security in Dulwich and South London",
        body: "Dulwich and the surrounding South London areas have a thriving business community — from independent shops and cafés to professional offices and light industrial units. Each type of premises has different security needs, and a one-size solution rarely works well.\n\nWe take time to understand how your business operates before recommending any security measures. The goal is always to improve your security without creating operational headaches for you or your staff.",
      },
      section2: {
        heading: "When an Employee Leaves — Act Quickly",
        body: "The most commonly overlooked commercial security risk is former employees who still have working keys. When a member of staff leaves — especially under difficult circumstances — rekeying the relevant locks or updating access codes is essential. We can turn this around quickly and cost-effectively, giving you certainty that only current keyholders can access your premises.",
      },
      section3: {
        heading: "Access Control: Moving Beyond Physical Keys",
        body: "For growing businesses or multi-staff operations, physical key management can become complex and insecure. Modern access control systems — from basic keypad entry to smart fob systems — remove the physical key vulnerability entirely and give you a clear record of who accessed what and when.",
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
      "master key system London",
      "access control Dulwich",
      "office locksmith SE22",
    ],
  },
  {
    slug: "automotive-locksmith",
    title: "Automotive Locksmith Dulwich",
    shortTitle: "Automotive Locksmith",
    metaTitle: "Automotive Locksmith Dulwich | Car Lockouts – TrustLock",
    metaDescription:
      "Locked out of your car in Dulwich? TrustLock's automotive locksmith service covers car lockouts, key replacement, transponder programming and more across South London.",
    headline: "Automotive Locksmith in Dulwich — Car Lockouts & Key Solutions",
    heroTagline: "Locked out of your car? We'll sort it.",
    intro:
      "Losing your car keys or getting locked out of your vehicle is a frustrating experience. Our automotive locksmith service covers car lockouts, replacement key cutting, transponder programming, and ignition repairs across Dulwich and South London.",
    icon: "Car",
    image: "/images/services/automotive-locksmith.jpg",
    emergencyService: true,
    priceFrom: "£75",
    responseTime: "45 minutes",
    features: [
      "Non-destructive vehicle entry",
      "Car key replacement and cutting",
      "Transponder key programming",
      "Remote fob replacement",
      "Ignition repair and replacement",
      "Most makes and models covered",
    ],
    benefits: [
      {
        title: "Non-Destructive Vehicle Entry",
        description:
          "We use specialist automotive tools to open your vehicle without causing damage to doors, windows or seals.",
      },
      {
        title: "Key Replacement",
        description:
          "We cut and program replacement keys for most makes and models, often at significantly less than main dealer pricing.",
      },
      {
        title: "Mobile Service",
        description:
          "We come to wherever your vehicle is located — no need to arrange a tow to a garage for a simple lockout or key issue.",
      },
      {
        title: "Transponder Programming",
        description:
          "Modern car keys contain transponder chips that communicate with your vehicle's immobiliser. We program replacement transponder keys on-site.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Describe Your Situation",
        description:
          "Tell us your vehicle make, model and the issue. This helps us bring the correct equipment first time.",
      },
      {
        step: 2,
        title: "We Come to You",
        description:
          "Our automotive locksmith arrives at your vehicle's location — home, roadside or car park.",
      },
      {
        step: 3,
        title: "Professional Resolution",
        description:
          "We resolve the issue — whether that's gaining entry, cutting a replacement key, or programming a new transponder.",
      },
      {
        step: 4,
        title: "Vehicle Check",
        description:
          "We check everything is working correctly before we leave so you're not left in doubt.",
      },
    ],
    emergencyScenarios: [
      "Keys locked inside the car",
      "Lost or stolen car keys",
      "Key broken in door or ignition",
      "Key fob battery replaced but stopped working",
      "Transponder key not recognised by immobiliser",
    ],
    faqs: [
      {
        question: "Can you make a replacement key if I've lost all copies?",
        answer:
          "For most makes and models, yes. We can cut and program a new key from your vehicle identification number. For some newer or specialist vehicles, we may need to refer you to a specialist automotive locksmith with manufacturer-level diagnostic tools.",
      },
      {
        question: "Is it cheaper to use a locksmith than a main dealer for a replacement key?",
        answer:
          "In most cases, significantly so. Main dealers often charge a premium for key programming services. We offer competitive pricing and typically turnaround the work more quickly.",
      },
      {
        question: "Do you cover all car makes?",
        answer:
          "We cover the vast majority of common UK vehicles including Ford, Volkswagen, BMW, Mercedes, Vauxhall, Toyota, Honda, and many more. Call us with your make and model and we'll confirm before coming out.",
      },
    ],
    content: {
      section1: {
        heading: "Car Lockouts Across Dulwich and South London",
        body: "A car lockout can happen to anyone — whether you've left your keys on the seat, locked them in the boot, or they've simply gone missing. Our automotive locksmiths respond quickly across Dulwich, East Dulwich, Peckham, Camberwell and surrounding areas, resolving most lockouts without any damage to your vehicle.",
      },
      section2: {
        heading: "Replacement Car Keys Without the Dealer Premium",
        body: "Main dealer key replacement can be extraordinarily expensive — and often slow. We provide a faster, more affordable alternative for most makes and models, cutting and programming a replacement key that works identically to the original. This includes transponder keys, proximity keys (keyless entry), and remote fob keys.",
      },
      section3: {
        heading: "Broken Key Extraction",
        body: "Keys snapping in locks is frustrating but it happens. Whether the break is in a door lock, boot lock or the ignition barrel, our extraction tools remove the broken portion cleanly without damage to the lock mechanism. We then cut and supply a replacement key on the spot.",
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
    ],
  },
  {
    slug: "lock-repair",
    title: "Lock Repair Dulwich",
    shortTitle: "Lock Repair",
    metaTitle: "Lock Repair Dulwich | Fast Lock Repairs – TrustLock",
    metaDescription:
      "Professional lock repair services in Dulwich and South London. Stiff locks, damaged mechanisms, snapped keys extracted. Same-day service available.",
    headline: "Lock Repair Services in Dulwich — Same-Day Repairs Available",
    heroTagline: "Stiff lock? Damaged mechanism? We fix it.",
    intro:
      "Locks that are stiff, difficult to turn, or have suffered damage are a security risk — and often a sign that a repair or replacement is overdue. Our lock repair service covers everything from seized mechanisms and snapped key extraction to damaged UPVC multipoint systems across Dulwich and South London.",
    icon: "Wrench",
    image: "/images/services/lock-repair.jpg",
    emergencyService: false,
    priceFrom: "£55",
    responseTime: "Same day",
    features: [
      "Snapped key extraction",
      "Stiff or seized lock repair",
      "UPVC multipoint mechanism repair",
      "Damaged lock cylinder replacement",
      "Gearbox and cam repair",
      "All door types covered",
    ],
    benefits: [
      {
        title: "Honest Repair vs Replace Assessment",
        description:
          "We tell you honestly whether a repair is worthwhile or whether replacement is better value. No unnecessary upselling.",
      },
      {
        title: "Specialist Tools",
        description:
          "Key extraction, mechanism alignment and cylinder bypass all require specialist tooling that we carry as standard.",
      },
      {
        title: "Long-Term Fix",
        description:
          "We don't patch problems temporarily. Repairs are thorough, so you're not calling us back in a few weeks.",
      },
      {
        title: "Rapid Response",
        description:
          "A faulty lock is a security vulnerability. We prioritise same-day attendance for all lock repair requests.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Diagnose the Issue",
        description:
          "We inspect the lock mechanism, cylinder, door alignment and frame to identify the root cause.",
      },
      {
        step: 2,
        title: "Quote and Advise",
        description:
          "We give you a fixed-price quote and honest advice on whether repair or replacement is the better option.",
      },
      {
        step: 3,
        title: "Carry Out Repairs",
        description:
          "The repair is completed on-site in most cases, using quality replacement parts where required.",
      },
      {
        step: 4,
        title: "Test and Confirm",
        description:
          "We test the lock thoroughly before leaving to ensure it operates smoothly and securely.",
      },
    ],
    emergencyScenarios: [
      "Key snapped inside the lock cylinder",
      "Lock won't turn even with correct key",
      "UPVC door not locking properly",
      "Lock mechanism making grinding noise",
      "Handle drops but door won't lock",
    ],
    faqs: [
      {
        question: "Can you remove a snapped key from a lock?",
        answer:
          "Yes. Broken key extraction is one of the most common repairs we carry out. Using specialist extraction tools, we remove the broken section without damaging the cylinder, and then cut and supply a replacement key.",
      },
      {
        question: "My UPVC door won't lock — is this a lock repair or door issue?",
        answer:
          "Often it's the multipoint locking mechanism or the gearbox that's failed rather than the lock cylinder itself. We diagnose the root cause and carry out the appropriate repair, whether that's the mechanism, the cylinder, or adjusting the door alignment.",
      },
      {
        question: "Is it worth repairing an old lock or should I replace it?",
        answer:
          "It depends on the age and type of lock. If the cylinder is more than 10 years old or doesn't have anti-snap features, replacement is usually better value. We'll give you an honest assessment when we inspect it.",
      },
    ],
    content: {
      section1: {
        heading: "When Your Lock Stops Working — Don't Ignore It",
        body: "A stiff or sluggish lock is more than just an inconvenience — it's a warning sign. Locks that require excessive force to operate are often failing internally, and a complete seizure leaving you locked in or out is a real possibility. Catching and resolving the issue early is almost always less expensive than waiting for a complete failure.",
      },
      section2: {
        heading: "UPVC Multipoint Lock Repairs",
        body: "The multipoint locking mechanisms used in UPVC doors are more complex than traditional mortice locks and have more components that can wear or fail. The most common failure points are the gearbox (the central mechanism that drives the locking points), the rollers, and the hook bolts. We carry a comprehensive range of replacement parts and can repair or replace failed mechanisms on-site.",
      },
      section3: {
        heading: "Snapped Key Extraction",
        body: "Key snapping inside a lock cylinder is a surprisingly common problem, particularly with older keys that have been cut multiple times and have developed stress fractures. Extraction is a delicate process — forcing the broken section further in or using DIY methods often makes the situation worse. Our extraction tools are designed to grip and remove the broken piece cleanly in most cases.",
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
    ],
  },
  {
    slug: "lock-installation",
    title: "Lock Installation Dulwich",
    shortTitle: "Lock Installation",
    metaTitle: "Lock Installation Dulwich | New Locks Fitted – TrustLock",
    metaDescription:
      "Expert lock installation in Dulwich and South London. BS3621 deadlocks, anti-snap cylinders, smart locks and multipoint systems fitted professionally.",
    headline: "Professional Lock Installation in Dulwich",
    heroTagline: "New locks, installed properly, first time.",
    intro:
      "A lock is only as good as its installation. Whether you're fitting a new high-security deadlock, upgrading to an anti-snap cylinder, or having a complete multipoint system installed, our locksmiths ensure every lock is fitted correctly, to specification, and aligned perfectly with your door.",
    icon: "Lock",
    image: "/images/services/lock-installation.jpg",
    emergencyService: false,
    priceFrom: "£65",
    responseTime: "Same day",
    features: [
      "BS3621 mortice deadlock installation",
      "Anti-snap cylinder fitting",
      "UPVC multipoint lock installation",
      "Smart lock installation",
      "New door hardware fitting",
      "Measurement, alignment and testing included",
    ],
    benefits: [
      {
        title: "Correct Installation Every Time",
        description:
          "A misaligned or incorrectly installed lock can fail unexpectedly. We take the time to ensure perfect alignment and full functionality.",
      },
      {
        title: "Wide Product Range",
        description:
          "We supply and fit locks from trusted brands including Yale, ERA, Mul-T-Lock and ABS, so you get both quality and choice.",
      },
      {
        title: "Insurance Compliance",
        description:
          "We ensure locks meet BS3621 and other standards required by your home insurance policy where applicable.",
      },
      {
        title: "Advice on the Best Option",
        description:
          "Not sure which lock is right for your door? We'll explain the options and recommend the most appropriate solution for your security needs and budget.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description: "We assess your door type, frame condition and existing hardware to recommend the correct lock.",
      },
      {
        step: 2,
        title: "Product Selection",
        description: "We recommend specific products and explain the differences so you can choose with confidence.",
      },
      {
        step: 3,
        title: "Precise Installation",
        description: "The lock is fitted carefully, with precise measurement and alignment to ensure reliable, long-term operation.",
      },
      {
        step: 4,
        title: "Testing and Handover",
        description: "We test the lock fully with all keys and ensure you're happy before completing the job.",
      },
    ],
    emergencyScenarios: [
      "New property needing fresh lock installation",
      "Old lock failing and needing replacement",
      "Upgrading to insurance-approved lock grade",
      "Adding additional locks to an entry door",
    ],
    faqs: [
      {
        question: "What type of lock should I install on my front door?",
        answer:
          "For most front doors, we recommend a BS3621 five-lever mortice deadlock combined with an anti-snap, anti-pick cylinder. This combination satisfies most home insurance requirements and provides strong resistance to common break-in methods.",
      },
      {
        question: "Can you install a lock on a composite door?",
        answer:
          "Yes. Composite doors use multipoint locking systems and specific cylinder types. We have experience working with all major composite door brands and can supply and fit the correct lock components.",
      },
      {
        question: "How long does a lock installation take?",
        answer:
          "A standard cylinder replacement or single lock fitting typically takes 30–60 minutes. A full multipoint system installation on a new door may take 1–2 hours.",
      },
    ],
    content: {
      section1: {
        heading: "Why Professional Lock Installation Matters",
        body: "DIY lock installation can seem straightforward, but small errors — a cylinder that's slightly too long, a deadbolt that doesn't fully engage with the strike plate, a mortice fitted in the wrong position — can significantly compromise security. Our locksmiths install locks to manufacturer specifications every time, ensuring full functionality and maximum security.",
      },
      section2: {
        heading: "The Lock Brands We Work With",
        body: "We supply and install locks from the UK's most trusted manufacturers. Yale, ERA, Mul-T-Lock and ABS all produce products that meet or exceed British Standard requirements. We'll advise on the right brand and specification for your specific door type and security needs.",
      },
      section3: {
        heading: "BS3621 — Why It Matters for Your Home Insurance",
        body: "Many UK home insurance policies specifically require that external doors be secured with a BS3621 certified lock. Installing the wrong type of lock — even a good quality one — can invalidate a burglary claim. We always check insurance requirements and ensure any lock we install is compliant where needed.",
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
    ],
  },
  {
    slug: "upvc-door-lock-repair",
    title: "UPVC Door Lock Repair Dulwich",
    shortTitle: "UPVC Door Lock Repair",
    metaTitle: "UPVC Door Lock Repair Dulwich | Expert UPVC Specialists",
    metaDescription:
      "UPVC door not locking? Expert UPVC lock repair in Dulwich. Multipoint mechanisms, gearboxes, cylinders replaced same day across South London.",
    headline: "UPVC Door Lock Repair in Dulwich — Expert Multipoint Specialists",
    heroTagline: "UPVC door playing up? Fixed today.",
    intro:
      "UPVC door lock failures are one of the most common reasons people call a locksmith in South London. Whether your door won't lock properly, the handle has dropped, or the multipoint mechanism has completely failed, our UPVC specialists carry a comprehensive range of replacement parts and resolve most issues on the same day.",
    icon: "DoorOpen",
    image: "/images/services/upvc-door-lock-repair.jpg",
    emergencyService: true,
    priceFrom: "£75",
    responseTime: "Same day",
    features: [
      "Multipoint mechanism replacement",
      "Gearbox repair and replacement",
      "Anti-snap cylinder upgrade",
      "Handle and spindle replacement",
      "Door alignment adjustment",
      "All UPVC brands covered",
    ],
    benefits: [
      {
        title: "UPVC Specialists",
        description:
          "UPVC locking systems are significantly different from traditional mortice locks. We carry dedicated UPVC parts and have deep experience with these systems.",
      },
      {
        title: "Comprehensive Parts Stock",
        description:
          "We carry multipoint mechanisms, gearboxes, cylinders and handles from all major brands, meaning most repairs can be completed in a single visit.",
      },
      {
        title: "Same-Day Service",
        description:
          "A UPVC door that won't lock properly is a security risk. We prioritise same-day attendance for UPVC lock failures.",
      },
      {
        title: "Long-Lasting Repairs",
        description:
          "We fit replacement mechanisms from quality manufacturers, not cheap copies that will fail again within months.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Diagnose the Fault",
        description: "We test the mechanism, handle, cylinder and door alignment to pinpoint the exact failure point.",
      },
      {
        step: 2,
        title: "Identify the Right Parts",
        description: "We identify the correct replacement mechanism or components for your specific door brand and configuration.",
      },
      {
        step: 3,
        title: "Expert Repair",
        description: "The failed components are removed and replaced with quality parts, correctly installed and adjusted.",
      },
      {
        step: 4,
        title: "Full Test",
        description: "We test all locking points, handles and the cylinder before leaving to confirm everything works perfectly.",
      },
    ],
    emergencyScenarios: [
      "UPVC door won't lock from inside or outside",
      "Handle drops and door won't engage locking points",
      "Key turns but lock bolts won't extend",
      "UPVC door won't close properly",
      "Locked out due to UPVC mechanism failure",
    ],
    faqs: [
      {
        question: "My UPVC door handle has dropped — is this a lock problem?",
        answer:
          "A dropped handle often indicates that the gearbox (the internal mechanism that drives the multipoint lock) has failed. This is a common issue with UPVC doors over 8–10 years old. We can diagnose and replace the gearbox on the same visit in most cases.",
      },
      {
        question: "How long do UPVC lock mechanisms last?",
        answer:
          "Most UPVC multipoint mechanisms have a lifespan of 10–15 years with normal use. Regular lubrication with the correct UPVC lubricant can extend this considerably.",
      },
      {
        question: "Can you replace just the cylinder in a UPVC door?",
        answer:
          "Yes. If the multipoint mechanism is working correctly but you need a new cylinder — for security upgrades or key replacement — we can swap the cylinder alone. We always recommend upgrading to an anti-snap cylinder at the same time.",
      },
      {
        question: "Is it worth repairing an old UPVC lock or replacing the whole door?",
        answer:
          "In the vast majority of cases, the door itself is perfectly sound and only the locking mechanism needs attention. A mechanism replacement is far more cost-effective than door replacement and achieves the same security result.",
      },
    ],
    content: {
      section1: {
        heading: "Why UPVC Locks Fail",
        body: "UPVC multipoint locking mechanisms are complex and have many more moving parts than a standard mortice lock. The most common failure modes are gearbox wear (usually presenting as a dropped handle or handle that requires excessive force), hook bolt seizure due to corrosion or debris, and cylinder wear.\n\nMany of these failures develop gradually — the door gets slightly harder to lock over months or years until eventually it fails completely. If you notice your UPVC door getting harder to operate, it's worth having it looked at before a complete failure leaves you unable to secure your home.",
      },
      section2: {
        heading: "Lubrication and Maintenance — Simple Prevention",
        body: "The single most effective thing you can do to extend the life of a UPVC door lock mechanism is to lubricate it regularly with a suitable UPVC-specific lubricant (not WD-40, which can actually damage UPVC mechanisms). A light application to the locking points and hinge faces twice a year significantly reduces wear. If you're unsure what to use, ask us — we're happy to advise.",
      },
      section3: {
        heading: "Anti-Snap Cylinder Upgrades for UPVC Doors",
        body: "UPVC doors are particularly vulnerable to cylinder snapping attacks because the cylinder is exposed and accessible. If your UPVC door still has a standard euro cylinder, upgrading to an anti-snap version is one of the most important security improvements you can make. We carry anti-snap cylinders in a range of sizes to fit all standard UPVC door configurations.",
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
    ],
  },
  {
    slug: "burglary-repair",
    title: "Burglary Repair Dulwich",
    shortTitle: "Burglary Repair",
    metaTitle: "Burglary Repair Dulwich | Emergency Break-In Repairs – TrustLock",
    metaDescription:
      "Emergency burglary repair in Dulwich. Damaged locks replaced, doors secured, boarding up arranged. Fast response for break-in damage across South London.",
    headline: "Emergency Burglary Repair in Dulwich — Securing Your Property Fast",
    heroTagline: "Break-in damage secured within hours.",
    intro:
      "Discovering a break-in is deeply distressing. Our priority is to secure your property as quickly as possible so you can feel safe again. We respond to burglary repair calls across Dulwich and South London, replacing damaged locks, reinforcing entry points, and providing the documentation you'll need for your insurance claim.",
    icon: "ShieldAlert",
    image: "/images/services/burglary-repair.jpg",
    emergencyService: true,
    priceFrom: "£85",
    responseTime: "1 hour",
    features: [
      "Emergency lock replacement",
      "Damaged door frame reinforcement",
      "Emergency boarding up",
      "Insurance documentation provided",
      "Security upgrade recommendations",
      "Same-day response throughout South London",
    ],
    benefits: [
      {
        title: "Rapid Response",
        description:
          "We prioritise break-in calls and aim to reach you within an hour to secure your property and give you peace of mind.",
      },
      {
        title: "Insurance Documentation",
        description:
          "We provide written documentation of the damage found and work carried out, which your insurer will require as part of the claims process.",
      },
      {
        title: "Security Upgrade Advice",
        description:
          "After securing the immediate breach, we assess vulnerabilities and advise on upgrades that will make a repeat attack significantly less likely.",
      },
      {
        title: "Sensitive, Professional Service",
        description:
          "We understand a break-in is a traumatic experience. We work efficiently and calmly, keeping you informed throughout.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Call Us Immediately",
        description:
          "After calling the police, call us. We'll come to you quickly to assess and secure the property.",
      },
      {
        step: 2,
        title: "Damage Assessment",
        description:
          "We document all damage to locks, doors and frames and advise on the repair options available.",
      },
      {
        step: 3,
        title: "Immediate Security",
        description:
          "We replace compromised locks, reinforce damaged frames, and arrange boarding where glazing is broken.",
      },
      {
        step: 4,
        title: "Documentation and Follow-Up",
        description:
          "We provide a full written record for your insurer and return for any follow-up repairs required.",
      },
    ],
    emergencyScenarios: [
      "Front door forced open during break-in",
      "Lock cylinder drilled out by intruder",
      "Door frame split at the lock keep",
      "Window secured entry point breached",
      "Back door kicked in",
    ],
    faqs: [
      {
        question: "What should I do immediately after a break-in?",
        answer:
          "First, call the police and do not touch anything until they've attended. Once they've been, call us. If the property is insecure overnight, we can arrange boarding until permanent repairs are made. Document everything with photographs if possible.",
      },
      {
        question: "Will my insurance cover the locksmith costs after a break-in?",
        answer:
          "Most home insurance policies cover emergency locksmith and repair costs following a break-in. We provide full written documentation of the damage and our work that your insurer will need for the claim.",
      },
      {
        question: "Can you reinforce a door that's been kicked in?",
        answer:
          "We can replace the lock and repair or reinforce the strike plate and keep. For significant frame damage, we work alongside our trusted joiners who can carry out frame repairs. We'll coordinate this for you.",
      },
    ],
    content: {
      section1: {
        heading: "Securing Your Property After a Break-In",
        body: "The immediate priority after a burglary is to make your property secure again. A door that can't be locked, a frame that's been split, or a cylinder that's been drilled — all of these leave you exposed until they're addressed. We respond to break-in calls as a priority and aim to have your property secured on the same day.",
      },
      section2: {
        heading: "Understanding How Most Break-Ins Happen",
        body: "The majority of domestic break-ins in London involve either cylinder snapping (where the visible portion of the door cylinder is snapped off with a tool), door kicking (forcing the door until the frame or keep gives way), or opportunistic entry through unsecured doors and windows.\n\nUnderstanding the method used in your break-in helps us recommend the most relevant security upgrades to prevent a repeat. We'll walk you through what happened and what would make the most difference going forward.",
      },
      section3: {
        heading: "Making Your Home More Secure After a Burglary",
        body: "Statistics show that homes that have been burgled are at higher risk of a repeat break-in within the following months. Upgrading from standard to anti-snap cylinders, fitting a door chain or reinforced letterbox, and ensuring rear entry points are properly secured can make a significant difference. We'll conduct a thorough security review and advise on the most effective improvements for your specific property.",
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
    ],
  },
  {
    slug: "smart-lock-installation",
    title: "Smart Lock Installation Dulwich",
    shortTitle: "Smart Lock Installation",
    metaTitle: "Smart Lock Installation Dulwich | Keyless Entry – TrustLock",
    metaDescription:
      "Professional smart lock installation in Dulwich. Yale, August, Nuki and Ultion smart locks fitted and configured by expert locksmiths. Keyless entry for homes and businesses.",
    headline: "Smart Lock Installation in Dulwich — The Future of Home Security",
    heroTagline: "Keyless entry, expertly installed.",
    intro:
      "Smart locks offer convenience, flexibility and enhanced security for modern homes and businesses. From keypad entry to app-controlled locks with guest access management, we supply and install leading smart lock brands including Yale, August, Nuki and Ultion smart cylinders across Dulwich and South London.",
    icon: "Smartphone",
    image: "/images/services/smart-lock-installation.jpg",
    emergencyService: false,
    priceFrom: "£120",
    responseTime: "Same day",
    features: [
      "Yale Smart Living range",
      "August and Nuki smart locks",
      "Ultion smart cylinders",
      "App and keypad access",
      "Guest access management",
      "Existing lock compatibility assessment",
    ],
    benefits: [
      {
        title: "Convenience Without Compromise",
        description:
          "Never get locked out again. Access your home via app, code, key fob or the physical key backup that all quality smart locks include.",
      },
      {
        title: "Guest Access Control",
        description:
          "Issue temporary access codes for guests, Airbnb visitors or tradespeople — and revoke them remotely when no longer needed.",
      },
      {
        title: "Activity Logging",
        description:
          "Know exactly when your door was unlocked and by whom. Particularly valuable for families, landlords and businesses.",
      },
      {
        title: "Professional Configuration",
        description:
          "We don't just fit the hardware — we configure the app, set up user accounts, and ensure everything works perfectly before we leave.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Compatibility Check",
        description: "We assess your existing door and lock setup to confirm smart lock compatibility before recommending a product.",
      },
      {
        step: 2,
        title: "Product Recommendation",
        description: "We recommend the best smart lock for your door type, security needs and budget.",
      },
      {
        step: 3,
        title: "Installation and Configuration",
        description: "The lock is fitted and fully configured including app setup, user accounts, and backup access options.",
      },
      {
        step: 4,
        title: "Demonstration",
        description: "We walk you through all features so you're completely comfortable using your new smart lock.",
      },
    ],
    emergencyScenarios: [
      "Landlord wanting remote access management",
      "Airbnb host needing guest code management",
      "Household wanting keyless convenience",
      "Business needing staff access logs",
    ],
    faqs: [
      {
        question: "Are smart locks as secure as traditional locks?",
        answer:
          "Quality smart locks from brands like Yale, Ultion and Nuki use the same high-security mechanical components as their non-smart equivalents, with the addition of electronic access methods. They also include a physical key backup. When installed correctly, they offer security equivalent to or better than a standard lock.",
      },
      {
        question: "Will a smart lock work with my existing door?",
        answer:
          "Most smart locks are designed to fit standard euro cylinder holes or to retrofit onto existing doors with minimal modification. We assess compatibility before recommending any product to ensure a clean, proper installation.",
      },
      {
        question: "What happens if the battery dies?",
        answer:
          "All quality smart locks include a physical key override, and most will alert you via the app when battery levels are low. Some models also allow emergency charging via a USB port on the exterior.",
      },
      {
        question: "Can smart locks be integrated with smart home systems?",
        answer:
          "Many models support integration with Amazon Alexa, Google Home and Apple HomeKit. We can advise on the best option for your existing smart home setup.",
      },
    ],
    content: {
      section1: {
        heading: "Why Smart Locks Are Worth Considering in 2025",
        body: "The practicality case for smart locks has never been stronger. For rental property owners, the ability to issue and revoke access codes remotely eliminates the need for key handovers entirely. For families, the activity log feature provides peace of mind about when children arrive home. For remote workers who regularly let in tradespeople, app-based access control is a genuine quality-of-life improvement.\n\nThe security case is equally strong when you choose from reputable brands. The days of early smart locks being trivially hacked are behind us — modern products from Yale, Nuki and Ultion include multiple layers of protection.",
      },
      section2: {
        heading: "Smart Lock Brands We Install",
        body: "We install and configure smart locks from the leading brands available in the UK. Yale's Smart Living range integrates seamlessly with their alarm systems. Nuki and August offer retrofit solutions that work alongside your existing cylinder. Ultion's smart cylinder is particularly impressive — combining anti-snap security credentials with smart access functionality in a single, compact unit.",
      },
      section3: {
        heading: "Professional Installation Makes the Difference",
        body: "Smart lock installation involves more than fitting hardware. Incorrect installation can leave security gaps, cause the lock to behave unpredictably, or result in poor app connectivity. We ensure the mechanical installation is precise, the electronic pairing is correct, and you fully understand how to use and manage your new lock before we leave.",
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
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

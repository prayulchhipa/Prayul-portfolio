export const profile = {
  name: "Prayul Bolya",
  firstName: "Prayul",
  title: "Software Engineer · FlutterFlow · Flutter · Firebase · Supabase · AI",
  appsDelivered: 40,
  email: "prayulchhipa@gmail.com",
  phone: "+91 7300394625",
  phoneRaw: "917300394625",
  location: "Jaipur, India",
  linkedin: "https://www.linkedin.com/in/prayul-bolya-01ab1319b",
  cv: "/Prayul-Bolya-CV.pdf",
  roles: [
    "Software Engineer",
    "FlutterFlow & Flutter Developer",
    "Enterprise FlutterFlow Engineer",
    "Firebase & Supabase Backend",
    "OpenAI & Claude Integrations",
    "Team Lead",
  ],
};

export const stats = [
  { value: 4, suffix: "+", label: "Years experience" },
  { value: 40, suffix: "", label: "Mobile & web apps delivered" },
  { value: 6, prefix: "4–", suffix: "", label: "Developers led in my team" },
  { value: 9.9, suffix: "", label: "MCA CGPA", decimals: 1 },
];

export const whyHire = [
  {
    icon: "🏦",
    title: "Used by millions daily",
    text: "Built ICICI Bank customer-service journeys in Enterprise FlutterFlow, used by millions of customers every day.",
  },
  {
    icon: "🚀",
    title: "Ships to the stores",
    text: "40 apps delivered, published to the App Store and Google Play — CI/CD, code signing, versioning and submissions handled.",
  },
  {
    icon: "🧭",
    title: "Leads a team of 4–6",
    text: "Breaks down features, assigns tasks, reviews builds and unblocks developers to ship on schedule — across 4–6 projects in parallel.",
  },
  {
    icon: "🗄️",
    title: "Builds the backend too",
    text: "Strong backend skills: Firebase & Supabase data models, Cloud and Edge Functions, Security Rules and RLS.",
  },
  {
    icon: "🤖",
    title: "OpenAI & Claude integrations",
    text: "AI image valuation, defect severity analysis, palm-scan insights and conversational companions in production apps.",
  },
  {
    icon: "🤝",
    title: "Owns the client",
    text: "Single point of contact from kickoff to launch: requirements, scoping, estimates, demos, feedback and delivery.",
  },
];

export const experience = [
  {
    company: "Logicstack Technologies Pvt. Ltd.",
    role: "Software Engineer",
    period: "Oct 2022 – Present",
    location: "Jaipur",
    highlights: [
      ["ICICI Bank", "Built core customer-service journeys in Enterprise FlutterFlow for mobile and webview, used by millions of ICICI customers every day."],
      ["Team leadership", "Lead and mentor a team of 4–6 developers — breaking down features, assigning tasks, reviewing builds and unblocking the team to ship on schedule."],
      ["Client ownership", "Single point of contact from start to finish: requirements, scoping, estimates, progress updates, demos, feedback and final delivery."],
      ["Multi-project delivery", "Run 4–6 projects in parallel, planning sprints and priorities in JIRA and coordinating designers, QA and developers."],
      ["Backend development", "Built backends for many of these apps: database design, auth, Firebase Cloud Functions & Security Rules, Supabase PostgreSQL, RPC, Edge Functions and RLS."],
      ["AI & integrations", "OpenAI and Claude for image valuation, defect severity analysis and companions, plus Stripe, Razorpay, RevenueCat, Gmail, openFDA, WooCommerce, maps and NFC."],
      ["Release management", "Set up CI/CD, managed Android and iOS code signing, versioning and store submissions for the App Store and Google Play."],
      ["Quality & performance", "Reduced build size and load times, fixed memory leaks, secured API keys with JWT and HTTPS, and tracked KPIs with Firebase and Google Analytics."],
    ],
  },
];

export const education = [
  {
    school: "Rajasthan Technical University",
    degree: "Master of Computer Applications (MCA)",
    score: "CGPA 9.9",
    period: "Nov 2020 – Sep 2022",
  },
  {
    school: "University of Rajasthan",
    degree: "Bachelor of Computer Applications (BCA)",
    score: "80.31%",
    period: "Jul 2017 – Nov 2020",
  },
];

export const certifications = [
  { name: "Claude Code Architect", issuer: "Anthropic", status: "In progress" },
];

export const skills = [
  { group: "FlutterFlow", icon: "💙", items: ["FlutterFlow", "Enterprise FlutterFlow", "Custom Actions", "Custom Widgets", "Custom Functions", "Action Blocks", "App / Page State", "FlutterFlow CLI", "Flutter & Dart"] },
  { group: "Firebase", icon: "🔥", items: ["Auth", "Firestore", "Cloud Functions", "Security Rules", "FCM", "Analytics"] },
  { group: "Supabase", icon: "🟢", items: ["PostgreSQL", "RPC", "Edge Functions", "RLS", "Auth", "Storage", "REST APIs"] },
  { group: "AI", icon: "🧠", items: ["OpenAI API", "Claude API", "Image Analysis", "Valuation", "Chat Companions"] },
  { group: "Payments", icon: "💳", items: ["Stripe", "Razorpay", "RevenueCat", "In-app Purchases", "Subscriptions"] },
  { group: "Integrations", icon: "🔌", items: ["Gmail API", "openFDA API", "WooCommerce API", "Google Maps", "Live Location", "NFC", "Wearables"] },
  { group: "Release", icon: "📦", items: ["CI/CD", "Android & iOS Signing", "App Store Connect", "Google Play Console"] },
  { group: "Tools & Languages", icon: "🛠️", items: ["Git", "GitHub", "GitLab", "JIRA", "Postman", "Figma", "VS Code", "Linux", "Dart", "C", "C++", "Java"] },
];

export const marquee = [
  "FlutterFlow", "Enterprise FlutterFlow", "Flutter", "Dart", "Firebase", "Supabase", "OpenAI", "Claude",
  "Stripe", "Razorpay", "RevenueCat", "Google Maps", "NFC", "CI/CD", "App Store", "Google Play", "Figma", "JIRA",
];

export type Category =
  | "AI"
  | "FinTech & Enterprise"
  | "Commerce"
  | "Health & Fitness"
  | "Social & Community"
  | "Travel & Real-time"
  | "Productivity"
  | "Education"
  | "Web Apps";

export type StoreLink = { type: "play" | "ios" | "web"; url: string };

export type Project = {
  name: string;
  tagline: string;
  desc: string;
  tags: string[];
  cats: Category[];
  links?: StoreLink[];
  featured?: boolean;
  badge?: string;
  icon: string;
  hue: number;
};

const play = (id: string): StoreLink => ({ type: "play", url: `https://play.google.com/store/apps/details?id=${id}` });
const ios = (url: string): StoreLink => ({ type: "ios", url });

export const projects: Project[] = [
  // ---------- Featured ----------
  {
    name: "ICICI Bank Services",
    tagline: "Enterprise FlutterFlow · Banking · Millions of daily users",
    desc: "Customer-service journeys for one of India's largest banks, on mobile and webview and used by millions of customers every day: Update Nominee, Communication Details, Date of Birth and PAN, PMJDY, and Re-dispatch of Chequebook and Deliverables.",
    tags: ["Enterprise FlutterFlow", "Banking APIs", "Mobile + Webview"],
    cats: ["FinTech & Enterprise"],
    featured: true,
    badge: "Millions of daily users",
    icon: "🏦",
    hue: 22,
  },
  {
    name: "Kathmandu Sightseeing",
    tagline: "Travel · AI · Live tracking",
    desc: "Hop-On Hop-Off tourism platform for Nepal's capital. Tourists book bus seats, follow the bus live on its route, and explore landmarks with an AI travel assistant and multilingual audio guides.",
    tags: ["Live Tracking", "AI Assistant", "Booking", "Multilingual Audio"],
    cats: ["Travel & Real-time", "AI"],
    links: [ios("https://apps.apple.com/in/app/kathmandu-sightseeing/id6758947912"), play("com.mycompany.kathmandusightseeing")],
    featured: true,
    badge: "App Store & Google Play",
    icon: "🚌",
    hue: 200,
  },
  {
    name: "Tribes",
    tagline: "AI barter marketplace",
    desc: "Users list what they have and what they want, browse listings and propose trades. AI assesses each item's photos and condition to estimate a fair value.",
    tags: ["OpenAI", "Claude", "AI Valuation", "Marketplace"],
    cats: ["AI", "Commerce"],
    links: [play("com.app.trytribes")],
    featured: true,
    badge: "AI-powered",
    icon: "🔄",
    hue: 280,
  },
  {
    name: "Palmyst",
    tagline: "AI self-improvement · Designed by me",
    desc: "Scans the user's palm to identify strengths and weaknesses, then delivers personalised guidance, daily action steps and goal tracking.",
    tags: ["AI Vision", "UI Design", "Goal Tracking"],
    cats: ["AI", "Health & Fitness"],
    links: [play("com.aumadi.palmist")],
    featured: true,
    badge: "Designed & built",
    icon: "✋",
    hue: 320,
  },
  {
    name: "CHRD",
    tagline: "Music marketplace · Admin panel",
    desc: "Connects venues, musicians and fans. Venues post gigs, musicians apply and perform, fans follow artists, and an admin panel oversees users and gigs.",
    tags: ["3 User Roles", "Marketplace", "Admin Panel"],
    cats: ["Commerce", "Social & Community"],
    links: [ios("https://apps.apple.com/us/app/chrd/id6753981357")],
    featured: true,
    badge: "On the App Store",
    icon: "🎸",
    hue: 265,
  },
  {
    name: "SnagBot",
    tagline: "AI property inspection",
    desc: "Inspection app where photos of homes and properties are analysed by AI to detect defects, rate their severity and generate inspection reports.",
    tags: ["AI Vision", "Defect Detection", "Reports"],
    cats: ["AI", "Productivity"],
    featured: true,
    badge: "AI-powered",
    icon: "🏠",
    hue: 160,
  },

  // ---------- Detailed projects ----------
  { name: "KidTask Hub", tagline: "Gmail API · Automation", desc: "Syncs with the parent's Gmail, filters school emails, matches each email to a child by name and automatically creates and assigns tasks for that child.", tags: ["Gmail API", "Automation", "Parsing"], cats: ["AI", "Productivity"], icon: "📬", hue: 45 },
  { name: "GMC (ACE Insurance)", tagline: "Insurance", desc: "Policy management app: view policies and coverage, add members to a policy, intimate new claims and track claim status.", tags: ["Insurance", "Claims Workflow"], cats: ["FinTech & Enterprise"], icon: "🛡️", hue: 210 },
  { name: "SafeCabinet", tagline: "Health · openFDA", desc: "Family medicine manager to track each member's medicines and expiry dates, get scheduled dose reminders and see drug recall data from openFDA.", tags: ["openFDA", "Reminders"], cats: ["Health & Fitness"], icon: "💊", hue: 180 },
  { name: "Studiify", tagline: "EdTech · Focus", desc: "Profiles study habits through a survey, then serves personalised daily questions and multiple mock-test formats, with a study timer and app blocking.", tags: ["Personalisation", "Mock Tests", "App Blocking"], cats: ["Education", "Productivity"], icon: "📚", hue: 230 },
  { name: "WGT", tagline: "Workforce management · Admin panel", desc: "Admins add employees and set pay rates; employees view shifts, clock in and out, take breaks and track their earnings.", tags: ["Clock-in", "Earnings", "Admin Panel"], cats: ["Productivity"], icon: "⏱️", hue: 190 },
  { name: "Homecrew", tagline: "Construction · Web + mobile", desc: "Coordinator web app and subcontractor mobile app for work and material orders, photo-based progress tracking, status updates, and 1-to-1 and group chat.", tags: ["Web + Mobile", "Real-time Chat", "Orders"], cats: ["Web Apps", "Productivity"], icon: "🏗️", hue: 30 },

  // ---------- Other live projects ----------
  { name: "Vinyo", tagline: "Wine education · Community", desc: "Inclusive wine-education app with courses, quizzes, tasting notes, event listings and cellar management.", tags: ["Courses", "Quizzes"], cats: ["Education", "Social & Community"], links: [ios("https://apps.apple.com/us/app/vinyo-unlock-your-inner-somm/id6504428243"), play("app.vinyo")], icon: "🍷", hue: 345 },
  { name: "Jiver Jinx", tagline: "Education · Wellbeing", desc: "Helps schools combat bullying and support students' mental health with resources and tools for educators and students.", tags: ["EdTech", "Wellbeing"], cats: ["Education"], links: [ios("https://apps.apple.com/in/app/jiver-jinx-empower-the-youth/id6450262584"), play("com.jiverjinx")], icon: "🫶", hue: 300 },
  { name: "GA Demands", tagline: "Diamond demand app", desc: "Demand app for the diamond trade, available on the App Store and Google Play.", tags: ["B2B", "iOS + Android"], cats: ["Commerce"], links: [ios("https://apps.apple.com/us/app/ga-demands-diamond-demand-app/id1623581024"), play("com.flutterflow.demandapp")], icon: "💎", hue: 190 },
  { name: "Digi SteelYard", tagline: "B2B · Market data", desc: "Real-time steel market prices, trends and product details, plus networking between suppliers and buyers.", tags: ["Real-time", "B2B"], cats: ["Commerce"], links: [play("com.mycompany.steelyardindia")], icon: "🏭", hue: 215 },
  { name: "Sahu Patrika", tagline: "Matrimony · Subscriptions", desc: "Matrimonial app with profile search, filters and connections, plus an admin panel for users and subscriptions.", tags: ["Subscriptions", "Admin Panel"], cats: ["Social & Community"], links: [play("com.sahupatrika.app")], icon: "💍", hue: 350 },
  { name: "Colma Care", tagline: "Subscriptions · Service requests", desc: "Paint-repair service app: per-property subscriptions and damage-repair requests tracked to resolution.", tags: ["Subscriptions", "Ticketing"], cats: ["Productivity"], links: [ios("https://apps.apple.com/us/app/colma-care/id6837059591")], icon: "🎨", hue: 15 },
  { name: "Impel Sports & Pick Up Games", tagline: "Sports · Community · Admin panel", desc: "Find and organise local pickup games, join sessions, and take part in local tournaments and events, with an admin panel to manage it all.", tags: ["Community", "Events", "Admin Panel"], cats: ["Social & Community", "Health & Fitness"], links: [ios("https://apps.apple.com/app/impel-sports-pick-up-games/id6767000772"), play("com.app.impelsporting")], icon: "🏀", hue: 25 },
  { name: "SurfConnect", tagline: "Social · Surfing", desc: "Social platform for surfers to connect and plan sessions, with accessory listings and operator promotions.", tags: ["Social", "Listings"], cats: ["Social & Community"], links: [ios("https://apps.apple.com/app/surfconnect/id6761349254"), play("com.app.surfconnect")], icon: "🏄", hue: 195 },
  { name: "Auram Naturals", tagline: "Android app", desc: "Published on Google Play.", tags: ["Android"], cats: ["Commerce"], links: [play("com.auramnaturals")], icon: "🌿", hue: 120 },
  { name: "Gyan Aura", tagline: "Android · Web", desc: "Available on Google Play and on the web at gyanaura.in.", tags: ["Android", "Web"], cats: ["Education", "Web Apps"], links: [play("com.gyanaura.app"), { type: "web", url: "https://gyanaura.in/" }], icon: "📖", hue: 260 },
  { name: "Medtimes", tagline: "Web", desc: "Web platform at medtimes.co.", tags: ["Web"], cats: ["Web Apps", "Health & Fitness"], links: [{ type: "web", url: "https://medtimes.co/" }], icon: "🩺", hue: 170 },

  // ---------- Also built ----------
  { name: "Held", tagline: "AI companion", desc: "Social companion app where users chat with an AI companion that acts as a supportive friend.", tags: ["Conversational AI", "Chat"], cats: ["AI", "Social & Community"], icon: "💬", hue: 340 },
  { name: "Biostress", tagline: "Wearables · Health", desc: "Smartwatch-connected health tracking with sleep and stress logs and in-app wellbeing surveys.", tags: ["Wearables", "Health Data"], cats: ["Health & Fitness"], icon: "⌚", hue: 140 },
  { name: "Looks Women", tagline: "E-commerce · WooCommerce", desc: "Women's fashion e-commerce on WooCommerce: catalogue, cart, checkout and full commerce features.", tags: ["WooCommerce", "Checkout"], cats: ["Commerce"], icon: "👗", hue: 330 },
  { name: "Cropzy", tagline: "B2B marketplace", desc: "Agricultural marketplace for buying crops such as wheat and corn in bulk.", tags: ["B2B", "Marketplace"], cats: ["Commerce"], icon: "🌾", hue: 85 },
  { name: "Vito Pro", tagline: "On-demand services", desc: "Choose one or several services and submit them in a single request.", tags: ["On-demand"], cats: ["Commerce"], icon: "🧰", hue: 35 },
  { name: "Fly Mode", tagline: "Social · Travel", desc: "Connects passengers travelling on the same bus so they can find and interact during the journey.", tags: ["Social", "Travel"], cats: ["Travel & Real-time", "Social & Community"], icon: "🧳", hue: 205 },
  { name: "Hey Coby", tagline: "NFC", desc: "Tap NFC tags to trigger custom actions users configure.", tags: ["NFC", "Automation"], cats: ["Productivity"], icon: "📡", hue: 250 },
  { name: "Wanda", tagline: "Fitness · Nutrition", desc: "Exercise library, workout tracking and personalised meal plans from height and weight.", tags: ["Nutrition", "Tracking"], cats: ["Health & Fitness"], icon: "🥗", hue: 110 },
  { name: "Little Wine", tagline: "Discovery", desc: "Discover wineries and record tasting notes as text, voice and video.", tags: ["Media", "Discovery"], cats: ["Social & Community"], icon: "🍇", hue: 290 },
  { name: "connectXchange", tagline: "Communities", desc: "Public/private Chapters with surveys, events, broadcasts and 1-on-1 member chats.", tags: ["Chat", "Surveys"], cats: ["Social & Community"], icon: "🌐", hue: 235 },
  { name: "RDI", tagline: "Military housing web app", desc: "Allots quarters to military officers by rank, location and availability, and maps the command structure.", tags: ["Web", "Allocation"], cats: ["Web Apps", "FinTech & Enterprise"], icon: "🎖️", hue: 95 },
  { name: "My Coupon Club", tagline: "Subscriptions", desc: "Subscription service unlocking a range of coupons with seamless redemption.", tags: ["Subscriptions"], cats: ["Commerce"], icon: "🎟️", hue: 50 },
  { name: "My Workout Club", tagline: "Fitness · Subscriptions", desc: "Subscription app with gym exercise videos and educational fitness content.", tags: ["Video", "Subscriptions"], cats: ["Health & Fitness"], icon: "🏋️", hue: 5 },
  { name: "Umaru Marketplace", tagline: "E-commerce", desc: "Multi-category e-commerce platform with friendly navigation and secure transactions.", tags: ["E-commerce"], cats: ["Commerce"], icon: "🛍️", hue: 40 },
  { name: "Workout App", tagline: "Fitness", desc: "Personal-trainer style app with exercise videos, set timers and posture demonstrations.", tags: ["Video", "Timers"], cats: ["Health & Fitness"], icon: "💪", hue: 10 },
];

export const liveApps = projects.filter((p) => p.links?.length);

export const categories: ("All" | Category)[] = [
  "All", "AI", "FinTech & Enterprise", "Commerce", "Health & Fitness", "Social & Community", "Travel & Real-time", "Productivity", "Education", "Web Apps",
];

/**
 * data.js - Bilingual Data Store & Translation Catalog
 * Mohammed Al-Attas (محمد العطاس) Portfolio
 */

const portfolioData = {
  profile: {
    name: {
      ar: "محمد العطاس",
      en: "Mohammed Al-Attas"
    },
    role: {
      ar: "مطور تطبيقات جوال ومصمم واجهات",
      en: "Mobile App Engineer & UI/UX Designer"
    },
    bio: {
      ar: "أحوّل الأفكار والتصاميم إلى تطبيقات جوال سريعة وعالية الأداء لنظامي iOS و Android باستخدام Flutter، مع التزام بأعلى معايير المعمارية النظيفة Clean Architecture وتجربة مستخدم سلسة ومتقنة.",
      en: "Passionate about transforming creative concepts into high-performance, polished mobile experiences for iOS & Android using Flutter & native toolkits, built with Clean Architecture, micro-interactions, and user-centric craft."
    },
    status: {
      ar: "جاهز لمشاريع جديدة وفرص نوعية",
      en: "Available for new projects & roles"
    },
    stats: [
      {
        value: "4+",
        label: { ar: "سنوات خبرة في التطوير", en: "Years Experience" }
      },
      {
        value: "6+",
        label: { ar: "تطبيقات منشورة على المتاجر", en: "Shipped Live Apps" }
      },
      {
        value: "3",
        label: { ar: "شركات عملت معها", en: "Companies Worked With" }
      }
    ],
    contacts: {
      email: "muh.ata.dev@gmail.com",
      phone: "+966534954757",
      phoneDisplay: "+966 53 495 4757",
      whatsapp: "https://wa.me/966534954757",
      linkedin: "https://www.linkedin.com/in/mohammed-al-attas-09416a234/",
      github: "https://github.com/MuhDev",
      formspreeAction: "https://formspree.io/f/xaqenjnp"
    }
  },

  projects: [
    {
      id: "pocketdeck",
      title: { ar: "بوكيت دك | PocketDeck", en: "PocketDeck | Hardware Companion Surface" },
      tagline: { ar: "تحويل الهاتف إلى وحدة تحكم ذكية Stream Deck وميكسر صوت وكنترول OBS للويندوز", en: "Stream Deck, per-app audio mixer, and OBS cockpit companion surface for Windows" },
      logo: "assets/images/projects/pocketdeck-logo.png",
      preview: [
        "assets/images/projects/pocketdeck-1.png",
        "assets/images/projects/pocketdeck-2.png",
        "assets/images/projects/pocketdeck-3.png"
      ],
      layout: "landscape",
      date: "2026",
      badge: { ar: "مفتوح المصدر", en: "Open Source" },
      description: {
        ar: "مشروع مفتوح المصدر يحوّل الهاتف أو الجهاز اللوحي إلى وحدة تحكم عتادية فائقة السرعة، تتصل مباشرة بنظام Windows عبر الشبكة المحلية بدون أي اشتراكات سحابية. يشتمل على مفاتيح تشغيل سريعة، ميكسر للتحكم بصوت التطبيقات بشكل منفصل، مراقبة حية لأداء المعالج والكرت، وكونسول متكامل للتحكم ببثوث OBS Studio.",
        en: "An innovative open-source, low-latency companion surface served directly from Windows PC over local network with zero cloud dependencies. Turns smartphones or tablets into a dedicated Stream Deck, per-application audio mixer (via Windows CoreAudio), live hardware telemetry monitor (CPU/RAM/GPU), media transport surface, and full OBS Studio broadcast cockpit via WebSocket v5."
      },
      tags: ["Python", "FastAPI", "WebSockets", "PWA", "OBS Studio", "Windows CoreAudio", "Open Source"],
      links: [
        { type: "github", url: "https://github.com/MuhDev/pocketdeck", label: { ar: "مستودع المشروع على GitHub", en: "GitHub (Open Source)" } }
      ],
      gallery: [
        "assets/images/apps-images/pocketdeck-1.png",
        "assets/images/apps-images/pocketdeck-4.png",
        "assets/images/apps-images/pocketdeck-2.png",
        "assets/images/apps-images/pocketdeck-5.png",
        "assets/images/apps-images/pocketdeck-3.png"
      ]
    },
    {
      id: "tawreedplus",
      title: { ar: "توريد بلس | TawreedPlus", en: "TawreedPlus | B2B Marketplace" },
      tagline: { ar: "منصة توريد B2B لقطاع الضيافة والمطاعم والتجزئة بالمملكة", en: "B2B Supply Chain & Wholesale Marketplace Platform" },
      logo: "assets/images/projects/tawreedplus-logo.png",
      preview: [
        "assets/images/projects/TawreedPlus-1.png",
        "assets/images/projects/TawreedPlus-2.png",
        "assets/images/projects/TawreedPlus-3.png"
      ],
      date: "2025 - Present",
      description: {
        ar: "تطبيق توريد متطور لخدمة الفنادق والمطاعم والكافيهات ومتاجر التجزئة بالمملكة. يتيح للمنشآت طلب ومقارنة عروض الأسعار اللحظية بالجملة، وتتبع الشحنات المجدولة، مع لوحة تحكم وتحليلات ذكية لتقارير المشتريات بدقة وسلاسة.",
        en: "A premier enterprise B2B supply chain and procurement mobile platform serving the hospitality, restaurant, cafe, and retail sectors. Features instant dynamic RFQ quotation comparisons, real-time shipment tracking, seamless digital invoicing, and analytical dashboards for enterprise purchase governance."
      },
      tags: ["Flutter", "B2B Marketplace", "Clean Architecture", "REST APIs", "Analytics Dashboards", "State Management"],
      links: [
        { type: "appstore", url: "https://apps.apple.com/sa/app/tawreedplus-%D8%AA%D9%88%D8%B1%D9%8A%D8%AF-%D8%A8%D9%84%D8%B3/id6812937858", label: "App Store" },
        { type: "googleplay", url: "https://play.google.com/store/apps/details?id=com.tawreedplus.store", label: "Google Play" }
      ],
      gallery: [
        "assets/images/apps-images/TawreedPlus-1.png",
        "assets/images/apps-images/TawreedPlus-2.png",
        "assets/images/apps-images/TawreedPlus-3.png",
        "assets/images/apps-images/TawreedPlus-4.png",
        "assets/images/apps-images/TawreedPlus-5.png"
      ]
    },
    {
      id: "tawreedplus-driver",
      title: { ar: "توريد بلس السائقين | TawreedPlus Driver", en: "TawreedPlus Driver | Fleet Logistics" },
      tagline: { ar: "تطبيق سائقي الأسطول لإدارة وتوجيه الشحنات وإثبات التسليم الفوري", en: "Real-Time Fleet Routing, Delivery Dispatch & Digital POD" },
      logo: "assets/images/projects/tawreedplus-driver-logo.png",
      preview: [
        "assets/images/projects/TawreedPlus Driver-1.png",
        "assets/images/projects/TawreedPlus Driver-2.png",
        "assets/images/projects/TawreedPlus Driver-3.png"
      ],
      date: "2025 - Present",
      description: {
        ar: "تطبيق مخصص لسائقي أسطول منصة توريد بلس اللوجستية، يتولى توزيع طلبات التوريد بمسارات ملاحة ذكية ومحدثة، مع إمكانية تحديث حالات الشحنات فورياً والتقاط إثبات التسليم الرقمي (POD) لضمان دقة وسرعة العمليات.",
        en: "Dedicated mobile platform for TawreedPlus fleet drivers, handling delivery dispatches, dynamic multi-stop route navigation, real-time shipment status updates, and digital proof-of-delivery (POD) verification."
      },
      tags: ["Flutter", "Geolocation & Maps", "Fleet Logistics", "Clean Architecture", "Proof of Delivery", "State Management"],
      links: [
        { type: "googleplay", url: "https://play.google.com/store/apps/details?id=com.tawreedplus.driver", label: "Google Play" }
      ],
      gallery: [
        "assets/images/apps-images/TawreedPlus Driver-1.jpg",
        "assets/images/apps-images/TawreedPlus Driver-2.jpg",
        "assets/images/apps-images/TawreedPlus Driver-3.jpg"
      ]
    },
    {
      id: "tawreedplus-web",
      title: { ar: "متجر توريد بلس الإلكتروني | TawreedPlus Web Store", en: "TawreedPlus Web Store | B2B Marketplace" },
      tagline: { ar: "بوابة الويب ومتجر التوريد الرقمي B2B لقطاع الأعمال", en: "Enterprise B2B E-Commerce & Wholesale Web Platform" },
      logo: "assets/images/projects/tawreedplus-logo.png",
      preview: [
        "assets/images/projects/tawreedplus-web-1.png",
        "assets/images/projects/tawreedplus-web-2.png",
        "assets/images/projects/tawreedplus-web-3.png",
        "assets/images/projects/tawreedplus-web-4.png"
      ],
      layout: "landscape",
      date: "2025 - Present",
      badge: { ar: "منصة ويب B2B", en: "B2B Web Platform" },
      description: {
        ar: "المتجر الإلكتروني المتكامل لمنصة توريد بلس على الويب، مبني بأحدث تقنيات Next.js لتقديم تجربة تسوق وتوريد سريعة للشركات والمنشآت. يتيح تصفح الكتالوج الشامل، استعراض عروض الأسعار وخصومات الكميات، مع دعم كامل للغات العربية والإنجليزية والأوردو.",
        en: "The enterprise web store and e-commerce portal for TawreedPlus (store.tawreedplus.com), engineered with modern Next.js architecture to provide seamless B2B wholesale procurement for HoReCa and retail businesses. Features dynamic product catalogs, instant RFQ pricing, corporate cart & order management, volume discounting, and full multilingual support (Arabic, English, and Urdu)."
      },
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "B2B E-Commerce", "REST APIs", "Multilingual (AR/EN/UR)"],
      links: [
        { type: "website", url: "https://store.tawreedplus.com/ar", label: { ar: "زيارة متجر الويب", en: "Visit Web Store" } }
      ],
      gallery: [
        "assets/images/apps-images/tawreedplus-web-1.png",
        "assets/images/apps-images/tawreedplus-web-2.png",
        "assets/images/apps-images/tawreedplus-web-3.png",
        "assets/images/apps-images/tawreedplus-web-4.png"
      ]
    },
    {
      id: "qaaf",
      title: { ar: "قاف | Qaaf", en: "Qaaf | Quranic Social" },
      tagline: { ar: "تطبيق متكامل للمحتوى القرآني المرئي والمسموع", en: "Quranic Media & Social Platform" },
      logo: "https://i.ibb.co/F4Ykh6b/qaaf-logo.png",
      preview: [
        "assets/images/projects/Qaff-1.png",
        "assets/images/projects/Qaff-2.png",
        "assets/images/projects/Qaff-7.png"
      ],
      date: "2023 - Present",
      description: {
        ar: "منصة مخصصة للمحتوى القرآني الصوتي والمرئي، تدعم تشغيل الصوت في الخلفية، إنشاء قوائم تشغيل مخصصة، تكرار الآيات لتسهيل الحفظ، مع إمكانية تحميل السور للاستماع دون اتصال بالإنترنت.",
        en: "An immersive social platform dedicated to Quranic video and audio streaming. Features background audio playback, custom playlists, channel subscriptions, segmented looping for memorization, and offline media caching."
      },
      tags: ["Flutter", "Dart", "Firebase", "BLoC", "Clean Architecture", "REST API"],
      links: [
        { type: "appstore", url: "https://apps.apple.com/de/app/قاف-qaaf/id6444524406?platform=iphone", label: "App Store" },
        { type: "googleplay", url: "https://play.google.com/store/apps/details?id=com.cliffex.qaaf&hl=ar", label: "Google Play" }
      ],
      gallery: [
        "https://i.ibb.co/dMpGVmd/1.png",
        "https://i.ibb.co/j6hwsmN/2.png",
        "https://i.ibb.co/fHDrf93/3.png",
        "https://i.ibb.co/hKFHJm9/4.png",
        "https://i.ibb.co/vxQ6rBJ/5.png",
        "https://i.ibb.co/4MPw862/6.png",
        "https://i.ibb.co/rF6yhbX/7.png"
      ]
    },
    {
      id: "askurdr",
      title: { ar: "اسأل طبيبك | AskUrDr", en: "AskUrDr | Telehealth Platform" },
      tagline: { ar: "استشارات طبية فورية بمكالمات فيديو مشفرة ودفع آمن", en: "Encrypted Video Consultations & HyperPay" },
      logo: "https://i.ibb.co/X5GDs90/logo-removebg-preview.png",
      preview: [
        "assets/images/projects/AskUrDr-1.png",
        "assets/images/projects/AskUrDr-2.png",
        "assets/images/projects/AskUrDr-3.png"
      ],
      date: "2022 - 2023",
      description: {
        ar: "منظومة استشارات طبية متكاملة تتيح للمرضى حجز المواعيد والتواصل المباشر مع نخبة من الأطباء المعتمدين عبر مكالمات صوت وفيديو مشفرة وعالية الدقة، مع ربط موثوق مع بوابة HyperPay لإتمام المدفوعات بأمان وسهولة.",
        en: "Comprehensive telemedicine mobile solution connecting patients with certified medical professionals through encrypted real-time video/audio calls, appointment scheduling, and secure transactions powered by HyperPay gateway."
      },
      tags: ["Flutter", "WebRTC / Video", "HyperPay", "Clean Architecture", "State Management"],
      links: [
        { type: "appstore", url: "https://apps.apple.com/sa/app/askurdr/id1576209992", label: "App Store" },
        { type: "googleplay", url: "https://play.google.com/store/apps/details?id=com.askurdr.doctors", label: "Google Play" }
      ],
      gallery: [
        "https://i.ibb.co/zrTWJNd/1.png",
        "https://i.ibb.co/7k9FWp6/2.png",
        "https://i.ibb.co/fvLwzCh/3.png",
        "https://i.ibb.co/M8NrGWj/4.png",
        "https://i.ibb.co/YyXFrMz/5.png"
      ]
    },
    {
      id: "cashback",
      title: { ar: "كاش باك | CashBack", en: "CashBack | Rewards & NFC" },
      tagline: { ar: "عروض واسترداد نقدي مع قارئ بطاقات NFC للمتاجر القريبة", en: "Nearby Store Offers & NFC Payments" },
      logo: "https://i.ibb.co/K0xFsz2/logo.png",
      preview: [
        "assets/images/projects/CashBack-1.png",
        "assets/images/projects/CashBack-2.png"
      ],
      date: "2023",
      description: {
        ar: "تطبيق تجاري ذكي يكتشف المتاجر والمطاعم المجاورة تلقائياً، مقدماً عروضاً حصرية ومكافآت استرداد نقدي فوري، مع دعم قارئ تقنية NFC لقراءة البطاقات وتسهيل عمليات الدفع الفوري مع بوابة HyperPay.",
        en: "Location-aware retail and lifestyle app delivering dynamic merchant discounts and instant cashback rewards. Features integrated hardware NFC card reading for point-of-sale verification and secure HyperPay transactions."
      },
      tags: ["Flutter", "NFC Hardware", "HyperPay", "Geolocation", "State Management"],
      links: [
        { type: "appstore", url: "https://apps.apple.com/us/app/cashback-%D9%83%D8%A7%D8%B4-%D8%A8%D8%A7%D9%83/id6466800146", label: "App Store" },
        { type: "googleplay", url: "https://play.google.com/store/apps/details?id=com.fancy.technologies.cashbackapp", label: "Google Play" }
      ],
      gallery: [
        "https://i.ibb.co/Z8r09tJ/1.png",
        "https://i.ibb.co/k1g78kP/2.png",
        "https://i.ibb.co/zGhnb38/3.png",
        "https://i.ibb.co/sbkRX8W/4.png",
        "https://i.ibb.co/b6fqgcr/5.png"
      ]
    },
    {
      id: "makarem",
      title: { ar: "مؤسسة مكارم | Makarem", en: "Makarem Charity App" },
      tagline: { ar: "تطبيق لعرض المشاريع الخيرية مع مولد ملصقات واتساب", en: "Humanitarian Projects & WhatsApp Stickers" },
      logo: "https://i.ibb.co/1b7qryz/logo.png",
      preview: [
        "assets/images/projects/Makarem-1.png",
        "assets/images/projects/Makarem-2.png",
        "assets/images/projects/Makarem-3.png"
      ],
      date: "2023",
      description: {
        ar: "التطبيق الرسمي لمؤسسة مكارم الإنسانية، يعرض المشاريع الإغاثية ومجالات التبرع بتصميم عصري وأنيق، بالإضافة إلى محرك مخصص لتصدير ملصقات واتساب لدعم الحملات التوعوية والخيرية.",
        en: "Official mobile application for Makarem Charity Foundation, organizing humanitarian programs, fundraising campaigns, and featuring a custom export engine for branded WhatsApp sticker packs."
      },
      tags: ["Flutter", "WhatsApp API", "UI/UX Design", "Clean Code"],
      links: [
        { type: "appstore", url: "https://apps.apple.com/au/app/مكارم/id1484245255", label: "App Store" },
        { type: "googleplay", url: "https://play.google.com/store/apps/details?id=sa.org.makarem&hl=ar", label: "Google Play" }
      ],
      gallery: [
        "https://i.ibb.co/K2D37K6/1.png",
        "https://i.ibb.co/s9MDB44/2.png",
        "https://i.ibb.co/nDHjppD/3.png",
        "https://i.ibb.co/BySQB2b/4.png"
      ]
    }
  ],

  bentoCraft: [
    {
      id: "mobile-craft",
      size: "large",
      icon: "fas fa-mobile-screen",
      title: {
        ar: "تطوير تطبيقات جوال احترافية",
        en: "Production-Grade Mobile Engineering"
      },
      desc: {
        ar: "بناء تطبيقات iOS و Android سريعة ومستقرة باستخدام Flutter والتقنيات الأصلية، مع تطبيق معمارية Clean Architecture لضمان سهولة الصيانة وقابلية التوسع مستقبلاً.",
        en: "Building responsive, rock-solid iOS & Android applications with Flutter & native toolkits. Implementing Clean Architecture (Domain, Data, and Presentation layers) to ensure bulletproof testability, maintainability, and scalability."
      },
      tags: ["Flutter", "Dart", "Clean Architecture", "BLoC & Riverpod", "Swift / Kotlin", "Offline-First", "CI/CD"]
    },
    {
      id: "uiux-craft",
      size: "medium",
      icon: "fas fa-compass-drafting",
      title: {
        ar: "تصميم واجهات وتجربة مستخدم متقنة",
        en: "UI/UX Craft & Micro-interactions"
      },
      desc: {
        ar: "فهم عميق لمعايير Apple HIG و Material 3. تحويل تصاميم Figma إلى واجهات تفاعلية مريحة وسلسة تتجاوب بدقة مع حركات وتفاعلات المستخدم.",
        en: "Adherence to Apple HIG and Google Material Design. Translating Figma design systems into living, breathing mobile interfaces with polished gesture physics."
      },
      tags: ["Figma", "Design Systems", "Apple HIG", "Micro-interactions", "Accessibility"]
    },
    {
      id: "backend-cloud",
      size: "half",
      icon: "fas fa-cloud-bolt",
      title: {
        ar: "سيرفرات سحابية وتكامل للأنظمة",
        en: "Cloud Infrastructure & APIs"
      },
      desc: {
        ar: "ربط سلس مع Firebase، وقواعد البيانات، وبوابات الدفع الإلكتروني المعتمدة بالسعودية مثل HyperPay، مع توظيف تقنيات الذكاء الاصطناعي لأتمتة العمليات.",
        en: "Seamless integration with Firebase, SQL/NoSQL databases, RESTful/GraphQL APIs, payment gateways (HyperPay), and AI agent workflows."
      },
      tags: ["Firebase", "REST APIs", "HyperPay", "SQL / NoSQL", "AI Agents"]
    },
    {
      id: "work-mode",
      size: "half",
      icon: "fas fa-globe",
      title: {
        ar: "مرونة في العمل والتعاون الفعّال",
        en: "Global Availability & Agility"
      },
      desc: {
        ar: "مرونة عالية في العمل عن بُعد والتعاون مع الشركات وفرق التطوير في المملكة والخليج وعالمياً، وفق منهجيات Agile وتسليم دقيق بالموعد.",
        en: "Available for remote contracts, full-time engineering roles, and startup partnerships across Saudi Arabia, the GCC, and globally."
      },
      tags: ["Remote Work", "Agile / Scrum", "Git / GitHub", "Fast Turnaround"]
    }
  ],

  sphereSkills: [
    { name: "Flutter", icon: "assets/svg/flutter.svg", isImg: true, color: "#02569B", category: "mobile" },
    { name: "Dart", icon: "fas fa-code", isImg: false, color: "#0175C2", category: "mobile" },
    { name: "Swift / iOS", icon: "fab fa-apple", isImg: false, color: "#F05138", category: "mobile" },
    { name: "Kotlin / Android", icon: "fab fa-android", isImg: false, color: "#7F52FF", category: "mobile" },
    { name: "BLoC & Cubit", icon: "fas fa-cubes", isImg: false, color: "#6366F1", category: "mobile" },
    { name: "Riverpod", icon: "fas fa-water", isImg: false, color: "#3B82F6", category: "mobile" },
    { name: "Clean Architecture", icon: "fas fa-layer-group", isImg: false, color: "#A855F7", category: "arch" },
    { name: "Figma", icon: "fab fa-figma", isImg: false, color: "#F24E1E", category: "design" },
    { name: "UI/UX Systems", icon: "fas fa-swatchbook", isImg: false, color: "#EC4899", category: "design" },
    { name: "Apple HIG", icon: "fab fa-app-store-ios", isImg: false, color: "#FFFFFF", colorLight: "#1D1D1F", category: "design" },
    { name: "Firebase", icon: "fas fa-fire", isImg: false, color: "#FFCA28", colorLight: "#D97706", category: "backend" },
    { name: "REST APIs", icon: "fas fa-network-wired", isImg: false, color: "#10B981", colorLight: "#059669", category: "backend" },
    { name: "HyperPay", icon: "fas fa-credit-card", isImg: false, color: "#00A859", category: "backend" },
    { name: "SQL & SQLite", icon: "fas fa-database", isImg: false, color: "#38BDF8", colorLight: "#0284C7", category: "backend" },
    { name: "NoSQL / Hive", icon: "fas fa-leaf", isImg: false, color: "#47A248", category: "backend" },
    { name: "Git", icon: "fab fa-git-alt", isImg: false, color: "#F05032", category: "tools" },
    { name: "GitHub", icon: "fab fa-github", isImg: false, color: "#F0F6FC", colorLight: "#181717", category: "tools" },
    { name: "AI Agents", icon: "fas fa-robot", isImg: false, color: "#8B5CF6", category: "arch" },
    { name: "Docker", icon: "fab fa-docker", isImg: false, color: "#2496ED", category: "tools" },
    { name: "CI/CD & Fastlane", icon: "fas fa-gears", isImg: false, color: "#00F299", colorLight: "#047857", category: "tools" },
    { name: "Python", icon: "fab fa-python", isImg: false, color: "#38BDF8", colorLight: "#1D4ED8", category: "backend" },
    { name: "WebSockets", icon: "fas fa-bolt", isImg: false, color: "#EC4899", category: "backend" }
  ],

  skills: [
    {
      category: { ar: "تطوير تطبيقات الجوال", en: "Mobile Engineering" },
      icon: "fas fa-mobile-alt",
      items: [
        { name: "Flutter", icon: "assets/svg/flutter.svg", isImg: true },
        { name: "Dart", icon: "fas fa-code", isImg: false },
        { name: "iOS / Swift (Native)", icon: "fab fa-apple", isImg: false },
        { name: "Android / Kotlin", icon: "fab fa-android", isImg: false },
        { name: "BLoC / Cubit / Riverpod", icon: "fas fa-cubes", isImg: false }
      ]
    },
    {
      category: { ar: "الباك إند والخدمات السحابية", en: "Backend & Cloud" },
      icon: "fas fa-server",
      items: [
        { name: "Firebase (Auth, Firestore, Cloud Functions)", icon: "fas fa-fire", isImg: false },
        { name: "REST APIs & WebSockets", icon: "fas fa-network-wired", isImg: false },
        { name: "HyperPay Integration", icon: "fas fa-credit-card", isImg: false },
        { name: "SQL & SQLite", icon: "fas fa-database", isImg: false },
        { name: "NoSQL / Hive", icon: "fas fa-leaf", isImg: false }
      ]
    },
    {
      category: { ar: "تصميم الواجهات وتجربة المستخدم", en: "UI/UX & Product Design" },
      icon: "fas fa-palette",
      items: [
        { name: "Figma & FigJam", icon: "fab fa-figma", isImg: false },
        { name: "Design Systems & Tokens", icon: "fas fa-swatchbook", isImg: false },
        { name: "Apple HIG & Material 3", icon: "fas fa-layer-group", isImg: false },
        { name: "Prototyping & Motion", icon: "fas fa-play", isImg: false },
        { name: "User Research & Wireframing", icon: "fas fa-users-viewfinder", isImg: false }
      ]
    },
    {
      category: { ar: "الأدوات والذكاء الاصطناعي", en: "Tools & AI" },
      icon: "fas fa-microchip",
      items: [
        { name: "Git & GitHub Workflows", icon: "fab fa-git-alt", isImg: false },
        { name: "AI Coding & Autonomous Agents", icon: "fas fa-robot", isImg: false },
        { name: "Clean Architecture & SOLID", icon: "fas fa-brain", isImg: false },
        { name: "CI/CD & Fastlane", icon: "fas fa-gears", isImg: false },
        { name: "Docker Basics", icon: "fab fa-docker", isImg: false }
      ]
    }
  ],

  education: [
    {
      title: { ar: "بكالوريوس تقنية المعلومات", en: "Bachelor of Information Technology" },
      issuer: { ar: "جامعة حضرموت", en: "Hadhramout University" },
      date: "2018 - 2022",
      desc: {
        ar: "مسار تطوير البرمجيات وهندسة النظم، مع التركيز على أسس علوم الحاسب، هياكل البيانات، وتصميم الأنظمة المتقدمة.",
        en: "Software Development and Systems Engineering track. Core study of computer science fundamentals, data structures, and enterprise software engineering."
      },
      link: null
    },
    {
      title: { ar: "Google AI Essentials", en: "Google AI Essentials Certificate" },
      issuer: { ar: "Google / Coursera", en: "Google / Coursera" },
      date: "2026",
      desc: {
        ar: "شهادة مهنية معتمدة من Google في استراتيجيات وتطبيقات الذكاء الاصطناعي التوليدي وهندسة الأوامر الذكية لحل المشكلات التقنية.",
        en: "Certified professional credential from Google covering foundational generative AI strategies, prompt engineering, and intelligent workflow optimization."
      },
      link: "https://coursera.org/share/11ac79d580c6cc1cf4341e305f6995e2"
    }
  ],

  i18nDict: {
    ar: {
      navHome: "الرئيسية",
      navCraft: "الحِرفية",
      navProjects: "الأعمال",
      navSkills: "المهارات",
      navEducation: "التعليم",
      navContact: "تواصل معي",
      heroExploreBtn: "تصفح أعمالي",
      heroContactBtn: "ابدأ محادثة",
      craftBadge: "الرؤية والأسلوب",
      craftTitle: "بين دقة الكود وإتقان التجربة",
      craftSubtitle: "لا نبني مجرد تطبيقات، بل نصنع تجارب رقمية سريعة، موثوقة، ومصممة بأعلى معايير الإتقان والجودة.",
      projectsBadge: "سجل الأعمال",
      projectsTitle: "مشاريع وتطبيقات مختارة",
      projectsSubtitle: "نماذج من التطبيقات المنشورة على المتاجر التي قمت بتطويرها وهندستها وفق أعلى معايير الأداء والاعتمادية.",
      viewDetailsBtn: "تفاصيل المشروع",
      skillsBadge: "الترسانة التقنية",
      skillsTitle: "المهارات والتقنيات",
      skillsSubtitle: "كرة تفاعلية ثلاثية الأبعاد تعرض التقنيات والأدوات التي أعتمد عليها في بناء المشاريع. اسحب الكرة واستكشف التفاصيل.",
      skillsFilterAll: "الكل",
      skillsFilterMobile: "تطوير الجوال",
      skillsFilterDesign: "تصميم الواجهات",
      skillsFilterBackend: "السحابة والباك إند",
      skillsFilterTools: "الأدوات والمعمارية",
      sphereHint: "اسحب لتدوير كرة المهارات واستكشاف التقنيات",
      marqueeHeading: "تقنيات ومكتبات إضافية أعتمد عليها في عملي اليومي",
      educationBadge: "المسار الأكاديمي",
      educationTitle: "الشهادات والتعليم",
      educationSubtitle: "أساس أكاديمي راسخ في هندسة البرمجيات، مقترن بالتطوير المستمر لأحدث تقنيات الذكاء الاصطناعي.",
      viewCertBtn: "التحقق من الشهادة",
      contactBadge: "لنبدأ العمل معاً",
      contactTitle: "جاهز لإطلاق مشروعك القادم؟",
      contactSubtitle: "سواء كانت لديك فكرة تطبيق جديدة أو تبحث عن مهندس متمرس للانضمام لفريقك، يسعدني التحدث معك ومناقشة التفاصيل.",
      contactDirectHeading: "قنوات التواصل المباشر",
      contactDirectDesc: "متاح دائماً لمناقشة أفكار وتطبيقات جديدة وتقديم حلول تقنية وتصميمية متكاملة.",
      contactWhatsappTitle: "محادثة واتساب",
      contactWhatsappSub: "رد سريع ومباشر",
      contactPhoneTitle: "اتصال هاتفي",
      contactPhoneSub: "متاح للمكالمات",
      contactEmailTitle: "البريد الإلكتروني",
      contactEmailSub: "انقر لنسخ البريد",
      copiedToastPhone: "تم نسخ رقم الهاتف بنجاح!",
      contactAvailability: "رد سريع • الرياض، السعودية 🇸🇦",
      copyEmail: "نسخ البريد الإلكتروني",
      copiedToast: "تم نسخ البريد الإلكتروني بنجاح!",
      formNamePlaceholder: "الاسم الكريم",
      formEmailPlaceholder: "البريد الإلكتروني",
      formMsgPlaceholder: "أخبرني عن مشروعك، فكرتك، أو استفسارك...",
      formSubmitBtn: "إرسال الرسالة",
      formSending: "جارٍ الإرسال...",
      formSuccess: "تم استلام رسالتك بنجاح! سأتواصل معك قريباً.",
      formError: "حدث خطأ أثناء الإرسال. يمكنك مراسلتي مباشرة عبر البريد الإلكتروني أو الواتساب.",
      rightsReserved: "جميع الحقوق محفوظة.",
      backToTop: "للأعلى"
    },
    en: {
      navHome: "Home",
      navCraft: "Craft",
      navProjects: "Projects",
      navSkills: "Skills",
      navEducation: "Education",
      navContact: "Contact",
      heroExploreBtn: "Explore Projects",
      heroContactBtn: "Let's Talk",
      craftBadge: "Philosophy & Craft",
      craftTitle: "Engineering Meets Product Taste",
      craftSubtitle: "Bridging the gap between ambitious product design and resilient, production-ready code.",
      projectsBadge: "Featured Work",
      projectsTitle: "Shipped Applications",
      projectsSubtitle: "A curated collection of live apps built for scale, performance, and delightful usability.",
      viewDetailsBtn: "Case Study",
      skillsBadge: "Tech Stack",
      skillsTitle: "Skills & Capabilities",
      skillsSubtitle: "An interactive 3D physics sphere showcasing my engineering toolbox. Drag to rotate and explore.",
      skillsFilterAll: "All",
      skillsFilterMobile: "Mobile & Flutter",
      skillsFilterDesign: "UI/UX & Design",
      skillsFilterBackend: "Backend & Cloud",
      skillsFilterTools: "Tools & Architecture",
      sphereHint: "Drag or swipe to rotate 3D skills sphere",
      marqueeHeading: "Additional technologies & tools I work with daily",
      educationBadge: "Credentials",
      educationTitle: "Education & Certifications",
      educationSubtitle: "Solid academic software foundation paired with current industry AI accreditations.",
      viewCertBtn: "Verify Credential",
      contactBadge: "Start a Conversation",
      contactTitle: "Let's build something enduring",
      contactSubtitle: "Have a new mobile product in mind or looking for an engineer who cares deeply about UX? Let's connect.",
      contactDirectHeading: "Direct Channels",
      contactDirectDesc: "I am always open to discussing new mobile applications, engineering challenges, or design partnerships.",
      contactWhatsappTitle: "WhatsApp Chat",
      contactWhatsappSub: "Instant & direct chat",
      contactPhoneTitle: "Phone Call",
      contactPhoneSub: "Available via mobile",
      contactEmailTitle: "Email Address",
      contactEmailSub: "Click to copy email",
      copiedToastPhone: "Phone number copied to clipboard!",
      contactAvailability: "Fast Response • Riyadh (UTC+3)",
      copyEmail: "Copy Email Address",
      copiedToast: "Email address copied to clipboard!",
      formNamePlaceholder: "Your Name",
      formEmailPlaceholder: "Your Email Address",
      formMsgPlaceholder: "Tell me about your project, timeline, or inquiry...",
      formSubmitBtn: "Send Message",
      formSending: "Sending...",
      formSuccess: "Message received! I'll get back to you shortly.",
      formError: "Submission failed. Please reach out directly via email.",
      rightsReserved: "All rights reserved.",
      backToTop: "Back to top"
    }
  }
};

if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}

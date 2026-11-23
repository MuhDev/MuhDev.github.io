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
        "assets/images/showcase/pocketdeck-deck.webp",
        "assets/images/showcase/pocketdeck-mixer.webp",
        "assets/images/showcase/pocketdeck-obs.webp"
      ],
      layout: "phone",
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
        { src: "assets/images/showcase/pocketdeck-deck.webp", width: 425, height: 921, label: { ar: "لوحة التحكّم", en: "Control deck" } },
        { src: "assets/images/showcase/pocketdeck-mixer.webp", width: 430, height: 932, label: { ar: "مِزج الصوت", en: "Audio mixer" } },
        { src: "assets/images/showcase/pocketdeck-obs.webp", width: 425, height: 921, label: { ar: "التحكّم في OBS", en: "OBS controls" } }
      ]
    },
    {
      id: "tawreedplus",
      title: { ar: "توريد بلس | TawreedPlus", en: "TawreedPlus | B2B Marketplace" },
      tagline: { ar: "منصة توريد B2B لقطاع الضيافة والمطاعم والتجزئة بالمملكة", en: "B2B Supply Chain & Wholesale Marketplace Platform" },
      logo: "assets/images/projects/tawreedplus-logo.png",
      preview: [
        "assets/images/showcase/tawreed-app-1.webp",
        "assets/images/showcase/tawreed-app-2.webp",
        "assets/images/showcase/tawreed-app-3.webp"
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
        "assets/images/showcase/tawreed-app-1.webp",
        "assets/images/showcase/tawreed-app-2.webp",
        "assets/images/showcase/tawreed-app-3.webp",
        "assets/images/showcase/tawreed-app-4.webp",
        "assets/images/showcase/tawreed-app-5.webp"
      ]
    },
    {
      id: "tawreedplus-driver",
      title: { ar: "توريد بلس السائقين | TawreedPlus Driver", en: "TawreedPlus Driver | Fleet Logistics" },
      tagline: { ar: "تطبيق سائقي الأسطول لإدارة وتوجيه الشحنات وإثبات التسليم الفوري", en: "Real-Time Fleet Routing, Delivery Dispatch & Digital POD" },
      logo: "assets/images/projects/tawreedplus-driver-logo.png",
      preview: [
        "assets/images/showcase/tawreed-driver-1.webp",
        "assets/images/showcase/tawreed-driver-2.webp",
        "assets/images/showcase/tawreed-driver-3.webp"
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
        "assets/images/showcase/tawreed-driver-1.webp",
        "assets/images/showcase/tawreed-driver-2.webp",
        "assets/images/showcase/tawreed-driver-3.webp",
        "assets/images/showcase/tawreed-driver-4.webp"
      ]
    },
    {
      id: "tawreedplus-web",
      title: { ar: "متجر توريد بلس الإلكتروني | TawreedPlus Web Store", en: "TawreedPlus Web Store | B2B Marketplace" },
      tagline: { ar: "بوابة الويب ومتجر التوريد الرقمي B2B لقطاع الأعمال", en: "Enterprise B2B E-Commerce & Wholesale Web Platform" },
      logo: "assets/images/projects/tawreedplus-logo.png",
      preview: [
        "assets/images/projects/tawreedplus-web-1.png",
        "assets/images/showcase/tawreed-product.webp",
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
        { src: "assets/images/showcase/tawreed-product.webp", width: 1275, height: 790, label: { ar: "تفاصيل المنتج", en: "Product details" } },
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
        "assets/images/showcase/qaaf-browse.webp",
        "assets/images/showcase/qaaf-player.webp",
        "assets/images/projects/Qaff-7.png"
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
        "assets/images/projects/AskUrDr-1.png",
        "assets/images/projects/AskUrDr-2.png",
        "assets/images/projects/AskUrDr-3.png"
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
        "assets/images/projects/CashBack-1.png",
        "assets/images/projects/CashBack-2.png"
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
        "assets/images/projects/Makarem-1.png",
        "assets/images/projects/Makarem-2.png",
        "assets/images/projects/Makarem-3.png"
      ]
    }
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
  ]
};

// Short summaries and artwork used by the work index and case studies.
const projectPresentation = {
  tawreedplus: {
    name: { ar: "توريد بلس", en: "TawreedPlus" },
    type: { ar: "تطبيق جوال · تطبيق سائقين · متجر ويب", en: "Mobile app · Driver app · Web store" },
    summary: {
      ar: "منصة تربط مشتريات المنشآت بتوصيل الطلبات ومتابعتها.",
      en: "A procurement platform connecting business orders with fleet delivery and tracking."
    },
    role: {
      ar: "صمّمت وطوّرت تطبيق المشتريات وتطبيق السائقين باستخدام Flutter، وعملت أيضًا على متجر الويب ولوحة التحكم والأنظمة الخلفية. أكثر ما أعتز به هو مسار تأكيد التسليم الذي يتيح للسائق توثيق تسليم الطلب بصورة.",
      en: "I designed and built the buyer and driver apps in Flutter and contributed to the web store, dashboard, and backend. I’m especially proud of the flow that lets drivers confirm delivery with a photo."
    },
    overview: {
      ar: "تستخدم المطاعم والفنادق ومتاجر التجزئة توريد بلس لطلب عروض أسعار الجملة، ومتابعة الشحنات وإدارة الفواتير. تتوزّع رحلة الطلب بين تطبيق المشتريات وتطبيق السائقين ومتجر الويب.",
      en: "Restaurants, hotels, and retailers use TawreedPlus to compare wholesale quotes, track shipments, and manage invoices. The experience spans a buyer app, a driver app, and a web store."
    },
    platforms: ["tawreedplus", "tawreedplus-driver", "tawreedplus-web"],
    platformName: { ar: "تطبيق المشتريات", en: "Buyer app" },
    platformSummary: {
      ar: "مقارنة عروض أسعار المورّدين، وجدولة الشحنات ومتابعتها، وإدارة المشتريات عبر لوحة التحليلات.",
      en: "Compare supplier quotes, schedule and track shipments, and review purchases through the analytics dashboard."
    },
    artwork: [
      { image: "tawreed-app-2", width: 810, height: 1635, style: "phone work-image--leading" },
      { image: "tawreed-driver-2", width: 785, height: 1660, style: "phone work-image--trailing" }
    ]
  },
  qaaf: {
    name: { ar: "قاف", en: "Qaaf" },
    type: { ar: "تطبيق جوال · وسائط رقمية", en: "Mobile app · Digital media" },
    summary: {
      ar: "تطبيق للمحتوى القرآني يتيح الاستماع دون اتصال وتكرار الآيات للحفظ.",
      en: "A Quranic media app with offline listening and verse repeat for memorization."
    },
    role: {
      ar: "طوّرت تطبيق قاف باستخدام Flutter. أكثر ما أعتز به هو ميزة تكرار الآيات لتسهيل الحفظ، إلى جانب تشغيل الصوت في الخلفية وتنزيل السور للاستماع دون اتصال.",
      en: "I built Qaaf in Flutter. I’m especially proud of the verse repeat feature for memorization, along with background playback and surah downloads for offline listening."
    },
    overview: {
      ar: "يجمع قاف المحتوى القرآني الصوتي والمرئي في تطبيق واحد، مع قوائم تشغيل مخصّصة وأدوات تساعد المستخدم على الاستماع والمراجعة.",
      en: "Qaaf brings Quranic audio and video into one app, with personal playlists and tools for listening and practice."
    },
    approach: {
      ar: "يستمر تشغيل الصوت في الخلفية، ويمكن تنزيل السور للاستماع دون اتصال وتكرار الآيات أثناء الحفظ. يعتمد التطبيق على Flutter وBLoC لإدارة الحالة.",
      en: "Audio continues in the background. Listeners can download surahs for offline use and repeat individual verses for memorization. The app uses Flutter and BLoC for state management."
    },
    artwork: [
      { image: "qaaf-browse", width: 650, height: 1322, style: "phone work-image--leading" },
      { image: "qaaf-player", width: 650, height: 1321, style: "phone work-image--trailing" }
    ]
  },
  pocketdeck: {
    name: "PocketDeck",
    type: { ar: "مفتوح المصدر · ويندوز والويب", en: "Open source · Windows & web" },
    summary: {
      ar: "لوحة تحكّم من هاتفك لاختصارات ويندوز وصوت التطبيقات وبث OBS.",
      en: "A phone-based control surface for Windows shortcuts, per-app audio, and OBS."
    },
    role: {
      ar: "عملت على PocketDeck بمفردي. صمّمت واجهة الهاتف وطوّرت تطبيق ويندوز، بما في ذلك أداة مزج الصوت التي تتيح التحكم في مستوى صوت كل تطبيق على حدة.",
      en: "I built PocketDeck as a solo project. I designed the phone interface and developed the Windows app, including a mixer that lets users control the volume of each app independently."
    },
    overview: {
      ar: "يحوّل PocketDeck الهاتف أو الجهاز اللوحي إلى لوحة تحكّم لجهاز ويندوز. يجمع اختصارات التشغيل ومزج صوت التطبيقات ومراقبة الأداء والتحكّم في بث OBS.",
      en: "PocketDeck turns a phone or tablet into a control surface for a Windows PC. It brings shortcuts, an app-by-app audio mixer, hardware telemetry, and OBS controls into one interface."
    },
    approach: {
      ar: "يُشغَّل التطبيق من جهاز ويندوز ويتصل به الهاتف عبر الشبكة المحلية. يتولّى Windows CoreAudio التحكم في الصوت، ويستخدم تكامل OBS بروتوكول WebSocket.",
      en: "The Windows PC serves the app over the local network. Windows CoreAudio powers per-app audio controls, and the OBS integration communicates over WebSockets."
    },
    screenshotNote: { ar: "لقطات من التطبيق أثناء تشغيله ببيانات تجريبية.", en: "Captured from the running app with sample data." },
    artwork: [
      { image: "pocketdeck-deck", width: 425, height: 921, style: "leading", device: true },
      { image: "pocketdeck-mixer", width: 430, height: 932, style: "trailing", device: true }
    ]
  },
  "tawreedplus-driver": {
    name: { ar: "توريد بلس للسائقين", en: "TawreedPlus Driver" },
    type: { ar: "تطبيق جوال · إدارة التوصيل", en: "Mobile app · Fleet logistics" },
    summary: {
      ar: "توجيه الشحنات ومتابعة حالتها وتوثيق التسليم رقميًا.",
      en: "Dispatch, multi-stop routing, shipment updates, and digital proof of delivery."
    }
  },
  "tawreedplus-web": {
    name: { ar: "متجر توريد بلس", en: "TawreedPlus Web Store" },
    type: { ar: "متجر ويب · تجارة الجملة", en: "Web store · B2B commerce" },
    summary: {
      ar: "متجر جملة يدعم عروض الأسعار وخصومات الكميات بثلاث لغات.",
      en: "A multilingual wholesale storefront with quote requests and volume pricing."
    }
  },
  askurdr: {
    name: { ar: "اسأل طبيبك", en: "AskUrDr" },
    type: { ar: "تطبيق جوال · رعاية صحية", en: "Mobile app · Telehealth" },
    summary: {
      ar: "حجز المواعيد والاستشارات الطبية عن بُعد مع الدفع داخل التطبيق.",
      en: "Appointment booking and remote consultations with in-app payments."
    }
  },
  cashback: {
    name: { ar: "كاش باك", en: "CashBack" },
    type: { ar: "تطبيق جوال · مكافآت", en: "Mobile app · Rewards" },
    summary: {
      ar: "عروض المتاجر القريبة ومكافآت الاسترداد النقدي وتكامل NFC.",
      en: "Nearby offers, cash rewards, and NFC integration."
    }
  },
  makarem: {
    name: { ar: "مكارم", en: "Makarem" },
    type: { ar: "تطبيق جوال · عمل خيري", en: "Mobile app · Nonprofit" },
    summary: {
      ar: "تطبيق لعرض مشاريع الإغاثة والتبرّع ومشاركة الحملات الخيرية.",
      en: "A charity app for discovering relief projects and sharing fundraising campaigns."
    }
  }
};

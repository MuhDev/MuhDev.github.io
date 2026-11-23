const translations = {
  ar: {
    name: "محمد العطاس",
    skip: "انتقل إلى المحتوى",
    navigation: "التنقل الرئيسي",
    navWork: "الأعمال",
    navAbout: "نبذة عني",
    navContact: "تواصل",
    theme: "المظهر الداكن",
    heroTitle: "أصمّم تطبيقات الجوال وأطوّرها.",
    heroDescription: "أنا محمد العطاس، مطوّر تطبيقات جوال ومصمّم واجهات وتجربة مستخدم. أبني منتجات لنظامَي iOS وAndroid، من تصميم التجربة إلى إطلاق التطبيق.",
    viewWork: "استعرض أعمالي",
    getInTouch: "تواصل معي",
    tawreedName: "توريد بلس",
    tawreedCaption: "منصة مشتريات للمنشآت",
    workTitle: "أعمال مختارة",
    workDescription: "تطبيقات جوال ومنتجات ويب وأدوات مفتوحة المصدر.",
    archive: "المزيد من المشاريع",
    aboutTitle: "نبذة عني",
    aboutLead: "أصمّم تجربة التطبيق وأبنيها بـ Flutter.",
    aboutCopy: "أبدأ من فهم ما يحتاجه المستخدم، ثم أصمّم الواجهات وأطوّر التطبيق. عملت على منتجات في التوريد والمحتوى الرقمي والرعاية الصحية، وعلى تكاملات مثل الدفع الإلكتروني والعمل دون اتصال.",
    skillsTitle: "مجالات العمل",
    credentials: "التعليم والشهادات",
    contactTitle: "لنتحدث عن مشروعك أو فريقك.",
    contactDescription: "متاح للعمل على مشاريع مستقلة وفرص ضمن فرق تطوير المنتجات.",
    whatsapp: "واتساب",
    phone: "اتصال",
    copyEmail: "نسخ",
    copyEmailLabel: "نسخ عنوان البريد الإلكتروني",
    copied: "تم نسخ البريد الإلكتروني.",
    copyError: "تعذّر النسخ. يمكنك فتح رابط البريد الإلكتروني مباشرة.",
    formName: "اسمك",
    formEmail: "البريد الإلكتروني",
    formMessage: "رسالتك",
    formSend: "أرسل الرسالة",
    formSending: "جارٍ الإرسال…",
    formSuccess: "وصلت رسالتك. شكرًا لتواصلك!",
    formError: "تعذّر إرسال الرسالة. حاول مجددًا أو راسلني عبر البريد الإلكتروني.",
    backToTop: "العودة للأعلى",
    backToWork: "العودة إلى الأعمال",
    projectPageTitle: "دراسة المشروع",
    projectContact: "هل لديك مشروع مشابه أو فرصة عمل؟",
    projectRole: "دوري في المشروع",
    projectOverview: "نظرة على المشروع",
    projectApproach: "كيف يعمل",
    projectScreens: "واجهات المشروع",
    projectMissing: "لم يُعثر على المشروع",
    projectMissingBody: "يمكنك العودة إلى قائمة الأعمال لاختيار مشروع آخر.",
    openScreenshot: "افتح لقطة الشاشة",
    homepageTitle: "محمد العطاس | تطوير تطبيقات الجوال وتصميم الواجهات"
  },
  en: {
    name: "Mohammed Al-Attas",
    skip: "Skip to content",
    navigation: "Main navigation",
    navWork: "Work",
    navAbout: "About",
    navContact: "Contact",
    theme: "Dark appearance",
    heroTitle: "I design and build mobile apps.",
    heroDescription: "I’m Mohammed Al-Attas, a mobile app engineer and UI/UX designer. I take iOS and Android products from interface design to launch.",
    viewWork: "View my work",
    getInTouch: "Get in touch",
    tawreedName: "TawreedPlus",
    tawreedCaption: "B2B procurement platform",
    workTitle: "Selected work",
    workDescription: "Mobile apps, web products, and open-source tools.",
    archive: "More projects",
    aboutTitle: "About me",
    aboutLead: "I design the experience and build it in Flutter.",
    aboutCopy: "I start with what people need to do, then design the interface and build the app. My work spans procurement, digital content, and healthcare, including payment integrations and offline experiences.",
    skillsTitle: "Areas of work",
    credentials: "Education and credentials",
    contactTitle: "Let’s talk about your project or team.",
    contactDescription: "I’m available for freelance projects and opportunities on product teams.",
    whatsapp: "WhatsApp",
    phone: "Phone",
    copyEmail: "Copy",
    copyEmailLabel: "Copy email address",
    copied: "Email address copied.",
    copyError: "Copying failed. You can open the email link directly.",
    formName: "Your name",
    formEmail: "Email address",
    formMessage: "Your message",
    formSend: "Send message",
    formSending: "Sending…",
    formSuccess: "Your message arrived. Thanks for reaching out!",
    formError: "Your message couldn’t be sent. Try again or reach out by email.",
    backToTop: "Back to top",
    backToWork: "Back to work",
    projectPageTitle: "Project case study",
    projectContact: "Have a similar project or a role in mind?",
    projectRole: "My role",
    projectOverview: "Project overview",
    projectApproach: "How it works",
    projectScreens: "Product screens",
    projectMissing: "Project unavailable",
    projectMissingBody: "Go back to the work list to explore another project.",
    openScreenshot: "Open screenshot",
    homepageTitle: "Mohammed Al-Attas | Mobile App Engineer & UI/UX Designer"
  }
};

function t(key) {
  return translations[root.lang][key];
}

function localize(value) {
  return typeof value === "string" ? value : value[root.lang];
}

function projectUrl(id) {
  return `project.html?id=${encodeURIComponent(id)}&lang=${root.lang}`;
}

function updateLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nLabel));
  });

  document.querySelectorAll("[data-project-link]").forEach((link) => {
    link.href = projectUrl(link.dataset.projectLink);
  });

  document.querySelectorAll("[data-home-link]").forEach((link) => {
    const home = new URL(link.href);
    home.searchParams.set("lang", root.lang);
    link.href = home.href;
  });

  const toggle = document.querySelector("[data-language-toggle]");
  const nextLanguage = root.lang === "ar" ? "en" : "ar";
  toggle.lang = nextLanguage;
  toggle.dir = nextLanguage === "ar" ? "rtl" : "ltr";
  toggle.textContent = nextLanguage === "ar" ? "العربية" : "English";
  toggle.setAttribute("aria-label", nextLanguage === "ar" ? "التبديل إلى العربية" : "Switch to English");
  document.title = t("homepageTitle");
}

document.querySelector("[data-language-toggle]").addEventListener("click", () => {
  root.lang = root.lang === "ar" ? "en" : "ar";
  root.dir = root.lang === "ar" ? "rtl" : "ltr";
  PortfolioPreferences.write("preferred_lang", root.lang);

  const url = new URL(location.href);
  url.searchParams.set("lang", root.lang);
  if (url.protocol !== "file:") history.replaceState(history.state, "", url);

  updateLanguage();
  document.dispatchEvent(new Event("languageChanged"));
});

updateLanguage();

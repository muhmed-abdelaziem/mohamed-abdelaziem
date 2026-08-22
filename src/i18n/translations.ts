export type Lang = "ar" | "en";

export const translations = {
  ar: {
    // Header nav
    nav: {
      about: "عن تعريفي",
      experience: "الخبرة",
      projects: "المشاريع",
      contact: "تواصل معي",
      cv: "السيرة الذاتية",
    },

    // Hero
    hero: {
      greeting: "أهلاً 👋 اسمي",
      name: "محمد عبد العظيم",
      role: "Frontend Engineer & E-Commerce Developer",
      years: "+٢ سنوات",
      description:
        " من الخبرة في بناء بنيات برمجية متقدمة وتطوير منصات الويب الرقمية والتجارة الإلكترونية.",
      cta: "هل نبدأ العمل؟",
      ariaDown: "التمرير إلى القسم التالي",
    },

    // About
    about: {
      badge: "٠١.",
      title: "عني",
      whoTitle: "من هو محمد عبد العظيم؟",
      bio1: 'أنا <strong class="text-white">مهندس واجهات أمامية ومطور تجارة إلكترونية (Frontend Engineer & E-Commerce Developer)</strong> أركز على بناء تجارب رقمية عالية الأداء. متخصص في استخدام <span class="font-[500] text-[var(--color-primary)]">Angular, React.js, Tailwind CSS, PrimeNG و Node.js</span>، وأقوم بتصميم واجهات قابلة للتوسع وتطوير متاجر وتطبيقات التجارة الإلكترونية مثل Shopify و WordPress.',
      bio2: "أربط بين التطوير التقني المتقدم والرؤية التجارية القوية لتحقيق نتائج حقيقية ورفع معدلات التحويل للمتاجر والتطبيقات.",
      workingAt: "أقود العمل في",
      studyingAt: "أبني في",
      certTitle: "الكورسات",
      techTitle: "التكنولوجيا والأدوات",
    },

    // Experience
    experience: {
      badge: "٠٢.",
      title: "الخبرة المهنية",
      items: [
        {
          company: "NZM",
          role: "Frontend Engineer & E-Commerce Developer",
          duration: "2025 - الحاضر",
          isActive: true,
          description: `
تطوير وهندسة تطبيقات ويب ومتاجر إلكترونية عالية الأداء باستخدام React.js و Angular و WordPress و Shopify.<br/>
ربط بوابات الدفع الإلكتروني والـ RESTful APIs مع تطبيق تحسينات متقدمة للسرعة والأداء لتقديم تجربة مستخدم سلسة.
          `,
        },

        {
          company: "Torvo Solutions",
          role: "Frontend Engineer & Automation Developer",
          duration: "2024 - 2025",
          isActive: true,
          description: `
تطوير تطبيقات ويب متجاوبة وعالية الأداء باستخدام Angular مع تحويل تصميمات Figma إلى كود نظيف وقابل للتوسع.<br/>
تصميم أنظمة أوتوميشن (Automation Workflows) قوية وربط الـ RESTful APIs لتبسيط العمليات التجارية وتعزيز تفاعل المستخدمين.
          `,
        },
      ],
    },

    // Projects
    projects: {
      badge: "٠٣.",
      title: "أحدث المشاريع",
      intro:
        'تُظهر هذه المشاريع <span class="text-accent">عملية التطوير والتحسين</span> لمنصات الويب وتطبيقات إدارة علاقات العملاء (CRM) والتجارة الإلكترونية مع التركيز الصارم على الأداء وتجربة المستخدم.',
      viewSite: "عرض المشروع",
      viewRepo: "عرض المستودع",
      viewAll: "عرض كل المشاريع",
      items: [
        {
          title: "Lookak App",
          description: `
منصة ويب ذكية متخصصة في حجوزات صالونات التجميل وخدمات العناية الفاخرة، تتيح للمستخدمين استكشاف المواعيد وحجزها بسهولة، مع نظام تنبيهات فورية وإدارة متقدمة لمزودي الخدمات والعملاء.
          `,
          technologies: [
            "Angular",
            "Tailwind CSS",
            "RxJS",
            "TypeScript",
            "Prime Ng",
          ],
          imageUrl: "/img/lookak-app.png",
          link: "https://lookak-frontend-4dnj.vercel.app/",
          github: "https://github.com/muhmed-abdelaziem/lookak-frontend",
        },
        {
          title: "Customer Relationship Management (CRM)",
          description: `
نظام إدارة علاقات عملاء (CRM) متطور مخصص لشركات التجارة والأعمال، يتيح إدارة الصفقات، تتبع العملاء المحتملين (Leads)، وتنظيم المهام اليومية بكفاءة عالية وسرعة فائقة.
          `,
          technologies: [
            "Angular",
            "Tailwind CSS",
            "RxJS",
            "TypeScript",
            "Prime Ng",
          ],
          imageUrl: "/img/crm-photo.png",
          link: "https://crm-frontend-liard-eight.vercel.app/",
          github: "https://github.com/muhmed-abdelaziem/crm-frontend",
        },
        {
          title: "E-Commerce App",
          description: `
منصة تجارة إلكترونية أمامية عالية الأداء مبنية بـ Angular، تتميز بإدارة شاملة لعرض المنتجات، سلة تسوق تفاعلية، وربط سلس مع الـ APIs.
          `,
          technologies: [
            "Angular",
            "Tailwind CSS",
            "RxJS",
            "TypeScript",
            "Prime Ng",
          ],
          imageUrl: "/img/e-commerce-app.png",
          link: "https://e-commerce-61cz.vercel.app/#/home",
          github: "https://github.com/muhmed-abdelaziem/E-Commerce",
        },
        {
          title: "Enquiry Management System",
          description: `
لوحة تحكم إدارية متكاملة لإدارة الاستفسارات والطلبات، مزودة بنظام مصادقة آمن وتنبيهات فورية لسهولة متابعة العمليات وإجراء عمليات الـ CRUD.
          `,
          technologies: [
            "Angular",
            "Tailwind CSS",
            "RxJS",
            "TypeScript",
            "Toast Service",
          ],
          imageUrl: "/img/Enquiry Management System -photo.png",
          link: "https://enquiry-system-pnee9swgv-zuma-1s-projects.vercel.app/home",
          github: "https://github.com/muhmed-abdelaziem/Enquiry_system",
        },
        {
          title: "Fees Tracker",
          description: `
نظام إداري مخصص لتتبع الرسوم الدراسية وإدارة اشتراكات الطلاب والـ Batches، يوفر تحكم كاملاً في العمليات المالية وسجلات الدفع بمرونة تامة.
          `,
          technologies: [
            "Angular",
            "Tailwind CSS",
            "RxJS",
            "TypeScript",
            "Toast Service",
          ],
          imageUrl: "/img/fee-tracker.png",
          link: "https://fees-tracker-app.vercel.app/login",
          github: "https://github.com/muhmed-abdelaziem/Fees-Tracker-App",
        },
        {
          title: "Note App",
          description: `
تطبيق ويب حديث لإدارة الملاحظات بمرونة تامة، مبني باستخدام Angular و TypeScript لتجربة مستخدم سلسة ونظيفة.
`,
          technologies: [
            "Angular",
            "Tailwind CSS",
            "RxJS",
            "TypeScript",
            "Toast Service",
          ],
          imageUrl: "/img/note-app.png",
          link: "https://note-app-sage-nu.vercel.app/",
          github: "https://github.com/muhmed-abdelaziem/NoteApp",
        },
        {
          title: "Portfolio",
          description: `
بورتفوليو شخصي سريع وعصري مبني بـ Astro و Tailwind CSS و TypeScript، مصمم لعرض تطبيقات الويب عالية الأداء وحلول التجارة الإلكترونية.
          `,
          technologies: ["Astro", "Tailwind CSS", "Javascript", "i18n"],
          imageUrl: "/img/portfolio-photo.png",
          link: "https://mohamed-abdelaziem.vercel.app/",
          github: "https://github.com/muhmed-abdelaziem/mohamed-abdelaziem",
        },
        {
          title: "Masa Store",
          description: `
منصة تجارة إلكترونية متخصصة في مستلزمات الأطفال وحديثي الولادة وإكسسوارات العناية، مبنية مع تحسينات الأداء وعرض منتجات يركز على راحة المستخدم.
          `,
          technologies: [
            "Shopify",
            "Kalles Theme",
            "Liquid",
            "Loox Reviews",
            "Shopify Flow",
            "WhatFlow-Chat Automation",
            "Chatway Live Chat",
            "Moast (Instagram Reels)",
            "Essential Upsell",
            "Payment Method",
          ],
          imageUrl: "/img/masa-store.png",
          link: "https://masababy.store/",
          github: "https://masababy.store/",
        },
        {
          title: "Wethaq Store",
          description: `
متجر إلكتروني مخصص للملابس ذات الطابع المحتشم والأزياء الموسمية، يتميز بتصميم محسن لتجربة المستخدم وعروض ترويجية تهدف لرفع معدلات التحويل.
          `,
          technologies: [
            "Shopify",
            "Kalles Theme",
            "Liquid",
            "Loox Reviews",
            "Shopify Flow",
            "WhatFlow-Chat Automation",
            "Chatway Live Chat",
            "Essential Upsell",
            "Payment Method",
          ],
          imageUrl: "/img/wethaq-store.png",
          link: "https://wethaqstore.com/",
          github: "https://wethaqstore.com/",
        },
        {
          title: "Alhilal Labs",
          description: `
منصة تشخيصية طبية مخصصة للرعاية الصحية وحزم المختبرات، تتميز ببيانات فحوصات منظمة وواجهة مستخدم تفاعلية لخدمات الفحص الطبي.
          `,
          technologies: [
            "Wordpress",
            "Woocommerce",
            "Elementor",
            "Wp Rocket",
            "Javascript",
            "Css",
            "PHP",
            "Telr Payment",
            "Payment Method",
          ],
          imageUrl: "/img/alhilal-labs.png",
          link: "https://alhilalmedlabs.com/",
          github: "https://alhilalmedlabs.com/",
        },
        {
          title: "Dr.Huda Al Musalem",
          description: `
منصة رعاية صحية وإكلينيكية متخصصة للاستشارات الطبية ورعاية المرضى، مع واجهة مستخدم نظيفة وتجربة حجز واستعلام سلسة.
          `,
          technologies: [
            "Wordpress",
            "Woocommerce",
            "Elementor",
            "Wp Rocket",
            "Javascript",
            "Css",
            "PHP",
            "Payment Method",
          ],
          imageUrl: "/img/huda.png",
          link: "https://drhudaalmusalem.com/",
          github: "https://drhudaalmusalem.com/",
        },
      ],
    },

    contact: {
      badge: "٠٤.",
      title: "تواصل معي",
      headline: "هل نبدأ محادثة؟",
      subheadline:
        "أنا مهتم دائماً بسماع أخبار المشاريع الجديدة والتحديات التقنية. لا تتردد في مراسلتي!",
      emailLabel: "البريد الإلكتروني",
      emailAction: "إرسال رسالة",
      linkedin: "لينكد إن",
      github: "جيت هب",
      cv: "تحميل السيرة الذاتية",
      cvUrl: "/files/Mohamed Abdelaziem - Frontend Angular .pdf",
    },

    footer: {
      designedIn: "تم التصميم بواسطة",
      developedIn: "تم البرمجة بواسطة",
      builtWith: "مبني باستخدام",
      and: "و",
    },

    layout: {
      htmlLang: "ar",
      ogLocale: "ar_AR",
      title: "محمد عبد العظيم - مهندس واجهات أمامية ومطور تجارة إلكترونية",
      description:
        "مهندس واجهات أمامية متخصص في Angular و React و Tailwind و Shopify. بناء هندسة الويب وتطوير تجارب رقمية متقدمة.",
      keywords:
        "محمد عبد العظيم, مطور واجهات, مهندس واجهات, رياكت, أنجولر, تايلميند, شوبيفاي, تطوير ويب, بورتفوليو",
    },
  },

  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      cv: "Cv",
    },

    hero: {
      greeting: "Hi 👋 my name is",
      name: "Mohamed Abdelaziem",
      role: "Frontend Engineer & E-Commerce Developer",
      years: "+2 years",
      description:
        " of experience building advanced web architectures, e-commerce stores, and optimizing digital platforms.",
      cta: "Let's talk?",
      ariaDown: "Scroll to next section",
    },

    about: {
      badge: "01.",
      title: "About me",
      whoTitle: "Who is Mohamed Abdelaziem?",
      bio1: 'I am a <strong class="text-white">Frontend Engineer & E-Commerce Developer</strong> focused on building high-performance digital experiences. Specializing in <span class="font-[500] text-[var(--color-primary)]">Angular, React.js, Tailwind CSS, PrimeNG and Node.js</span>, I design scalable interfaces and optimize E-commerce environments like Shopify and WordPress.',
      bio2: "I bridge advanced technical development with solid business vision to deliver tangible results and drive high conversion rates.",
      workingAt: "Leading at",
      studyingAt: "Building at",
      certTitle: "Courses",
      techTitle: "Technologies & tools",
    },

    experience: {
      badge: "02.",
      title: "Professional background",
      items: [
        {
          company: "NZM",
          role: "Frontend Engineer & E-Commerce Developer",
          duration: "2025 — Present",
          isActive: true,
          description: `
• Engineered high-performance web applications and e-commerce stores using React.js, Angular, WordPress, and Shopify.<br/>
• Integrated payment gateways and RESTful APIs while implementing advanced speed optimization to deliver seamless user experiences.
          `,
        },
        {
          company: "Torvo Solutions",
          role: "Frontend Engineer & Automation Developer",
          duration: "2024 — 2025",
          isActive: true,
          description: `
• Developed high-performance, responsive web applications using Angular, translating Figma designs into clean, scalable code.<br/>
• Built robust automation workflows and integrated RESTful APIs to streamline business processes, optimize operations, and enhance user engagement.
`,
        },
      ],
    },

    projects: {
      badge: "03.",
      title: "Latest projects",
      intro:
        'These projects showcase the <span class="text-accent">development and optimization</span> of web platforms, CRM applications, and e-commerce with a rigorous focus on performance and UI/UX.',
      viewSite: "View Project",
      viewRepo: "View Repository",
      viewAll: "View all projects",
      items: [
        {
          title: "Lookak App",
          description: `
A smart web platform built for beauty salon and wellness booking services, allowing users to seamlessly discover and schedule appointments, featuring real-time multi-role notifications and efficient management for service providers and clients.
          `,
          technologies: [
            "Angular",
            "Tailwind CSS",
            "RxJS",
            "TypeScript",
            "Prime Ng",
          ],
          imageUrl: "/img/lookak-app.png",
          link: "https://lookak-frontend-4dnj.vercel.app/",
          github: "https://github.com/muhmed-abdelaziem/lookak-frontend",
        },
        {
          title: "Customer Relationship Management (CRM)",
          description: `
An advanced Customer Relationship Management (CRM) web application designed for business optimization, featuring dedicated modules for managing deals, customer directories, leads, and operational tasks.
          `,
          technologies: [
            "Angular",
            "Tailwind CSS",
            "RxJS",
            "TypeScript",
            "Prime Ng",
          ],
          imageUrl: "/img/crm-photo.png",
          link: "https://crm-frontend-liard-eight.vercel.app/",
          github: "https://github.com/muhmed-abdelaziem/crm-frontend",
        },
        {
          title: "E-Commerce App",
          description: `
A high-performance e-commerce frontend built with Angular, featuring product catalog management, a dynamic shopping cart, and seamless API integration.
          `,
          technologies: [
            "Angular",
            "Tailwind CSS",
            "RxJS",
            "TypeScript",
            "Prime Ng",
          ],
          imageUrl: "/img/e-commerce-app.png",
          link: "https://e-commerce-61cz.vercel.app/#/home",
          github: "https://github.com/muhmed-abdelaziem/E-Commerce",
        },
        {
          title: "Enquiry Management System",
          description: `
A robust administrative dashboard built for managing inquiries and service requests, featuring secure user authentication, notifications, and efficient CRUD operations.
          `,
          technologies: [
            "Angular",
            "Tailwind CSS",
            "RxJS",
            "TypeScript",
            "Toast Service",
          ],
          imageUrl: "/img/Enquiry Management System -photo.png",
          link: "https://enquiry-system-pnee9swgv-zuma-1s-projects.vercel.app/home",
          github: "https://github.com/muhmed-abdelaziem/Enquiry_system",
        },
        {
          title: "Fees Tracker",
          description: `
A dedicated administrative system for tracking student fees, managing enrollments and batches, and handling financial records with full CRUD functionality.          `,
          technologies: [
            "Angular",
            "Tailwind CSS",
            "RxJS",
            "TypeScript",
            "Toast Service",
          ],
          imageUrl: "/img/fee-tracker.png",
          link: "https://fees-tracker-app.vercel.app/login",
          github: "https://github.com/muhmed-abdelaziem/Fees-Tracker-App",
        },
        {
          title: "Note App",
          description: `
Note App is a modern web application built using Angular and TypeScript, designed to manage notes with a clean and smooth user experience.
`,
          technologies: [
            "Angular",
            "Tailwind CSS",
            "RxJS",
            "TypeScript",
            "Toast Service",
          ],
          imageUrl: "/img/note-app.png",
          link: "https://note-app-sage-nu.vercel.app/",
          github: "https://github.com/muhmed-abdelaziem/NoteApp",
        },
        {
          title: "Portfolio",
          description: `
A lightning-fast, modern developer portfolio built with Astro, Tailwind CSS, and TypeScript. Designed to showcase high-performance web applications, e-commerce solutions, and clean software architectures with a sleek, minimalist aesthetic.
          `,
          technologies: ["Astro", "Tailwind CSS", "Javascript", "i18n"],
          imageUrl: "/img/portfolio-photo.png",
          link: "https://mohamed-abdelaziem.vercel.app/",
          github: "https://github.com/muhmed-abdelaziem/mohamed-abdelaziem",
        },
        {
          title: "Masa Store",
          description: `
A specialized lifestyle and e-commerce platform featuring curated baby bedding collections and nursing accessories, built with optimized performance and a clean, user-centric product presentation.
          `,
          technologies: [
            "Shopify",
            "Kalles Theme",
            "Liquid",
            "Loox Reviews",
            "Shopify Flow",
            "WhatFlow-Chat Automation",
            "Chatway Live Chat",
            "Moast (Instagram Reels)",
            "Essential Upsell",
            "Payment Method",
          ],
          imageUrl: "/img/masa-store.png",
          link: "https://masababy.store/",
          github: "https://masababy.store/",
        },
        {
          title: "Wethaq Store",
          description: `
A tailored e-commerce platform built for modest apparel and seasonal fashion collections, featuring optimized UI/UX, targeted promotional displays, and a seamless shopping journey designed to drive high conversion rates.          `,
          technologies: [
            "Shopify",
            "Kalles Theme",
            "Liquid",
            "Loox Reviews",
            "Shopify Flow",
            "WhatFlow-Chat Automation",
            "Chatway Live Chat",
            "Essential Upsell",
            "Payment Method",
          ],
          imageUrl: "/img/wethaq-store.png",
          link: "https://wethaqstore.com/",
          github: "https://wethaqstore.com/",
        },
        {
          title: "Alhilal Labs",
          description: `
A medical diagnostic web platform designed for healthcare awareness and lab service packages, featuring structured medical testing data, professional health packages, and an engaging user interface for public health screenings.
          `,
          technologies: [
            "Wordpress",
            "Woocommerce",
            "Elementor",
            "Wp Rocket",
            "Javascript",
            "Css",
            "PHP",
            "Telr Payment",
            "Payment Method",
          ],
          imageUrl: "/img/alhilal-labs.png",
          link: "https://alhilalmedlabs.com/",
          github: "https://alhilalmedlabs.com/",
        },
        {
          title: "Dr.Huda Al Musalem",
          description: `
A professional healthcare and clinical web platform designed for medical consultations and specialized patient care, featuring a clean UI/UX, service overviews, and a seamless booking and inquiry experience.
          `,
          technologies: [
            "Wordpress",
            "Woocommerce",
            "Elementor",
            "Wp Rocket",
            "Javascript",
            "Css",
            "PHP",
            "Payment Method",
          ],
          imageUrl: "/img/huda.png",
          link: "https://drhudaalmusalem.com/",
          github: "https://drhudaalmusalem.com/",
        },
      ],
    },

    contact: {
      badge: "04.",
      title: "Contact",
      headline: "Let's talk",
      subheadline:
        "I'm always interested in hearing about new projects and tech challenges. Feel free to reach out!",
      emailLabel: "Email",
      emailAction: "Write",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Download CV",
      cvUrl: "/files/Mohamed Abdelaziem - Frontend Angular .pdf",
    },

    footer: {
      designedIn: "Designed in",
      developedIn: "Coded in",
      builtWith: "Built with",
      and: "&",
    },

    layout: {
      htmlLang: "en",
      ogLocale: "en_US",
      title: "Mohamed Abdelaziem - Frontend Engineer & E-Commerce Developer",
      description:
        "Frontend Engineer specialized in Angular, React, Tailwind and Shopify. Building web architectures and advanced digital experiences.",
      keywords:
        "Mohamed Abdelaziem, Frontend Engineer, React Developer, Angular Developer, TypeScript, Tailwind CSS, Shopify, Web Developer, Portfolio",
    },
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}
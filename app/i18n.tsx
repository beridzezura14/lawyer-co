"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Locale = "ka" | "en";

const dictionary = {
  ka: {
    nav: {
      home: "მთავარი",
      about: "ჩვენ შესახებ",
      blog: "ბლოგი",
      contact: "კონტაქტი",
      consultation: "კონსულტაციის მოთხოვნა",
    },
    hero: {
      titleA: "სამართლებრივი სიცხადე",
      titleB: "თქვენი მნიშვნელოვანი ნაბიჯებისთვის",
      text: "ჩვენ ვპოულობთ პრაქტიკულ გზას სამოქალაქო, საოჯახო, ქონებრივ და ბიზნეს სამართლებრივ საკითხებში.",
      cta: "კონსულტაციის მოთხოვნა",
    },
    partners: {
      eyebrow: "პარტნიორები და ასოცირებული იურისტები",
      intro:
        "ჩვენ ვმუშაობთ კლიენტთან ახლოს, ვაანალიზებთ რისკებს და ვგეგმავთ რეალისტურ სამართლებრივ გზას.",
      cta: "გუნდში შემოგვიერთდით",
      animated:
        "ჩვენი გუნდი ქმნის პრაქტიკულ სამართლებრივ სტრატეგიას და მართავს თქვენი საქმის თითოეულ ეტაპს.",
      muted:
        "კონსულტაციები ფიზიკური პირებისთვის, ბიზნესისთვის და ქონებრივ-საოჯახო საკითხებზე.",
    },
    services: {
      titleA: "სამართლებრივი მომსახურება",
      titleB: "ქართული ბაზრისთვის",
      intro:
        "ვფარავთ სამოქალაქო, საოჯახო, ქონებრივ და საკონსულტაციო საკითხებს, რომლებიც საქართველოში ყველაზე ხშირად გვხვდება.",
      readMore: "ვრცლად",
      items: [
        {
          title: "სამოქალაქო დავები",
          description:
            "წარმომადგენლობა და კონსულტაცია სამოქალაქო სარჩელებზე, ვალებზე, ხელშეკრულების დავებზე, ზიანის ანაზღაურებასა და მორიგებაზე.",
        },
        {
          title: "საოჯახო სამართალი",
          description:
            "განქორწინება, მეურვეობა, ალიმენტი, მემკვიდრეობა და ოჯახის ქონებასთან დაკავშირებული საკითხები კონფიდენციალურად და ფრთხილად.",
        },
        {
          title: "ქონება და უძრავი ქონება",
          description:
            "რეგისტრაცია, საკუთრების დავები, ნასყიდობა, იჯარა, ხელშეკრულებები და უძრავი ქონების სამართლებრივი შემოწმება.",
        },
        {
          title: "იურიდიული კონსულტაცია",
          description:
            "სამართლებრივი მოსაზრება, დოკუმენტების შემოწმება, რისკების შეფასება და მოქმედების შემდეგი ნაბიჯების დაგეგმვა.",
        },
      ],
    },
    stats: {
      titleA: "გამოცდილება, რომელიც",
      titleB: "ადგილობრივ საჭიროებებს ერგება",
      intro:
        "ჩვენი პრაქტიკა აგებულია იმ საკითხებზე, რომლებიც ქართულ ბაზარზე ყველაზე ხშირად აწუხებთ ფიზიკურ პირებსა და ბიზნესს.",
      items: [
        { label: "წელი ქართულ ბაზარზე", value: "12+" },
        { label: "სამოქალაქო და საოჯახო საქმე", value: "150+" },
        { label: "ქონებრივი ტრანზაქცია", value: "90+" },
        { label: "ჩატარებული კონსულტაცია", value: "600+" },
        { label: "ბიზნეს და ინდივიდუალური კლიენტი", value: "200+" },
      ],
    },
    practice: {
      title: "პრაქტიკის მიმართულებები",
      readMore: "ვრცლად",
      items: [
        {
          id: "01",
          title: "სამოქალაქო სამართალი",
          category: "დავები",
          image:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
          description:
            "სამოქალაქო სარჩელები, ხელშეკრულების დავები, ვალები, კომპენსაცია და მორიგების სტრატეგია.",
        },
        {
          id: "02",
          title: "საოჯახო სამართალი",
          category: "პირადი საკითხები",
          image:
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
          description:
            "განქორწინება, მეურვეობა, ალიმენტი, მემკვიდრეობა და ოჯახის ქონებრივი საკითხები.",
        },
        {
          id: "03",
          title: "ქონებრივი სამართალი",
          category: "უძრავი ქონება",
          image:
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
          description:
            "საკუთრების დავები, რეგისტრაცია, ნასყიდობა, იჯარა და სამართლებრივი შემოწმება.",
        },
        {
          id: "04",
          title: "კონსულტაცია",
          category: "იურიდიული რჩევა",
          image:
            "https://images.unsplash.com/photo-1454165833767-1229d11d0b2b?q=80&w=1200&auto=format&fit=crop",
          description:
            "დოკუმენტების გადახედვა, რისკების შეფასება და პრაქტიკული სამართლებრივი გეგმა.",
        },
      ],
    },
    cta: {
      titleA: "გრძელვადიანი სამართლებრივი გეგმა",
      titleB: "მშვიდი გადაწყვეტილებებისთვის.",
      button: "კონსულტაციის მოთხოვნა",
    },
    contact: {
      eyebrow: "კონტაქტი",
      pageTitle: "დაიწყეთ კონფიდენციალური კონსულტაციით.",
      pageIntro:
        "მოგვწერეთ ძირითადი დეტალები და ჩვენი იურიდიული გუნდი დაგიკავშირდებათ შემდეგი ნაბიჯისთვის.",
      titleA: "გჭირდებათ იურიდიული რჩევა?",
      titleB: "მოგვიყევით თქვენი საქმის შესახებ.",
      intro:
        "გაგვიზიარეთ თქვენი სამართლებრივი საკითხის მთავარი დეტალები და დაგიკავშირდებით კონფიდენციალური კონსულტაციისთვის.",
      email: "ელფოსტა",
      phone: "ტელეფონი",
      office: "ოფისი",
      name: "01. სახელი და გვარი",
      namePlaceholder: "თქვენი სახელი და გვარი *",
      emailField: "02. საკონტაქტო ელფოსტა",
      emailPlaceholder: "name@example.com *",
      service: "03. სამართლებრივი მომსახურება",
      servicePlaceholder: "სამოქალაქო დავა, საოჯახო, ქონება...",
      message: "04. საქმის მოკლე აღწერა",
      messagePlaceholder: "მოკლედ აღწერეთ თქვენი სამართლებრივი საკითხი...",
      submit: "კონსულტაციის მოთხოვნის გაგზავნა",
      successEyebrow: "მოთხოვნა მიღებულია",
      successTitle: "გმადლობთ, რომ დაგვიკავშირდით.",
      successText:
        "თქვენი კონსულტაციის მოთხოვნა მიღებულია. ჩვენი იურიდიული გუნდი დეტალებს გაეცნობა და მალე დაგიკავშირდებათ.",
    },
    footer: {
      intro:
        "სტრატეგიული სამართლებრივი მხარდაჭერა კომპანიებისთვის, დამფუძნებლებისთვის და ფიზიკური პირებისთვის.",
      navigation: "ნავიგაცია",
      services: "მომსახურება",
      contact: "კონტაქტი",
      serviceItems: [
        "სამოქალაქო სამართალი",
        "საოჯახო სამართალი",
        "ქონებრივი სამართალი",
        "იურიდიული კონსულტაცია",
      ],
      confidential: "კონფიდენციალური იურიდიული კონსულტაცია",
    },
    about: {
      eyebrow: "ჩვენ შესახებ",
      title:
        "იურიდიული გამოცდილება, რომელიც ნდობაზე, სიცხადესა და პრაქტიკულ მოქმედებაზე დგას.",
      intro:
        "DCTM Law Group კლიენტებს ეხმარება სამოქალაქო, საოჯახო, ქონებრივ და საკონსულტაციო საკითხებში.",
      how: "როგორ ვმუშაობთ",
      steps: ["ვიგებთ", "ვგეგმავთ", "ვიცავთ"],
      stepText:
        "ვადგენთ სამართლებრივ საკითხს, ვირჩევთ სწორ გზას და თითოეულ ეტაპს ფოკუსირებულად ვმართავთ.",
    },
    blog: {
      eyebrow: "ბლოგი",
      title: "სამართლებრივი ჩანაწერები უფრო მკაფიო გადაწყვეტილებებისთვის.",
      intro:
        "პრაქტიკული რჩევები სამოქალაქო, საოჯახო, ქონებრივ და საკონსულტაციო საკითხებზე.",
      ask: "იკითხეთ ამ თემაზე",
      posts: [
        {
          title: "რა უნდა მოამზადოთ იურიდიულ კონსულტაციამდე",
          category: "კლიენტის გზამკვლევი",
          excerpt:
            "მოკლე სია ფაქტების, დოკუმენტებისა და კითხვების მოსაწესრიგებლად იურისტთან შეხვედრამდე.",
        },
        {
          title: "ქონებრივი ხელშეკრულებების რისკები",
          category: "ქონებრივი სამართალი",
          excerpt:
            "პუნქტები, რომლებმაც შეიძლება მომავალში დავა, ხარჯი ან შეზღუდვა შექმნას.",
        },
        {
          title: "როგორ იგეგმება სამოქალაქო დავის სტრატეგია",
          category: "სამოქალაქო დავები",
          excerpt:
            "რატომ არის მნიშვნელოვანი დრო, მტკიცებულებები და მორიგების პოზიცია სასამართლომდე.",
        },
      ],
    },
    loader: "იტვირთება",
  },
  en: {
    nav: {
      home: "Home",
      about: "About us",
      blog: "Blog",
      contact: "Contact",
      consultation: "Schedule A Consultation",
    },
    hero: {
      titleA: "Legal clarity",
      titleB: "for every important step",
      text: "We find practical legal paths for civil, family, property, and business matters.",
      cta: "Schedule a Consultation",
    },
    partners: {
      eyebrow: "Partners & associates",
      intro:
        "We work closely with clients, assess legal risks, and build a realistic path forward.",
      cta: "Join Our Team",
      animated:
        "Our team develops practical legal strategies and coordinates every stage of your matter.",
      muted:
        "Consultations for individuals, businesses, property matters, and family-related legal needs.",
    },
    services: {
      titleA: "Legal services for everyday",
      titleB: "matters in Georgia",
      intro:
        "We focus on practical legal support for civil, family, property, and advisory matters across the Georgian market.",
      readMore: "Read More",
      items: [
        {
          title: "Civil Disputes",
          description:
            "Representation and guidance in civil claims, debt recovery, contract disputes, damages, and settlement negotiations before Georgian courts.",
        },
        {
          title: "Family Law",
          description:
            "Legal support for divorce, custody, alimony, inheritance, and family property matters handled with discretion and practical care.",
        },
        {
          title: "Property & Real Estate",
          description:
            "Assistance with property registration, ownership disputes, lease agreements, purchase contracts, and real estate due diligence.",
        },
        {
          title: "Legal Consultation",
          description:
            "Clear legal opinions for individuals and businesses on Georgian law, document review, risk assessment, and next-step planning.",
        },
      ],
    },
    stats: {
      titleA: "Experience shaped by",
      titleB: "local legal needs",
      intro:
        "Our practice is built around the matters Georgian clients face most often: family, property, civil disputes, and business advice.",
      items: [
        { label: "Years Serving Georgian Clients", value: "12+" },
        { label: "Civil & Family Matters Reviewed", value: "150+" },
        { label: "Property Transactions Supported", value: "90+" },
        { label: "Consultations Delivered", value: "600+" },
        { label: "Business & Individual Clients", value: "200+" },
      ],
    },
    practice: {
      title: "Practice areas",
      readMore: "Read More",
      items: [
        {
          id: "01",
          title: "Civil Law",
          category: "Disputes",
          image:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
          description:
            "Civil claims, contract disputes, debt recovery, compensation matters, and settlement strategy.",
        },
        {
          id: "02",
          title: "Family Law",
          category: "Private matters",
          image:
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
          description:
            "Divorce, custody, alimony, inheritance, and family property matters handled with care.",
        },
        {
          id: "03",
          title: "Property Law",
          category: "Real estate",
          image:
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
          description:
            "Ownership disputes, registration, sale and purchase agreements, leases, and due diligence.",
        },
        {
          id: "04",
          title: "Consultation",
          category: "Legal advice",
          image:
            "https://images.unsplash.com/photo-1454165833767-1229d11d0b2b?q=80&w=1200&auto=format&fit=crop",
          description:
            "Clear legal opinions, document review, risk assessment, and practical next-step planning.",
        },
      ],
    },
    cta: {
      titleA: "Long term planning for",
      titleB: "Unlimited Success.",
      button: "Schedule a Consultation",
    },
    contact: {
      eyebrow: "Contact",
      pageTitle: "Start with a confidential consultation.",
      pageIntro:
        "Send us the essential details and our legal team will follow up with the next step.",
      titleA: "Need legal advice?",
      titleB: "Tell us about your case.",
      intro:
        "Share the key details of your legal matter and our team will contact you to arrange a confidential consultation.",
      email: "Email",
      phone: "Phone",
      office: "Office",
      name: "01. Full name",
      namePlaceholder: "Your full name *",
      emailField: "02. Contact email",
      emailPlaceholder: "name@example.com *",
      service: "03. Legal service",
      servicePlaceholder: "Corporate law, litigation, contract review...",
      message: "04. Case summary",
      messagePlaceholder: "Briefly describe your legal matter...",
      submit: "Send Consultation Request",
      successEyebrow: "Request received",
      successTitle: "Thank you for reaching out.",
      successText:
        "Your consultation request has been received. Our legal team will review the details and contact you shortly.",
    },
    footer: {
      intro:
        "Strategic legal counsel for companies, founders, and individuals who need practical guidance and dependable representation.",
      navigation: "Navigation",
      services: "Services",
      contact: "Contact",
      serviceItems: [
        "Corporate Law",
        "Civil Litigation",
        "Contract Review",
        "Business Advisory",
      ],
      confidential: "Confidential legal consultation",
    },
    about: {
      eyebrow: "About us",
      title:
        "Legal expertise built around trust, clarity, and practical action.",
      intro:
        "DCTM Law Group supports clients through civil, family, property, and advisory matters.",
      how: "How we work",
      steps: ["Understand", "Plan", "Represent"],
      stepText:
        "We identify the legal issue, define the right path, and support each step with focused legal execution.",
    },
    blog: {
      eyebrow: "Blog",
      title: "Legal notes for clearer decisions.",
      intro:
        "Practical insights on civil law, family matters, property issues, and legal planning.",
      ask: "Ask about this topic",
      posts: [
        {
          title: "What to prepare before a legal consultation",
          category: "Client Guide",
          excerpt:
            "A short checklist for organizing facts, documents, and questions before meeting your lawyer.",
        },
        {
          title: "Property contract risks clients should not ignore",
          category: "Property Law",
          excerpt:
            "Key clauses that can quietly create long-term obligations, disputes, or operational limits.",
        },
        {
          title: "How civil dispute strategy is planned",
          category: "Civil Disputes",
          excerpt:
            "Why timing, evidence, and settlement posture matter before a dispute reaches court.",
        },
      ],
    },
    loader: "Loading",
  },
} as const;

type Dictionary = (typeof dictionary)[Locale];

const I18nContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
} | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ka");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const savedLocale = window.localStorage.getItem("locale");

      if (savedLocale === "ka" || savedLocale === "en") {
        setLocaleState(savedLocale);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem("locale", nextLocale);
    document.documentElement.lang = nextLocale;
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: dictionary[locale],
    }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
}

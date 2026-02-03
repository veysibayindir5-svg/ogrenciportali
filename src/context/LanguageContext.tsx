import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'tr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    title: "Kilis Öğrenci Portalı",
    home: "Ana Sayfa",
    departments: "Bölümler",
    dorms: "Yurtlar",
    campus: "Kampüs Çevresi",
    cheap_places: "Ucuz Yerler",
    transport: "Ulaşım",
    housing: "Ev Tutma",
    emergency: "Acil",
    blog: "Blog",
    lang_toggle: "AR",
    quick_access: "Hızlı Erişim",
    emergency_short: "İmdat",
    read_more: "Devamını Oku",
    contact: "İletişim",
    address: "Kilis, Türkiye"
  },
  ar: {
    title: "بوابة طلاب كيليس",
    home: "الصفحة الرئيسية",
    departments: "الأقسام",
    dorms: "السكن الجامعي",
    campus: "محيط الحرم الجامعي",
    cheap_places: "أماكن رخيصة",
    transport: "المواصلات",
    housing: "استئجار منزل",
    emergency: "الطوارئ",
    blog: "المدونة",
    lang_toggle: "TR",
    quick_access: "وصول سريع",
    emergency_short: "إسعاف",
    read_more: "اقرأ المزيد",
    contact: "اتصال",
    address: "كيليس، تركيا"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('lang');
    return (saved as Language) || 'tr';
  });

  useEffect(() => {
    localStorage.setItem('lang', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

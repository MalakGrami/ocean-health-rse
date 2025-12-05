'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.goals': 'Mes Objectifs',
    'nav.learn': 'Informations',
    'nav.transparency': 'Transparence RSE',
    'nav.accessibility': 'Accessibilité',

    // Home
    'home.title': 'Carnet Santé Personnel',
    'home.subtitle': 'Suivez votre santé de manière responsable et sécurisée. Plateforme éthique, accessible et éco-conçue selon les principes du RSE by Design.',
    'home.cta.goals': 'Mes Objectifs Santé',
    'home.cta.learn': 'En Savoir Plus',

    // Common
    'common.source': 'Source',
    'common.readMore': 'En savoir plus',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.goals': 'My Goals',
    'nav.learn': 'Information',
    'nav.transparency': 'RSE Transparency',
    'nav.accessibility': 'Accessibility',

    // Home
    'home.title': 'Personal Health Tracker',
    'home.subtitle': 'Track your health responsibly and securely. Ethical, accessible platform designed according to CSR by Design principles.',
    'home.cta.goals': 'My Health Goals',
    'home.cta.learn': 'Learn More',

    // Common
    'common.source': 'Source',
    'common.readMore': 'Learn more',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');

  useEffect(() => {
    // Load language from localStorage
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
        setLanguageState(savedLang);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
      document.documentElement.lang = lang;
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

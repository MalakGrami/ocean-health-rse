'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

export default function DynamicHtmlLang({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();

  useEffect(() => {
    // Update the HTML lang attribute when language changes
    document.documentElement.lang = language;
  }, [language]);

  return <html lang={language}>{children}</html>;
}

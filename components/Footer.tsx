'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-ocean-dark text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-2 font-semibold">
          {t('footer.builtWith')}
        </p>
        <p className="text-sm opacity-90 mb-3">
          {t('footer.compliance')}
        </p>
        <p className="text-sm opacity-80">
          {t('footer.values')}
        </p>
        <p className="text-xs opacity-60 mt-4">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}

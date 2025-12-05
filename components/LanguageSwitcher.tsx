'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { FaGlobe } from 'react-icons/fa';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-700">
      <FaGlobe className="text-ocean-blue" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'fr' | 'en')}
        className="bg-transparent border-none outline-none cursor-pointer text-sm font-medium"
        aria-label="Sélectionner la langue / Select language"
      >
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}

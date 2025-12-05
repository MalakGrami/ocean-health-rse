'use client';

import { useEffect, useState } from 'react';

type FontSize = 'small' | 'medium' | 'large' | 'xlarge';
type Language = 'en' | 'fr';

export default function AccessibilityControls() {
  const [fontSize, setFontSize] = useState<FontSize>('medium');
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Load preferences from localStorage
    const savedFontSize = localStorage.getItem('fontSize') as FontSize;
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedDyslexiaFont = localStorage.getItem('dyslexiaFont') === 'true';
    const savedLanguage = localStorage.getItem('language') as Language;

    if (savedFontSize) setFontSize(savedFontSize);
    if (savedHighContrast) setHighContrast(savedHighContrast);
    if (savedDyslexiaFont) setDyslexiaFont(savedDyslexiaFont);
    if (savedLanguage) setLanguage(savedLanguage);

    // Apply initial settings
    applySettings(savedFontSize || 'medium', savedHighContrast, savedDyslexiaFont);
  }, []);

  const applySettings = (size: FontSize, contrast: boolean, dyslexia: boolean) => {
    if (typeof window === 'undefined') return;

    const body = document.body;

    // Remove all font size classes
    body.classList.remove('font-small', 'font-medium', 'font-large', 'font-xlarge');
    body.classList.add(`font-${size}`);

    // Toggle high contrast
    if (contrast) {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }

    // Toggle dyslexia font
    if (dyslexia) {
      body.classList.add('dyslexia-font');
    } else {
      body.classList.remove('dyslexia-font');
    }
  };

  const handleFontSize = (size: FontSize) => {
    setFontSize(size);
    if (typeof window !== 'undefined') {
      localStorage.setItem('fontSize', size);
    }
    applySettings(size, highContrast, dyslexiaFont);
  };

  const handleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    if (typeof window !== 'undefined') {
      localStorage.setItem('highContrast', String(newValue));
    }
    applySettings(fontSize, newValue, dyslexiaFont);
  };

  const handleDyslexiaFont = () => {
    const newValue = !dyslexiaFont;
    setDyslexiaFont(newValue);
    if (typeof window !== 'undefined') {
      localStorage.setItem('dyslexiaFont', String(newValue));
    }
    applySettings(fontSize, highContrast, newValue);
  };

  const handleLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
    // In a real app, this would trigger i18n translation
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-ocean-blue hover:bg-ocean-blue/90 text-white p-3 rounded-full shadow-lg transition-all"
        aria-label="Open accessibility controls"
        aria-expanded={isOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-ocean-dark border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-4 w-72">
          <h3 className="text-lg font-bold mb-4">Accessibility Controls</h3>

          {/* Font Size */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Font Size</label>
            <div className="flex gap-2">
              {(['small', 'medium', 'large', 'xlarge'] as FontSize[]).map((size) => (
                <button
                  key={size}
                  onClick={() => handleFontSize(size)}
                  className={`px-3 py-1 rounded ${
                    fontSize === size
                      ? 'bg-ocean-blue text-white'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                  aria-pressed={fontSize === size}
                >
                  A{size === 'small' ? '-' : size === 'large' ? '+' : size === 'xlarge' ? '++' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* High Contrast */}
          <div className="mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={highContrast}
                onChange={handleHighContrast}
                className="w-4 h-4"
              />
              <span className="text-sm font-semibold">High Contrast Mode</span>
            </label>
          </div>

          {/* Dyslexia Font */}
          <div className="mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={dyslexiaFont}
                onChange={handleDyslexiaFont}
                className="w-4 h-4"
              />
              <span className="text-sm font-semibold">Dyslexia-Friendly Font</span>
            </label>
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-semibold mb-2">Language</label>
            <div className="flex gap-2">
              <button
                onClick={() => handleLanguage('en')}
                className={`px-4 py-2 rounded ${
                  language === 'en'
                    ? 'bg-ocean-blue text-white'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
                aria-pressed={language === 'en'}
              >
                EN
              </button>
              <button
                onClick={() => handleLanguage('fr')}
                className={`px-4 py-2 rounded ${
                  language === 'fr'
                    ? 'bg-ocean-blue text-white'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
                aria-pressed={language === 'fr'}
              >
                FR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

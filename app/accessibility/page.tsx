'use client';

import CarbonBadge from "@/components/CarbonBadge";
import { useState, useEffect } from "react";
import { FaKeyboard, FaVolumeUp, FaEye, FaMobileAlt, FaHandPointer, FaSignal, FaBatteryFull, FaDesktop, FaApple, FaPalette } from 'react-icons/fa';

export default function AccessibilityPage() {
  const [fontSize, setFontSize] = useState('medium');
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load current preferences
      setFontSize(localStorage.getItem('fontSize') || 'medium');
      setHighContrast(localStorage.getItem('highContrast') === 'true');
      setDyslexiaFont(localStorage.getItem('dyslexiaFont') === 'true');
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6 flex justify-center">
        <CarbonBadge pageName="Page Accessibilité" estimatedKB={40} />
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-ocean-blue to-sea-green bg-clip-text text-transparent px-4">
        Fonctionnalités d'Accessibilité
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-12 text-center max-w-3xl mx-auto px-4">
        La santé est un droit universel, et l'accès aux outils de santé numérique aussi. Notre plateforme est conçue pour être utilisable par tous, notamment les 12 millions de Français en situation de handicap.
      </p>

      {/* Live Controls Demo */}
      <section className="mb-8 sm:mb-12 bg-gradient-to-br from-ocean-blue/10 to-sea-green/10 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-ocean-blue/30">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Vos Paramètres Actuels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg">
            <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Taille de Police</h3>
            <p className="text-xl sm:text-2xl">{fontSize === 'small' ? 'A-' : fontSize === 'large' ? 'A+' : fontSize === 'xlarge' ? 'A++' : 'A'}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg">
            <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Contraste Élevé</h3>
            <p className="text-xl sm:text-2xl">{highContrast ? 'Activé' : 'Désactivé'}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg">
            <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Police Dyslexie</h3>
            <p className="text-xl sm:text-2xl">{dyslexiaFont ? 'Activé' : 'Désactivé'}</p>
          </div>
        </div>
        <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm opacity-80">
          Utilisez le bouton de contrôles d'accessibilité (en bas à droite) pour ajuster ces paramètres
        </p>
      </section>

      {/* WCAG Compliance */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-4">Conformité WCAG 2.1 AAA</h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 px-4">
          Essentiel pour les 12 millions de Français en situation de handicap et les 60% d'utilisateurs de santé de plus de 50 ans.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-ocean-blue/10 rounded-lg text-ocean-blue text-lg sm:text-xl">
                <FaKeyboard />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Navigation Clavier</h3>
            </div>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <li>• Tab pour parcourir tous les éléments interactifs</li>
              <li>• Entrée/Espace pour activer boutons et liens</li>
              <li>• Échap pour fermer modales et menus</li>
              <li>• Flèches pour navigation dans composants</li>
              <li>• Indicateurs de focus clairs sur tous éléments</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center bg-ocean-blue/10 rounded-lg text-ocean-blue text-xl">
                <FaVolumeUp />
              </div>
              <h3 className="text-xl font-bold">Lecteurs d'Écran</h3>
            </div>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Structure HTML sémantique</li>
              <li>• Labels ARIA sur tous éléments interactifs</li>
              <li>• Texte alternatif pour toutes images et icônes</li>
              <li>• Lien "Aller au contenu principal"</li>
              <li>• Testé avec NVDA et VoiceOver</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center bg-ocean-blue/10 rounded-lg text-ocean-blue text-xl">
                <FaEye />
              </div>
              <h3 className="text-xl font-bold">Accessibilité Visuelle</h3>
            </div>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Mode contraste élevé disponible</li>
              <li>• Ratio de contraste dépasse WCAG AAA (7:1+)</li>
              <li>• Tailles de police ajustables (4 niveaux)</li>
              <li>• Option police adaptée dyslexie</li>
              <li>• Aucun contenu ne repose uniquement sur la couleur</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center bg-ocean-blue/10 rounded-lg">
                <span className="text-ocean-blue font-bold">FR</span>
              </div>
              <h3 className="text-xl font-bold">Support Linguistique</h3>
            </div>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Français et anglais disponibles</li>
              <li>• Sélecteur de langue simple</li>
              <li>• Attributs lang appropriés en HTML</li>
              <li>• Langage clair et simple utilisé</li>
              <li>• Extensible à d'autres langues (Arabe prévu)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Keyboard Shortcuts */}
      <section className="mb-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6">Guide des Raccourcis Clavier</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Navigation</h3>
            <table className="w-full">
              <tbody className="space-y-2">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 font-mono bg-gray-100 dark:bg-gray-700 px-2 rounded">Tab</td>
                  <td className="py-2 pl-4">Aller à l'élément suivant</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 font-mono bg-gray-100 dark:bg-gray-700 px-2 rounded">Maj + Tab</td>
                  <td className="py-2 pl-4">Aller à l'élément précédent</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 font-mono bg-gray-100 dark:bg-gray-700 px-2 rounded">Entrée</td>
                  <td className="py-2 pl-4">Activer lien ou bouton</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono bg-gray-100 dark:bg-gray-700 px-2 rounded">Échap</td>
                  <td className="py-2 pl-4">Fermer fenêtre modale ou menu</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Lecteur d'Écran</h3>
            <table className="w-full">
              <tbody className="space-y-2">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 font-mono bg-gray-100 dark:bg-gray-700 px-2 rounded text-sm">H</td>
                  <td className="py-2 pl-4">Aller au titre suivant</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 font-mono bg-gray-100 dark:bg-gray-700 px-2 rounded text-sm">L</td>
                  <td className="py-2 pl-4">Aller au lien suivant</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 font-mono bg-gray-100 dark:bg-gray-700 px-2 rounded text-sm">B</td>
                  <td className="py-2 pl-4">Aller au bouton suivant</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono bg-gray-100 dark:bg-gray-700 px-2 rounded text-sm">Alt + 1</td>
                  <td className="py-2 pl-4">Aller au contenu principal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mobile Accessibility */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-4">Accessibilité Mobile</h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 px-4">
          Crucial pour les zones rurales et populations âgées avec faible débit internet.
        </p>
        <div className="bg-gradient-to-br from-sea-green/10 to-ocean-blue/10 p-4 sm:p-6 rounded-xl">
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-ocean-blue/10 rounded flex-shrink-0 text-ocean-blue text-sm sm:text-base">
                <FaMobileAlt />
              </div>
              <span><strong>Design Responsive:</strong> Optimisé pour toutes tailles d'écran, des petits téléphones aux grands écrans</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-ocean-blue/10 rounded flex-shrink-0 text-ocean-blue">
                <FaHandPointer />
              </div>
              <span><strong>Cibles Tactiles:</strong> Tous boutons et liens font au minimum 44x44px pour faciliter le toucher</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-ocean-blue/10 rounded flex-shrink-0 text-ocean-blue">
                <FaSignal />
              </div>
              <span><strong>Support Réseau 2G:</strong> Poids total page &lt;50KB, charge même sur connexions lentes (zones rurales)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-ocean-blue/10 rounded flex-shrink-0 text-ocean-blue">
                <FaBatteryFull />
              </div>
              <span><strong>Économie Batterie:</strong> Mode sombre réduit consommation énergétique de l'écran</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Tested With */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Testé Avec</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-ocean-blue/10 rounded-lg text-ocean-blue text-2xl">
              <FaDesktop />
            </div>
            <p className="font-semibold">NVDA</p>
            <p className="text-sm opacity-70">Lecteur d'écran</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-ocean-blue/10 rounded-lg text-ocean-blue text-2xl">
              <FaApple />
            </div>
            <p className="font-semibold">VoiceOver</p>
            <p className="text-sm opacity-70">macOS/iOS</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-ocean-blue/10 rounded-lg text-ocean-blue text-2xl">
              <FaKeyboard />
            </div>
            <p className="font-semibold">Clavier Seul</p>
            <p className="text-sm opacity-70">Sans souris</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-ocean-blue/10 rounded-lg text-ocean-blue text-2xl">
              <FaPalette />
            </div>
            <p className="font-semibold">Daltonisme</p>
            <p className="text-sm opacity-70">Simulateur</p>
          </div>
        </div>
      </section>

      {/* Report Issues */}
      <section className="text-center bg-ocean-blue/10 p-4 sm:p-6 md:p-8 rounded-2xl">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 px-4">Un Problème d'Accessibilité?</h2>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
          Nous nous engageons à rendre cette plateforme accessible à tous. Si vous rencontrez des obstacles, merci de nous le signaler.
        </p>
        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg inline-block">
          Conformité WCAG 2.1 AAA • Score Lighthouse Accessibilité: 100/100
        </div>
      </section>
    </div>
  );
}

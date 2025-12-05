import HealthGoalsForm from "@/components/PledgeForm";
import CarbonBadge from "@/components/CarbonBadge";

export default function HealthGoalsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6 flex justify-center">
        <CarbonBadge pageName="Page Objectifs" estimatedKB={38} />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-ocean-blue to-sea-green bg-clip-text text-transparent">
        Mes Objectifs Santé
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto">
        Chaque action compte. Définissez un objectif santé aujourd'hui et rejoignez des centaines d'utilisateurs engagés.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">Pourquoi Fixer des Objectifs?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-lg font-bold text-ocean-blue">✓</span>
              <span>Suivez votre parcours de santé personnel</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg font-bold text-ocean-blue">✓</span>
              <span>Améliorez votre observance thérapeutique</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg font-bold text-ocean-blue">✓</span>
              <span>Visualisez l'impact collectif en temps réel</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg font-bold text-ocean-blue">✓</span>
              <span>Recevez des étapes concrètes et réalisables</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-ocean-blue/10 to-sea-green/10 p-6 rounded-xl border-2 border-ocean-blue/30">
          <h2 className="text-2xl font-bold mb-4">Votre Impact</h2>
          <p className="mb-4">Lorsque vous atteignez votre objectif:</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 bg-sea-green rounded-full"></div>
              <span>Vous contribuez aux statistiques de santé communautaires</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 bg-sea-green rounded-full"></div>
              <span>Vous inspirez d'autres membres de la communauté</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 bg-sea-green rounded-full"></div>
              <span>Vous améliorez durablement votre santé</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <HealthGoalsForm />
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold mb-4">Confidentialité Garantie (RGPD)</h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Toutes vos données de santé sont stockées localement sur votre appareil. Nous ne collectons, ne suivons, ni ne partageons jamais vos informations.
          Votre vie privée est protégée conformément au RGPD et aux principes HDS.
        </p>
      </div>
    </div>
  );
}

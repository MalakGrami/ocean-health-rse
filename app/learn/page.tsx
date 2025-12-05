import CarbonBadge from "@/components/CarbonBadge";
import Link from "next/link";
import { FaPills, FaChartLine, FaHospital, FaMobileAlt, FaWheelchair, FaSeedling } from 'react-icons/fa';
import { IconType } from 'react-icons';

export default function LearnPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6 flex justify-center">
        <CarbonBadge pageName="Page Informations" estimatedKB={48} />
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-ocean-blue to-sea-green bg-clip-text text-transparent px-4">
        Informations Santé
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-12 text-center max-w-3xl mx-auto px-4">
        Comprenez l'importance du suivi de santé, l'observance thérapeutique et comment améliorer votre bien-être au quotidien.
      </p>

      {/* Health Facts */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-4">Faits Essentiels sur la Santé</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <FactCard
            icon={FaPills}
            title="20M de Malades Chroniques"
            fact="Plus de 20 millions de Français vivent avec une maladie chronique (diabète, hypertension, etc.)"
            impact="Le suivi régulier et l'observance médicamenteuse sont essentiels pour éviter les complications"
            source="Assurance Maladie (Ameli)"
            link="https://www.ameli.fr"
          />
          <FactCard
            icon={FaChartLine}
            title="50% d'Observance"
            fact="Seulement 50% des patients suivent correctement leur traitement au long cours"
            impact="La non-observance entraîne 8 000 décès évitables par an en France"
            source="Haute Autorité de Santé (HAS)"
            link="https://www.has-sante.fr"
          />
          <FactCard
            icon={FaHospital}
            title="30% Hospitalisations Évitables"
            fact="30% des hospitalisations de patients chroniques pourraient être évitées avec un meilleur suivi"
            impact="Représente 2 milliards d'euros de coûts évitables pour l'Assurance Maladie"
            source="Ministère de la Santé"
            link="https://sante.gouv.fr"
          />
          <FactCard
            icon={FaMobileAlt}
            title="E-Santé en Croissance"
            fact="68% des Français sont intéressés par les outils numériques de suivi de santé"
            impact="Le numérique peut améliorer l'observance de 40% selon les études cliniques"
            source="Baromètre Santé Numérique"
            link="https://esante.gouv.fr"
          />
          <FactCard
            icon={FaWheelchair}
            title="12M de Personnes Handicapées"
            fact="12 millions de Français en situation de handicap ont besoin d'outils accessibles"
            impact="L'accessibilité numérique WCAG AAA est essentielle pour l'égalité d'accès aux soins"
            source="INSEE - Handicap et Santé"
            link="https://www.insee.fr"
          />
          <FactCard
            icon={FaSeedling}
            title="Impact Environnemental Santé"
            fact="Le numérique en santé représente 8% de l'empreinte carbone du secteur"
            impact="L'écoconception peut réduire de 90% l'impact environnemental des applications santé"
            source="ADEME - Numérique Responsable"
            link="https://www.ademe.fr"
          />
        </div>
      </section>

      {/* How Your Actions Help */}
      <section className="mb-8 sm:mb-12 bg-gradient-to-br from-ocean-blue/10 to-sea-green/10 p-4 sm:p-6 md:p-8 rounded-2xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Comment Vos Actions Améliorent Votre Santé</h2>
        <div className="space-y-6">
          <ImpactExplanation
            action="Suivre son Traitement 30 Jours"
            direct="Améliore l'efficacité du traitement de 40% selon études cliniques"
            indirect="Réduit risque de complications, hospitalisations et coûts de santé"
            multiplier="Si 1000 patients améliorent leur observance, 300 hospitalisations évitées/an"
          />
          <ImpactExplanation
            action="Activité Physique Régulière"
            direct="Réduit de 30% le risque de maladies cardiovasculaires"
            indirect="Améliore qualité de vie, sommeil, moral et autonomie"
            multiplier="30 minutes de marche/jour = -20% risque mortalité toutes causes"
          />
          <ImpactExplanation
            action="Suivi de ses Constantes"
            direct="Détection précoce des déséquilibres (tension, glycémie, poids)"
            indirect="Permet ajustement traitement avant complications graves"
            multiplier="Suivi régulier = -25% risque d'accidents cardiovasculaires"
          />
        </div>
      </section>

      {/* Visual Progress */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-4">Le Pouvoir de l'Action Collective</h2>
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-2xl shadow-md">
          <div className="space-y-6">
            <ProgressVisualization
              label="Si 10% des patients chroniques améliorent leur observance"
              amount="2 000 vies"
              description="sauvées chaque année en France"
              percentage={75}
            />
            <ProgressVisualization
              label="Si 100 000 personnes adoptent une activité physique régulière"
              amount="30 000"
              description="maladies cardiovasculaires évitées sur 10 ans"
              percentage={85}
            />
            <ProgressVisualization
              label="Si les outils numériques santé sont accessibles à tous"
              amount="12M personnes"
              description="en situation de handicap peuvent gérer leur santé de façon autonome"
              percentage={95}
            />
          </div>
        </div>
      </section>

      {/* What You Can Do Today */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center px-4">Ce Que Vous Pouvez Faire Aujourd'hui</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <ActionGuide
            icon="Suivi"
            title="Suivre Votre Traitement"
            actions={[
              "Prendre vos médicaments aux heures prescrites",
              "Utiliser un pilulier ou rappel numérique",
              "Noter vos prises dans un carnet",
              "En parler avec votre médecin si difficultés"
            ]}
          />
          <ActionGuide
            icon="Activité"
            title="Bouger Régulièrement"
            actions={[
              "30 minutes de marche par jour",
              "Prendre les escaliers plutôt que l'ascenseur",
              "Faire du jardinage ou ménage actif",
              "Rejoindre un groupe de marche local"
            ]}
          />
          <ActionGuide
            icon="Partage"
            title="Partager et S'informer"
            actions={[
              "Consulter des sources fiables (HAS, Ameli)",
              "Partager vos expériences avec d'autres patients",
              "Participer à des ateliers d'éducation thérapeutique",
              "Utiliser des outils numériques accessibles"
            ]}
          />
        </div>
      </section>

      {/* Resources */}
      <section className="mb-8 sm:mb-12 bg-ocean-dark text-white p-4 sm:p-6 md:p-8 rounded-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ressources Officielles de Confiance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <ResourceLink
            name="Ameli.fr - Assurance Maladie"
            description="Informations santé fiables, droits et démarches"
            url="https://www.ameli.fr"
          />
          <ResourceLink
            name="HAS - Haute Autorité de Santé"
            description="Recommandations médicales et guides patients"
            url="https://www.has-sante.fr"
          />
          <ResourceLink
            name="Mon Espace Santé"
            description="Carnet de santé numérique officiel français"
            url="https://www.monespacesante.fr"
          />
          <ResourceLink
            name="e-Santé - Agence du Numérique"
            description="Transformation numérique en santé"
            url="https://esante.gouv.fr"
          />
        </div>
      </section>

      {/* Take Action CTA */}
      <section className="text-center bg-gradient-to-r from-ocean-blue to-sea-green p-6 sm:p-8 md:p-12 rounded-2xl text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-4">Prêt à Prendre Soin de Votre Santé?</h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          La connaissance est importante, mais l'action fait la différence. Fixez votre premier objectif santé aujourd'hui.
        </p>
        <Link
          href="/pledge"
          className="inline-block bg-white text-ocean-blue font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
        >
          Créer Mon Objectif Santé
        </Link>
      </section>
    </div>
  );
}

interface FactCardProps {
  icon: IconType;
  title: string;
  fact: string;
  impact: string;
  source: string;
  link: string;
}

function FactCard({ icon: Icon, title, fact, impact, source, link }: FactCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 text-ocean-blue" aria-hidden="true">
        <Icon />
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">{fact}</p>
      <p className="text-xs sm:text-sm text-ocean-blue dark:text-ocean-accent mb-2 sm:mb-3 italic">{impact}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-ocean-blue transition-colors"
      >
        Source: {source} →
      </a>
    </div>
  );
}

interface ImpactExplanationProps {
  action: string;
  direct: string;
  indirect: string;
  multiplier: string;
}

function ImpactExplanation({ action, direct, indirect, multiplier }: ImpactExplanationProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{action}</h3>
      <div className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
        <p><strong>Direct Impact:</strong> {direct}</p>
        <p><strong>Indirect Impact:</strong> {indirect}</p>
        <p className="text-sea-green font-semibold"><strong>Multiplier Effect:</strong> {multiplier}</p>
      </div>
    </div>
  );
}

interface ProgressVisualizationProps {
  label: string;
  amount: string;
  description: string;
  percentage: number;
}

function ProgressVisualization({ label, amount, description, percentage }: ProgressVisualizationProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{label}</span>
        <span className="text-sea-green font-bold">{amount}</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-1">
        <div
          className="bg-gradient-to-r from-ocean-blue to-sea-green h-4 rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

interface ActionGuideProps {
  icon: string;
  title: string;
  actions: string[];
}

function ActionGuide({ icon, title, actions }: ActionGuideProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md">
      <div className="text-xs sm:text-sm font-bold mb-2 sm:mb-3 text-center text-ocean-blue px-2 sm:px-3 py-1 bg-ocean-light dark:bg-ocean-dark rounded inline-block w-full" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center">{title}</h3>
      <ul className="space-y-2">
        {actions.map((action, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-sea-green mt-0.5 sm:mt-1 font-bold text-sm sm:text-base">✓</span>
            <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{action}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface ResourceLinkProps {
  name: string;
  description: string;
  url: string;
}

function ResourceLink({ name, description, url }: ResourceLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
    >
      <h3 className="font-bold mb-1">{name}</h3>
      <p className="text-sm opacity-90">{description}</p>
      <span className="text-sm opacity-75">→ Visit website</span>
    </a>
  );
}

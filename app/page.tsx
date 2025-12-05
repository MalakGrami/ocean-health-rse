import Link from "next/link";
import ImpactCounter from "@/components/ImpactCounter";
import CarbonBadge from "@/components/CarbonBadge";
import { FaUsers, FaLock, FaUniversalAccess, FaLeaf, FaShieldAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12 sm:mb-16">
        <div className="mb-6 flex justify-center">
          <CarbonBadge pageName="Cette page" estimatedKB={45} />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-ocean-blue to-sea-green bg-clip-text text-transparent px-4">
          Carnet Santé Personnel
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto px-4">
          Suivez votre santé de manière responsable et sécurisée. Plateforme éthique, accessible et éco-conçue selon les principes du RSE by Design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <Link
            href="/pledge"
            className="w-full sm:w-auto bg-ocean-blue hover:bg-ocean-blue/90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg text-center"
          >
            Mes Objectifs Santé
          </Link>
          <Link
            href="/learn"
            className="w-full sm:w-auto border-2 border-ocean-blue text-ocean-blue hover:bg-ocean-blue/10 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all text-center"
          >
            En Savoir Plus
          </Link>
        </div>
      </section>

      {/* Live Impact Dashboard */}
      <section className="mb-16">
        <ImpactCounter />
      </section>

      {/* Why Digital Health Matters */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center px-4">Pourquoi la Santé Numérique Responsable</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <FeatureCard
            icon={FaUsers}
            title="20M de Français"
            description="Plus de 20 millions de Français vivent avec une maladie chronique nécessitant un suivi régulier."
          />
          <FeatureCard
            icon={FaLock}
            title="Données Sensibles"
            description="Les données de santé sont hautement sensibles et nécessitent une protection maximale (RGPD, HDS)."
          />
          <FeatureCard
            icon={FaUniversalAccess}
            title="Accessibilité Universelle"
            description="60% des utilisateurs de services de santé ont plus de 50 ans et nécessitent une accessibilité renforcée."
          />
        </div>
      </section>

      {/* How to Track Your Health */}
      <section className="mb-12 sm:mb-16 bg-gradient-to-br from-ocean-light/30 to-sea-green/10 p-4 sm:p-6 md:p-8 rounded-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center px-4">Trois Façons de Suivre Votre Santé</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <ActionCard
            number="1"
            title="Suivi Médicaments"
            description="Respectez votre traitement quotidien et améliorez votre observance"
            link="/pledge"
          />
          <ActionCard
            number="2"
            title="Objectifs Activité"
            description="Fixez et suivez vos objectifs d'activité physique hebdomadaire"
            link="/pledge"
          />
          <ActionCard
            number="3"
            title="Partage Sécurisé"
            description="Partagez vos données avec votre médecin en toute sécurité"
            link="/learn"
          />
        </div>
      </section>

      {/* RSE Values */}
      <section className="mb-12 sm:mb-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 px-4">Construit avec Responsabilité</h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto px-4">
          Cette plateforme applique les principes du RSE by Design. Conforme RGPD, accessible WCAG AAA, et éco-conçue selon le référentiel RGESN.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <ValueCard icon={FaLeaf} title="Environnemental" description="Mode sombre par défaut, taille optimisée (97% moins de CO₂)" />
          <ValueCard icon={FaUniversalAccess} title="Social" description="Accessible WCAG AAA, fonctionne sur réseaux 2G" />
          <ValueCard icon={FaShieldAlt} title="Éthique" description="Aucun suivi, code ouvert, confidentialité garantie" />
        </div>
        <Link
          href="/transparency"
          className="inline-block mt-6 sm:mt-8 text-ocean-blue hover:text-ocean-blue/80 font-semibold px-4"
        >
          Découvrir notre approche RSE by Design →
        </Link>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="text-3xl sm:text-4xl mb-3 text-ocean-blue" aria-hidden="true">
        <Icon />
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

interface ActionCardProps {
  number: string;
  title: string;
  description: string;
  link: string;
}

function ActionCard({ number, title, description, link }: ActionCardProps) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-ocean-blue text-white rounded-full font-bold text-lg sm:text-xl mb-3 sm:mb-4">
        {number}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">{description}</p>
      <Link href={link} className="text-sm sm:text-base text-ocean-blue hover:text-ocean-blue/80 font-semibold">
        Get Started →
      </Link>
    </div>
  );
}

interface ValueCardProps {
  icon: IconType;
  title: string;
  description: string;
}

function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg">
      <div className="text-xl sm:text-2xl mb-2 text-ocean-blue flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-ocean-light dark:bg-ocean-dark rounded-full mx-auto" aria-hidden="true">
        <Icon />
      </div>
      <h4 className="text-sm sm:text-base font-bold mb-1">{title}</h4>
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

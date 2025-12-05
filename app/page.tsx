'use client';

import Link from "next/link";
import ImpactCounter from "@/components/ImpactCounter";
import CarbonBadge from "@/components/CarbonBadge";
import { FaUsers, FaLock, FaUniversalAccess, FaLeaf, FaShieldAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12 sm:mb-16">
        <div className="mb-6 flex justify-center">
          <CarbonBadge pageName={t('home.carbonBadge')} estimatedKB={45} />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-ocean-blue to-sea-green bg-clip-text text-transparent px-4">
          {t('home.title')}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto px-4">
          {t('home.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <Link
            href="/pledge"
            className="w-full sm:w-auto bg-ocean-blue hover:bg-ocean-blue/90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg text-center"
          >
            {t('home.cta.goals')}
          </Link>
          <Link
            href="/learn"
            className="w-full sm:w-auto border-2 border-ocean-blue text-ocean-blue hover:bg-ocean-blue/10 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all text-center"
          >
            {t('home.cta.learn')}
          </Link>
        </div>
      </section>

      {/* Live Impact Dashboard */}
      <section className="mb-16">
        <ImpactCounter />
      </section>

      {/* Why Digital Health Matters */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center px-4">{t('home.whyTitle')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <FeatureCard
            icon={FaUsers}
            title={t('home.feature1.title')}
            description={t('home.feature1.desc')}
          />
          <FeatureCard
            icon={FaLock}
            title={t('home.feature2.title')}
            description={t('home.feature2.desc')}
          />
          <FeatureCard
            icon={FaUniversalAccess}
            title={t('home.feature3.title')}
            description={t('home.feature3.desc')}
          />
        </div>
      </section>

      {/* How to Track Your Health */}
      <section className="mb-12 sm:mb-16 bg-gradient-to-br from-ocean-light/30 to-sea-green/10 p-4 sm:p-6 md:p-8 rounded-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center px-4">{t('home.trackingTitle')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <ActionCard
            number="1"
            title={t('home.action1.title')}
            description={t('home.action1.desc')}
            link="/pledge"
            cta={t('home.action.cta')}
          />
          <ActionCard
            number="2"
            title={t('home.action2.title')}
            description={t('home.action2.desc')}
            link="/pledge"
            cta={t('home.action.cta')}
          />
          <ActionCard
            number="3"
            title={t('home.action3.title')}
            description={t('home.action3.desc')}
            link="/learn"
            cta={t('home.action.cta')}
          />
        </div>
      </section>

      {/* RSE Values */}
      <section className="mb-12 sm:mb-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 px-4">{t('home.rseTitle')}</h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto px-4">
          {t('home.rseSubtitle')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <ValueCard icon={FaLeaf} title={t('home.value1.title')} description={t('home.value1.desc')} />
          <ValueCard icon={FaUniversalAccess} title={t('home.value2.title')} description={t('home.value2.desc')} />
          <ValueCard icon={FaShieldAlt} title={t('home.value3.title')} description={t('home.value3.desc')} />
        </div>
        <Link
          href="/transparency"
          className="inline-block mt-6 sm:mt-8 text-ocean-blue hover:text-ocean-blue/80 font-semibold px-4"
        >
          {t('home.rseLink')}
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
  cta: string;
}

function ActionCard({ number, title, description, link, cta }: ActionCardProps) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-ocean-blue text-white rounded-full font-bold text-lg sm:text-xl mb-3 sm:mb-4">
        {number}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">{description}</p>
      <Link href={link} className="text-sm sm:text-base text-ocean-blue hover:text-ocean-blue/80 font-semibold">
        {cta}
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

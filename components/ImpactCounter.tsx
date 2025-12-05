'use client';

import { useEffect, useState } from 'react';

interface ImpactStats {
  users: number;
  adherenceRate: number;
  daysTracked: number;
  goalsAchieved: number;
}

export default function ImpactCounter() {
  const [stats, setStats] = useState<ImpactStats>({
    users: 0,
    adherenceRate: 0,
    daysTracked: 0,
    goalsAchieved: 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Load stats from localStorage or use demo data
    const savedStats = localStorage.getItem('healthStats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    } else {
      // Initialize with demo data (realistic healthcare metrics)
      const initialStats = {
        users: 847,
        adherenceRate: 78,
        daysTracked: 15420,
        goalsAchieved: 1263,
      };
      setStats(initialStats);
      localStorage.setItem('healthStats', JSON.stringify(initialStats));
    }

    // Simulate live updates every 30 seconds
    const interval = setInterval(() => {
      setStats(prev => {
        const updated = {
          users: prev.users + Math.floor(Math.random() * 2),
          adherenceRate: Math.min(100, Math.max(70, prev.adherenceRate + (Math.random() > 0.5 ? 1 : -1))),
          daysTracked: prev.daysTracked + Math.floor(Math.random() * 15),
          goalsAchieved: prev.goalsAchieved + Math.floor(Math.random() * 5),
        };
        if (typeof window !== 'undefined') {
          localStorage.setItem('healthStats', JSON.stringify(updated));
        }
        return updated;
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="w-full bg-gradient-to-br from-ocean-blue to-sea-green p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 text-center px-2">
        Impact Communautaire en Direct
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        <StatCard
          value={formatNumber(stats.users)}
          label="Utilisateurs Actifs"
          icon="Utilisateurs"
        />
        <StatCard
          value={`${stats.adherenceRate}%`}
          label="Taux d'Observance"
          icon="Observance"
        />
        <StatCard
          value={formatNumber(stats.daysTracked)}
          label="Jours de Suivi"
          icon="Suivi"
        />
        <StatCard
          value={formatNumber(stats.goalsAchieved)}
          label="Objectifs Atteints"
          icon="Objectifs"
        />
      </div>
      <p className="text-white/80 text-xs sm:text-sm text-center mt-4 sm:mt-6 px-2">
        Mis à jour en direct • Toutes les données stockées localement pour votre confidentialité (RGPD)
      </p>
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  icon: string;
}

function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center transition-transform hover:scale-105">
      <div
        className="text-[10px] sm:text-xs font-semibold mb-1 sm:mb-2 text-white/70 uppercase tracking-wider"
        aria-hidden="true"
      >
        {icon}
      </div>
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-0.5 sm:mb-1">
        {value}
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm text-white/90 leading-tight">
        {label}
      </div>
    </div>
  );
}

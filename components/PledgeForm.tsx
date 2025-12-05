'use client';

import { useState, useEffect, FormEvent } from 'react';

const HEALTH_GOAL_OPTIONS = [
  {
    id: 'medication',
    title: 'Suivre mon traitement quotidien pendant 30 jours',
    description: 'Respecter les horaires et dosages prescrits',
    impact: 'Améliore l\'observance de ~40%',
  },
  {
    id: 'activity',
    title: 'Activité physique 3 fois par semaine',
    description: 'Marche, sport ou exercice régulier',
    impact: 'Réduit les risques cardiovasculaires',
  },
  {
    id: 'tracking',
    title: 'Suivre mes constantes de santé',
    description: 'Tension, glycémie, poids selon prescription',
    impact: 'Aide au diagnostic et ajustements',
  },
  {
    id: 'custom',
    title: 'Objectif santé personnalisé',
    description: 'Créez votre propre objectif de santé',
    impact: 'Chaque action compte',
  },
];

export default function HealthGoalsForm() {
  const [selectedGoal, setSelectedGoal] = useState('');
  const [customGoal, setCustomGoal] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [totalGoals, setTotalGoals] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load total health goals count
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('totalHealthGoals');
      if (saved) {
        setTotalGoals(parseInt(saved, 10));
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!selectedGoal) {
      alert('Veuillez sélectionner un objectif');
      return;
    }

    if (selectedGoal === 'custom' && !customGoal.trim()) {
      alert('Veuillez décrire votre objectif personnalisé');
      return;
    }

    if (typeof window !== 'undefined') {
      // Save health goal to localStorage
      const goals = JSON.parse(localStorage.getItem('healthGoals') || '[]');
      const newGoal = {
        id: Date.now(),
        type: selectedGoal,
        custom: customGoal,
        name: name || 'Anonyme',
        date: new Date().toISOString(),
      };
      goals.push(newGoal);
      localStorage.setItem('healthGoals', JSON.stringify(goals));

      // Increment total goals counter
      const newTotal = totalGoals + 1;
      setTotalGoals(newTotal);
      localStorage.setItem('totalHealthGoals', String(newTotal));

      // Update global stats
      const stats = JSON.parse(localStorage.getItem('healthStats') || '{}');
      if (stats.users) {
        stats.users += 1;
        stats.goalsAchieved += 1;
        if (selectedGoal === 'medication') {
          stats.adherenceRate = Math.min(100, stats.adherenceRate + 0.5);
          stats.daysTracked += 30;
        } else if (selectedGoal === 'activity' || selectedGoal === 'tracking') {
          stats.daysTracked += 7;
        }
        localStorage.setItem('healthStats', JSON.stringify(stats));
      }
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-sea-green to-ocean-blue p-8 rounded-2xl shadow-lg text-white text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Objectif Enregistré avec Succès</h3>
        <p className="text-lg mb-4">
          {name || 'Anonyme'}, votre engagement contribue à votre santé!
        </p>
        <div className="bg-white/20 rounded-lg p-4 mb-6">
          <p className="text-3xl font-bold">{totalGoals}</p>
          <p className="text-sm">Objectifs Santé Enregistrés par la Communauté</p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setSelectedGoal('');
            setCustomGoal('');
            setName('');
          }}
          className="bg-white text-ocean-blue px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Ajouter un Autre Objectif
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-4">Choisissez Votre Objectif Santé</h3>
        <div className="grid gap-4">
          {HEALTH_GOAL_OPTIONS.map((goal) => (
            <label
              key={goal.id}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                selectedGoal === goal.id
                  ? 'border-ocean-blue bg-ocean-blue/10'
                  : 'border-gray-300 dark:border-gray-600 hover:border-ocean-blue/50'
              }`}
            >
              <input
                type="radio"
                name="goal"
                value={goal.id}
                checked={selectedGoal === goal.id}
                onChange={(e) => setSelectedGoal(e.target.value)}
                className="sr-only"
              />
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedGoal === goal.id
                        ? 'border-ocean-blue bg-ocean-blue'
                        : 'border-gray-400'
                    }`}
                  >
                    {selectedGoal === goal.id && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-lg">{goal.title}</div>
                  <div className="text-sm opacity-80 mt-1">{goal.description}</div>
                  <div className="text-sm text-sea-green font-medium mt-2">
                    Impact: {goal.impact}
                  </div>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {selectedGoal === 'custom' && (
        <div>
          <label htmlFor="customGoal" className="block font-semibold mb-2">
            Votre Objectif Personnalisé
          </label>
          <textarea
            id="customGoal"
            value={customGoal}
            onChange={(e) => setCustomGoal(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-ocean-blue focus:outline-none bg-transparent"
            rows={3}
            placeholder="Décrivez votre objectif santé personnalisé..."
            required={selectedGoal === 'custom'}
          />
        </div>
      )}

      <div>
        <label htmlFor="name" className="block font-semibold mb-2">
          Votre Nom (Optionnel)
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-ocean-blue focus:outline-none bg-transparent"
          placeholder="Anonyme"
        />
        <p className="text-sm opacity-70 mt-1">
          Toutes vos données restent sur votre appareil. Conforme RGPD - aucun suivi ou collecte.
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-ocean-blue hover:bg-ocean-blue/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        Enregistrer Mon Objectif
      </button>

      <div className="text-center text-sm opacity-80">
        <p>{totalGoals} objectifs santé enregistrés par la communauté</p>
      </div>
    </form>
  );
}

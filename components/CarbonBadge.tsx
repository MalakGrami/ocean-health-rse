'use client';

import { useEffect, useState } from 'react';

interface CarbonBadgeProps {
  pageName?: string;
  estimatedKB?: number;
}

export default function CarbonBadge({ pageName = 'This page', estimatedKB = 50 }: CarbonBadgeProps) {
  const [co2Grams, setCo2Grams] = useState<number>(0);
  const [percentCleaner, setPercentCleaner] = useState<number>(0);

  useEffect(() => {
    // Calculate CO2 based on page weight
    // Formula: 0.5g CO2 per MB transferred (average)
    // 1 KB = 0.0005 g CO2
    const calculatedCO2 = (estimatedKB * 0.0005).toFixed(3);
    setCo2Grams(parseFloat(calculatedCO2));

    // Average webpage is ~2.2MB = 1.1g CO2
    // Calculate how much cleaner we are
    const averageCO2 = 1.1;
    const cleanerPercent = Math.round(((averageCO2 - parseFloat(calculatedCO2)) / averageCO2) * 100);
    setPercentCleaner(Math.max(0, cleanerPercent));
  }, [estimatedKB]);

  return (
    <div className="inline-flex items-center gap-3 bg-sea-green/10 border border-sea-green/30 rounded-full px-4 py-2 text-sm">
      <div className="flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sea-green" aria-hidden="true">
          <path d="M12 2C12 2 7 7 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 7 12 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17V22M9 20H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <div>
          <div className="font-semibold">
            {pageName}: {co2Grams}g CO₂
          </div>
          <div className="text-xs opacity-80">
            {percentCleaner}% plus propre (RGESN)
          </div>
        </div>
      </div>
    </div>
  );
}

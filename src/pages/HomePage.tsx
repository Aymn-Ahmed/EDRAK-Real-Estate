import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { PropertyMapPreview } from '../components/PropertyMapPreview';
import { LandPlotsSection } from '../components/LandPlotsSection';
import { MortgageCalculator } from '../components/MortgageCalculator';
import { AIValuationSection } from '../components/AIValuationSection';
import { ServicesGrid } from '../components/ServicesGrid';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenDesignModal: () => void;
  theme: 'light' | 'dark';
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenDesignModal, theme }) => {
  return (
    <div>
      <HeroSection
        onExploreMap={() => onNavigate('map')}
        theme={theme}
      />

      <PropertyMapPreview
        onOpenDesignModal={onOpenDesignModal}
        theme={theme}
      />

      <LandPlotsSection
        onOpenDesignModal={onOpenDesignModal}
        theme={theme}
      />

      <MortgageCalculator
        onOpenDesignModal={onOpenDesignModal}
        theme={theme}
      />

      <AIValuationSection
        onOpenDesignModal={onOpenDesignModal}
        theme={theme}
      />

      <ServicesGrid
        onOpenDesignModal={onOpenDesignModal}
        theme={theme}
      />
    </div>
  );
};

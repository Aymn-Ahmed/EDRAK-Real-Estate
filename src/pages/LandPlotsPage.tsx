import React from 'react';
import { LandPlotsSection } from '../components/LandPlotsSection';

interface LandPlotsPageProps {
  onOpenDesignModal: () => void;
  theme: 'light' | 'dark';
}

export const LandPlotsPage: React.FC<LandPlotsPageProps> = ({ onOpenDesignModal, theme }) => {
  return (
    <div className="py-6">
      <LandPlotsSection onOpenDesignModal={onOpenDesignModal} theme={theme} />
    </div>
  );
};

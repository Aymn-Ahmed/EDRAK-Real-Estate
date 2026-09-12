import React from 'react';
import { MortgageCalculator } from '../components/MortgageCalculator';

interface MortgagePageProps {
  onOpenDesignModal: () => void;
  theme: 'light' | 'dark';
}

export const MortgagePage: React.FC<MortgagePageProps> = ({ onOpenDesignModal, theme }) => {
  return (
    <div className="py-6">
      <MortgageCalculator onOpenDesignModal={onOpenDesignModal} theme={theme} />
    </div>
  );
};

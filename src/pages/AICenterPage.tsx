import React from 'react';
import { AIValuationSection } from '../components/AIValuationSection';

interface AICenterPageProps {
  onOpenDesignModal: () => void;
  theme: 'light' | 'dark';
}

export const AICenterPage: React.FC<AICenterPageProps> = ({ onOpenDesignModal, theme }) => {
  return (
    <div className="py-6">
      <AIValuationSection onOpenDesignModal={onOpenDesignModal} theme={theme} />
    </div>
  );
};

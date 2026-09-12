import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { PropertyMapPage } from './pages/PropertyMapPage';
import { LandPlotsPage } from './pages/LandPlotsPage';
import { MortgagePage } from './pages/MortgagePage';
import { AICenterPage } from './pages/AICenterPage';
import { InvestmentsPage } from './pages/InvestmentsPage';
import { DevelopersPage } from './pages/DevelopersPage';
import { ContractorsPage } from './pages/ContractorsPage';
import { ConsultantsPage } from './pages/ConsultantsPage';
import { BuildingMaterialsPage } from './pages/BuildingMaterialsPage';
import { DashboardPage } from './pages/DashboardPage';
import { ContactPage } from './pages/ContactPage';
import { ScreenshotsShowcase } from './components/ScreenshotsShowcase';
import { Footer } from './components/Footer';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('hero');
  const [designModalOpen, setDesignModalOpen] = useState<boolean>(false);
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.body.className = theme === 'light' ? 'theme-light' : 'theme-dark';
  }, [theme]);

  // Render active view
  const renderCurrentView = () => {
    switch (activeTab) {
      case 'map':
        return <PropertyMapPage onOpenDesignModal={() => setDesignModalOpen(true)} theme={theme} />;
      case 'lands':
        return <LandPlotsPage onOpenDesignModal={() => setDesignModalOpen(true)} theme={theme} />;
      case 'mortgage':
        return <MortgagePage onOpenDesignModal={() => setDesignModalOpen(true)} theme={theme} />;
      case 'ai':
        return <AICenterPage onOpenDesignModal={() => setDesignModalOpen(true)} theme={theme} />;
      case 'investments':
        return <InvestmentsPage onOpenDesignModal={() => setDesignModalOpen(true)} theme={theme} />;
      case 'developers':
        return <DevelopersPage onOpenDesignModal={() => setDesignModalOpen(true)} theme={theme} />;
      case 'contractors':
        return <ContractorsPage onOpenDesignModal={() => setDesignModalOpen(true)} theme={theme} />;
      case 'consultants':
        return <ConsultantsPage onOpenDesignModal={() => setDesignModalOpen(true)} theme={theme} />;
      case 'materials':
        return <BuildingMaterialsPage onOpenDesignModal={() => setDesignModalOpen(true)} theme={theme} />;
      case 'dashboard':
        return <DashboardPage onOpenDesignModal={() => setDesignModalOpen(true)} theme={theme} />;
      case 'contact':
        return <ContactPage theme={theme} />;
      case 'hero':
      default:
        return <HomePage onNavigate={setActiveTab} onOpenDesignModal={() => setDesignModalOpen(true)} theme={theme} />;
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-200 flex flex-col font-sans bg-slate-50 text-slate-900" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Dynamic Main View */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Presentation Design Showcase Modal */}
      <ScreenshotsShowcase
        isOpen={designModalOpen}
        onClose={() => setDesignModalOpen(false)}
      />

      {/* Enterprise Mega Footer */}
      <Footer
        onOpenDesignModal={() => setDesignModalOpen(true)}
        theme={theme}
      />

    </div>
  );
}

export default App;

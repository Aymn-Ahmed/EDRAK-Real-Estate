import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExploreMap: () => void;
  theme: 'light' | 'dark';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreMap, theme }) => {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'sell'>('buy');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative overflow-hidden pt-12 pb-24 bg-[#194537] text-white">
      
      {/* High-Resolution Skyscraper Skyline Backdrop Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-soft-light opacity-50 pointer-events-none scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url('/images/luxury_towers_hero.png')` }}
      />
      
      {/* Smooth Dark Emerald Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F352A]/90 via-[#174335]/80 to-[#103328]/95 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Floating Badge (Right / Centered) */}
        <div className="flex justify-start md:justify-end mb-8">
          <div className="inline-flex items-center space-x-2 space-x-reverse bg-[#235342]/90 border border-[#3C7B65]/60 rounded-full px-4 py-1.5 shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span className="text-emerald-200 text-xs sm:text-sm font-extrabold tracking-wide">
              منصة العقار الفاخرة في المملكة
            </span>
          </div>
        </div>

        {/* Main Hero Header (Exact text matching user screenshot) */}
        <div className="max-w-4xl space-y-6 text-right">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.18] text-white drop-shadow-md font-['Almarai','Cairo',sans-serif]">
            حيث تلتقي الفخامة بالثقة
            <br />
            في عالم العقار
          </h1>

          <p className="text-base sm:text-xl text-[#D5E7DF] font-medium leading-relaxed max-w-3xl">
            منصة عقارية متكاملة تجمع العقارات والأراضي والمشاريع والمطورين والتمويل وأدوات الذكاء الاصطناعي في مكان واحد.
          </p>
        </div>

        {/* Action Tabs & Floating White Search Bar Container */}
        <div className="mt-14 max-w-4xl">
          
          {/* Action Tabs (شراء | إيجار | بيع) */}
          <div className="flex items-center space-x-2 space-x-reverse mb-3 justify-end sm:justify-start">
            {[
              { id: 'buy', label: 'شراء' },
              { id: 'rent', label: 'إيجار' },
              { id: 'sell', label: 'بيع' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-7 py-2.5 rounded-xl text-sm font-black transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#E0A838] text-[#174032] shadow-lg scale-105'
                    : 'bg-[#143B2E]/80 border border-[#2B604E] text-[#D5E7DF] hover:bg-[#235342]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* White Floating Search Box */}
          <div className="bg-white rounded-3xl p-2.5 sm:p-3 shadow-2xl border border-gray-100 flex items-center justify-between gap-3">
            
            {/* Right Input Side */}
            <div className="flex items-center flex-1 px-4 py-2">
              <Search className="w-5 h-5 text-amber-500 ml-3 flex-shrink-0" />
              <input
                type="text"
                placeholder="ابحث عن مدينة، حي، أو نوع العقار..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') onExploreMap(); }}
                className="bg-transparent text-sm sm:text-base font-semibold text-slate-800 placeholder-gray-400 focus:outline-none w-full dir-rtl"
              />
            </div>

            {/* Left Green Search Button */}
            <button
              onClick={onExploreMap}
              className="bg-[#174032] hover:bg-[#0C3B2E] text-white px-9 py-3.5 rounded-2xl font-black text-base shadow-md transition-all flex items-center justify-center cursor-pointer active:scale-95 flex-shrink-0"
            >
              بحث
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

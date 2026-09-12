import React, { useState } from 'react';
import { MapPin, Compass, CheckCircle2, ArrowLeft, Sparkles, Building, Layers, ShieldCheck } from 'lucide-react';

interface LandPlotsSectionProps {
  onOpenDesignModal: () => void;
  theme: 'light' | 'dark';
}

export const LandPlotsSection: React.FC<LandPlotsSectionProps> = ({ onOpenDesignModal, theme }) => {
  const [selectedZone, setSelectedZone] = useState<'all' | 'residential' | 'commercial' | 'industrial'>('all');

  const landPlots = [
    {
      id: 1,
      title: 'مخطط الملقا الذهبي - بلك 14',
      district: 'حي الملقا - شمال الرياض',
      area: '900 م²',
      pricePerMeter: '4,200 ر.س / م²',
      totalPrice: '3,780,000 ر.س',
      zone: 'سكني (فلل فاخرة)',
      ratio: '60% بناء',
      streets: 'شوارع 20م و 15م',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'أرض تجارية استثمارية - طريق انس بن مالك',
      district: 'حي الصحافة - الرياض',
      area: '1,850 م²',
      pricePerMeter: '8,500 ر.س / م²',
      totalPrice: '15,725,000 ر.س',
      zone: 'تجاري سكني (معارض ومكاتب)',
      ratio: '75% بناء',
      streets: 'طريق تجاري 36م',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 3,
      title: 'أرض خام مخصصة للتطوير العقاري',
      district: 'حي النرجس - التوسع الشمالي',
      area: '12,500 م²',
      pricePerMeter: '2,100 ر.س / م²',
      totalPrice: '26,250,000 ر.س',
      zone: 'خام مطورة بالكامل',
      ratio: 'مخطط معتمد',
      streets: 'محيطة بـ 4 شوارع',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      featured: false
    }
  ];

  const filteredLands = selectedZone === 'all'
    ? landPlots
    : landPlots.filter(l => selectedZone === 'residential' ? l.zone.includes('سكني') : l.zone.includes('تجاري'));

  return (
    <section id="lands" className="py-20 border-b border-slate-200 bg-white text-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 space-x-reverse text-amber-700 font-bold text-sm mb-2 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
              <Compass className="w-4 h-4 text-amber-600" />
              <span>قسم الأراضي والمخططات المعتمدة</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              الأراضي الخام والمطورة بالكامل
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-slate-600">
              استعراض المخططات المعتمدة من الهيئة العامة للعقار مع حساب سعر المتر المربع وتفاصيل النسبة وشوارع المخطط.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center space-x-3 space-x-reverse mb-8 overflow-x-auto pb-2">
          {[
            { id: 'all', label: 'كافة المخططات والأراضي' },
            { id: 'residential', label: 'أراضي سكنية' },
            { id: 'commercial', label: 'أراضي تجارية واستثمارية' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedZone(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedZone === tab.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Land Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredLands.map((land) => (
            <div
              key={land.id}
              className="rounded-3xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between transition-all group hover:shadow-xl hover:border-slate-300"
            >
              <div>
                <div className="relative h-56 bg-slate-100 overflow-hidden border-b border-slate-200">
                  <img src={land.image} alt={land.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-md border border-slate-700">
                    {land.zone}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md text-[#D97706] text-xs font-bold px-3 py-1 rounded-lg border border-amber-200 shadow-sm">
                    {land.pricePerMeter}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      {land.district}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">{land.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 block">المساحة الإجمالية:</span>
                      <strong className="text-slate-900 font-bold">{land.area}</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 block">عرض الشوارع:</span>
                      <strong className="text-slate-900">{land.streets}</strong>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div>
                      <span className="text-[11px] text-slate-500 block">السعر الإجمالي:</span>
                      <span className="text-lg font-black text-[#D97706]">{land.totalPrice}</span>
                    </div>
                    <button
                      className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md cursor-pointer transition-colors"
                    >
                      طلب رفع مساحي
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

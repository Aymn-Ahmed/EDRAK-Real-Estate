import React from 'react';
import { TrendingUp, DollarSign, Building2, Sparkles, ShieldCheck, ArrowLeft } from 'lucide-react';

interface InvestmentsPageProps {
  onOpenDesignModal: () => void;
  theme: 'light' | 'dark';
}

export const InvestmentsPage: React.FC<InvestmentsPageProps> = ({ onOpenDesignModal, theme }) => {
  const isLight = theme === 'light';

  const investments = [
    {
      id: 1,
      title: 'صندوق تطوير أراضي حي النرجس السكني',
      city: 'الرياض - التوسع الشمالي',
      type: 'صندوق عقاري خاص',
      expectedRoi: '18.5% سنوياً',
      duration: '24 شهراً',
      minInvestment: '100,000 ر.س',
      targetAmount: '50,000,000 ر.س',
      funded: 72,
      image: '/images/الفرص الاستثماريه.jpeg'
    },
    {
      id: 2,
      title: 'مجمع معارض ومكاتب تجارية - طريق انس بن مالك',
      city: 'الرياض - حي الملقا',
      type: 'مشاريع تجارية مدرة للدخل',
      expectedRoi: '14.2% سنوياً',
      duration: '36 شهراً',
      minInvestment: '250,000 ر.س',
      targetAmount: '85,000,000 ر.س',
      funded: 88,
      image: '/images/المشاريع.jpeg'
    },
    {
      id: 3,
      title: 'مخطط لوجستي ومستودعات - حي السلي',
      city: 'الرياض - حي السلي',
      type: 'تطوير صناعي ولوجستي',
      expectedRoi: '16.0% سنوياً',
      duration: '18 شهراً',
      minInvestment: '150,000 ر.س',
      targetAmount: '35,000,000 ر.س',
      funded: 64,
      image: '/images/الاراضي.jpeg'
    }
  ];

  return (
    <div className={`py-12 border-b transition-colors ${
      isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 space-x-reverse text-emerald-600 font-bold text-sm mb-2">
              <TrendingUp className="w-4 h-4" />
              <span>منصة الفرص والصناديق العقارية المرخصة</span>
            </div>
            <h1 className={`text-3xl sm:text-5xl font-black ${isLight ? 'text-slate-900' : 'text-white'}`}>
              الفرص الاستثمارية والمشاريع
            </h1>
            <p className={`mt-2 text-sm sm:text-base ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              استثمار مباشر في الصناديق والمشاريع العقارية عالية النمو برخص هيئة السوق المالية والهيئة العامة للعقار.
            </p>
          </div>

          <button
            onClick={onOpenDesignModal}
            className={`${isLight ? 'gold-badge-light' : 'gold-badge-dark'} px-5 py-3 rounded-xl font-bold text-sm flex items-center space-x-2 space-x-reverse shadow-lg cursor-pointer hover:scale-105 transition-all`}
          >
            <Sparkles className="w-5 h-5" />
            <span>عرض شاشة الفرص الاستثمارية بالتصاميم 🖼️</span>
          </button>
        </div>

        {/* Investment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {investments.map((inv) => (
            <div
              key={inv.id}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all ${
                isLight ? 'bg-white border-slate-200 shadow-xl' : 'glass-card-dark border-slate-800'
              }`}
            >
              <div>
                <div className="relative h-56 bg-slate-900 overflow-hidden">
                  <img src={inv.image} alt={inv.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {inv.type}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 text-sm font-black px-3 py-1.5 rounded-lg border border-amber-500/30">
                    العائد المتوقع: {inv.expectedRoi}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{inv.title}</h3>
                  <p className="text-xs text-slate-500">{inv.city}</p>

                  <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">مدة الاستثمار:</span>
                      <strong className={isLight ? 'text-slate-800' : 'text-slate-200'}>{inv.duration}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">الحد الأدنى للاستثمار:</span>
                      <strong className="text-emerald-600 font-bold">{inv.minInvestment}</strong>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1 pt-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>نسبة التغطية الحالية:</span>
                      <span className="text-emerald-600">{inv.funded}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${inv.funded}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenDesignModal}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all text-xs cursor-pointer"
                >
                  الاستثمار الفوري في الفرصة
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

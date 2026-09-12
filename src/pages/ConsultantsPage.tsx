import React from 'react';
import { FileText, ShieldCheck, Award, Sparkles, Compass } from 'lucide-react';

interface ConsultantsPageProps {
  onOpenDesignModal: () => void;
  theme: 'light' | 'dark';
}

export const ConsultantsPage: React.FC<ConsultantsPageProps> = ({ onOpenDesignModal, theme }) => {
  const isLight = theme === 'light';

  const consultants = [
    {
      id: 1,
      name: 'مكتب الاستشارات الهندسية والتخطيط العمراني',
      license: 'ترخيص الهيئة السعودية للمهندسين #1092',
      specialty: 'تخطيط المخططات وتصميم الأبراج والفلل',
      projects: 56,
      image: '/images/المكاتب الاستشاريه.jpeg'
    },
    {
      id: 2,
      name: 'مكتب الرؤية للاستشارات المعمارية',
      license: 'ترخيص معتمد #2104',
      specialty: 'تصاميم مودرن وإشراف هندسي',
      projects: 42,
      image: '/images/الرئيسيه.jpeg'
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
            <div className="inline-flex items-center space-x-2 space-x-reverse text-blue-600 font-bold text-sm mb-2">
              <FileText className="w-4 h-4" />
              <span>دليل المكاتب الهندسية والاستشارية المرخصة</span>
            </div>
            <h1 className={`text-3xl sm:text-5xl font-black ${isLight ? 'text-slate-900' : 'text-white'}`}>
              المكاتب الاستشارية والهندسية
            </h1>
            <p className={`mt-2 text-sm sm:text-base ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              تصاميم هندسية وتراخيص بناء وإشراف كامل معتمد من الهيئة السعودية للمهندسين.
            </p>
          </div>

          <button
            onClick={onOpenDesignModal}
            className={`${isLight ? 'gold-badge-light' : 'gold-badge-dark'} px-5 py-3 rounded-xl font-bold text-sm flex items-center space-x-2 space-x-reverse shadow-lg cursor-pointer hover:scale-105 transition-all`}
          >
            <Sparkles className="w-5 h-5" />
            <span>عرض شاشة المكاتب الاستشارية 🖼️</span>
          </button>
        </div>

        {/* Consultants Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {consultants.map((c) => (
            <div
              key={c.id}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all ${
                isLight ? 'bg-white border-slate-200 shadow-xl' : 'glass-card-dark border-slate-800'
              }`}
            >
              <div>
                <div className="relative h-52 bg-slate-900 overflow-hidden">
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    مكتب استشاري معتمد
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className={`text-xl font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{c.name}</h3>
                  <p className="text-xs text-slate-500">{c.license}</p>

                  <div className="space-y-2 text-xs pt-2 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex justify-between">
                      <span className="text-slate-500">التخصص الرئيسي:</span>
                      <strong className="text-blue-600 font-bold">{c.specialty}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">مشاريع الإشراف والتصميم:</span>
                      <strong className={isLight ? 'text-slate-800' : 'text-slate-200'}>{c.projects} مشروعاً</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenDesignModal}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all text-xs cursor-pointer"
                >
                  طلب استشارة هندسية أو ترخيص
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { HardHat, ShieldCheck, Award, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

interface ContractorsPageProps {
  onOpenDesignModal: () => void;
  theme: 'light' | 'dark';
}

export const ContractorsPage: React.FC<ContractorsPageProps> = ({ onOpenDesignModal, theme }) => {
  const isLight = theme === 'light';

  const contractors = [
    {
      id: 1,
      name: 'شركة الإنشاءات والمقاولات المتقدمة',
      classification: 'تصنيف مقاولين فئة أولى (مباني وأبراج)',
      cr: 'سجل تجاري 1010394200',
      projects: 24,
      city: 'الرياض والمنطقة الوسطى',
      image: '/images/المقاولون.jpeg'
    },
    {
      id: 2,
      name: 'مؤسسة العمران للمقاولات العامة',
      classification: 'تصنيف مقاولين فئة ثانية (مجمعات سكنية)',
      cr: 'سجل تجاري 1010582910',
      projects: 19,
      city: 'الرياض وجدة',
      image: '/images/المشاريع.jpeg'
    },
    {
      id: 3,
      name: 'شركة البنية التحتية والشبكات',
      classification: 'تصنيف فئة أولى (بنية تحتية وطرق)',
      cr: 'سجل تجاري 1010283940',
      projects: 31,
      city: 'كافة مناطق المملكة',
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
            <div className="inline-flex items-center space-x-2 space-x-reverse text-teal-600 font-bold text-sm mb-2">
              <HardHat className="w-4 h-4" />
              <span>دليل شركات المقاولات المصنفة والمعتمدة</span>
            </div>
            <h1 className={`text-3xl sm:text-5xl font-black ${isLight ? 'text-slate-900' : 'text-white'}`}>
              المقاولون المعتمدون
            </h1>
            <p className={`mt-2 text-sm sm:text-base ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              شركات المقاولات العامة والبنية التحتية المصنفة من الهيئة السعودية للمقاولين.
            </p>
          </div>

          <button
            onClick={onOpenDesignModal}
            className={`${isLight ? 'gold-badge-light' : 'gold-badge-dark'} px-5 py-3 rounded-xl font-bold text-sm flex items-center space-x-2 space-x-reverse shadow-lg cursor-pointer hover:scale-105 transition-all`}
          >
            <Sparkles className="w-5 h-5" />
            <span>عرض شاشة المقاولين بالتصاميم 🖼️</span>
          </button>
        </div>

        {/* Contractors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contractors.map((c) => (
            <div
              key={c.id}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all ${
                isLight ? 'bg-white border-slate-200 shadow-xl' : 'glass-card-dark border-slate-800'
              }`}
            >
              <div>
                <div className="relative h-48 bg-slate-900 overflow-hidden">
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    مقتول معتمد
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{c.name}</h3>
                  
                  <div className="space-y-2 text-xs pt-2 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex justify-between">
                      <span className="text-slate-500">التصنيف الرسمي:</span>
                      <strong className="text-teal-600 font-bold">{c.classification}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">سجل المقاولات:</span>
                      <strong className={isLight ? 'text-slate-800' : 'text-slate-200'}>{c.cr}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">المشاريع المنجزة:</span>
                      <strong className="text-emerald-600 font-bold">{c.projects} مشروعاً</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenDesignModal}
                  className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all text-xs cursor-pointer"
                >
                  طلب تسعير تنفيذ مشروع
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

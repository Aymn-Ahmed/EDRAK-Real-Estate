import React from 'react';
import { Building2, ShieldCheck, Star, MapPin, Sparkles, Phone, Award } from 'lucide-react';

interface DevelopersPageProps {
  onOpenDesignModal: () => void;
  theme: 'light' | 'dark';
}

export const DevelopersPage: React.FC<DevelopersPageProps> = ({ onOpenDesignModal, theme }) => {
  const isLight = theme === 'light';

  const developers = [
    {
      id: 1,
      name: 'شركة إدارك للتطوير العقاري',
      license: 'مطور معتمد - رخصة وافي رقم 4092',
      rating: 4.9,
      projectsCount: 18,
      completedUnits: '+2,400 وحدة سكنية',
      city: 'الرياض - KAFD',
      image: '/images/المطورون.jpeg'
    },
    {
      id: 2,
      name: 'مجموعة الطيار العقارية المتقدمة',
      license: 'مطور معتمد - رخصة وافي رقم 3110',
      rating: 4.8,
      projectsCount: 14,
      completedUnits: '+1,800 وحدة سكنية وتجارية',
      city: 'الرياض وجدة',
      image: '/images/المشاريع.jpeg'
    },
    {
      id: 3,
      name: 'شركة الرؤية للتطوير والعمران',
      license: 'مطور معتمد - تصنيف فئة أولى',
      rating: 4.7,
      projectsCount: 11,
      completedUnits: '+950 مجمع سكني',
      city: 'الرياض والمنطقة الشرقية',
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
            <div className="inline-flex items-center space-x-2 space-x-reverse text-emerald-600 font-bold text-sm mb-2">
              <Building2 className="w-4 h-4" />
              <span>دليل المطورين العقاريين المعتمدين (وافي)</span>
            </div>
            <h1 className={`text-3xl sm:text-5xl font-black ${isLight ? 'text-slate-900' : 'text-white'}`}>
              المطورون العقاريون والمشاريع
            </h1>
            <p className={`mt-2 text-sm sm:text-base ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              قائمة المطورين المرخصين ببرنامج وافي التابع لوزارة الشؤون البلدية والقروية والإسكان.
            </p>
          </div>

          <button
            onClick={onOpenDesignModal}
            className={`${isLight ? 'gold-badge-light' : 'gold-badge-dark'} px-5 py-3 rounded-xl font-bold text-sm flex items-center space-x-2 space-x-reverse shadow-lg cursor-pointer hover:scale-105 transition-all`}
          >
            <Sparkles className="w-5 h-5" />
            <span>عرض شاشة المطورين بالتصاميم 🖼️</span>
          </button>
        </div>

        {/* Developers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developers.map((dev) => (
            <div
              key={dev.id}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all ${
                isLight ? 'bg-white border-slate-200 shadow-xl' : 'glass-card-dark border-slate-800'
              }`}
            >
              <div>
                <div className="relative h-48 bg-slate-900 overflow-hidden">
                  <img src={dev.image} alt={dev.name} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{dev.license}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{dev.name}</h3>
                    <span className="text-xs font-bold text-amber-500 flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-500" />
                      {dev.rating}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs pt-2 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex justify-between">
                      <span className="text-slate-500">المشاريع الحالية والمنجزة:</span>
                      <strong className="text-emerald-600 font-bold">{dev.projectsCount} مشروعاً</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">الوحدات المسلمة:</span>
                      <strong className={isLight ? 'text-slate-800' : 'text-slate-200'}>{dev.completedUnits}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">نطاق العمل:</span>
                      <strong className="text-slate-500">{dev.city}</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenDesignModal}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all text-xs cursor-pointer"
                >
                  استعراض مشاريع المطور
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

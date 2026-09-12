import React from 'react';
import { ShoppingBag, ShieldCheck, Tag, Sparkles, Truck } from 'lucide-react';

interface BuildingMaterialsPageProps {
  onOpenDesignModal: () => void;
  theme: 'light' | 'dark';
}

export const BuildingMaterialsPage: React.FC<BuildingMaterialsPageProps> = ({ onOpenDesignModal, theme }) => {
  const isLight = theme === 'light';

  const materials = [
    {
      id: 1,
      title: 'حديد التسليح السعودي المعتمد (سابك)',
      category: 'مواد البناء الأساسية',
      price: '2,850 ر.س / للطن',
      unit: 'شامل التوصيل للموقع',
      supplier: 'موزع معتمد لحديد سابك',
      image: '/images/مواد البناء.jpeg'
    },
    {
      id: 2,
      title: 'أسمنت مقاوم ومادي عادي ممتاز',
      category: 'الخرسانة والأسمنت',
      price: '16.5 ر.س / للكيس (50كجم)',
      unit: 'حمولات شاحنات تريلا',
      supplier: 'مصنع أسمنت اليمامة',
      image: '/images/الاراضي.jpeg'
    },
    {
      id: 3,
      title: 'بورسلان ورخام فاخر للواجهات والفلل',
      category: 'التشطيبات الفاخرة',
      price: '85 ر.س / للمتر المربع',
      unit: 'ألواح بورسلان 120x60',
      supplier: 'شركة الخزف والمواد الفاخرة',
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
            <div className="inline-flex items-center space-x-2 space-x-reverse text-amber-600 font-bold text-sm mb-2">
              <ShoppingBag className="w-4 h-4" />
              <span>منصة توريد مواد البناء والتشطيبات الفاخرة</span>
            </div>
            <h1 className={`text-3xl sm:text-5xl font-black ${isLight ? 'text-slate-900' : 'text-white'}`}>
              مواد البناء والتجهيزات
            </h1>
            <p className={`mt-2 text-sm sm:text-base ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              ربط المطورين والمقاولين بالموردين المعتمدين لمواد العظم والتشطيب بأسعار بالجملة والتوريد المباشر.
            </p>
          </div>

          <button
            onClick={onOpenDesignModal}
            className={`${isLight ? 'gold-badge-light' : 'gold-badge-dark'} px-5 py-3 rounded-xl font-bold text-sm flex items-center space-x-2 space-x-reverse shadow-lg cursor-pointer hover:scale-105 transition-all`}
          >
            <Sparkles className="w-5 h-5" />
            <span>عرض شاشة مواد البناء بالتصاميم 🖼️</span>
          </button>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {materials.map((m) => (
            <div
              key={m.id}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all ${
                isLight ? 'bg-white border-slate-200 shadow-xl' : 'glass-card-dark border-slate-800'
              }`}
            >
              <div>
                <div className="relative h-48 bg-slate-900 overflow-hidden">
                  <img src={m.image} alt={m.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {m.category}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{m.title}</h3>
                  
                  <div className="space-y-2 text-xs pt-2 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex justify-between">
                      <span className="text-slate-500">سعر التوريد المباشر:</span>
                      <strong className="text-amber-600 font-bold text-sm">{m.price}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">التوصيل والكمية:</span>
                      <strong className={isLight ? 'text-slate-800' : 'text-slate-200'}>{m.unit}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">المورد المعتمد:</span>
                      <strong className="text-slate-500">{m.supplier}</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenDesignModal}
                  className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all text-xs cursor-pointer"
                >
                  طلب تسعيرة توريد للموقع
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

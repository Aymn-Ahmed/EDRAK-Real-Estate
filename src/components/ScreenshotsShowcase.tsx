import React, { useState } from 'react';
import { X, Sparkles, LayoutGrid, CheckCircle2, ChevronRight, ChevronLeft, Eye, Download, Maximize2 } from 'lucide-react';

interface ScreenshotsShowcaseProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScreenshotsShowcase: React.FC<ScreenshotsShowcaseProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const designScreenshots = [
    { title: 'الرئيسية (عربي)', category: 'home', file: '/images/الرئيسيه.jpeg', desc: 'واجهة المنصة الرئيسية بالتصميم العربي الفاخر' },
    { title: 'الرئيسية (إنجليزية)', category: 'home', file: '/images/الرئيسيه انجليزي.jpeg', desc: 'الواجهة الرئيسية باللغة الإنجليزية للشركات والمستثمرين' },
    { title: 'خريطة إدارة العقار (فلاتر الكل)', category: 'map', file: '/images/اداره العقار خريطه مع فلاتر الكل.jpeg', desc: 'الخريطة التفاعلية مع خيارات تصفية كافة العقارات' },
    { title: 'خريطة إدارة العقار (فلاتر بيع)', category: 'map', file: '/images/اداره العقار خريطه مع فلاتر بيع.jpeg', desc: 'تحديد عقارات البيع وحساب القيمة والمساحات' },
    { title: 'شاشة الأراضي التفصيلية', category: 'map', file: '/images/شاشه الاراضي كامل.jpeg', desc: 'تفاصيل الأراضي الخام والمطورة والمخططات' },
    { title: 'عرض الأراضي المتاحة', category: 'map', file: '/images/الاراضي.jpeg', desc: 'فلاتر ومواصفات قطع الأراضي السكنية والتجارية' },
    { title: 'التمويل العقاري', category: 'finance', file: '/images/التمويل العقاري.jpeg', desc: 'منظومة حساب واستحقاق التمويل العقاري من البنوك' },
    { title: 'الفرص الاستثمارية', category: 'finance', file: '/images/الفرص الاستثماريه.jpeg', desc: 'استعراض الفرص والمشاريع الاستثمارية الواعدة' },
    { title: 'مركز الذكاء الاصطناعي (الرئيسي)', category: 'ai', file: '/images/مركز الذكاء الاصطناعي.jpeg', desc: 'مساعد الذكاء الاصطناعي للتحليل والتقييم العقاري' },
    { title: 'مركز الذكاء الاصطناعي (الخدمات)', category: 'ai', file: '/images/مركز الذكاء الاصطناعي الخدمات كامل.jpeg', desc: 'كافة خدمات الذكاء الاصطناعي والتنبؤ بأسعار السوق' },
    { title: 'خطة الذكاء الاصطناعي (EN)', category: 'ai', file: '/images/الخطط بالنجلزيز حق الذكاء الالطصناعي.jpeg', desc: 'خطط وتحليلات الذكاء الاصطناعي بالإنجليزية' },
    { title: 'المطورون العقاريون', category: 'partners', file: '/images/المطورون.jpeg', desc: 'دليل المطورين العقاريين المعتمدين والمشاريع' },
    { title: 'المقاولون المعتمدون', category: 'partners', file: '/images/المقاولون.jpeg', desc: 'دليل الشركات والمقاولين المعتمدين بالتصنيف' },
    { title: 'المكاتب الاستشارية', category: 'partners', file: '/images/المكاتب الاستشاريه.jpeg', desc: 'المكاتب الهندسية والاستشارية المرخصة' },
    { title: 'مواد البناء والتوريد', category: 'partners', file: '/images/مواد البناء.jpeg', desc: 'منصة توريد وتجهيز مواد البناء' },
    { title: 'لوحة التحكم القيادية', category: 'dashboard', file: '/images/لوحة التحكم.jpeg', desc: 'لوحة التحكم الإدارية والإحصاءات الشاملة' },
    { title: 'قائمة النافبار العلوي', category: 'home', file: '/images/الخايرات التي في الناف بار العلوي.jpeg', desc: 'الهيكل التنظيمي للخيارات والقوائم الرئيسية' },
    { title: 'الفوتر السفلي', category: 'home', file: '/images/الفوتر السفلي.jpeg', desc: 'تذييل المنصة والروابط السريعة والتواصل' },
  ];

  if (!isOpen) return null;

  const filteredScreenshots = selectedCategory === 'all'
    ? designScreenshots
    : designScreenshots.filter(s => s.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-2xl overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60 sticky top-0 z-20">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">شاشات وتصاميم منصة إدارك العقارية (العرض الخاص بالشركة)</h2>
              <p className="text-xs text-slate-400">تم تجميع وتضمين التصاميم الأصلية بالدقة العالية لعرض الهيكل الكامل للمسؤولين</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Category Filters Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-950/40 flex items-center space-x-2 space-x-reverse overflow-x-auto">
          {[
            { id: 'all', label: 'كافة الشاشات (18)' },
            { id: 'home', label: 'الرئيسية والنافبار' },
            { id: 'map', label: 'الخريطة والأراضي' },
            { id: 'finance', label: 'التمويل والاستثمار' },
            { id: 'ai', label: 'الذكاء الاصطناعي' },
            { id: 'partners', label: 'الشركاء والمقاولون' },
            { id: 'dashboard', label: 'لوحة التحكم' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid Container */}
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScreenshots.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="relative aspect-video bg-slate-950 overflow-hidden border-b border-slate-800">
                  <img
                    src={item.file}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 rounded-full bg-emerald-600/90 text-white shadow-xl">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4 flex items-center justify-between text-xs text-emerald-400 font-semibold">
                <span>انقر للتكبير والمعاينة الحية 🔍</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* High-Res Fullscreen Image Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-60 bg-black/95 flex flex-col justify-between p-4 sm:p-8 backdrop-blur-xl">
          <div className="flex items-center justify-between text-white z-10">
            <div>
              <h3 className="text-lg font-bold">{filteredScreenshots[activeImageIndex].title}</h3>
              <p className="text-xs text-slate-400">{filteredScreenshots[activeImageIndex].desc}</p>
            </div>
            <button
              onClick={() => setActiveImageIndex(null)}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-white hover:bg-slate-800"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <img
              src={filteredScreenshots[activeImageIndex].file}
              alt={filteredScreenshots[activeImageIndex].title}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-slate-800"
            />
          </div>

          <div className="flex items-center justify-between text-slate-400 text-xs z-10">
            <span>الصورة {activeImageIndex + 1} من {filteredScreenshots.length}</span>
            <div className="flex items-center space-x-3 space-x-reverse">
              <button
                disabled={activeImageIndex === 0}
                onClick={() => setActiveImageIndex(activeImageIndex - 1)}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-bold disabled:opacity-40"
              >
                السابقة
              </button>
              <button
                disabled={activeImageIndex === filteredScreenshots.length - 1}
                onClick={() => setActiveImageIndex(activeImageIndex + 1)}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold disabled:opacity-40"
              >
                التالية
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

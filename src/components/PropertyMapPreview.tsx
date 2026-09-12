import React, { useState } from 'react';
import { MapPin, Filter, Layers, Navigation, Eye, Sparkles, Building2, CheckCircle2, ChevronLeft } from 'lucide-react';

interface PropertyMapPreviewProps {
  onOpenDesignModal: () => void;
  theme: 'light' | 'dark';
}

export const PropertyMapPreview: React.FC<PropertyMapPreviewProps> = ({ onOpenDesignModal, theme }) => {
  const [filterType, setFilterType] = useState<'all' | 'sale' | 'rent'>('all');
  const [selectedProperty, setSelectedProperty] = useState<number | null>(1);

  const mockProperties = [
    { id: 1, title: 'أرض سكنية مطورة - حي الملقا', price: '2,400,000 ر.س', type: 'بيع', area: '650 م²', lat: '24.78', lng: '46.63', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'فيلا مودرن فاخرة - حي الياسمين', price: '3,850,000 ر.س', type: 'بيع', area: '450 م²', lat: '24.81', lng: '46.65', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'مكتب تجاري فاخر - مركز المالي KAFD', price: '120,000 ر.س / سنوياً', type: 'إيجار', area: '180 م²', lat: '24.76', lng: '46.64', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'مجمع مستودعات ولوجستيك - حي السلي', price: '5,200,000 ر.س', type: 'بيع', area: '2,500 م²', lat: '24.70', lng: '46.80', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <section id="map" className="py-20 border-b border-slate-200 bg-white text-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 space-x-reverse text-emerald-700 font-bold text-sm mb-2">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>وحدة خريطة إدارة العقارات التفاعلية</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              خريطة العقارات بالفلاتر المتقدمة (بيع / إيجار / أراضي)
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-slate-600">
              نظام الخريطة التفاعلية المزود بالفلاتر الجغرافية والبحث الدقيق حسب الحي والمساحة وميزانية التمويل.
            </p>
          </div>
        </div>

        {/* Map Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-4 sm:p-6 rounded-3xl border border-slate-200 bg-slate-50 shadow-xl">
          
          {/* Map View Canvas (Left 8 Columns) */}
          <div className="lg:col-span-8 relative min-h-[480px] rounded-2xl overflow-hidden border border-slate-300 flex flex-col bg-slate-200">
            
            {/* Map Top Control Bar */}
            <div className="absolute top-4 right-4 left-4 z-20 flex flex-wrap items-center justify-between gap-3 backdrop-blur-md p-3 rounded-xl border border-slate-200 bg-white/95 shadow-lg">
              <div className="flex items-center space-x-2 space-x-reverse">
                {[
                  { id: 'all', label: 'الكل' },
                  { id: 'sale', label: 'فلاتر بيع' },
                  { id: 'rent', label: 'فلاتر إيجار' },
                ].map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => setFilterType(btn.id as any)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      filterType === btn.id
                        ? 'bg-[#174032] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-2 space-x-reverse text-xs text-emerald-800 font-semibold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>متصل بنظام خرائط الرياض والمناطق</span>
              </div>
            </div>

            {/* Simulated Map Visual Content */}
            <div className="relative w-full h-full min-h-[420px] bg-cover bg-center flex items-center justify-center p-6" style={{ backgroundImage: `url('/images/اداره العقار خريطه مع فلاتر الكل.jpeg')` }}>
              <div className="absolute inset-0 bg-slate-900/30 backdrop-brightness-95" />
              
              {/* Overlay Interactive Pins */}
              <div className="relative z-10 text-center p-6 rounded-2xl max-w-md border border-slate-200 bg-white/95 backdrop-blur-md shadow-2xl">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mb-3 animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">معاينة الخريطة العقارية التفاعلية</h3>
                <p className="text-xs mb-4 text-slate-600">
                  تم تمكين الفلاتر الجغرافية المباشرة لجميع أحياء ومناطق المملكة.
                </p>
              </div>
            </div>

          </div>

          {/* Right 4 Columns: Properties Sidebar Cards */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-slate-900">العقارات المعروضة في المنطقة</h3>
              <span className="text-xs text-slate-500">4 نتائج مختارة</span>
            </div>

            {mockProperties.map((prop) => (
              <div
                key={prop.id}
                onClick={() => setSelectedProperty(prop.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  selectedProperty === prop.id
                    ? 'bg-white border-emerald-600 shadow-lg shadow-emerald-500/10 ring-2 ring-emerald-500/20'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex space-x-3 space-x-reverse">
                  <div className="w-20 h-20 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0 border border-slate-200">
                    <img src={prop.image} alt={prop.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                        {prop.type}
                      </span>
                      <span className="text-xs text-slate-500">{prop.area}</span>
                    </div>
                    <h4 className="text-xs font-bold mt-1.5 truncate text-slate-900">{prop.title}</h4>
                    <p className="text-sm font-black text-[#D97706] mt-2">{prop.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

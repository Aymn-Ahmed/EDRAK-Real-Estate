import React, { useState } from 'react';
import { MapPin, Search, Filter, Layers, CheckCircle2, Building, DollarSign, Sparkles, Navigation, Phone, Eye } from 'lucide-react';

interface PropertyMapPageProps {
  onOpenDesignModal: () => void;
  theme: 'light' | 'dark';
}

export const PropertyMapPage: React.FC<PropertyMapPageProps> = ({ onOpenDesignModal, theme }) => {
  const [filterType, setFilterType] = useState<'all' | 'sale' | 'rent' | 'invest'>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'land' | 'villa' | 'commercial'>('all');
  const [searchCity, setSearchCity] = useState('');
  const [selectedPropertyId, setSelectedPropertyId] = useState<number>(1);

  const isLight = theme === 'light';

  const allProperties = [
    {
      id: 1,
      title: 'أرض سكنية مطورة - حي الملقا',
      district: 'حي الملقا - شمال الرياض',
      price: '2,400,000 ر.س',
      pricePerMeter: '3,690 ر.س / م²',
      type: 'بيع',
      category: 'land',
      area: '650 م²',
      streets: 'شارع 20م جنوبي',
      image: '/images/الاراضي.jpeg',
      lat: 24.78,
      lng: 46.63
    },
    {
      id: 2,
      title: 'فيلا مودرن فاخرة - حي الياسمين',
      district: 'حي الياسمين - الرياض',
      price: '3,850,000 ر.س',
      pricePerMeter: '8,550 ر.س / م²',
      type: 'بيع',
      category: 'villa',
      area: '450 م²',
      streets: 'شارع 15م شرقي',
      image: '/images/الرئيسيه.jpeg',
      lat: 24.81,
      lng: 46.65
    },
    {
      id: 3,
      title: 'مكتب تجاري فاخر - مركز الملك عبدالله KAFD',
      district: 'KAFD - المبنى 5.05',
      price: '120,000 ر.س / سنوياً',
      pricePerMeter: '666 ر.س / م²',
      type: 'إيجار',
      category: 'commercial',
      area: '180 م²',
      streets: 'طريق الملك فهد الرئيسي',
      image: '/images/المشاريع.jpeg',
      lat: 24.76,
      lng: 46.64
    },
    {
      id: 4,
      title: 'مجمع مستودعات ولوجستيك - حي السلي',
      district: 'حي السلي - جنوب شرق الرياض',
      price: '5,200,000 ر.س',
      pricePerMeter: '2,080 ر.س / م²',
      type: 'بيع',
      category: 'commercial',
      area: '2,500 م²',
      streets: 'شارع 40م تجاري',
      image: '/images/الفرص الاستثماريه.jpeg',
      lat: 24.70,
      lng: 46.80
    },
    {
      id: 5,
      title: 'أرض تجارية مخصصة لبناء معرض - حي حطين',
      district: 'حي حطين - التوسع الغربي',
      price: '8,900,000 ر.س',
      pricePerMeter: '7,410 ر.س / م²',
      type: 'بيع',
      category: 'land',
      area: '1,200 م²',
      streets: 'طريق انس بن مالك 36م',
      image: '/images/شاشه الاراضي كامل.jpeg',
      lat: 24.77,
      lng: 46.61
    }
  ];

  const filteredList = allProperties.filter(item => {
    if (filterType === 'sale' && item.type !== 'بيع') return false;
    if (filterType === 'rent' && item.type !== 'إيجار') return false;
    if (categoryFilter !== 'all' && item.category !== categoryFilter) return false;
    if (searchCity && !item.district.includes(searchCity) && !item.title.includes(searchCity)) return false;
    return true;
  });

  const selectedProp = allProperties.find(p => p.id === selectedPropertyId) || allProperties[0];

  return (
    <div className={`py-10 border-b transition-colors ${
      isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 space-x-reverse text-emerald-600 font-bold text-sm mb-2">
              <MapPin className="w-4 h-4" />
              <span>الشاشة الكاملة لإدارة العقارات والخريطة التفاعلية</span>
            </div>
            <h1 className={`text-3xl sm:text-5xl font-black ${isLight ? 'text-slate-900' : 'text-white'}`}>
              خريطة العقارات والمخططات المباشرة
            </h1>
            <p className={`mt-2 text-sm sm:text-base ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              استكشف كافة العقارات المتاحة للبيع والإيجار والاستثمار بالفلاتر الجغرافية المحدثة فورياً.
            </p>
          </div>

          <button
            onClick={onOpenDesignModal}
            className={`${isLight ? 'gold-badge-light' : 'gold-badge-dark'} px-5 py-3 rounded-xl font-bold text-sm flex items-center space-x-2 space-x-reverse shadow-lg cursor-pointer hover:scale-105 transition-all self-start md:self-auto`}
          >
            <Sparkles className="w-5 h-5" />
            <span>عرض تصميم الشاشة بدقة عالية 🖼️</span>
          </button>
        </div>

        {/* Top Multi-Filter Controls */}
        <div className={`p-6 rounded-3xl border shadow-xl ${
          isLight ? 'bg-white border-slate-200' : 'glass-card-dark border-slate-800'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
            {/* Search Input */}
            <div className="relative">
              <label className={`block text-xs font-bold mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>بحث بالحي أو اسم العقار</label>
              <div className={`flex items-center border rounded-xl px-3 py-2.5 ${
                isLight ? 'bg-slate-50 border-slate-300' : 'bg-slate-900 border-slate-800'
              }`}>
                <Search className="w-4 h-4 text-emerald-600 ml-2" />
                <input
                  type="text"
                  placeholder="ابحث بالرياض، الملقا، KAFD..."
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  className={`bg-transparent text-sm focus:outline-none w-full ${isLight ? 'text-slate-900' : 'text-white'}`}
                />
              </div>
            </div>

            {/* Filter Operation */}
            <div>
              <label className={`block text-xs font-bold mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>نوع العملية</label>
              <div className="flex rounded-xl overflow-hidden border border-slate-300 dark:border-slate-800 p-1 bg-slate-100 dark:bg-slate-900">
                {[
                  { id: 'all', label: 'الكل' },
                  { id: 'sale', label: 'بيع' },
                  { id: 'rent', label: 'إيجار' },
                ].map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setFilterType(b.id as any)}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                      filterType === b.id
                        ? 'bg-emerald-600 text-white'
                        : isLight ? 'text-slate-700 hover:text-slate-900' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className={`block text-xs font-bold mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>تصنيف العقار</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value as any)}
                className={`w-full p-2.5 rounded-xl border text-sm focus:outline-none cursor-pointer ${
                  isLight ? 'bg-slate-50 border-slate-300 text-slate-900' : 'bg-slate-900 border-slate-800 text-white'
                }`}
              >
                <option value="all">جميع التصنيفات</option>
                <option value="land">أراضي ومخططات</option>
                <option value="villa">فلل سكنية</option>
                <option value="commercial">مكاتب ومستودعات تجارية</option>
              </select>
            </div>

            {/* API Status */}
            <div className="flex items-end">
              <div className="w-full p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold flex items-center justify-center space-x-2 space-x-reverse">
                <CheckCircle2 className="w-4 h-4" />
                <span>متصل بالخادم: {filteredList.length} نتائج حية</span>
              </div>
            </div>

          </div>
        </div>

        {/* Standalone Map & Split View Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Interactive Map View Canvas (8 Columns) */}
          <div className={`lg:col-span-8 min-h-[580px] rounded-3xl overflow-hidden border relative flex flex-col ${
            isLight ? 'bg-slate-200 border-slate-300' : 'bg-slate-900 border-slate-800'
          }`}>
            <div className="relative w-full h-full min-h-[550px] bg-cover bg-center flex items-center justify-center p-6" style={{ backgroundImage: `url('/images/اداره العقار خريطه مع فلاتر بيع.jpeg')` }}>
              <div className="absolute inset-0 bg-slate-950/40 backdrop-brightness-95" />
              
              {/* Selected Property Popup Card */}
              <div className={`absolute bottom-6 right-6 left-6 max-w-lg z-30 p-5 rounded-2xl border shadow-2xl ${
                isLight ? 'bg-white/95 border-slate-200' : 'glass-card-dark border-slate-700'
              }`}>
                <div className="flex space-x-4 space-x-reverse">
                  <img src={selectedProp.image} alt={selectedProp.title} className="w-24 h-24 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded">
                      {selectedProp.type} • {selectedProp.area}
                    </span>
                    <h3 className={`text-sm font-bold mt-1.5 truncate ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      {selectedProp.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">{selectedProp.district}</p>
                    <p className="text-base font-black text-amber-600 dark:text-amber-400 mt-2">{selectedProp.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar Property List (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className={`text-base font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>العقارات المتاحة في القائمة</h3>
            
            <div className="space-y-3 max-h-[550px] overflow-y-auto pr-1">
              {filteredList.map((prop) => (
                <div
                  key={prop.id}
                  onClick={() => setSelectedPropertyId(prop.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    selectedPropertyId === prop.id
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg'
                      : isLight
                        ? 'bg-white border-slate-200 hover:border-slate-300 text-slate-900'
                        : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-white'
                  }`}
                >
                  <div className="flex space-x-3 space-x-reverse">
                    <img src={prop.image} alt={prop.title} className="w-20 h-20 rounded-xl object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className={`font-bold px-2 py-0.5 rounded ${
                          selectedPropertyId === prop.id ? 'bg-white/20 text-white' : 'bg-emerald-500/15 text-emerald-600'
                        }`}>
                          {prop.type}
                        </span>
                        <span className="opacity-80">{prop.area}</span>
                      </div>
                      <h4 className="text-xs font-bold truncate">{prop.title}</h4>
                      <p className={`text-sm font-black mt-2 ${selectedPropertyId === prop.id ? 'text-amber-300' : 'text-amber-600 dark:text-amber-400'}`}>
                        {prop.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

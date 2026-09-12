import React, { useState } from 'react';
import { Cpu, Sparkles, TrendingUp, Bot, CheckCircle2, ArrowLeft, Building2, RefreshCw } from 'lucide-react';

interface AIValuationSectionProps {
  onOpenDesignModal: () => void;
  theme: 'light' | 'dark';
}

export const AIValuationSection: React.FC<AIValuationSectionProps> = ({ onOpenDesignModal, theme }) => {
  const [district, setDistrict] = useState('الملقا - الرياض');
  const [areaSize, setAreaSize] = useState(450);
  const [propertyAge, setPropertyAge] = useState(2);
  const [isCalculating, setIsCalculating] = useState(false);

  // AI Valuation Math
  const basePricePerMeter = 5800;
  const estimatedTotal = Math.round(areaSize * basePricePerMeter * (1 - propertyAge * 0.015));
  const confidenceScore = 96.4;

  const handleRecalculate = () => {
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 600);
  };

  return (
    <section id="ai" className="py-20 border-b border-slate-200 bg-slate-100/70 text-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 space-x-reverse px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>مركز الذكاء الاصطناعي للتحليل والتنبؤ العقاري</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
            التقييم العقاري الذكي والتنبؤ بالأسعار
          </h2>
          <p className="text-base text-slate-600">
            تعتمد منصة إدارك خوارزميات التعلم الآلي والذكاء الاصطناعي لتحليل الصفقات التاريخية وتوقع التوجه السعري للأحياء بنسبة دقة عالية.
          </p>
        </div>

        {/* AI Valuation Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-xl">
          
          {/* Controls (Left 6 Columns) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold border-r-4 border-amber-500 pr-3 text-slate-900">
              مُدخلات نموذج التقييم الذكي (AI AVM)
            </h3>

            {/* Input 1: District */}
            <div>
              <label className="block text-xs font-bold mb-2 text-slate-700">الحي أو المنطقة:</label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none cursor-pointer bg-slate-50 text-slate-900"
              >
                <option value="الملقا - الرياض">حي الملقا - شمال الرياض (نمو مرتفع)</option>
                <option value="الصحافة - الرياض">حي الصحافة - الرياض (استقرار)</option>
                <option value="النرجس - الرياض">حي النرجس - التوسع التنموي</option>
                <option value="الشاطئ - جدة">حي الشاطئ - جدة (فاخر)</option>
              </select>
            </div>

            {/* Input 2: Area Size */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700">مساحة العقار (م²):</label>
                <span className="text-[#D97706] font-bold text-sm">{areaSize} م²</span>
              </div>
              <input
                type="range"
                min="100"
                max="3000"
                step="50"
                value={areaSize}
                onChange={(e) => { setAreaSize(Number(e.target.value)); handleRecalculate(); }}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
            </div>

            {/* Input 3: Age */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700">عمر البناء (بالسنين):</label>
                <span className="text-[#D97706] font-bold text-sm">{propertyAge === 0 ? 'جديد (0 سنة)' : `${propertyAge} سنوات`}</span>
              </div>
              <input
                type="range"
                min="0"
                max="25"
                step="1"
                value={propertyAge}
                onChange={(e) => { setPropertyAge(Number(e.target.value)); handleRecalculate(); }}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D97706]"
              />
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs space-y-2">
              <span className="font-bold text-amber-900 flex items-center gap-1">
                <Bot className="w-4 h-4 text-amber-600" />
                توصيات المساعد الذكي:
              </span>
              <p className="text-slate-700">
                منطقة {district} تشهد إقبالاً استثمارياً مرتفعاً مع توقعات نمو سعري تصل لـ 12.4% خلال الـ 24 شهراً القادمة بناءً على حركة الصفقات المرخصة.
              </p>
            </div>
          </div>

          {/* Results (Right 6 Columns) */}
          <div className="lg:col-span-6 p-6 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-slate-900">التقدير الذكي للقيمة العادلة</h4>
                <div className="flex items-center space-x-1.5 space-x-reverse text-xs text-amber-900 font-bold bg-amber-100 px-2.5 py-1 rounded-md border border-amber-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>نسبة الدقة: {confidenceScore}%</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl relative overflow-hidden border border-slate-700">
                <span className="text-xs text-slate-300 block font-bold mb-1">القيمة التقريبية العادلة للعقار:</span>
                <span className={`text-3xl sm:text-4xl font-black text-amber-400 ${isCalculating ? 'animate-pulse' : ''}`}>
                  {estimatedTotal.toLocaleString()} ر.س
                </span>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-700">
                  <span>متوسط سعر المتر: {Math.round(estimatedTotal / areaSize).toLocaleString()} ر.س / م²</span>
                  <span className="text-amber-400 font-bold">+12.4% نمو متوقع</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block">عدد الصفقات المجاورة:</span>
                  <strong className="text-slate-900">142 صفقة موثقة</strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block">مصدر التحليل:</span>
                  <strong className="text-[#D97706]">صفقات وزارة العدل والسجل</strong>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <button
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black py-3.5 rounded-xl shadow-md transition-all text-xs flex items-center justify-center space-x-2 space-x-reverse cursor-pointer"
              >
                <Cpu className="w-4 h-4" />
                <span>تنزيل تقرير التقييم العقاري المعتمد</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

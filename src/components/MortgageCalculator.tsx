import React, { useState } from 'react';
import { Calculator, DollarSign, ShieldCheck, CheckCircle2, ArrowLeft, Building, Sparkles, User } from 'lucide-react';

interface MortgageCalculatorProps {
  onOpenDesignModal: () => void;
  theme: 'light' | 'dark';
}

export const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({ onOpenDesignModal, theme }) => {
  const [salary, setSalary] = useState<number>(18000);
  const [downPayment, setDownPayment] = useState<number>(150000);
  const [years, setYears] = useState<number>(20);
  const [sector, setSector] = useState<'gov' | 'private' | 'military'>('gov');

  // Real-time Mortgage Calculation Math
  const maxMonthlyInstallment = Math.round(salary * 0.45); // DTI 45% max
  const estimatedFinanceAmount = Math.round(maxMonthlyInstallment * 12 * years * 0.85); // Interest adjustment
  const maxPurchasingPower = estimatedFinanceAmount + downPayment;

  return (
    <section id="financing" className="py-20 border-b border-slate-200 bg-white text-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 space-x-reverse px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold">
            <Calculator className="w-4 h-4 text-[#D97706]" />
            <span>منظومة التمويل العقاري والربط البنكي</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
            حاسبة التمويل العقاري التفاعلية
          </h2>
          <p className="text-base text-slate-600">
            احسب قدرتك الشرائية القصوى والقسط الشهري الميسر مع الربط التلقائي للبنوك المعتمدة تحت إشراف البنك المركزي السعودي (SAMA).
          </p>
        </div>

        {/* Mortgage Interactive Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 rounded-3xl border border-slate-200 bg-slate-50 shadow-xl">
          
          {/* Inputs Section (Left 6 Columns) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold border-r-4 border-[#D97706] pr-3 text-slate-900">
              بيانات الدخل والالتزامات
            </h3>

            {/* Input 1: Sector */}
            <div>
              <label className="block text-xs font-bold mb-2 text-slate-700">قطاع العمل:</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'gov', label: 'حكومي / مدني' },
                  { id: 'military', label: 'عسكري' },
                  { id: 'private', label: 'قطاع خاص معتمد' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSector(s.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      sector === s.id
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 2: Monthly Salary */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700">الراتب الشهري الصافي:</label>
                <span className="text-[#D97706] font-bold text-sm">{salary.toLocaleString()} ر.س</span>
              </div>
              <input
                type="range"
                min="5000"
                max="80000"
                step="1000"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
            </div>

            {/* Input 3: Down Payment */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700">الدفعة الأولى المدخرة:</label>
                <span className="text-[#D97706] font-bold text-sm">{downPayment.toLocaleString()} ر.س</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000000"
                step="25000"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D97706]"
              />
            </div>

            {/* Input 4: Duration */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700">مدة السداد التمويلي:</label>
                <span className="text-slate-900 font-bold text-sm">{years} سنة ({years * 12} شهر)</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[10, 15, 20, 25].map((y) => (
                  <button
                    key={y}
                    onClick={() => setYears(y)}
                    className={`py-2 rounded-xl text-xs font-bold border cursor-pointer ${
                      years === y
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {y} سنة
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Output Results Section (Right 6 Columns) */}
          <div className="lg:col-span-6 p-6 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between shadow-sm">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-slate-900">نتيجة التأهيل التمويلي المباشرة</h4>
                <span className="text-xs bg-amber-50 text-amber-800 font-bold px-2.5 py-1 rounded-md border border-amber-200">
                  محدث وفق ضوابط SAMA
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                  <span className="text-xs text-slate-500 block">أقصى قسط شهري مسموح:</span>
                  <span className="text-xl font-black text-slate-900">{maxMonthlyInstallment.toLocaleString()} ر.س</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                  <span className="text-xs text-slate-500 block">مبلغ التمويل البنكي المتوقع:</span>
                  <span className="text-xl font-black text-[#D97706]">{estimatedFinanceAmount.toLocaleString()} ر.س</span>
                </div>
              </div>

              {/* Total Purchasing Power Display */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border border-slate-700 shadow-xl">
                <span className="text-xs text-slate-300 block font-bold mb-1">القدرة الشرائية القصوى المتاحة لشراء العقار:</span>
                <span className="text-3xl font-black text-amber-400">{maxPurchasingPower.toLocaleString()} ر.س</span>
                <span className="text-[11px] text-slate-400 block mt-1">تتضمن مبلغ التمويل البنكي + الدفعة الأولى المدخرة</span>
              </div>

              {/* Bank Partners Status */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 block">البنوك المتاحة للربط الفوري:</span>
                <div className="flex flex-wrap gap-2 text-[11px] font-bold">
                  {['البنك الأهلي SNB', 'مصرف الراجحي', 'بنك الرياض', 'مصرف الإنماء', 'البنك السعودي الفرنسي'].map((b, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700">
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex gap-3">
              <button
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black py-3.5 rounded-xl shadow-md transition-all text-xs flex items-center justify-center space-x-2 space-x-reverse cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>تقديم طلب الموافقة المبدئية للبنوك</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

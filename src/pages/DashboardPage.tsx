import React from 'react';
import { LayoutDashboard, TrendingUp, Users, Building2, DollarSign, Sparkles, CheckCircle2, FileText } from 'lucide-react';

interface DashboardPageProps {
  onOpenDesignModal: () => void;
  theme: 'light' | 'dark';
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onOpenDesignModal, theme }) => {
  const isLight = theme === 'light';

  return (
    <div className={`py-12 border-b transition-colors ${
      isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 space-x-reverse text-emerald-600 font-bold text-sm mb-2">
              <LayoutDashboard className="w-4 h-4" />
              <span>لوحة القيادة الإدارية والتحليلات للمستثمر</span>
            </div>
            <h1 className={`text-3xl sm:text-5xl font-black ${isLight ? 'text-slate-900' : 'text-white'}`}>
              لوحة التحكم والإحصائيات
            </h1>
            <p className={`mt-2 text-sm sm:text-base ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              متابعة أداء المحفظة العقارية، حركة الصفقات والطلبات، وإحصاءات التمويل والزيارات الفورية.
            </p>
          </div>

          <button
            onClick={onOpenDesignModal}
            className={`${isLight ? 'gold-badge-light' : 'gold-badge-dark'} px-5 py-3 rounded-xl font-bold text-sm flex items-center space-x-2 space-x-reverse shadow-lg cursor-pointer hover:scale-105 transition-all`}
          >
            <Sparkles className="w-5 h-5" />
            <span>عرض شاشة لوحة التحكم بالتصاميم 🖼️</span>
          </button>
        </div>

        {/* Dashboard Top Stats Widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'إجمالي قيمة المحفظة', val: '142,500,000 ر.س', icon: DollarSign, color: 'text-emerald-600 bg-emerald-500/10' },
            { label: 'العقارات والطلبات النشطة', val: '1,280 عقاراً', icon: Building2, color: 'text-teal-600 bg-teal-500/10' },
            { label: 'طلبات التمويل المقدمة', val: '342 طلب تمويل', icon: FileText, color: 'text-amber-600 bg-amber-500/10' },
            { label: 'متوسط العائد السنوي', val: '15.8%', icon: TrendingUp, color: 'text-indigo-600 bg-indigo-500/10' },
          ].map((w, idx) => {
            const Icon = w.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl border shadow-sm ${
                  isLight ? 'bg-white border-slate-200' : 'glass-card-dark border-slate-800'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl ${w.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs text-slate-500 block font-bold mb-1">{w.label}</span>
                <span className={`text-2xl font-black ${isLight ? 'text-slate-900' : 'text-white'}`}>{w.val}</span>
              </div>
            );
          })}
        </div>

        {/* Live Preview Image Card of Dashboard */}
        <div className={`p-6 rounded-3xl border ${
          isLight ? 'bg-white border-slate-200 shadow-xl' : 'glass-card-dark border-slate-800'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>شاشة لوحة التحكم الإدارية (معاينة حية)</h3>
            <span className="text-xs text-emerald-600 font-bold bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
              متصل بـ API الخادم
            </span>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 aspect-video max-h-[480px] bg-slate-900">
            <img src="/images/لوحة التحكم.jpeg" alt="لوحة التحكم" className="w-full h-full object-cover object-top" />
          </div>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { 
  Building2, Phone, Mail, MapPin, Globe, Shield, Sparkles, Award, 
  ExternalLink, ArrowLeft, CheckCircle2, FileText, Smartphone 
} from 'lucide-react';

interface FooterProps {
  onOpenDesignModal: () => void;
  theme: 'light' | 'dark';
}

export const Footer: React.FC<FooterProps> = ({ onOpenDesignModal, theme }) => {
  return (
    <footer className="border-t border-slate-800 pt-20 pb-12 bg-slate-900 text-slate-300 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Enterprise Badges Banner */}
        <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-xl">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-2">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-white">ترخيص الهيئة العامة للعقار</span>
            <span className="text-xs text-slate-400">رخصة فال العقارية المعتمدة</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-2">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-white">إشراف البنك المركزي (SAMA)</span>
            <span className="text-xs text-slate-400">منظومة التمويل وحاسبة الاستحقاق</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-2">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-white">منصة إحكام وشبكة إيجار</span>
            <span className="text-xs text-slate-400">توثيق ومطابقة العقارات والمخططات</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-2">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-white">مركزي الذكاء الاصطناعي</span>
            <span className="text-xs text-slate-400">تقييم وتحليل وتنبؤ محلي</span>
          </div>
        </div>

        {/* Main 5-Column Enterprise Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          
          {/* Column 1: Brand & Bio & License */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 rounded-xl bg-[#174032] text-amber-400 flex items-center justify-center font-bold shadow-lg">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black text-white block">إدراك العقارية</span>
                <span className="text-[10px] text-amber-400 font-bold">EDRAK Real Estate Enterprise</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              منظومة إدراك الرقمية المتكاملة لإدارة العقارات، الخريطة التفاعلية بالفلاتر الذكية، التمويل العقاري، والفرص الاستثمارية المرخصة بالمملكة.
            </p>
          </div>

          {/* Column 2: Real Estate Services & Financing */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 border-r-2 border-amber-400 pr-2">الخدمات والتمويل العقاري</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">التمويل العقاري للأفراد والشركات</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">حاسبة الاستحقاق التفاعلية</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">إدارة أملاك ومحافظ المستثمرين</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">التقييم والتثمين العقاري المعتمد</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">المساهمات والفرص الاستثمارية</a></li>
              <li><a href="#map" className="hover:text-amber-400 transition-colors">شاشة الأراضي والمخططات</a></li>
            </ul>
          </div>

          {/* Column 3: Partners & Industry Directory */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 border-r-2 border-slate-600 pr-2">الشركاء والقطاعات</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">دليل المطورين العقاريين</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">المقاولون المعتمدون والمصنفون</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">المكاتب الهندسية والاستشارية</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">منصة توريد مواد البناء والتشطيبات</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">فرص الشراكة والتطوير العقاري</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">لوحة تحكم وإحصائيات الشركاء</a></li>
            </ul>
          </div>

          {/* Column 4: AI Center & Insights */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 border-r-2 border-amber-500 pr-2">مركز الذكاء الاصطناعي</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">التقييم العقاري الذكي (AI Valuation)</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">مؤشرات تنبؤ أسعار الأحياء</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">التقارير والمؤشرات العقارية الشهرية</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">المساعد الرقمي الذكي للبحث</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">الأسئلة الشائعة (FAQ)</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">مركز المساعدة والدعم الفني</a></li>
            </ul>
          </div>

          {/* Column 5: Contact, Live API & Mobile Apps */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white mb-4 border-r-2 border-amber-500 pr-2">التواصل والمقر المباشر</h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2 space-x-reverse">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>الرياض، طريق الملك فهد، البرج العقاري - المملكة العربية السعودية</span>
              </div>

              <div className="flex items-center space-x-2 space-x-reverse">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="dir-ltr font-bold text-white">800-332725 (EDARAK)</span>
              </div>

              <div className="flex items-center space-x-2 space-x-reverse">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>info@edarak.sa</span>
              </div>
            </div>

            {/* Live Server API Address */}
            <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-[11px] font-mono text-amber-400 break-all">
              <span className="block text-[10px] text-slate-400 font-sans mb-1">الربط المباشر للخادم المعتمد:</span>
              http://84.8.102.66:8090/properties
            </div>

            {/* Mobile App Downloads Preview */}
            <div className="pt-2">
              <span className="text-[11px] text-slate-400 block mb-2 font-bold">تحميل تطبيق إدراك العقارية:</span>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-800 hover:bg-slate-700 p-2 rounded-xl border border-slate-700 flex items-center justify-center space-x-1.5 space-x-reverse cursor-pointer">
                  <Smartphone className="w-3.5 h-3.5 text-slate-300" />
                  <span className="text-[10px] font-bold text-white">App Store</span>
                </div>
                <div className="bg-slate-800 hover:bg-slate-700 p-2 rounded-xl border border-slate-700 flex items-center justify-center space-x-1.5 space-x-reverse cursor-pointer">
                  <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[10px] font-bold text-white">Google Play</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center space-x-2 space-x-reverse">
            <Building2 className="w-4 h-4 text-amber-400" />
            <p>© {new Date().getFullYear()} منصة إدراك العقارية (Edarak Real Estate Platform). جميع الحقوق محفوظة.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#hero" className="hover:text-white transition-colors">الشروط والأحكام</a>
            <a href="#hero" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#hero" className="hover:text-white transition-colors">اتفاقية مستوى الخدمة SLA</a>
            <a href="#hero" className="hover:text-white transition-colors">خريطة المنصة</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

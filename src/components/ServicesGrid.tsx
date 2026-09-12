import React from 'react';
import { DollarSign, TrendingUp, HardHat, Sparkles, ShoppingBag, LayoutDashboard, ArrowLeft, ShieldCheck } from 'lucide-react';

interface ServicesGridProps {
  onOpenDesignModal: () => void;
  theme: 'light' | 'dark';
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenDesignModal, theme }) => {
  const services = [
    {
      id: 'financing',
      title: 'منظومة التمويل العقاري',
      description: 'حاسبة التمويل العقاري التفاعلية والربط المباشر مع البنوك والجهات التمويلية المعتمدة.',
      icon: DollarSign,
      color: 'from-amber-500/20 to-teal-500/20 text-amber-400',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'investment',
      title: 'الفرص الاستثمارية',
      description: 'استعراض الفرص الاستثمارية الواعدة في الأراضي والمشاريع التجارية ذات العوائد المرتفعة.',
      icon: TrendingUp,
      color: 'from-amber-500/20 to-teal-500/20 text-amber-400',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ai',
      title: 'مركز الذكاء الاصطناعي',
      description: 'خوارزميات التقييم العقاري الذكي والتحليل التنبئي لأسعار السوق والخطط الاستثمارية.',
      icon: Sparkles,
      color: 'from-amber-500/20 to-teal-500/20 text-amber-400',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'partners',
      title: 'المطورون والمقاولون والمكاتب',
      description: 'دليل شامل وموثوق للمطورين العقاريين، المقاولين المعتمدين والمكاتب الاستشارية الهندسة.',
      icon: HardHat,
      color: 'from-amber-500/20 to-teal-500/20 text-amber-400',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'materials',
      title: 'مواد البناء والتجهيزات',
      description: 'منصة توريد مواد البناء الأساسية والتشطيبات الفاخرة بأسعار التنافسية المباشرة.',
      icon: ShoppingBag,
      color: 'from-amber-500/20 to-teal-500/20 text-amber-400',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'dashboard',
      title: 'لوحة التحكم والتحليلات',
      description: 'لوحة قيادة شاملة لإدارة محفظة العقارات، متابعة الطلبات والتقارير الإحصائية الفورية.',
      icon: LayoutDashboard,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="services" className="py-24 border-b border-slate-200 bg-white text-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 space-x-reverse px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>منظومة إدارك الرقمية الشاملة</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
            خدمات وحدات المنصة الرئيسية
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            تم تصميم كل وحدة في إدارك العقارية لتلبي كافة تطلعات المستثمرين، المطورين، والباحثين عن التمويل والعقار.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="p-6 rounded-3xl border border-slate-200 bg-slate-50 flex flex-col justify-between cursor-pointer group transition-all hover:bg-white hover:shadow-xl hover:border-slate-300"
              >
                <div>
                  {/* Card Image Thumbnail */}
                  <div className="w-full h-44 rounded-2xl bg-slate-200 overflow-hidden mb-6 relative border border-slate-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center border border-slate-200 shadow-md text-[#174032]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-[#174032] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#D97706] group-hover:translate-x-[-4px] transition-transform">
                  <span>الانتقال والخدمات المتاحة</span>
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

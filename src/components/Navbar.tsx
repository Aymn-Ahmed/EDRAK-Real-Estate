import React, { useState } from 'react';
import { 
  Building2, Phone, Menu, X, ChevronDown, Calculator, Globe, FileText, 
  LayoutGrid, HardHat, Cpu 
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  lang: 'ar' | 'en';
  setLang: (lang: 'ar' | 'en') => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  setActiveTab, 
  lang,
  setLang,
  theme,
  setTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const moreDropdown = [
    { title: 'التمويل العقاري', desc: 'حاسبة التمويل والربط مع البنوك والجهات المرخصة', icon: Calculator, tabId: 'mortgage' },
    { title: 'المطورون العقاريون', desc: 'دليل أكبر المطورين والمشاريع السكنية والتجارية', icon: Building2, tabId: 'developers' },
    { title: 'المقاولون المعتمدون', desc: 'شركات المقاولات المصنفة والمعتمدة', icon: HardHat, tabId: 'contractors' },
    { title: 'المكاتب الهندسية والاستشارية', desc: 'مكاتب التخطيط والتصميم والاستشارات', icon: FileText, tabId: 'consultants' },
    { title: 'مواد البناء والتوريد', desc: 'منصة توريد مواد البناء والتشطيبات بأسعار الجملة', icon: LayoutGrid, tabId: 'materials' },
    { title: 'لوحة التحكم القيادية', desc: 'لوحة التحكم والإحصاءات للمستثمر', icon: LayoutGrid, tabId: 'dashboard' },
    { title: 'تواصل معنا والدعم', desc: 'مركز التواصل المباشر وطلب الاستشارة', icon: Phone, tabId: 'contact' },
  ];

  const handleTabSelect = (id: string) => {
    setActiveTab(id);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 transition-colors duration-200 bg-[#E5ECE7] border-b border-[#174032]/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity (Right Side) */}
          <div 
            className="flex items-center space-x-3 space-x-reverse cursor-pointer group"
            onClick={() => handleTabSelect('hero')}
          >
            <div className="w-11 h-11 rounded-2xl bg-[#174032] text-amber-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5 space-x-reverse">
                <span className="text-2xl font-black tracking-tight text-[#174032]">إدراك</span>
                <span className="text-2xl font-bold text-[#174032]">العقارية</span>
              </div>
              <span className="text-[10px] font-bold text-[#174032]/70 tracking-widest block uppercase dir-ltr">
                EDRAK Real Estate
              </span>
            </div>
          </div>

          {/* Desktop Navigation Items (Center) */}
          <nav className="hidden lg:flex items-center space-x-6 space-x-reverse">
            
            {/* 1. الرئيسية */}
            <button
              onClick={() => handleTabSelect('hero')}
              className={`text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === 'hero'
                  ? 'text-[#174032] border-b-2 border-[#174032] pb-1'
                  : 'text-[#174032]/80 hover:text-[#174032]'
              }`}
            >
              الرئيسية
            </button>

            {/* 2. العقارات */}
            <button
              onClick={() => handleTabSelect('map')}
              className={`text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'map'
                  ? 'text-[#174032] border-b-2 border-[#174032] pb-1'
                  : 'text-[#174032]/80 hover:text-[#174032]'
              }`}
            >
              العقارات
            </button>

            {/* 3. الأراضي */}
            <button
              onClick={() => handleTabSelect('lands')}
              className={`text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'lands'
                  ? 'text-[#174032] border-b-2 border-[#174032] pb-1'
                  : 'text-[#174032]/80 hover:text-[#174032]'
              }`}
            >
              الأراضي
            </button>

            {/* 4. المشاريع */}
            <button
              onClick={() => handleTabSelect('developers')}
              className={`text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'developers'
                  ? 'text-[#174032] border-b-2 border-[#174032] pb-1'
                  : 'text-[#174032]/80 hover:text-[#174032]'
              }`}
            >
              المشاريع
            </button>

            {/* 5. مركز الذكاء الاصطناعي */}
            <button
              onClick={() => handleTabSelect('ai')}
              className={`text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'ai'
                  ? 'text-[#174032] border-b-2 border-[#174032] pb-1'
                  : 'text-[#174032]/80 hover:text-[#174032]'
              }`}
            >
              مركز الذكاء الاصطناعي
            </button>

            {/* 6. الفرص الاستثمارية */}
            <button
              onClick={() => handleTabSelect('investments')}
              className={`text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'investments'
                  ? 'text-[#174032] border-b-2 border-[#174032] pb-1'
                  : 'text-[#174032]/80 hover:text-[#174032]'
              }`}
            >
              الفرص الاستثمارية
            </button>

            {/* 7. المزيد (Dropdown) */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('more')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 space-x-reverse text-sm font-bold text-[#174032]/80 hover:text-[#174032] cursor-pointer py-2">
                <span>المزيد</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'more' ? 'rotate-180 text-[#174032]' : ''}`} />
              </button>

              {activeDropdown === 'more' && (
                <div className="absolute top-full right-0 w-72 pt-2 z-50">
                  <div className="bg-white p-2 rounded-2xl border border-gray-200 shadow-2xl space-y-1">
                    {moreDropdown.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={idx}
                          onClick={() => handleTabSelect(item.tabId)}
                          className="flex items-center space-x-3 space-x-reverse p-2.5 rounded-xl transition-colors cursor-pointer group hover:bg-[#E5ECE7]"
                        >
                          <div className="p-2 rounded-lg bg-[#174032] text-amber-400">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#174032]">{item.title}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* Left Side Buttons (Phone & Language) */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="flex items-center space-x-1.5 space-x-reverse px-3 py-1.5 rounded-xl text-xs font-bold text-[#174032] bg-[#174032]/5 border border-[#174032]/20 hover:bg-[#174032]/10 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'EN 文A' : 'عربي'}</span>
            </button>

            {/* Gold Phone Pill Button (Exact match: 0530012855) */}
            <a 
              href="tel:0530012855"
              className="bg-[#E0A838] hover:bg-[#D4A038] text-[#174032] font-black px-5 py-2.5 rounded-full text-sm transition-all shadow-md hover:scale-105 active:scale-95 flex items-center space-x-2 space-x-reverse cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-[#174032]" />
              <span className="dir-ltr font-mono text-sm tracking-wide">0530012855</span>
            </a>

          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#174032] text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#174032]/20 bg-[#E5ECE7] text-[#174032] px-4 py-6 space-y-3 max-h-[80vh] overflow-y-auto">
          {[
            { id: 'hero', label: 'الرئيسية' },
            { id: 'map', label: 'العقارات' },
            { id: 'lands', label: 'الأراضي' },
            { id: 'developers', label: 'المشاريع' },
            { id: 'ai', label: 'مركز الذكاء الاصطناعي' },
            { id: 'investments', label: 'الفرص الاستثمارية' },
            { id: 'mortgage', label: 'التمويل العقاري' },
            { id: 'contractors', label: 'المقاولون المعتمدون' },
            { id: 'consultants', label: 'المكاتب الاستشارية' },
            { id: 'materials', label: 'مواد البناء والتجهيزات' },
            { id: 'dashboard', label: 'لوحة التحكم والتحليلات' },
            { id: 'contact', label: 'تواصل معنا والدعم' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabSelect(item.id)}
              className={`w-full text-right py-2.5 px-4 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === item.id ? 'bg-[#174032] text-white' : 'text-[#174032] hover:bg-[#174032]/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

    </header>
  );
};

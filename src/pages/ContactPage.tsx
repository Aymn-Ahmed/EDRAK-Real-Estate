import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, Building2 } from 'lucide-react';

interface ContactPageProps {
  theme: 'light' | 'dark';
}

export const ContactPage: React.FC<ContactPageProps> = ({ theme }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const isLight = theme === 'light';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`py-12 border-b transition-colors ${
      isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 space-x-reverse px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 font-bold text-xs">
            <Phone className="w-4 h-4" />
            <span>مركز الدعم والتواصل المباشر</span>
          </div>
          <h1 className={`text-3xl sm:text-5xl font-black ${isLight ? 'text-slate-900' : 'text-white'}`}>
            تواصل مع فريق منصة إدارك العقارية
          </h1>
          <p className={`text-base ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            يسعدنا الإجابة على كافة استفساراتكم بخصوص التمويل، الاستثمار، وإدارك العقار في المملكة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Info Cards (Left 5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 rounded-3xl border space-y-6 ${
              isLight ? 'bg-white border-slate-200 shadow-xl' : 'glass-card-dark border-slate-800'
            }`}>
              <h3 className={`text-xl font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>المقر الرئيسي وقنوات التواصل</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-bold block text-slate-900 dark:text-white">العنوان الوطني:</span>
                    <span className="text-slate-500 text-xs">المملكة العربية السعودية - الرياض - طريق الملك فهد - البرج العقاري</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-bold block text-slate-900 dark:text-white">الرقم الموحد المباشر:</span>
                    <span className="text-emerald-600 font-black dir-ltr text-base">800-332725 (EDARAK)</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-bold block text-slate-900 dark:text-white">البريد الإلكتروني:</span>
                    <span className="text-slate-500 text-xs">info@edarak.sa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form (Right 7 Columns) */}
          <div className="lg:col-span-7">
            <div className={`p-8 rounded-3xl border shadow-xl ${
              isLight ? 'bg-white border-slate-200' : 'glass-card-dark border-slate-800'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${isLight ? 'text-slate-900' : 'text-white'}`}>إرسال رسالة أو طلب استشارة عقارية</h3>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">تم استلام طلبك بنجاح!</h4>
                  <p className="text-xs text-slate-500">سيقوم المستشار العقاري بالتواصل معك عبر الرقم المحدد خلال ساعات العمل.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>الاسم الكامل:</label>
                    <input
                      type="text"
                      required
                      placeholder="أدخل اسمك"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full p-3 rounded-xl border text-sm focus:outline-none ${
                        isLight ? 'bg-slate-50 border-slate-300 text-slate-900' : 'bg-slate-900 border-slate-800 text-white'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>رقم الجوال:</label>
                    <input
                      type="tel"
                      required
                      placeholder="05XXXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full p-3 rounded-xl border text-sm focus:outline-none ${
                        isLight ? 'bg-slate-50 border-slate-300 text-slate-900' : 'bg-slate-900 border-slate-800 text-white'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>تفاصيل الرسالة أو الطلب:</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="أكتب تفاصيل استفسارك العقاري أو طلب التمويل..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`w-full p-3 rounded-xl border text-sm focus:outline-none ${
                        isLight ? 'bg-slate-50 border-slate-300 text-slate-900' : 'bg-slate-900 border-slate-800 text-white'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center space-x-2 space-x-reverse cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>إرسال الطلب للمستشار العقاري</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

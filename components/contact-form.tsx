"use client";

import { useState } from "react";
import { User, CreditCard, Phone, Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    nationalId: "",
    goldenCard: "",
    phone: "",
    previousInstallment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("تم إرسال طلبك بنجاح! سنتواصل معك قريباً");
  };

  return (
    <section id="contact" className="bg-secondary py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          سجل طلبك الآن
        </h2>
        <p className="mb-10 text-center text-muted-foreground">
          املأ النموذج التالي وسنتواصل معك في أقرب وقت
        </p>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-card p-8 shadow-xl"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-card-foreground">
                الاسم الكامل
              </label>
              <div className="relative">
                <User className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background py-3 pr-10 pl-4 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-card-foreground">
                رقم التعريف الوطني
              </label>
              <div className="relative">
                <CreditCard className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  required
                  value={formData.nationalId}
                  onChange={(e) =>
                    setFormData({ ...formData, nationalId: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background py-3 pr-10 pl-4 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="رقم التعريف الوطني"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-card-foreground">
                البطاقة الذهبية
              </label>
              <div className="relative">
                <CreditCard className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  required
                  value={formData.goldenCard}
                  onChange={(e) =>
                    setFormData({ ...formData, goldenCard: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background py-3 pr-10 pl-4 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="رقم البطاقة الذهبية"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-card-foreground">
                رقم الهاتف
              </label>
              <div className="relative">
                <Phone className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background py-3 pr-10 pl-4 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="رقم الهاتف"
                  dir="ltr"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-card-foreground">
                هل سبق لك الشراء بالتقسيط؟
              </label>
              <select
                required
                value={formData.previousInstallment}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    previousInstallment: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-input bg-background py-3 px-4 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                <option value="">اختر...</option>
                <option value="yes">نعم</option>
                <option value="no">لا</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Send className="h-5 w-5" />
            إرسال الطلب
          </button>
        </form>
      </div>
    </section>
  );
}

import { FileText, CreditCard, Car, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "قدم طلبك",
    description: "املأ النموذج بمعلوماتك الأساسية",
  },
  {
    icon: CreditCard,
    number: "02",
    title: "ادفع التسبيق",
    description: "قم بدفع المبلغ الأولي المطلوب",
  },
  {
    icon: Car,
    number: "03",
    title: "استلم سيارتك",
    description: "استلم سيارتك الجديدة من معرضنا",
  },
  {
    icon: CalendarCheck,
    number: "04",
    title: "أقساط مريحة",
    description: "سدد باقي المبلغ على أقساط شهرية",
  },
];

export function Steps() {
  return (
    <section id="steps" className="bg-primary py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary-foreground md:text-4xl">
          خطوات بسيطة للحصول على سيارتك
        </h2>
        <p className="mb-12 text-center text-primary-foreground/70">
          إجراءات سهلة وسريعة لامتلاك سيارة أحلامك
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative rounded-xl bg-primary-foreground/10 p-6 text-center backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
            >
              <div className="absolute -top-4 right-4 text-5xl font-bold text-accent/30">
                {step.number}
              </div>
              <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                <step.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-primary-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-primary-foreground/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

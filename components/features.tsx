import { CreditCard, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "تقسيط مريح",
    description: "أقساط شهرية تناسب ميزانيتك",
  },
  {
    icon: Shield,
    title: "ضمان شامل",
    description: "ضمان المصنع على جميع السيارات",
  },
  {
    icon: Zap,
    title: "إجراءات سريعة",
    description: "ملف بسيط وموافقة سريعة",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          لماذا تختار BRAHIM AUTO؟
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl bg-card p-8 text-center shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary py-12 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-2xl font-bold">BRAHIM AUTO</h3>
            <p className="text-primary-foreground/70">
              وكيلك المعتمد لسيارات فيات وجيلي في الجزائر. نقدم لك أفضل العروض
              بالتقسيط المريح.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#cars"
                  className="text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  السيارات
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  المميزات
                </a>
              </li>
              <li>
                <a
                  href="#steps"
                  className="text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  الخطوات
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a
                  href="tel:+213551641323"
                  className="text-primary-foreground/70 transition-colors hover:text-accent"
                  dir="ltr"
                >
                  +213 551 641 323
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a
                  href="mailto:contact@auto.dz.com"
                  className="text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  contact@auto.dz.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/70">الجزائر</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            {"© "} {new Date().getFullYear()} BRAHIM AUTO. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}

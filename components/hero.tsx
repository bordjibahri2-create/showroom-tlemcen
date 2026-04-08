import { ChevronLeft } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-primary pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
          امتلك سيارة أحلامك بالتقسيط المريح
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
          سيارات فيات وجيلي الجديدة متوفرة الآن في الجزائر بأقساط شهرية مناسبة
          وبدون فوائد مخفية
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#cars"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground transition-all hover:bg-accent/90"
          >
            تصفح السيارات
            <ChevronLeft className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground bg-transparent px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:bg-primary-foreground hover:text-primary"
          >
            سجل الآن
          </a>
        </div>

        <div className="absolute bottom-10 flex animate-bounce flex-col items-center gap-2 text-primary-foreground/60">
          <span className="text-sm">اكتشف المزيد</span>
          <ChevronLeft className="h-6 w-6 rotate-[-90deg]" />
        </div>
      </div>
    </section>
  );
}

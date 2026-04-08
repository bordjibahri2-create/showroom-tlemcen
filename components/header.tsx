"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-wide">
            BRAHIM AUTO
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#cars"
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              السيارات
            </a>
            <a
              href="#features"
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              المميزات
            </a>
            <a
              href="#steps"
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              الخطوات
            </a>
            <a
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              تواصل معنا
            </a>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="tel:+213551641323"
              className="flex items-center gap-2 text-sm"
            >
              <Phone className="h-4 w-4" />
              <span dir="ltr">+213 551 641 323</span>
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="border-t border-primary-foreground/20 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a
                href="#cars"
                className="text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                السيارات
              </a>
              <a
                href="#features"
                className="text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                المميزات
              </a>
              <a
                href="#steps"
                className="text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                الخطوات
              </a>
              <a
                href="#contact"
                className="text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                تواصل معنا
              </a>
              <a
                href="tel:+213551641323"
                className="flex items-center gap-2 text-sm"
              >
                <Phone className="h-4 w-4" />
                <span dir="ltr">+213 551 641 323</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

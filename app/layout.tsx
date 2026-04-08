import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "BRAHIM AUTO | سيارات بالتقسيط في الجزائر",
  description:
    "امتلك سيارة أحلامك بالتقسيط المريح - سيارات فيات وجيلي الجديدة متوفرة الآن في الجزائر بأقساط شهرية مناسبة",
};

export const viewport: Viewport = {
  themeColor: "#0d2847",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

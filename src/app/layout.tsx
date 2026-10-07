import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_ID } from "@/lib/config";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const serif = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  title: "Nanelly Andrade | Nutricionista",
  description:
    "Atendimento nutricional humanizado para emagrecimento, hipertrofia, reeducação alimentar e saúde da mulher. Agende sua consulta pelo WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {/* GOOGLE ANALYTICS: o ID é lido de src/lib/config.ts (variável GA_ID) */}
        <GoogleAnalytics gaId={GA_ID} />
      </body>
    </html>
  );
}

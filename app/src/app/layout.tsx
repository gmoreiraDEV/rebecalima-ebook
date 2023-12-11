import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EBOOK | Rebeca Lima",
  description: "Receitas para jantares inesquecíveis de Natal e Ano Novo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} bg-brand-white text-brand-black transition-all ease-in-out select-none`}
      >
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}

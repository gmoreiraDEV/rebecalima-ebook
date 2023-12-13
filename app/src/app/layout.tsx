import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import Footer from "@/components/Footer";
import FacebookPixel from "@/components/FacebookPixel";

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
        <FacebookPixel />
        <iframe
          src="https://www.googletagmanager.com/gtag/js?id=AW-11441820553"
          width={0}
          height={0}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11441820553');
              `,
          }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

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
        className={`${inter.className} bg-brand-white text-brand-black transition-all ease-in-out`}
      >
        {children}
        <footer className="w-full flex justify-between items-center min-h-24 py-4 bg-brand-black/80 mt-12">
          <div className="w-full lg:w-2/3 m-auto flex flex-col lg:flex-row justify-between items-center text-brand-white gap-4">
            <div className="flex flex-col items-center justify-center lg:flex-row gap-4">
              <img
                src="/img/vlnt.svg"
                alt="Logo Valente - Consultoria &amp; Inovação"
                className="max-w-[200px]"
              />
              <div className="text-center lg:text-left group">
                <strong className="flex justify-between items-center">
                  Copyright © 2023 Valente Consultoria e Inovação LTDA
                  <span className="opacity-0 group-hover:opacity-100 font-normal">
                    &nbsp;/ CNPJ: 31.803.058/0001-05
                  </span>
                </strong>
                <p>
                  Av. Paulista, 1471 - Conj 1110, Jd. Paulista - São Paulo - SP,
                  01311-927
                </p>
              </div>
            </div>
            <div>
              <a href="https://basixdigital.com.br">
                <img
                  src="/img/x-basix.svg"
                  alt="Basix Digital"
                  className="w-11 h-11"
                />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

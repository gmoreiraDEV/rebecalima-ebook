import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Obrigado | Rebeca Lima",
  description: "Receitas para jantares inesquecíveis de Natal e Ano Novo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-brand-marsala transition-all ease-in-out select-none">
        {children}
      </body>
    </html>
  );
}

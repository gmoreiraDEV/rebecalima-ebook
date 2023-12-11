import CloudImage from "./CloudImage";

export default function Footer() {
  return (
    <footer className="w-full flex justify-between items-center min-h-24 py-4 bg-brand-black/80 mt-12">
      <div className="w-full lg:w-2/3 m-auto flex flex-col lg:flex-row justify-between items-center text-brand-white gap-4">
        <div className="flex flex-col items-center justify-center lg:flex-row gap-4">
          <CloudImage
            src="ebook-natal/vlnt-logo"
            alt="Logo Valente - Consultoria &amp; Inovação"
            width={"211"}
            height={"41"}
            className="max-w-[200px]"
          />
          <div className="text-center lg:text-left group">
            <strong className="lg:flex lg:justify-between lg:items-center">
              Copyright © 2023 Valente Consultoria e Inovação LTDA
              <span className="opacity-0 group-hover:opacity-100 font-normal hidden lg:inline-block">
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
            <CloudImage
              src="ebook-natal/basix-logo"
              alt="Basix Digital"
              className="w-11 h-11"
              width={"44"}
              height={"44"}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

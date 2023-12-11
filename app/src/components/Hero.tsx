import { EBOOK_LINK } from "@/constants";
import CloudImage from "./CloudImage";

export default function HeroComponent() {
  return (
    <section className="bg-brand-pink w-full h-full flex flex-col-reverse items-center p-8 text-brand-white relative md:flex-row md:justify-center animate-fade-down animate-once animate-ease-out">
      <div className="flex flex-col items-center py-16 z-30 gap-4 md:w-1/2 md:items-start md:max-w-2xl">
        <div data-aos="fade-down">
          <CloudImage
            src="ebook-natal/rebeca-lima-logo"
            alt="Logo Rebeca Lima"
            width={"2500"}
            height={"1152"}
            className="w-[200px]"
          />
        </div>
        <h1
          className="font-extrabold text-5xl text-center md:text-left"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          Desperte o sabor escondido das festas de final de ano
        </h1>
        <p
          className="text-center md:text-left"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          Seja bem-vindo ao meu guia para&nbsp;
          <span
            className="border-b-2 border-solid border-brand-sky font-bold"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            celebrações gastronômicas inesquecíveis!
          </span>
        </p>
        <p
          className="text-center md:text-left"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          Apresento a você o e-book de receitas de festas de final de ano.
        </p>
        <p
          className="text-center md:text-left"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          Uma obra cuidadosamente elaborada por uma&nbsp;
          <span className="border-b-2 border-solid border-brand-sky font-bold">
            Nutricionista e Chef de Cozinha
          </span>
          &nbsp;apaixonada por criar experiências culinárias memoráveis.
        </p>
        <a
          className="transition-all bg-gradient-to-r from-brand-marsala to-brand-beige drop-shadow-md px-8 py-4 text-white font-bold rounded-lg relative overflow-hidden before:absolute before:h-full before:top-0 before:left-0 before:w-full before:content-[''] before:from-brand-beige before:to-brand-marsala before:bg-gradient-to-r before:opacity-0 before:-z-10 hover:before:opacity-100 hover:drop-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="300"
          id="cta"
          href={EBOOK_LINK}
        >
          QUERO O GUIA AGORA
        </a>
      </div>
      <div
        className="md:w-[400px] flex items-center justify-center z-10"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <CloudImage
          src="ebook-natal/rebeca-lima-foto"
          alt="Rebeca Lima"
          width={"950"}
          height={"1296"}
          className="w-[300px] md:w-auto"
        />
      </div>
      <div className="absolute w-full h-full md:h-1/2 bg-gradient-to-t from-65% md:from-40% from-brand-pink to-transparent bottom-0 z-[10]" />
      <div className="bg-hero-texture bg-[length:10%] opacity-20 absolute top-0 left-0 w-full h-full block z-0 md:bg-5" />
    </section>
  );
}

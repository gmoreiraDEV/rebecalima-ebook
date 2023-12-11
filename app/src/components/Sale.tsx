import { EBOOK_LINK } from "@/constants";
import { formatPrice } from "@/utils/price";
import CloudImage from "./CloudImage";

export default function SaleComponent() {
  return (
    <section className="w-full flex justify-center items-center flex-col md:flex-row gap-12 relative md:mt-36">
      <div className="z-10 text-white w-2/3 p-4 flex justify-center items-center  flex-col md:block md:p-unset md:w-1/4 ">
        <h2
          className="font-extrabold text-3xl text-center md:text-left"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Oferta especial&nbsp;
          <span className="text-brand-sky border-solid border-b-2 border-brand-sky">
            por tempo limitado
          </span>
        </h2>
        <p
          data-aos="fade-right"
          data-aos-delay="200"
          className="text-center mt-4 md:text-left"
        >
          Tenha acesso imediato a todo conteúdo deste e-book por uma condição
          especial.
        </p>
      </div>
      <div className="flex relative text-white mt-20 mb-10">
        <div className="w-80 h-96 border-solid bg-gradient-to-b from-brand-sky to-brand-ocean border-brand-sky border-2 rounded-lg flex flex-col justify-center items-center relative z-10">
          <div className="z-10 flex flex-col items-center justify-center gap-4">
            <CloudImage
              src="ebook-natal/ebooks"
              alt="E-Books"
              data-aos="zoom-in"
              data-aos-delay="300"
              width={"1500"}
              height={"1500"}
              className="absolute inset-x-0 -top-40"
            />
            <p
              className="mt-28 text-center"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Por apenas:
              <br />
              <span
                className="font-extrabold text-4xl"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                12x de {formatPrice(false)}
              </span>
              <br />
              <span
                className="font-normal"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                ou&nbsp;{formatPrice(true)}&nbsp;à vista
              </span>
            </p>
            <a
              className="transition-all bg-gradient-to-r from-brand-marsala to-brand-beige drop-shadow-md px-8 py-4 text-white font-bold rounded-lg relative overflow-hidden before:absolute before:h-full before:top-0 before:left-0 before:w-full before:content-[''] before:from-brand-beige before:to-brand-marsala before:bg-gradient-to-r before:opacity-0 before:-z-10 hover:before:opacity-100 hover:drop-shadow-lg"
              data-aos="fade-up"
              data-aos-delay="500"
              href={EBOOK_LINK}
              id="cta"
            >
              QUERO COMPRAR AGORA
            </a>
            <p
              className="text-center text-xs px-12"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Aviso: O preço pode aumentar a qualquer momento.
            </p>
          </div>
          <div className="bg-hero-texture bg-[length:10%] opacity-10 absolute top-0 left-0 w-full h-full block z-0 md:bg-5"></div>
        </div>
      </div>
      <div className="absolute top-[50%] -translate-y-[50%] bg-brand-pink/80 w-full h-full p-8 md:p-unset lg:h-52 z-0"></div>
    </section>
  );
}

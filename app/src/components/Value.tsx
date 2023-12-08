import { EBOOK_LINK } from "@/constants";
import { formatPrice } from "@/utils/price";

export default function ValueComponent() {
  return (
    <section className="w-full flex justify-center items-center gap-12 relative">
      <div className="w-[90%] h-80 border-solid text-white bg-gradient-to-b from-brand-sky to-brand-ocean border-brand-sky border-2 rounded-lg flex flex-col justify-center items-center relative z-10">
        <div className="z-10 flex flex-col items-center justify-center gap-4">
          <p className="text-center" data-aos="fade-down">
            Oferta por tempo limitado
          </p>
          <a
            data-aos="fade-down"
            data-aos-delay="100"
            className="transition-all bg-gradient-to-r from-brand-marsala to-brand-beige drop-shadow-md px-8 py-4 text-white font-bold rounded-lg relative overflow-hidden before:absolute before:h-full before:top-0 before:left-0 before:w-full before:content-[''] before:from-brand-beige before:to-brand-marsala before:bg-gradient-to-r before:opacity-0 before:-z-10 hover:before:opacity-100 hover:drop-shadow-lg"
            href={EBOOK_LINK}
            id="cta"
          >
            QUERO COMPRAR AGORA
          </a>
          <p
            className="text-center text-xl"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Apenas <strong>{formatPrice(true)}</strong> à vista
          </p>
          <p
            className="text-center text-xs text-white px-8"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Aviso: O preço pode aumentar a qualquer momento.
          </p>
        </div>
        <div className="bg-hero-texture bg-[length:10%] opacity-10 absolute top-0 left-0 w-full h-full block z-0 md:bg-5"></div>
      </div>
    </section>
  );
}

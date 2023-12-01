export default function SaleComponent() {
  return (
    <section className="w-full flex justify-center items-center gap-12 relative mt-36">
      <div className="z-10 text-white w-1/4">
        <h2
          className="font-extrabold text-3xl"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Oferta especial
          <span className="text-brand-sky border-solid border-b-2 border-brand-sky">
            por tempo limitado
          </span>
        </h2>
        <p data-aos="fade-right" data-aos-delay="200">
          Tenha acesso imediato a todo conteúdo deste e-book por uma condição
          especial.
        </p>
      </div>
      <div className="flex relative text-white">
        <div className="w-80 h-96 border-solid bg-gradient-to-b from-brand-sky to-brand-ocean border-brand-sky border-2 rounded-lg flex flex-col justify-center items-center relative z-10">
          <div className="z-10 flex flex-col items-center justify-center gap-4">
            <img
              className="absolute inset-x-0 -top-40"
              src="/img/ebooks.png"
              alt="E-Books"
              data-aos="zoom-in"
              data-aos-delay="300"
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
                12x de R$3,79
              </span>
              <br />
              <span
                className="font-normal"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                ou R$ 37,90 à vista
              </span>
            </p>
            <button
              className="transition-all bg-gradient-to-r from-brand-marsala to-brand-beige drop-shadow-md px-8 py-4 text-white font-bold hover:from-brand-beige hover:to-brand-marsala hover:drop-shadow-lg rounded-lg"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              QUERO COMPRAR AGORA
            </button>
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
      <div className="absolute top-[50%] -translate-y-[50%] bg-brand-pink/80 w-full h-52 z-0"></div>
    </section>
  );
}

export default function HeroComponent() {
  return (
    <section className="bg-brand-pink w-full h-full flex flex-col-reverse items-center p-8 text-brand-white relative md:flex-row md:justify-center animate-fade-down animate-once animate-ease-out">
      <div className="flex flex-col items-center py-16 z-30 gap-4 md:w-1/2 md:items-start md:max-w-2xl">
        <div data-aos="fade-down">
          <img
            className="w-[200px]"
            src="/img/logo-rebeca.svg"
            alt="Logo Rebeca Lima"
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
          Seja bem-vindo ao meu guia para
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
          Uma obra cuidadosamente elaborada por uma
          <span className="border-b-2 border-solid border-brand-sky font-bold">
            Nutricionista e Chef de Cozinha
          </span>
          apaixonada por criar experiências culinárias memoráveis.
        </p>
        <button
          className="transition-all bg-gradient-to-r from-brand-marsala to-brand-beige drop-shadow-md px-8 py-4 text-white font-bold hover:from-brand-beige hover:to-brand-marsala hover:drop-shadow-lg rounded-lg"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          QUERO O GUIA AGORA
        </button>
      </div>
      <div
        className="w-[400px] flex items-center justify-center z-10"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <img src="/img/rebeca.png" alt="Rebeca Lima" />
      </div>
      <div className="absolute w-full h-1/2 bg-gradient-to-t from-40% from-brand-pink to-transparent bottom-0 z-[10]" />
      <div className="bg-hero-texture bg-[length:10%] opacity-20 absolute top-0 left-0 w-full h-full block z-0 md:bg-5" />
    </section>
  );
}

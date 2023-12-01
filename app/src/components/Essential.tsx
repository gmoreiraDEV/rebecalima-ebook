export default function EssentialComponent() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-8 p-4 text-brand-marsala md:flex-row">
      <div className="flex w-2/3" data-aos="fade-left">
        <img src="/img/mockup.png" alt="Mockup e-book Rebeca Lima" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 text-center md:text-left">
        <h2
          className="font-extrabold text-3xl"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          Por que este e-book é essencial para suas festas?
        </h2>
        <div
          className="flex flex-col justify-center items-center gap-4"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <p>
            Explore a combinação perfeita entre nutrição e sabor, desenvolvida
            por uma profissional experiente.
          </p>
          <p>
            Surpreenda seus convidados com pratos refinados e equilibrados,
            criados para encantar paladares exigentes.
          </p>
          <p>
            Transforme suas celebrações em experiências memoráveis, onde cada
            receita conta uma história de amor pela culinária.
          </p>
        </div>
      </div>
    </section>
  );
}

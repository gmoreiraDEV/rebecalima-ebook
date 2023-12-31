export default function ContentComponent() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-8 p-16 bg-brand-marsala text-brand-white">
      <h2 className="font-extrabold text-3xl text-center" data-aos="fade-left">
        O que há no e-book?
      </h2>
      <div className="flex gap-12 flex-col justify-center items-center md:flex-row md:justify-around md:text-left">
        <div className="flex flex-col gap-4">
          <p
            className="flex flex-col items-center justify-center"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <span className="tracking-[5px]"> 8 receitas de </span>
            <span className="text-5xl font-extrabold">NATAL</span>
          </p>
          <p
            className="flex flex-col items-center justify-center"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <span className="tracking-[5px]"> 8 receitas de </span>
            <span className="text-5xl font-extrabold">ANO NOVO</span>
          </p>
        </div>
        <div className="md:text-left">
          <h3
            className="font-extrabold text-xl"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Estrutura das receitas
          </h3>
          <ul className="list-image-checkmark list-inside pl-5 space-y-3">
            <li data-aos="fade-right" data-aos-delay="350">
              1 entrada
            </li>
            <li data-aos="fade-right" data-aos-delay="400">
              2 acompanhamentos
            </li>
            <li data-aos="fade-right" data-aos-delay="450">
              2 pratos principais
            </li>
            <li data-aos="fade-right" data-aos-delay="500">
              1 salada
            </li>
            <li data-aos="fade-right" data-aos-delay="550">
              1 sobremesa
            </li>
            <li data-aos="fade-right" data-aos-delay="600">
              1 bebida
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

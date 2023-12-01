export default function RebecaLimaComponent() {
  return (
    <section
      data-aos="zoom-in"
      className="w-full h-96 flex justify-around items-center gap-8 p-4 bg-sacada bg-contain bg-no-repeat bg-center bg-brand-black"
    >
      <div>
        <a
          className="p-2 bg-brand-black/80 backdrop-blur text-brand-white rounded-full border-2 border-solid border-brand-black"
          href="http://instagram.com/rebecalimanutri"
          target="_blank"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          @rebecalimanutri
        </a>
      </div>
      <div>
        <h2
          className="font-extrabold text-3xl text-left text-brand-white"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          De Nutricionista a Chef de Cozinha. <br />
          Quem é <span className="text-brand-sky">Rebeca Lima</span>?
        </h2>
        <p data-aos="fade-right" data-aos-delay="400">
          Texto texto texto
        </p>
      </div>
    </section>
  );
}

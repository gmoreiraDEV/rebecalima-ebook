import CloudImage from "./CloudImage";

export default function IdealForYouComponent() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-8 p-12 bg-brand-pink text-brand-white">
      <h2 className="font-extrabold text-3xl text-center" data-aos="fade-down">
        Ideal para você:
      </h2>
      <div className="flex flex-wrap gap-8 justify-around items-center max-w-3xl">
        <div className="px-8 py-12 rounded-lg relative">
          <span
            className="w-12 h-12 bg-brand-sky flex justify-center items-center rounded-full absolute -top-5 z-10"
            data-aos="zoom-in"
          >
            <CloudImage
              src="ebook-natal/beef-icon"
              alt="Beef Icon"
              data-aos="zoom-in"
              width={"24"}
              height={"24"}
            />
          </span>
          <p className="max-w-[240px] z-10" data-aos="zoom-in">
            Que quer refeições sofisticadas e simples de serem feitas
          </p>
          <div className="w-full h-full bg-brand-pink mix-blend-plus-lighter opacity-40 top-0 left-0 absolute rounded-lg z-0"></div>
        </div>
        <div className="px-8 py-12 rounded-lg relative">
          <span
            className="w-12 h-12 bg-brand-sky flex justify-center items-center rounded-full absolute -top-5 z-10"
            data-aos="zoom-in"
          >
            <CloudImage
              src="ebook-natal/work-icon"
              alt="Work Icon"
              data-aos="zoom-in"
              width={"24"}
              height={"24"}
            />
          </span>
          <p className="max-w-[240px] z-10" data-aos="zoom-in">
            Profissional com carreira exigente e responsabilidades familiares
          </p>
          <div className="w-full h-full bg-brand-pink mix-blend-plus-lighter opacity-40 top-0 left-0 absolute rounded-lg z-0"></div>
        </div>
        <div className="px-8 py-12 rounded-lg relative">
          <span
            className="w-12 h-12 bg-brand-sky flex justify-center items-center rounded-full absolute -top-5 z-10"
            data-aos="zoom-in"
          >
            <CloudImage
              src="ebook-natal/clock-icon"
              alt="Alarm Icon"
              data-aos="zoom-in"
              width={"24"}
              height={"24"}
            />
          </span>
          <p className="max-w-[240px] z-10" data-aos="zoom-in">
            Que quer soluções práticas e eficientes para otimizar seu tempo
            escasso
          </p>
          <div className="w-full h-full bg-brand-pink mix-blend-plus-lighter opacity-40 top-0 left-0 absolute rounded-lg z-0"></div>
        </div>
        <div className="px-8 py-12 rounded-lg relative">
          <span
            className="w-12 h-12 bg-brand-sky flex justify-center items-center rounded-full absolute -top-5 z-10"
            data-aos="zoom-in"
          >
            <CloudImage
              src="ebook-natal/cart-icon"
              alt="Cart Icon"
              data-aos="zoom-in"
              width={"24"}
              height={"24"}
            />
          </span>
          <p className="max-w-[240px] z-10" data-aos="zoom-in">
            Que valoriza produtos que se integram facilmente ao seu estilo de
            vida agitado
          </p>
          <div className="w-full h-full bg-brand-pink mix-blend-plus-lighter opacity-40 top-0 left-0 rounded-lg absolute z-0"></div>
        </div>
      </div>
    </section>
  );
}

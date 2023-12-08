import { INSTAGRAM } from "@/constants";

export default function RebecaLimaComponent() {
  return (
    <section
      data-aos="zoom-in"
      className="w-full h-96 flex justify-around items-center gap-8 p-4 bg-sacada bg-contain bg-no-repeat bg-center bg-brand-black"
    >
      <div>
        <a
          className="p-2 bg-brand-black/80 backdrop-blur text-brand-white rounded-full border-2 border-solid border-brand-black hover:p-4 hover:text-brand-black hover:bg-brand-white"
          href={INSTAGRAM}
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
        <div className="text-brand-white max-w-lg">
          <p className="mt-4" data-aos="fade-right" data-aos-delay="400">
            Graduada em Nutrição e em Gastronomia, <strong>Rebeca Lima</strong>{" "}
            é uma pessoa que une duas paixões,&nbsp;
            <strong>Nutrição e Gastronomia</strong>.
          </p>
          <p className="mt-4" data-aos="fade-right" data-aos-delay="500">
            Especializada em criar experiências gastronômicas personalizadas,
            seu trabalho como <strong>Personal Chef</strong> consiste em ir até
            seus clientes, cozinhando menus sob medida de acordo com as
            preferências e necessidades nutricionais individuais.
          </p>
          <p className="mt-4" data-aos="fade-right" data-aos-delay="600">
            Além da Nutrição, ela possui uma criatividade na cozinha
            incomparável, sempre inovando suas preparaçãoes com novos sabores e
            texturas.
          </p>
        </div>
      </div>
    </section>
  );
}

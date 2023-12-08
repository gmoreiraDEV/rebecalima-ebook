export default function ConquestComponent() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-8 p-4 text-brand-marsala">
      <h2 className="font-extrabold text-3xl text-center" data-aos="fade-down">
        O que você vai conquistar se adquirir o e-book agora?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto">
        <p
          className="max-w-sm font-medium"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          🕒 Tempo é precioso - Receitas rápidas
        </p>
        <p
          className="max-w-sm font-medium"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          📅 Planejamento de refeições
        </p>
        <p
          className="max-w-sm font-medium"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          🌮 Variedade para paladares exigentes
        </p>
        <p
          className="max-w-sm font-medium"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          🛒 Listas de compras descomplicadas
        </p>
        <p
          className="max-w-sm font-medium"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          🌿 Nutrição sem compromissos
        </p>
        <p
          className="max-w-sm font-medium"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          🍽️ Simplicidade na cozinha - Zero estresse
        </p>
        <p
          className="max-w-sm font-medium"
          data-aos="fade-right"
          data-aos-delay="700"
        >
          🎉 Liberte-se da pressão na cozinha e descubra o prazer de cada
          refeição!
        </p>
      </div>
    </section>
  );
}

import CloudImage from "@/components/CloudImage";

export default function Page() {
  return (
    <main className="flex flex-col text-brand-white text-center bg-brand-marsala">
      <div className="max-w-[300px] sm:max-w-lg m-auto p-10">
        <h1 className="text-3xl font-bold">Muito obrigado!</h1>
        <p>
          Gostaríamos de expressar nossa mais sincera gratidão pela sua recente
          compra do nosso e-book. É um prazer saber que você escolheu confiar em
          nós para fornecer o conhecimento e insights contidos no material.
        </p>
        <p>
          Esperamos sinceramente que o conteúdo atenda às suas expectativas e
          contribua de maneira significativa para a sua jornada de aprendizado.
          Se houver alguma dúvida, feedback ou sugestão que gostaria de
          compartilhar, por favor, não hesite em entrar em contato conosco.
          Estamos sempre aqui para ajudar. Agradecemos mais uma vez por me
          escolher e esperamos que aproveite ao máximo o e-book. Desejamos a
          você muito sucesso e enriquecimento com o conteúdo.
        </p>
        <p className="m-10">Atenciosamente,</p>
        <CloudImage
          alt="Assinatura"
          src="ebook-natal/rebeca-lima-logo"
          width={2500}
          height={1152}
        />
      </div>
    </main>
  );
}

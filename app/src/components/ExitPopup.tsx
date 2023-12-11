import { useForm, SubmitHandler } from "react-hook-form";
import { useExitPopupStore } from "@/stores/exitPopup";
import { useState } from "react";
import { useExitIntent } from "use-exit-intent";

type RegisterEmail = {
  email: string;
};

export default function ExitPopup() {
  const { show, setShowExitPopUp } = useExitPopupStore();
  const [error, setMessageError] = useState("");
  const { unsubscribe } = useExitIntent();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterEmail>();

  const onSubmit: SubmitHandler<RegisterEmail> = async (data) => {
    const email = data.email;
    const url = process.env.NEXT_PUBLIC_WEBHOOK_URL;
    const webhook = await fetch(`${url}${email}`)
      .then((_e) => {
        setShowExitPopUp(), unsubscribe();
      })
      .catch((e) =>
        setMessageError("Algo deu errado, por favor tente novamente!")
      );

    return webhook;
  };

  return (
    <div
      className={`${show ? "hidden" : "block"} relative z-[9999]`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      id="exitModal"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div className="mt-2 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h2
                    className="text-brand-marsala text-2xl font-bold leading-6"
                    id="modal-title"
                  >
                    Estamos felizes por você ter chegado até aqui.
                  </h2>
                  <h3 className="text-brand-marsala text-lg leading-6 ">
                    Mas parece que você está prestes a sair. Antes disso,
                    queremos garantir que não perca nenhuma&nbsp;
                    <strong>oportunidade incrível</strong>.
                  </h3>
                  <div className="mt-2">
                    <p className="text-brand-marsala text-sm">
                      Deixe seu e-mail no campo abaixo e ganhe um desconto
                      exclusivo de 10% para começar a usar seu ebook agora
                      mesmo.
                    </p>
                  </div>
                  <div className="mt-6 flex w-full gap-x-4">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="w-full flex relative"
                    >
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        {...register("email", { required: true })}
                        className="min-w-0 flex-auto rounded-md border-0 bg-brand-beige/30 px-3.5 py-2 text-brand-white shadow-sm ring-1 ring-inset ring-brand-pink/70 focus:ring-1 focus:ring-inset focus:ring-brand-pink/70 sm:text-sm sm:leading-6"
                        placeholder="Digite seu email..."
                      />
                      {errors.email && (
                        <span className="text-sm font-bold absolute -bottom-5 left-3 text-brand-marsala">
                          Esse campo é necessário*
                        </span>
                      )}
                      {error && (
                        <span className="text-sm font-bold absolute -bottom-5 left-3 text-brand-marsala">
                          {error}
                        </span>
                      )}
                      <button
                        type="submit"
                        className="ml-4 transition-all bg-gradient-to-r from-brand-marsala to-brand-beige drop-shadow-md px-3.5 py-2.5 text-white font-bold rounded-lg relative overflow-hidden before:absolute before:h-full before:top-0 before:left-0 before:w-full before:content-[''] before:from-brand-beige before:to-brand-marsala before:bg-gradient-to-r before:opacity-0 before:-z-10 hover:before:opacity-100 hover:drop-shadow-lg"
                      >
                        Cadastrar email
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 w-full py-3 sm:flex justify-center items-center sm:px-6">
              <button
                onClick={setShowExitPopUp}
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-brand-pink sm:mt-0 sm:w-auto"
              >
                Perder desconto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

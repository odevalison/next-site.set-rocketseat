import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";

export const SupportSection = () => {
  return (
    <section className="relative mt-14 md:mt-28 py-12 md:py-32 bg-gradient-to-r from-gray-500 to-gray-700">
      <div className="absolute inset-0 hidden md:block bg-[url('/background-features.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="container flex flex-col items-center gap-8 md:gap-12">
        <h2 className="font-sans text-balance text-center text-heading-md md:text-heading-xl text-gray-100 relative">
          Sua loja de afiliado, simples, do jeito que deveria ser
        </h2>

        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col text-left gap-3 rounded-xl p-6 md:p-12 bg-blue-400 z-10">
            <div className="flex p-2.5 w-fit items-center justify-center rounded-lg bg-blue-300 mb-5">
              <PaintbrushVertical className="size-6 text-white" />
            </div>

            <div className="flex flex-col gap-2">
              <strong className="text-heading-sm font-sans text-gray-100">
                Personalize seu site
              </strong>

              <p className="text-body-sm text-gray-200">
                Adicione sua logo, favicon, cores no seu catálogo e tenha tudo
                com a sua cara.
              </p>
            </div>
          </div>

          <div className="flex flex-col text-left gap-3 rounded-xl p-6 md:p-12 bg-cyan-300 z-10">
            <div className="flex p-2.5 w-fit items-center justify-center rounded-lg bg-cyan-200 mb-5">
              <Store className="size-6 text-white" />
            </div>

            <div className="flex flex-col gap-2">
              <strong className="text-heading-sm font-sans text-gray-100">
                Venda de qualquer loja
              </strong>

              <p className="text-body-sm text-gray-200">
                Não importa a loja, o Site.Set permite que você insira qualquer
                link de afiliação.
              </p>
            </div>
          </div>

          <div className="flex flex-col text-left gap-3 rounded-xl p-6 md:p-12 bg-blue-400 z-10">
            <div className="flex p-2.5 w-fit items-center justify-center rounded-lg bg-blue-300 mb-5">
              <HeartHandshake className="size-6 text-white" />
            </div>

            <div className="flex flex-col gap-2">
              <strong className="text-heading-sm font-sans text-gray-100">
                Receba suporte amigável
              </strong>

              <p className="text-body-sm text-gray-200">
                Nossa equipe estará sempre pronta para te atender para ajudar no
                que for preciso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

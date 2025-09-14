import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const FeatureSection = () => {
  return (
    <section className="container text-white bg-gray-700 grid gap-6 md:grid-cols-2 py-8 md:py-10">
      <div className="flex flex-col gap-3 rounded-xl bg-gray-500 p-6 md:p-12">
        <span className="text-body-tag uppercase text-blue-200 bg-blue-400 px-3 py-1.5 w-fit rounded-sm">
          Simples
        </span>

        <h2 className="text-gray-100 font-sans text-heading-sm md:text-heading-lg">
          Crie um catálogo de produtos online em poucos minutos
        </h2>
      </div>

      <div className="flex flex-col gap-3 rounded-xl bg-gray-500 p-6 md:p-12">
        <span className="text-body-tag uppercase text-blue-200 bg-blue-400 px-3 py-1.5 w-fit rounded-sm">
          Prático
        </span>

        <h2 className="text-gray-100 font-sans text-heading-sm md:text-heading-lg">
          Venda para seu público através de uma plataforma única
        </h2>
      </div>

      <div className="col-span-full flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 rounded-xl bg-gray-500 p-6 md:p-12">
          <div className="flex flex-col gap-3">
            <span className="text-body-tag uppercase text-blue-200 bg-blue-400 px-3 py-1.5 w-fit rounded-sm">
              Personalizável
            </span>

            <h2 className="text-gray-100 font-sans text-heading-sm md:text-heading-lg">
              Tenha uma loja online personalizada com a cara de sua marca
            </h2>

            <Button
              className="hidden md:w-fit md:mt-auto md:flex md:items-center md:gap-2"
              size="lg"
              asChild
            >
              <Link href="/criar-loja">
                Criar loja grátis <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="flex flex-col items-center justify-self-end justify-center w-full">
            <div className="w-full overflow-hidden">
              <Image
                src="/feature-image.svg"
                alt="Features"
                width={440}
                height={330}
                className="object-cover w-full"
              />
            </div>

            <Button
              className="w-full space-x-2 mt-8 flex md:hidden"
              size="lg"
              asChild
            >
              <Link href="/criar-loja">
                Criar loja grátis <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

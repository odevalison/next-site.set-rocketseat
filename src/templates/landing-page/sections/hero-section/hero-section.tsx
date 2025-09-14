import { ArrowRight, Clock, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="container relative flex items-center justify-center pt-8 mt-8 pb-10 md:pt-20 md:pb-[7.5rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 h-[22.5rem] md:h-[31rem] items-center">
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8 md:items-start">
          <h1 className="text-gray-100 text-heading-xl md:text-heading-hg text-center md:text-start font-sans">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <Clock className="text-cyan-100 size-4" />
                <span className="text-gray-200 text-body-sm md:text-body-md">
                  Crie o seu site em menos de 5 minutos
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Store className="text-cyan-100 size-4" />

                <span className="text-gray-200 text-body-sm md:text-body-md">
                  Acompanhe e otimize seu negócio online
                </span>
              </div>
            </div>
          </div>

          <div className="text-white flex flex-col gap-4 mt-4 md:mt-6 items-center md:items-start lg:items-start">
            <Button className="w-fit space-x-2" size="lg" asChild>
              <Link href="/criar-loja">
                Criar loja grátis <ArrowRight />
              </Link>
            </Button>

            <p className="text-gray-300 text-body-xs">
              Não precisa de cartão de crédito
            </p>
          </div>
        </div>

        <div className="hidden md:relative md:h-full md:order-last md:flex md:items-center md:justify-center">
          <Image
            src="/hero-image.svg"
            alt="Ilustração com icones de loja, etiqueta e sacola"
            width={200}
            height={400}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

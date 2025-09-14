import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Store } from "lucide-react";

export const CallToActionSection = () => {
  return (
    <section className="text-white py-14 md:py-20 bg-gradient-to-b from-cyan-950/20 to-gray-700 relative mt-20">
      <div className="container">
        <div className="flex flex-col items-center gap-8 md:gap-10 text-center">
          <div className="absolute w-fit -top-7 p-4 rounded-full bg-cyan-300">
            <Store className="size-8 text-cyan-100" />
          </div>

          <h2 className="font-sans text-balance text-heading-md md:text-heading-xl text-gray-100 text-center">
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Button size="lg" className="space-x-2 w-fit" asChild>
            <Link href="/criar-loja">
              Criar loja grátis <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

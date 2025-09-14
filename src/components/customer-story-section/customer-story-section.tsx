import Image from "next/image";

const customersStories = [
  {
    content:
      "Criar minha loja com o Site.Set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.",
    author: {
      name: "Annette Bones",
      role: "CEO na Anne Corp",
      avatar: "/customer-01.png",
    },
  },
  {
    content:
      "Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
    author: {
      name: "Jacob Jones",
      role: "CEO na JJ Org",
      avatar: "/customer-02.png",
    },
  },
];

export const CustomerStorySection = () => {
  return (
    <section className="container py-20 md:py-32">
      <div className="flex flex-col items-center gap-8 md:gap-12">
        <h2 className="font-sans text-heading-md md:text-heading-xl text-gray-100">
          Quem utiliza, aprova!
        </h2>

        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          {customersStories.map((story) => (
            <div
              key={story.author.name}
              className="flex justify-center flex-col gap-8 md:gap-10 rounded-xl bg-gray-500 p-6 md:p-10 border border-gray-400"
            >
              <p className="text-body-md text-gray-200">{story.content}</p>

              <div className="flex items-center gap-3">
                <div className="relative size-10 overflow-hidden rounded-full">
                  <Image
                    src={story.author.avatar}
                    alt={story.author.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <strong className="font-normal text-gray-200 text-sm">
                    {story.author.name}
                  </strong>

                  <span className="text-xs text-gray-300">
                    {story.author.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

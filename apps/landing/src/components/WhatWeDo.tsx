import { Button } from "./Button";

type CardProps = {
  title: string;
  content: string;
  cta: string;
  icon?: string;
};

const Card = ({ content, cta, icon, title }: CardProps) => (
  <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
    <div className="border border-blueGray-200 shadow-lg">
      <div className="bg-blueGray-200 flex items-center justify-start w-full	h-28 m-auto p-4">
        <i className={`fas text-6xl ${icon}`}></i>
        <h5 className="text-xl font-bold ml-6">{title}</h5>
      </div>
      <div className="p-4">
        <p className="text-start text-sm text-blueGray-600 uppercase font-semibold">
          {content}
        </p>
        <div className="mt-4 text-center">
          <a href="#contato">
            <Button variant="dark" size="small">
              {cta}
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export const WhatWeDo = () => (
  <section className="pt-20 pb-48">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center text-center mb-24">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold">O que nós fazemos?</h2>
          <p className="text-lg leading-relaxed m-4 text-blueGray-500">
            Protudos e serviços para fazer seu negócio crescer
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <Card
          content="A cada compra seus clientes ganham pontos que podem ser trocados por produtos ou descontos configurados por você."
          cta="Saiba mais"
          title="Sistema de Pontos"
          icon="fa-dice text-lightBlue-600"
        />
        <Card
          content="App que permite que seus clientes realizem os próprios pedidos, sem ter que ficar esperando você estar disponível."
          cta="Saiba mais"
          title="Sistema de Pedidos"
          icon="fa-arrow-right-arrow-left text-lightBlue-600"
        />
      </div>
    </div>
  </section>
);

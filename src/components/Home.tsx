import Image from "next/image";
import { Form } from "./Form";
import { Hero } from "./Hero";
import { Tech } from "./Tech";

const Home = () => {
  return (
    <main id="home" className="text-blueGray-700 antialiased">
      <Hero />
      <section className="pb-20 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    {/* <i className="fas fa-award"></i> */}
                    <i className="fa-solid fa-person-rays"></i>
                  </div>
                  <h2 className="text-xl font-semibold">Conversão</h2>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Atraia novos clientes com um sistema simples e fácil de usar
                    para aumentar suas vendas.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h2 className="text-xl font-semibold">Fidelização</h2>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Ofereça uma boa experiência de compra, conheça o perfil de
                    seus clientes. Aplique campanhas personalizadas para gerar
                    engajamento.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h2 className="text-xl font-semibold">
                    Inteligência artificial
                  </h2>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Dados em tempo real atualizados por inteligência artificial
                    te ajudam a criar estratégias para seu negócio.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-50">
                <i className="fas fa-user-friends text-xl"></i>
              </div>
              <h2 className="text-3xl mb-2 font-semibold leading-normal">
                Conheça sua base de clientes
              </h2>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Com o Gamou conseguirá se comunicar com os seus clientes de
                forma direta e gerando muito relacionamento com os seus
                clientes.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                Quais informações do seu cliente tens? Na maioria dos negócios,
                nenhuma.
              </p>
              <a href="#contato" className="font-bold text-blueGray-700 mt-8">
                <p>Quero saber mais</p>
              </a>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600 mt-3">
                <Image
                  alt="Gráficos de conversão de clientes"
                  src="/img/real_time.webp"
                  className="w-full align-middle rounded-t-lg "
                  width={600}
                  height={200}
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{ height: "95px", top: "-94px" }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h2 className="text-xl font-bold text-white">
                    Acesse os dados dados em tempo real
                  </h2>
                  <p className="text-md font-light mt-2 text-white">
                    Acesse a qualquer hora do dia gráficos e relatórios
                    integrados com ferramentas Google. Tudo atualizado em tempo
                    real para você acompanhar o crescimento da sua marca
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20 pb-80">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <Image
                alt="Plataforma para cadastro de produtos e serviços"
                className="max-w-full rounded-lg shadow-lg mb-5"
                src="/img/complete.webp"
                width={600}
                height={200}
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                  <i className="fas fa-rocket text-xl"></i>
                </div>
                <h2 className="text-3xl font-semibold">
                  Cadastro de produtos ou serviços
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  No Gamou poderá cadastrar seus produtos e criar um catálogo ou
                  cardápio de produtos.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h3 className="text-blueGray-500">
                          Realizar pedido via sistema
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h3 className="text-blueGray-500">
                          Aplicar pontuação de fidelidade ao realizar o
                          pagamento
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="fas fa-globe-americas"></i>
                        </span>
                      </div>
                      <div>
                        <h3 className="text-blueGray-500">
                          Aplicar descontos e cupons
                        </h3>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <WhatWeDo /> */}
      {/* <Pricing /> */}

      <Tech />
      <section className=" block py-24 lg:pt-0 bg-blueGray-800">
        <div className="container mx-auto px-4 mt-10">
          <Form id="contato" />
        </div>
      </section>
    </main>
  );
};

export default Home;

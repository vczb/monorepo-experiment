import Image from "next/image";

const Main = () => {
  return (
    <main id="home" className="text-blueGray-700 antialiased">
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{ minHeight: "75vh" }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url(/img/banner.jpg)",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolutEe opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto mt-10">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 className="text-white font-semibold text-5xl">
                  Solução para fidelizar o seus clientes e gerar novas vendas
                </h1>
                <p className="mt-4 text-lg text-blueGray-200">
                  O sistema Gamou tem diversos recursos para que possa criar
                  cupons de descontos, seus clientes ganham pontos em cada
                  compra e uma comunicação direta sem usar redes sociais.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
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
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-20 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Cupons</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    O Gamou possui recurso para gerar cupons de descontos e
                    liberar no momento da compra para o seu cliente.
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
                  <h6 className="text-xl font-semibold">Pontos</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Ao realizar qualquer compra o cliente já recebe pontos no
                    seu cadastro com o local. Assim que somar uma quantidade
                    pode trocar por algum produto ou serviço.
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
                  <h6 className="text-xl font-semibold">Descontos</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Os descontos são criados pelo local e é possível receber os
                    descontos na hora da compra sem consultar nada. No momento
                    da compra já libera.
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
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Mantenha a fidelidade com seus clientes
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Com o Gamou conseguirá se comunicar com os seus clientes de
                forma direta e gerando muito relacionamento com os seus
                clientes.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                Quais informações do seu cliente tens? Na maioria dos negócios,
                nenhuma.
              </p>
              <a
                href="#"
                className="font-bold text-blueGray-700 mt-8"
                target="_blank"
              >
                <p>Quero saber mais</p>
              </a>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600 mt-3">
                <Image
                  alt="Fácil de usar e sem complicações"
                  src="/img/real-time.jpg"
                  className="w-full align-middle rounded-t-lg "
                  width={200}
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
                  <h4 className="text-xl font-bold text-white">
                    Fácil de usar e sem complicações
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    O sistema é simples e fácil de usar, sem complicações para
                    criar ações. O cliente faz um cadastro rápido e já pode
                    receber descontos e cupons de descontos.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20">
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
                alt="Cadastro de produtos ou serviços"
                className="max-w-full rounded-lg shadow-lg mb-5"
                src="/img/complete.jpg"
                width={200}
                height={200}
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                  <i className="fas fa-rocket text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Cadastro de produtos ou serviços
                </h3>
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
                        <h4 className="text-blueGray-500">
                          Realizar pedido via sistema
                        </h4>
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
                        <h4 className="text-blueGray-500">
                          Aplicar pontuação de fidelidade ao realizar o
                          pagamento
                        </h4>
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
                        <h4 className="text-blueGray-500">
                          Aplicar descontos e cupons
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">Planos</h2>
              <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                Abaixo a trilha de evolução da sua jornada no Gamou. Queremos te
                ajudar a crescer.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <div className="bg-blueGray-200 flex items-center justify-center shadow-lg rounded-full w-28	h-28 m-auto">
                  <i className="fas fa-seedling text-6xl text-lightBlue-400"></i>
                </div>
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Grátis</h5>
                  <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    30 dias
                  </p>
                  <div className="mt-6">
                    <a
                      className="btn-secondary btn-small"
                      href="#trial"
                      role="button"
                    >
                      Acessar
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <div className="bg-blueGray-200 flex items-center justify-center shadow-lg rounded-full w-28	h-28 m-auto">
                  <i className="far fa-paper-plane text-6xl text-emerald-400"></i>
                </div>
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">R$ 50,00</h5>
                  <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    Mensal
                  </p>
                  <div className="mt-6">
                    <a
                      className="btn-success btn-small"
                      href="#monthly"
                      role="button"
                    >
                      Acessar
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <div className="bg-blueGray-200 flex items-center justify-center shadow-lg rounded-full w-28	h-28 m-auto">
                  <i className="fas fa-rainbow text-6xl text-red-400"></i>
                </div>
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">R$ 30,00</h5>
                  <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    Semestral
                  </p>
                  <div className="mt-6">
                    <a
                      className="btn-alert btn-small"
                      href="#semester"
                      role="button"
                    >
                      Acessar
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <div className="bg-blueGray-200 flex items-center justify-center shadow-lg rounded-full w-28	h-28 m-auto">
                  <i className="far fa-gem text-6xl text-pink-500"></i>
                </div>
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">R$ 25,00</h5>
                  <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    Anual
                  </p>
                  <div className="mt-6">
                    <a
                      className="btn-info btn-small"
                      href="#yearly"
                      role="button"
                    >
                      Acessar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20 relative block bg-blueGray-800">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{
            height: "80px",
          }}
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
              className="text-blueGray-800 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4 pt-10 lg:pt-24 lg:pb-64 ">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                Sobre a tecnologia
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                O Gamou utiliza o que tem de mais atual em tecnologia. Conforme
                o seu negócio cresce, o sistema cresce também para sempre
                entregar valor ao seu negócio.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-medal text-xl"></i>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">
                Privacidade
              </h6>
              <p className="mt-2 mb-4 text-blueGray-400">
                Só será mostrado informações que os clientes permitirem. Ao
                realizar o cadastro é realizado alguns questionários.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Segurança
              </h5>
              <p className="mt-2 mb-4 text-blueGray-400">
                O banco de dados é criptografado, garantindo a segurança das
                informações.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">Nuvem</h5>
              <p className="mt-2 mb-4 text-blueGray-400">
                Poderá trabalhar da onde quiser sem problemas. Todas as
                informações são gravadas nos servidores.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" block py-24 lg:pt-0 bg-blueGray-800">
        <div className="container mx-auto px-4 mt-10">
          <form className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">
                    Quer mandar uma mensagem ?
                  </h4>
                  <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                    Respondemos em até 48 horas.
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="full-name"
                    >
                      Nome completo
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Nome completo"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Mensagem
                    </label>
                    <textarea
                      rows={4}
                      cols={80}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Digite uma mensagem..."
                    ></textarea>
                  </div>
                  <div className="text-center mt-6">
                    <button className="btn-dark btn-medium" type="submit">
                      Enviar mensagem
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Main;

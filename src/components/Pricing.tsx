export const Pricing = () => (
  <section className="pt-20 pb-80">
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
              {/* <div className="mt-6">
                <a
                  className="btn-secondary btn-small"
                  href="#trial"
                  role="button"
                >
                  Acessar
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <div className="bg-blueGray-200 flex items-center justify-center shadow-lg rounded-full w-28	h-28 m-auto">
              <i className="far fa-paper-plane text-6xl text-emerald-400"></i>
            </div>
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">
                R$ 50,00 <span className="text-sm font-regular">Mês</span>
              </h5>
              <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                Até 100 usuários
              </p>
              {/* <div className="mt-6">
                <a
                  className="btn-success btn-small"
                  href="#monthly"
                  role="button"
                >
                  Acessar
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <div className="bg-blueGray-200 flex items-center justify-center shadow-lg rounded-full w-28	h-28 m-auto">
              <i className="fas fa-rainbow text-6xl text-red-400"></i>
            </div>
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">
                R$ 200,00 <span className="text-sm font-regular">Mês</span>
              </h5>
              <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                Até 500 usuários
              </p>
              {/* <div className="mt-6">
                <a
                  className="btn-alert btn-small"
                  href="#semester"
                  role="button"
                >
                  Acessar
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <div className="bg-blueGray-200 flex items-center justify-center shadow-lg rounded-full w-28	h-28 m-auto">
              <i className="far fa-gem text-6xl text-pink-500"></i>
            </div>
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Consultar</h5>
              <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                + 500 usuários
              </p>
              {/* <div className="mt-6">
                <a className="btn-info btn-small" href="#yearly" role="button">
                  Acessar
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

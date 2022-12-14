export const Tech = () => (
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
            O Gamou utiliza o que tem de mais atual em tecnologia. Conforme o
            seu negócio cresce, o sistema cresce também para sempre entregar
            valor ao seu negócio.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-12 justify-center">
        <div className="w-full lg:w-3/12 px-4 text-center">
          <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i className="fas fa-medal text-xl"></i>
          </div>
          <h3 className="text-xl mt-5 font-semibold text-white">Privacidade</h3>
          <p className="mt-2 mb-4 text-blueGray-400">
            Sua privacidade é respeitada de acordo com a lei geral de proteção
            de dados (LGPD)
          </p>
        </div>
        <div className="w-full lg:w-3/12 px-4 text-center">
          <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3 className="text-xl mt-5 font-semibold text-white">Segurança</h3>
          <p className="mt-2 mb-4 text-blueGray-400">
            O banco de dados é criptografado, garantindo a segurança das
            informações.
          </p>
        </div>
        <div className="w-full lg:w-3/12 px-4 text-center">
          <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i className="fas fa-lightbulb text-xl"></i>
          </div>
          <h3 className="text-xl mt-5 font-semibold text-white">Nuvem</h3>
          <p className="mt-2 mb-4 text-blueGray-400">
            Poderá trabalhar da onde quiser sem problemas. Todas as informações
            são gravadas nos servidores.
          </p>
        </div>
      </div>
    </div>
  </section>
);

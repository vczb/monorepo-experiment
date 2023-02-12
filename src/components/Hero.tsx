export const Hero = () => (
  <div
    className="relative pt-16 pb-32 flex content-center items-center justify-center"
    style={{ minHeight: "75vh" }}
  >
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{
        backgroundImage: "url(/img/banner.webp)",
        filter: "brightness(0.5)",
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
              O sistema Gamou tem diversos recursos para que possa criar cupons
              de descontos, agilizar pedidos, inteligência artificial e muito
              mais para fazer seu negócio crescer.
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
);

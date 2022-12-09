import { FormHTMLAttributes } from "react";
import Button from "./Button";

type FormProps = FormHTMLAttributes<HTMLFormElement>;

const Form = ({ ...props }: FormProps) => {
  return (
    <form {...props} className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
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
              <Button variant="dark">Enviar mensagem</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;

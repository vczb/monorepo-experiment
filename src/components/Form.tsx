import { FormEvent, FormHTMLAttributes, useCallback, useState } from "react";
import { Button } from "./Button";

type FormProps = FormHTMLAttributes<HTMLFormElement>;

const FORM_URL = "https://formspree.io/f/mgeqgdqa";

export const Form = ({ ...props }: FormProps) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);

    const name = data?.get("name")?.toString() || "";
    const email = data?.get("email")?.toString() || "";
    const message = data?.get("message")?.toString() || "";

    fetch(FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        name,
        email,
        message,
      }),
    })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <form
      {...props}
      className="flex flex-wrap justify-center lg:-mt-64 -mt-48"
      onSubmit={handleSubmit}
    >
      <div className="w-full lg:w-6/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
          <div className="flex-auto p-5 lg:p-10">
            <h4 className="text-2xl font-semibold">Fale conosco</h4>
            <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
              Vamos conversar sobre o seu negócio e como podemos te ajudar a
              crescer
            </p>
            <div className="relative w-full mb-3 mt-8">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="full-name"
              >
                Nome
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Nome"
                name="name"
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
                name="email"
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
                name="message"
              ></textarea>
            </div>
            <div className="text-center mt-6">
              <Button variant="dark" type="submit" disabled={loading}>
                {loading ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

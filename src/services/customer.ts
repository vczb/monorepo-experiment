import { FechResponse } from "./fetch";

type FindUserRequest = {
  cpf: string;
  token: string;
};

async function findCustomer({
  cpf,
  token,
}: FindUserRequest): Promise<FechResponse & any> {
  const url =
    process.env.REACT_APP_BASE_API_URL + `customers?filters[cpf][$eq]=${cpf}`;

  return await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
}

const customerService = {
  findCustomer,
};

export default customerService;

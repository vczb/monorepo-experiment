import { CustomerState } from "features/customer/customerSlice";
import { FechResponse } from "./fetch";

export type FindByCPFRequest = {
  cpf: string;
  userId: string;
  token: string;
};

type FindByCPFResponse = Omit<CustomerState, "requestStatus" | "errorMessage">;

async function findByCPF({
  cpf,
  userId,
  token = "",
}: FindByCPFRequest): Promise<FechResponse & FindByCPFResponse> {
  const url = process.env.REACT_APP_BASE_API_URL + `customer/onboarding`;

  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ cpf, user_id: userId }),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
}

const customerService = {
  findByCPF,
};

export default customerService;

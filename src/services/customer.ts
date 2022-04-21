import { CustomerState } from "features/customer/customerSlice";
import { FechResponse } from "./fetch";

export type FindByCPFRequest = {
  cpf: string;
  userId: string;
  token: string;
};

export type RegisterCustomerRequest = FindByCPFRequest & {
  name: string;
  email: string;
  phone: string;
};

type FindByCPFResponse = Omit<CustomerState, "requestStatus" | "errorMessage">;

type RegisterCustomerResponse = Omit<
  CustomerState,
  "requestStatus" | "errorMessage"
>;

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

async function register({
  token,
  cpf,
  name,
  email,
  userId,
  phone,
}: RegisterCustomerRequest): Promise<FechResponse & RegisterCustomerResponse> {
  const url = process.env.REACT_APP_BASE_API_URL + `customer/new`;

  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, cpf, name, phone, email }),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
}

const customerService = {
  findByCPF,
  register,
};

export default customerService;

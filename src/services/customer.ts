import { CustomerState } from "features/customer/customerSlice";
import { FechResponse } from "./fetch";

export type FindByCPFRequest = {
  cpf: string;
  userId: string;
  token: string;
};

export type RegisterOrEditRequest = {
  name: string;
  email: string;
  phone: string;
} & FindByCPFRequest;

type CustomerResponse = Omit<CustomerState, "requestStatus" | "errorMessage">;

async function findByCPF({
  cpf,
  userId,
  token = "",
}: FindByCPFRequest): Promise<FechResponse & CustomerResponse> {
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
}: RegisterOrEditRequest): Promise<FechResponse & CustomerResponse> {
  const url = process.env.REACT_APP_BASE_API_URL + `customer/register`;

  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ user_id: userId, cpf, name, phone, email }),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
}

async function edit({
  token,
  cpf,
  name,
  email,
  userId,
  phone,
}: RegisterOrEditRequest): Promise<FechResponse & CustomerResponse> {
  const url = process.env.REACT_APP_BASE_API_URL + `customer/edit`;

  return await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ user_id: userId, cpf, name, phone, email }),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
}

const customerService = {
  findByCPF,
  register,
  edit,
};

export default customerService;

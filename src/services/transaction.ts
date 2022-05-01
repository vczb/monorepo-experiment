import { FechResponse } from "./fetch";

type TransactionResponse = {
  id: string;
};

export type TransactionRequest = {
  userId: string;
  customerId: string;
  token: string;
  value: number;
};

async function purchase({
  userId,
  customerId,
  value,
  token,
}: TransactionRequest): Promise<FechResponse & TransactionResponse> {
  const url = process.env.REACT_APP_BASE_API_URL + "transaction/purchase";

  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ value, customer_id: customerId, user_id: userId }),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
}

const transactionService = {
  purchase,
};

export default transactionService;

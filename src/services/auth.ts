import { UserState } from "features/user/userSlice";

type Error = {
  status: number;
  name: string;
  message: string;
  details: unknown;
};

export type FechResponse = {
  error: Error;
  [key: string]: unknown;
};

type LoginResponse = {
  jwt: string;
  user?: UserState;
};

export type LoginRequest = {
  identifier: string;
  password: string;
};

async function login({
  identifier,
  password,
}: LoginRequest): Promise<FechResponse & LoginResponse> {
  const url = process.env.REACT_APP_BASE_API_URL + "auth/local";

  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ identifier, password }),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
}

async function logout() {
  return;
}

const authService = {
  login,
  logout,
};

export default authService;

import { authState } from "features/auth/authSlice";

const url = "http://localhost:1337/api/auth/local";
const token =
  "1dbbae4c3bbefecc1bfc937cb030c6536c295e27c1bbaeb19a65592b08bb7180a7e9eb860d09950bc7f10caf0fdc7b9d6c9fd1cec6b632a6521d8f1f8adc554936f8b6d1991600aa48d399716eca3cea8fd4504dece7f1ec9f4e1c89566b015eaa773973a578a20ffc6c5fb7343fb0d4a202f1af8a8d6a4cac3192648e03c642";

async function login({ identifier, password }: authState) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ identifier, password }),
  });
  const data = await response.json();
  return data;
}

async function logout() {
  return;
}

const authService = {
  login,
  logout,
};

export default authService;

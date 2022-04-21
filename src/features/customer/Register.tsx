import { useNavigate } from "react-router-dom";
import { Box, Typography, Container, Paper } from "@mui/material";

import { Wrapper } from "components";
import { useCustomer } from "./customerSlice";

import Form from "./Form";

export default function Register() {
  const { onResetCustomer, onRegister } = useCustomer();

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const email = data?.get("email")?.toString() || "";
    const name = data?.get("name")?.toString() || "";
    const phone = data?.get("phone")?.toString() || "";

    onRegister({
      email,
      name,
      phone,
    });
  };

  const handleBack = () => {
    onResetCustomer();
    navigate("/");
  };

  return (
    <Wrapper fullVH>
      <Container component="main" maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            marginTop: 20,
            padding: "1rem 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">
              Bem vindo(a) ! Vamos fazer seu cadastro
            </Typography>
          </Box>
          <Form onSubmit={handleSubmit} onCancel={() => handleBack()} />
        </Paper>
      </Container>
    </Wrapper>
  );
}

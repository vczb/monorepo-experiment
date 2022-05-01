import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Wrapper } from "components";
import { useNavigate } from "react-router-dom";
import { useCustomer } from "./customerSlice";

const Welcome = () => {
  const navigate = useNavigate();

  const { customer, onResetCustomer } = useCustomer();

  const handleEdit = () => {
    navigate("/customer/edit");
  };

  const handleDiamonds = () => {
    navigate("/transaction/diamonds");
  };

  const handleBlack = () => {
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
              alignItems: "start",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Typography variant="h5">
              {`Olá ${customer.name}, que bom que você voltou!`}
            </Typography>
            <Typography
              sx={{ mt: 2 }}
              variant="body1"
            >{`Como podemos ajudar?`}</Typography>
          </Box>
          <Grid container sx={{ my: 2 }} gap={2} justifyContent="space-between">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => handleDiamonds()}
            >
              ADICIONAR PONTOS
            </Button>
            <Button type="submit" fullWidth variant="contained">
              RESGATAR PRÊMIOS
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => handleEdit()}
            >
              EDITAR DADOS
            </Button>
            <Button
              type="button"
              fullWidth
              variant="outlined"
              onClick={() => handleBlack()}
            >
              VOLTAR
            </Button>
          </Grid>
        </Paper>
      </Container>
    </Wrapper>
  );
};

export default Welcome;

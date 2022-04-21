import React, { useEffect } from "react";

import { MaskField, Wrapper } from "components";
import {
  Button,
  Divider,
  FormControl,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useCustomer } from "./customerSlice";
import { useCompany } from "features/company/companySlice";
import { useNavigate } from "react-router-dom";

const bgImage = {
  backgroundImage: "url(/img/onboarding-bg.png)",
  height: "100%",
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function Onboarding() {
  const { company } = useCompany();
  const { customer, validateCPF } = useCustomer();
  const { onFindByCPF } = useCustomer();
  const navigate = useNavigate();

  const { id, requestStatus } = customer;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const cpf = data?.get("cpf")?.toString() || "";

    const isValid = validateCPF(cpf);

    if (!isValid) {
      return;
    }

    onFindByCPF(cpf);
  };

  useEffect(() => {
    if (requestStatus !== "fulfilled") {
      return;
    }

    if (id?.length) {
      navigate("/welcome");
    } else {
      navigate("/new");
    }
  }, [id, requestStatus, navigate]);

  return (
    <Wrapper fullVH>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Grid item xs display={{ xs: "none", lg: "block" }} style={bgImage} />
        <Grid
          item
          xs={4}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ p: 2, width: "100%", minWidth: "30rem" }}
        >
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography sx={{ mb: 3 }} variant="h6">
              É muito bom ter você aqui conosco!
            </Typography>
            <Typography sx={{ mb: 3 }} variant="body1">
              Digite seu CPF para continuar
            </Typography>

            <FormControl
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ width: "100%", mb: 5 }}
            >
              <MaskField
                sx={{ mb: 3 }}
                fullWidth
                error={customer.requestStatus === "rejected"}
                helperText={customer.errorMessage}
                label="CPF"
                placeholder="CPF"
                name="cpf"
                required
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={customer.requestStatus === "pending"}
              >
                CONTINUAR
              </Button>
            </FormControl>

            <Divider sx={{ mb: 1 }} />
            <Typography
              sx={{ color: "text.secondary" }}
              align={"center"}
              variant="body1"
            >
              {company.name}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

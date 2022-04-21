import { FormControl, Button, TextField, Grid } from "@mui/material";

import { MaskField } from "components";

import { useCustomer } from "./customerSlice";

type FormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
};

const Form = ({ onCancel, onSubmit }: FormProps) => {
  const { customer } = useCustomer();
  const { cpf, requestStatus, errorMessage } = customer;

  return (
    <FormControl
      component="form"
      onSubmit={onSubmit}
      noValidate
      sx={{ mt: 1, width: "100%" }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        autoFocus
        name="name"
        label="Nome"
        type="text"
        id="name"
        autoComplete={"off"}
        error={requestStatus === "rejected"}
        helperText={errorMessage}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete={"off"}
        error={requestStatus === "rejected"}
        helperText={errorMessage}
      />
      <Grid container sx={{ my: 2 }} justifyContent="space-between">
        <Grid item xs={6}>
          <MaskField
            mask="phone"
            name="phone"
            label="Telefone"
            error={requestStatus === "rejected"}
            helperText={errorMessage}
          />
        </Grid>
        <Grid item xs={5}>
          <MaskField
            required
            inputProps={{
              disabled: true,
            }}
            label={"CPF"}
            maskValue={cpf}
            error={requestStatus === "rejected"}
            helperText={errorMessage}
          />
        </Grid>
      </Grid>

      <Grid container sx={{ my: 2 }} justifyContent="space-between">
        <Grid item xs={3}>
          <Button
            type="button"
            fullWidth
            variant="outlined"
            onClick={() => onCancel()}
          >
            VOLTAR
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Button type="submit" fullWidth variant="contained">
            CONTINUAR
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default Form;

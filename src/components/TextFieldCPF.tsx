/* eslint-disable @typescript-eslint/ban-ts-comment */
import { TextField, TextFieldProps } from "@mui/material";

import InputMask from "react-input-mask";

const TextFieldCPF = ({ ...props }: TextFieldProps) => {
  return (
    <InputMask mask="999.999.999-99">
      {() => (
        <TextField
          id="cpf"
          label="CPF"
          name="cpf"
          fullWidth
          required
          placeholder="CPF"
          {...props}
        />
      )}
    </InputMask>
  );
};

export default TextFieldCPF;

import { TextField, TextFieldProps } from "@mui/material";

/*
  TODO: Add regex to validate CPF
  ^\d{3}\.\d{3}\.\d{3}\-\d{2}$
*/
const TextFieldCPF = ({ ...props }: TextFieldProps) => {
  return <TextField required placeholder="CPF" {...props} />;
};

export default TextFieldCPF;

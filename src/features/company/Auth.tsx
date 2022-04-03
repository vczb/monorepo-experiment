import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Avatar,
  FormControl,
  Button,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useCompany } from "./companySlice";

export default function Auth() {
  const navigate = useNavigate();

  const { company, onLogin } = useCompany();

  const { requestStatus, errorMessage, jwt } = company;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const identifier = data?.get("email")?.toString() || "";
    const password = data?.get("password")?.toString() || "";

    if (!identifier.length || !password.length) {
      return;
    }

    onLogin({ identifier, password });
  };

  useEffect(() => {
    if (requestStatus === "fulfilled" && jwt?.length) {
      navigate("/");
    }
  }, [requestStatus, jwt, navigate]);

  return (
    <Container component="main" maxWidth="xs">
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
          <Typography component="h1" variant="h2" color={"primary.dark"}>
            PONTUEI
          </Typography>
          <Avatar sx={{ m: 1, bgcolor: "primary.dark" }}>
            <LockOutlinedIcon />
          </Avatar>
        </Box>
        <FormControl
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, width: "100%" }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            error={requestStatus === "rejected"}
            helperText={errorMessage}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={requestStatus === "rejected"}
            helperText={errorMessage}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={requestStatus === "pending"}
          >
            ENTRAR
          </Button>
        </FormControl>
      </Paper>
    </Container>
  );
}

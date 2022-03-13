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
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { login } from "./authSlice";

export default function Auth() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const identifier = data?.get("email")?.toString() || "";
    const password = data?.get("email")?.toString() || "";

    if (!identifier.length || !password.length) {
      return;
    }

    dispatch(
      login({
        identifier,
        password,
      })
    );

    navigate("/");
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 16,
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
            Auth
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
          >
            Sign In
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}

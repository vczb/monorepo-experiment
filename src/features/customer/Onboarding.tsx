import * as React from "react";

import { useUser } from "features/user/userSlice";

import { TextFieldCPF, Wrapper } from "components";
import {
  Button,
  Divider,
  FormControl,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

const bgImage = {
  backgroundImage: "url(/img/onboarding-bg.png)",
  height: "100%",
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function Onboarding() {
  const { user } = useUser();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    console.log(data);
  };
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
              <TextFieldCPF sx={{ mb: 3 }} fullWidth />

              <Button type="submit" fullWidth variant="contained">
                CONTINUAR
              </Button>
            </FormControl>

            <Divider sx={{ mb: 1 }} />
            <Typography
              sx={{ color: "text.secondary" }}
              align={"center"}
              variant="body1"
            >
              {user.username}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

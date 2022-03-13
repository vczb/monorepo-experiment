import { Button, createTheme, ThemeProvider } from "@mui/material";

import { orange } from "@mui/material/colors";
import { colors } from "theme/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: orange[300],
      main: orange[700],
      dark: orange[800],
      contrastText: colors.white,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">Hello</Button>
    </ThemeProvider>
  );
}

export default App;

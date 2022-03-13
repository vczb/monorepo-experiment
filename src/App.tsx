import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "store";

import AppRoutes from "routes";
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

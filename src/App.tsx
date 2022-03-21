import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "store";

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
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;

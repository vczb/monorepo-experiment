import { createTheme, ThemeProvider } from "@mui/material";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "store";
import AppRoutes from "routes";

import { primary } from "theme/colors";
import { globalStyles } from "theme/global";

const theme = createTheme({
  palette: {
    mode: "light",
    primary,
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {globalStyles}
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;

import { createRoot } from "react-dom/client";
import "./styles/fonts.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { BrowserRouter } from "react-router";
import AppRouter from "./routers/AppRouter.tsx";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <BrowserRouter basename="/react-users">
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <AppRouter />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}

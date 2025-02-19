import { createRoot } from "react-dom/client";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { BrowserRouter } from "react-router";
import AppRouter from "./components/AppRouter.tsx";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <BrowserRouter basename="/react-users">
      <Provider store={store}>
        <ScopedCssBaseline>
          <AppRouter />
        </ScopedCssBaseline>
      </Provider>
    </BrowserRouter>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}

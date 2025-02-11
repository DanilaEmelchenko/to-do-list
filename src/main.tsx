import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";

createRoot(document.getElementById("root")!).render(
  <ScopedCssBaseline>
    <App />
  </ScopedCssBaseline>
);

import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/AppRoutes";
import "./index.css";
import { FavoritosProvider } from "./context/FavoritosContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoritosProvider>
      <AppRoutes />
    </FavoritosProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";

import "react-toastify/dist/ReactToastify.css";

import { RouterProvider } from "react-router-dom";
import { Routers } from "./routers.tsx";

//Importações adicionais
import ThemeProvider from "./Contexts/Theme/themeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={Routers} />
    </ThemeProvider>
  </React.StrictMode>,
)

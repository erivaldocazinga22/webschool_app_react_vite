import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App.tsx";
import Error404 from "./pages/404.tsx";
import SignIn from "./pages/signIn.tsx";
import Dashboard from "./pages/dashboard.tsx";

export const Routers = createBrowserRouter([
  {
    errorElement:  <Error404 />,
    children: [
      {
        path: "/auth/account",
        element:  <SignIn />
      }
    ]
  },
  {
    element: <App />,
    errorElement:  <Error404 />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={Routers} />
  </React.StrictMode>
)

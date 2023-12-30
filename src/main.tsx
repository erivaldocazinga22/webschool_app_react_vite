import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./Pages/private/Layout.tsx";
import Login from "./Pages/Login.tsx";
import NotFound404 from "./Pages/404.tsx";
import Dashboard from "./Pages/private/Dashboard.tsx";
import Layout from "./Pages/Layout.tsx";


export const Routers = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound404 />,
    children: [
      {
        path: "/login",
        element: <Login />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound404 />
  },
  {
    element: <RootLayout />,
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
    <ToastContainer 
      theme="dark"
      autoClose={1000}
    />
  </React.StrictMode>,
)

import { createBrowserRouter } from "react-router-dom";
import NotFound404 from "./Pages/404.tsx";

import Layout from "./Pages/Layout.tsx";
import Login from "./Pages/Login.tsx";
import RefrashPassword from "./Pages/RefrashPassword.tsx";

import RootLayout from "./Pages/private/Layout.tsx";
import Dashboard from "./Pages/private/Dashboard.tsx";
import Users from "./Pages/private/Users.tsx";
import Publication from "./Pages/private/Publication.tsx";
import Vitrine from "./Pages/private/Vitrine.tsx";

import MessageLayout from "./Pages/private/message/Layout.tsx";
import Message from "./Pages/private/message/index.tsx";

export const Routers = createBrowserRouter([
    { path: "*", element: <NotFound404 /> },
    { element: <Layout />, children: [
        { path: "/login", element: <Login /> },
        { path: "/refrash", element: <RefrashPassword />}
      ]
    },
    { element: <RootLayout />, children: [
        { path: "/", element: <Dashboard /> },
        { path: "/users", element: <Users /> },
        { path: "/publication", element: <Publication /> },
        { path: "/vitrine", element: <Vitrine /> },
      ]
    },
    { element: <MessageLayout />, children: [
        { path: "/messages", element: <Message /> }
      ]
    },
  ]);
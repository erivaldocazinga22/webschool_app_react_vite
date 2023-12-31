import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Sidebar from "../../Components/Layout/Sidebar";
import Header from "../../Components/Layout/Header";
import { useTheme } from "../../Contexts/Theme/themeContext";
import Loader from "../../Components/basics/Loader";
export default function RootLayout({ layout }: { layout: "default" | "messages"}) {

  const SessionProvider = lazy(() => import("../../Contexts/Session/sessionProvider"));

  const { mode } = useTheme();

  return (
    <Suspense fallback={<div className="absolute top-0 left-0 bottom-0 right-0 w-screen h-screen flex items-center justify-center bg-black/30"><Loader></Loader></div>}>
      <SessionProvider>
        <div className="w-screen h-screen flex overflow-hidden text-zinc-900 bg-white dark:text-zinc-50 dark:bg-webschool-400 transition-colors duration-150">
          <Sidebar />
          <main className="w-full">
            {layout === "default" && <Header />}
            <Outlet />
          </main>
          <ToastContainer theme={mode} autoClose={1000} />
        </div>
      </SessionProvider>
    </Suspense>
  )
}

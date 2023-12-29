import { Outlet } from "react-router-dom";
import SessionProvider from "../contexts/auth/sessionProvider";

export default function App() {
  return (
    <SessionProvider>
      <div className="w-screen h-screen flex overflow-hidden text-zinc-900 bg-white dark:text-zinc-50 dark:bg-webschool-400 transition-colors duration-150">
        layout
        <Outlet />
      </div>
    </SessionProvider>
  )
}
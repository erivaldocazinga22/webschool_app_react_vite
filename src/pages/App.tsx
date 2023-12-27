import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="w-screen h-screen flex overflow-hidden text-zinc-900 bg-white dark:text-zinc-50 dark:bg-webschool-400 transition-colors duration-150">
      layout
      <Outlet />
    </div>
  )
}
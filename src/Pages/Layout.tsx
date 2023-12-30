import { Outlet } from "react-router-dom";

export default function Layout() {
 
    return (
      <div className="w-screen h-screen flex flex-col overflow-hidden text-zinc-900 bg-white dark:text-zinc-50 dark:bg-webschool-400 transition-colors duration-150">
        <header className="top-0 left-0 w-full min-h-basic h-basic px-6 flex items-center justify-between border-b border-webschool-100/20">
          <div className="flex items-center gap-2">
            <img
              className="mx-auto h-12 w-auto"
              src="/logomarca.svg"
              alt="webschool logomarca"
              width={20}
              height={20}
            />
            <span className="font-medium text-2xl">Webschool</span>
          </div>
        </header>
        <main className="h-full w-screen flex items-center justify-center">
          <Outlet />
        </main>
      </div>
    )
  }
  
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type ButtonAddProps = {
    children: ReactNode,
    className?: string
}

export default function ButtonAdd({ children, className }: ButtonAddProps) {
    return (
        <button type="button" className={twMerge(`mt-6 w-full inline-flex gap-2 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-webschool-first text-base font-medium text-white hover:bg-webschool-first/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-webschool-first sm:ml-3 sm:w-auto sm:text-sm`, className)}>
            {children}
        </button>
    )
}


import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SearchBarRootProps = {
    children: ReactNode,
    className: string
}
export default function SearchBarRoot({ children, className }: SearchBarRootProps) {
    return (
        <div className={twMerge("flex items-center gap-1 cursor-text rounded-md p-2 bg-zinc-300 dark:bg-webschool-200", className)}>
            {children}
        </div>
    )
}


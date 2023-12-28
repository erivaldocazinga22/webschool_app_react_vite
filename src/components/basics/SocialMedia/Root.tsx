import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type IconSVGProps = {
    text: "facebook" | "google",
    children: React.ReactNode
    href: string,
    className?: string
}

export default function IconSVG({ text, children, href, className }: IconSVGProps) {
    return (
        <Link to={href} className={twMerge(`
            flex-1 px-4 py-2 rounded-md flex gap-2 items-center justify-center 
            text-zinc-900 dark:text-white border border-zinc-300 dark:border-webschool-200 
            transition-colors duration-150
        `, className)}>
            {children}
            <span className="lowercase">{text}</span>
        </Link>
    )
}2
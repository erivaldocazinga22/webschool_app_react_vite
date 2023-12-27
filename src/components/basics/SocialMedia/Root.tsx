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
        <Link to={href} className={twMerge(`flex-1 px-4 py-2 rounded-md flex gap-2 items-center justify-center text-white`, className)}>
            {children}
            <span className="lowercase">{text}</span>
        </Link>
    )
}2
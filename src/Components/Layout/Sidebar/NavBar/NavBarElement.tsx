import { Link } from "react-router-dom";

type NavBarElementProps = {
    icon: React.ElementType;
    text: string;
    href: string;
    ref?: React.LegacyRef<HTMLDivElement> | undefined;
    handleOnClick?: () => void;
};

export default function NavBarElement({
    icon: Icon,
    href,
    text,
    ref,
    handleOnClick,
}: NavBarElementProps) {
    return (
        <Link to={href}>
            <div
                ref={ref}
                onClick={handleOnClick}
                className="relative w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-zinc-300/50 dark:hover:bg-webschool-200 transition-colors duration-150 group"
            >
                <Icon strokeWidth={1.5} />
                <div className="z-20 opacity-0 group-hover:opacity-100 absolute top-1/2 left-16 -translate-y-1/2 bg-zinc-300/80 dark:bg-webschool-200 px-2 py-1 text-sm rounded-md select-none transition-opacity duration-150">
                    {text}
                </div>
            </div>
        </Link>
    );
}

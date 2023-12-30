import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type NavBarElementProps = {
    index: number,
    aberto: boolean,
    alternarVisibilidade: (index: number) => void,

    icon: React.ElementType;
    text: string;
    href: string;
    ref?: React.LegacyRef<HTMLDivElement> | undefined;
};

export default function NavBarElement(props: NavBarElementProps) {
    
    const { icon: Icon } = props;

    return (
        <Link to={props.href}>
            <div
                ref={props.ref}
                onClick={()=> props.alternarVisibilidade(props.index)}
                className={twMerge(`relative w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-zinc-300/50 dark:hover:bg-webschool-200 transition-colors duration-150 group`, 
                    `${props.aberto && "bg-webschool-first hover:bg-webschool-first dark:hover:bg-webschool-first text-white"}`
                )}
            >
                <Icon strokeWidth={1.5} />
                <div className="z-20 opacity-0 group-hover:opacity-100 absolute top-1/2 left-16 -translate-y-1/2 bg-zinc-300/80 dark:bg-webschool-200 px-2 py-1 text-sm rounded-md select-none transition-opacity duration-150">
                    {props.text}
                </div>
            </div>
        </Link>
    );
}

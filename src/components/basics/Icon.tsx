import { ElementType } from "react";
import { twMerge } from "tailwind-merge";

type IconProps = {
    icon: ElementType,
    size?: number,
    strokeWidth?: number,
    className?: string

}

export default function Icon({ icon : Element, size = 24, className, strokeWidth = 1.5} : IconProps) {
    return (
        <Element 
            size={size} 
            strokeWidth={strokeWidth} 
            className={twMerge(`transition-colors duration-150`,className)} 
        />
    )
}
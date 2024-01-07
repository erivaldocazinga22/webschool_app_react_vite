import { ReactNode, useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge";

type PopUpProps = {
    element: ReactNode;
    children: ReactNode;
    styles?: {
        container?: string,
        children?: string
    }
}

export default function PopUp({ element, children, styles }: PopUpProps) {
    const [isOpenPopup, setOpenPopup] = useState(false);
    const pupUpRef = useRef<HTMLDivElement>(null);
    const pupUpChildrenRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (
            pupUpRef.current &&
            !pupUpRef.current.contains(event.target as Node) &&
            pupUpChildrenRef.current &&
            !pupUpChildrenRef.current.contains(event.target as Node)
          ) {
            setOpenPopup(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [pupUpRef, pupUpChildrenRef]);

    return (
        <div className={twMerge("relative", styles?.container)}>
            <div 
                className=""
                onClick={() => setOpenPopup(!isOpenPopup)}
                ref={pupUpRef}
            >
                {element}
            </div>
            {isOpenPopup && (
                <div ref={pupUpChildrenRef} className={twMerge("", styles?.children)}>
                    {children}
                </div>
            )}
        </div>
    )
}
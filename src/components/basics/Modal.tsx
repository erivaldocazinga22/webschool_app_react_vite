import { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";

type ModalProps = {
    element: React.ReactNode, 
    children: React.ReactNode,
    style?: {
        background?: string,
        modalBox?: string,
    }
}

export default function Modal({element, children, style }: ModalProps) {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const modalBodyRef = useRef<HTMLDivElement>(null);

    const handleOpenModal = ()=> setIsOpenModal(prevState => !prevState);

    useEffect(()=> {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalBodyRef.current && !modalBodyRef.current.contains(event.target as Node)) {
                setIsOpenModal(false);
            }
        };
        
        document.addEventListener("mousedown", handleClickOutside);
    },[modalBodyRef, setIsOpenModal]);

    return (
        <div>
            <div onClick={handleOpenModal}>{element}</div>
            {isOpenModal && (
                <div className={twMerge(`z-50 absolute top-0 left-0 right-0 bottom-0 w-screen h-screen flex items-center justify-center bg-black/30 dark:bg-zinc-950/60`, style?.background)}>
                    <div ref={modalBodyRef} className={twMerge("w-1/2 min-h-[550px] flex flex-col rounded-3xl bg-zinc-50 dark:bg-zinc-900 overflow-hidden", style?.modalBox)}>
                        <main className="flex-1 py-6 px-8">
                            {children}
                        </main>
                    </div>
                </div>
            )}
        </div>
    )
}
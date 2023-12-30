import { ChevronRight } from "lucide-react";
type HeaderRouterProps = {
    labelRoot: string,
    label?: string
}
export default function HeaderRouter({ labelRoot = "Dashboard", label }: HeaderRouterProps){
    return (
        <div>
            <h1 className="font-light text-base text-webschool-100 flex items-center gap-1">
                <span>{labelRoot}</span>
                {label && (
                    <>
                        <ChevronRight strokeWidth={1.2} size={20} className="mt-1"/>
                        <span className="text-zinc-300">{label}</span>
                    </>
                )}
            </h1>
        </div>
    )
}
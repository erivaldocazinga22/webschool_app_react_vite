import { Plus } from "lucide-react";
import HeaderRouter from "../../Components/basics/HeaderRouter";

export default function Publication() {
    return (
        <div className="px-6 h-full flex flex-col">
            <div className="h-14 w-full flex items-center gap-2 justify-between select-none">
                <HeaderRouter labelRoot="Dashboard" label="Publicações"/>
            </div>

            <div className="absolute w-12 h-12 bottom-4 right-4 cursor-pointer flex items-center justify-center rounded-full bg-webschool-first">
                <Plus />
            </div>
        </div>
    )
}
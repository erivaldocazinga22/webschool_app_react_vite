import HeaderRouter from "../../Components/basics/HeaderRouter";

export default function Vitrine() {
    return (
        <div className="px-6 h-full flex flex-col">
             <div className="h-14 w-full flex items-center gap-2 justify-between select-none">
                <HeaderRouter labelRoot="Dashboard" label="Vitrine"/>
             </div>
        </div>
    )
}
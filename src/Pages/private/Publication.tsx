import { Plus } from "lucide-react";
import HeaderRouter from "../../Components/basics/HeaderRouter";
import Modal from "../../Components/basics/Modal";

export default function Publication() {
    return (
        <div className="px-6 h-full flex flex-col">
            <div className="h-14 w-full flex items-center gap-2 justify-between select-none">
                <HeaderRouter labelRoot="Dashboard" label="Publicações"/>
            </div>

            <Modal element={
                <div className="absolute w-12 h-12 bottom-4 right-4 cursor-pointer flex items-center justify-center rounded-full text-white bg-webschool-first">
                    <Plus />
                </div>
            }>
                Criar Publicação
            </Modal>
        </div>
    )
}
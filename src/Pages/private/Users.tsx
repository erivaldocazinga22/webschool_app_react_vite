import { UserPlus2 } from "lucide-react";
import ButtonAdd from "../../Components/basics/ButtonAdd";
import HeaderRouter from "../../Components/basics/HeaderRouter";
import Modal from "../../Components/basics/Modal";


export default function Users() {
    return (
        <div className="px-6 h-full flex">
            <div className="h-14 w-full flex items-center gap-2 justify-between select-none">
                <HeaderRouter labelRoot="Dashboard" label="Usuários"/>
                
                <Modal element={
                    <ButtonAdd>
                        <UserPlus2 strokeWidth={1.5} size={18} />
                        <span>Adicionar</span>
                    </ButtonAdd>
                }>
                    FormCadd
                </Modal>
            </div>
        </div>
    )
}
import { UserPlus2 } from "lucide-react";
import ButtonAdd from "../../Components/basics/ButtonAdd";
import HeaderRouter from "../../Components/basics/HeaderRouter";
import Modal from "../../Components/basics/Modal";
import ListUsers from "../../Components/Layout/Main/Users/ListUsers";
import StudantCadUser from "../../Components/Layout/Main/Forms/StudantCadUser";


export default function Users() {
    return (
        <div className="px-6 h-full flex flex-col gap-2">
            <div className="w-full flex items-center gap-2 justify-between select-none">
                <HeaderRouter labelRoot="Dashboard" label="Usuários"/>
                
                <Modal element={
                    <ButtonAdd>
                        <UserPlus2 strokeWidth={1.5} size={18} />
                        <span>Adicionar</span>
                    </ButtonAdd>
                }>
                    <StudantCadUser></StudantCadUser>
                </Modal>
            </div>

            <ListUsers></ListUsers>
        </div>
    )
}
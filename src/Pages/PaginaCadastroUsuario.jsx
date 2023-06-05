import { redirect} from "react-router-dom";
import CadastroUsuario from "../Components/CadastroUsuario";
import { createUsuario} from "../API/usuarios";

export async function action({request}){
    const formData = await request.formData()
    const dados = Object.fromEntries(formData)
    const usuario = await createUsuario(dados)
    return redirect("/login")
}

export default function PaginaCadastroUsuario() {
  return (
    <div className="principal">
        <CadastroUsuario />
    </div>
  )
}

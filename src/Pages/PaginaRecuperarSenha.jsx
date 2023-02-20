import { redirect } from "react-router-dom";
import RecuperarSenha from "../Components/RecuperarSenha";

export async function action({request}) {
    const formData = await request.formData();
    const dados = Object.fromEntries(formData)
    return redirect("/login")
}

export default function PaginaRecuperarSenha() {
  return (
    <main className="principal">
        <RecuperarSenha />
    </main>
  )
}

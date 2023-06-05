import { useContext } from "react";
import Login from "../Components/Login";
import { UsuarioContext } from "../common/Usuario";

// export async function action ({request}) {
//   const formData = await request.formData()
//   const { email, senha } = Object.fromEntries(formData)
//   console.log(email, senha)
//   const { verificaUsuario } = useContext(UsuarioContext)
//   let resposta = await verificaUsuario(email, senha)
//   console.log(resposta)
// }

export default function PaginaLogin() {
  return (
    <main className="principal">
        <Login />
    </main>
  )
}

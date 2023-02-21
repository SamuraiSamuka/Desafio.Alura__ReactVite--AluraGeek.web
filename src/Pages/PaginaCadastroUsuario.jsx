import { redirect, useLoaderData } from "react-router-dom";
import CadastroUsuario from "../Components/CadastroUsuario";
import { createUsuario, getUsuarios } from "../usuarios";

export async function action({request}){
    const formData = await request.formData()
    const dados = Object.fromEntries(formData)
    await createUsuario(dados)
    return redirect("/login")
}

export async function loader(){
  const usuarios = await getUsuarios();
  const emailsCadastrados = usuarios.map(usuario => usuario.email)
  return {emailsCadastrados}
}

export default function PaginaCadastroUsuario() {
  const { emailsCadastrados } = useLoaderData()
  return (
    <div className="principal">
        <CadastroUsuario emailsCadastrados={emailsCadastrados}/>
    </div>
  )
}

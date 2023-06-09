import { redirect } from "react-router-dom";
import RecuperarSenha from "../Components/RecuperarSenha";
import { getUsuariosByEmail } from "../API/usuarios";
import emailjs from "@emailjs/browser";

export async function action({request}) {
    const formData = await request.formData();
    const dados = Object.fromEntries(formData)
    const email = dados.email
    const usuario = await getUsuariosByEmail(email)
    const senha = usuario[0].senha
    const dadosEmail = {email: email, senha: senha}

    try {
      const response = await emailjs.send("gmail", "template_9i5aazq", dadosEmail, "G76TIJYKwoArxKzac")
      console.log(response.text)
    } catch (erro) {
      console.log(erro.text)
    }
    return redirect("/login")
}

export default function PaginaRecuperarSenha() {
  return (
    <main className="principal">
        <RecuperarSenha />
    </main>
  )
}

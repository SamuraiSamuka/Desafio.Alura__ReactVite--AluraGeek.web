import { createContext, useEffect, useState } from "react";
import { getUsuarios, getUsuariosByEmail } from "../../API/usuarios";

export const UsuarioContext = createContext();
UsuarioContext.displayName = 'Usuário';

export function UsuarioProvider ({ children }) {
    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem('usuarioLogado')) || {})
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function verificaUsuario(email, senha) {
        const usuarioAtual = (await getUsuariosByEmail(email))[0]
        const validado = usuarioAtual.senha === senha

        if(!usuarioAtual) { 
            return {
                logado: false, 
                mensagem: "E-mail não encontrado"
            }
        } 
        
        if (validado) {
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioAtual))
            setUsuario(usuarioAtual)
            return {
                logado: true, 
                mensagem: "Usuario Logado com sucesso"
            }
        } else {
            return {
                logado: false, 
                mensagem: "Senha incorreta"
            }
        }
    }

    async function deslogar(){
        setUsuario({})
        localStorage.setItem('usuarioLogado', JSON.stringify({}))
    }

    // localStorage.setItem('usuarioLogado', JSON.stringify(usuario))

    return (
        <UsuarioContext.Provider value={{usuario, setUsuario, email, setEmail, senha, setSenha, verificaUsuario, deslogar}}>
            {children}
        </UsuarioContext.Provider>
    )
}
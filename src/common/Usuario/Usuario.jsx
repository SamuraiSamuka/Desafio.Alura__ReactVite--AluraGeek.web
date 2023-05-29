import { createContext, useState } from "react";
import { getUsuarios } from "../../API/usuarios";

export const UsuarioContext = createContext();
UsuarioContext.displayName = 'Usuário';

export function UsuarioProvider ({ children }) {
    const [usuario, setUsuario] = useState({})
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function verificaUsuario(email, senha) {
        const usuarioAtual = (await getUsuarios(email))[0]
        const validado = usuarioAtual.senha === senha
        console.log(usuarioAtual)

        if(!usuarioAtual) { 
            return {
                logado: false, 
                mensagem: "E-mail não encontrado"
            }
        } 
        
        if (validado) {
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
    }

    return (
        <UsuarioContext.Provider value={{usuario, setUsuario, email, setEmail, senha, setSenha, verificaUsuario, deslogar}}>
            {children}
        </UsuarioContext.Provider>
    )
}
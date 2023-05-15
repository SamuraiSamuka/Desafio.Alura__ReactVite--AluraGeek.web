import { createContext, useState } from "react";
import { getUsuarios } from "../../API/usuarios";

export const UsuarioContext = createContext();
UsuarioContext.displayName = 'Usuário';

export function UsuarioProvider ({ children, usuarios }) {
    const [usuario, setUsuario] = useState({});
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function verificaUsuario(email, senha) {
        const usuario = usuarios.find(usuario => usuario.email === email)
        if(!usuario) { return "E-mail não encontrado" }
        const validado = usuario.senha === senha
        if (validado) {
            setUsuario(usuario)
            return "Usuario Logado com sucesso"
        } else {
            return "Senha incorreta"
        }
    }

    return (
        <UsuarioContext.Provider value={{usuario, setUsuario, email, setEmail, senha, setSenha, verificaUsuario}}>
            {children}
        </UsuarioContext.Provider>
    )
}
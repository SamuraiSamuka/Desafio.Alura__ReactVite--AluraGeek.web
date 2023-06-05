import './Login.css'
import Formulario from '../Formulario';
import CampoInput from '../CampoInput';
import Botao from '../Botao';
import {Form, Link, useNavigate} from 'react-router-dom';
import { UsuarioContext } from '../../common/Usuario';
import { useContext } from 'react';

const Login = () => {
    const { email, setEmail, senha, setSenha, verificaUsuario } = useContext(UsuarioContext);
    const navigate = useNavigate();

    async function aoSubmeter(evento) {
        evento.preventDefault()
        // let resposta = aoLogar({email: email, senha: senha})
        let resposta = await verificaUsuario(email, senha)
        if(resposta.logado) {
            navigate('/');
        }
    }

    function mostrarEsconderSenha(evento) {
        let icone = evento.target
        let campoInput = icone.previousSibling
        if (campoInput.type === "password") {
            campoInput.type = "text"
            icone.style.color = "#606060"
        } else if (campoInput.type === "text") {
            campoInput.type = "password"
            icone.style.color = "#aaaaaa"
        }
    }

    return (
        <div className='formulario-container container'>
            <Formulario 
                titulo="Iniciar Sessão"
            >
                <Form method='post' onSubmit={aoSubmeter}>
                    <CampoInput 
                        type="email"
                        name="email"
                        aoAlterado={
                            evento => {
                                setEmail(evento.target.value)
                            }
                        }
                        valor={email}
                        required
                    >E-mail</CampoInput>
                    <CampoInput 
                        type="password" 
                        name="senha"
                        icone="visibility"
                        comportamentoIcone={mostrarEsconderSenha}
                        aoAlterado={
                            evento => {
                                setSenha(evento.target.value)
                            }
                        }
                        valor={senha}
                        minimo={6}
                        required
                    >Senha</CampoInput>
                    <Botao type="submit">Entrar</Botao>
                </Form>
                <div className='login-links'>
                    <Link to="/cadastrousuario" className='login-link'>Criar conta</Link>
                    <Link to="/recuperarsenha" className='login-link'>Esqueci minha senha</Link>
                </div>
            </Formulario>
        </div>
    )
}

export default Login

import { useState } from 'react'
import Botao from '../Botao'
import CampoInput from '../CampoInput'
import Formulario from '../Formulario'
import './CadastroUsuario.css'
import { Form } from 'react-router-dom'

const CadastroUsuario = ({emailsCadastrados}) => {

    const [nomeUsuario, setNomeUsuario] = useState('')
    const [tipoUsuario, setTipoUsuario] = useState('')
    const [nascimentoUsuario, setNascimentoUsuario] = useState('')
    const [emailUsuario, setEmailUsuario] = useState('')
    const [senhaUsuario, setSenhaUsuario] = useState('')
    
    const verificaIdade = function (evento, verificaSeValido){
        const campoData = evento.target
        const dataNascimento = new Date(campoData.value);
        const dataAtual = new Date();
        const dataMais18 = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDay())
        
        if(dataAtual >= dataMais18){
            campoData.setCustomValidity('')
        }
        else {
            campoData.setCustomValidity("É nescessário ter 18 anos ou mais.")
        }
        verificaSeValido(evento, "Não é maior de idade")
    }

    function verificaEmail(evento, verificaSeValido) {
        const campo = evento.target
        const jaCadastrado = emailsCadastrados.find(emailCadastrado => emailCadastrado === emailUsuario? true : false)
        if (jaCadastrado) 
            {campo.setCustomValidity("Este e-mail já está cadastrado em nossa base de dados.")}
        else {campo.setCustomValidity('')}
        verificaSeValido(evento, "E-mail já utilizado.")
    }
    
    function verificaSenha(evento, verificaSeValido){
        const campo = evento.target
        const senha = campo.value
        const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$&*])[0-9a-zA-Z!@#$&*]{8,}$/
        let valido = regex.test(senha)
        if(valido){
            campo.setCustomValidity('')
        } else {
            campo.setCustomValidity('A senha precisa ter no mínimo 8 caracteres: 1 letra minúscula, 1 letra maiúscula, 1 número e 1 caractere especial')
        }
        verificaSeValido(evento, "A senha não atende os requisitos.")
    }
    
    const confirmaSenha = function (evento, verificaSeValido) {
        const senhaSecundaria = evento.target
        const senhaPrimaria = document.querySelector('#senha')
        if(senhaSecundaria.value === senhaPrimaria.value) {
            senhaSecundaria.setCustomValidity('')
        } else {
            senhaSecundaria.setCustomValidity("As senhas são diferentes")
        }
        verificaSeValido(evento, "As senhas diferem")
    }

    return (
        <div className='formulario-container container'>
            <Formulario titulo="Cadastro de usuário">
                <Form method='post'>
                <CampoInput 
                    type="radio"
                    name="tipo" 
                    opcoesLista={["Cliente", "Lojista"]}
                    aoAlterado={evento => {setTipoUsuario(evento.target.value)}}
                    valor={tipoUsuario}
                    required
                >Tipo de usuário:</CampoInput>
                <CampoInput 
                    minimo="4" 
                    name="nome"
                    aoAlterado={evento => {setNomeUsuario(evento.target.value)}}
                    valor={nomeUsuario}
                    required
                >Nome completo</CampoInput>
                <CampoInput 
                    type="date" 
                    name="dataNascimento"
                    validacaoCustomizada={verificaIdade} 
                    aoAlterado={evento => {setNascimentoUsuario(evento.target.value)}}
                    valor={nascimentoUsuario}
                    required
                >Data de nascimento</CampoInput>
                <CampoInput 
                    type="email"
                    name="email"
                    aoAlterado={evento => {setEmailUsuario(evento.target.value)}}
                    valor={emailUsuario}
                    validacaoCustomizada={verificaEmail}
                    required
                >E-mail</CampoInput>
                <CampoInput 
                    id="senha" 
                    name="senha"
                    minimo={6} 
                    aoAlterado={evento => { setSenhaUsuario(evento.target.value) }}
                    validacaoCustomizada={verificaSenha}
                    valor={senhaUsuario}
                    required
                >Senha</CampoInput>
                <CampoInput 
                    id="confirmaSenha" 
                    name=""
                    validacaoCustomizada={confirmaSenha} 
                    required
                >Confirme sua senha</CampoInput>
                <Botao type="submit">Cadastrar usuário</Botao>
                </Form>
            </Formulario>
        </div>
    )
}

export default CadastroUsuario
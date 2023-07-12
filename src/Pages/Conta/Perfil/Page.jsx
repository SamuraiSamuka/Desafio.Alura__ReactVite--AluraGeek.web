import CampoTexto from '../../../Components/CampoTexto'
import NovoBotao from '../../../Components/NovoBotao'
import './Perfil.css'

export default function Perfil() {
  return (
    <div className="perfil">
      <div className="perfil__info">
      <h2 className="perfil__titulo">Informações pessoais</h2>
        <div className="perfil__campos">
          <div className="perfil__linha">
            <CampoTexto
              value="Samuel"
              >Nome</CampoTexto>
            <CampoTexto
              value="Silva de Carvalho"
              >Sobrenome</CampoTexto>
          <CampoTexto
            value="samuel.carvalho.dev@gmail.com"
            >E-mail</CampoTexto>
          </div>
          <div className="perfil__linha">
            <CampoTexto
              value="15/05/1997"
              >Data de nascimento</CampoTexto>
            <CampoTexto
              value="blabla blabla bla blablabla bla blabla"
              >Bio</CampoTexto>
          </div>
        </div>
      </div>
      <div className="perfil-dangerzone">
        <h3 className='perfil-dangerzone__titulo'>Zona de perigo<span className="perfil__logout-botao material-symbols-outlined">warning</span></h3>
        <div className="perfil__comandos">
          <NovoBotao funcao="link" corBorda="#fb0" to="/conta/perfil/editar">Alterar Dados</NovoBotao>
          <NovoBotao funcao="link" corBorda="#fb0" to="/conta/perfil/alterarsenha">Alterar Senha</NovoBotao>
          <NovoBotao funcao="link" corBorda="#ff3030" to="/conta/perfil/excluir">Excluir conta</NovoBotao>
        </div>
      </div>
    </div>
  )
}

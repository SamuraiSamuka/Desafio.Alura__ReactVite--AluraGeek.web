import { NavLink, Outlet } from 'react-router-dom'
import './Conta.css'
import { useContext } from 'react'
import { UsuarioContext } from '../../common/Usuario'
import imagePerfil from '/images/perfil.jpeg'
import imagePerson from '/images/person.png'
import NavBotao from '../../Components/NavBotao'

export default function PaginaConta() {
  const { usuario, deslogar } = useContext(UsuarioContext)
  
  return (
    <main className="principal">
        <div className="conta__container container">
          <div className="conta">
            <div className="conta__side-bar">
              <div className="conta__person">
                <img src={imagePerfil || imagePerson} alt="" className="conta__imagem" />
                <h3 className='conta__titulo'>Bem vindo(a), {usuario.nome}</h3>
              </div>
              <nav className="conta__opcoes">
                <NavBotao 
                  to="/conta/perfil" 
                  className="conta__opcao" 
                  corAtivoPrimaria="#59e"
                  corAtivoSecundaria="#fff"
                >Perfil</NavBotao>
                {/* <NavBotao 
                  to="/conta/pedidos" 
                  className="conta__opcao"
                  corAtivoPrimaria="#59e"
                  corAtivoSecundaria="#fff"
                >Pedidos</NavBotao> */}
                  
                <button className="perfil__logout"  onClick={deslogar}>
                  <span className="perfil__logout-botao material-symbols-outlined">logout</span>
                  <p className="perfil__logout-texto">Sair</p>
                </button>
              </nav>
            </div>
            <div className="conta__content-box">
              <div className="conta__content">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}

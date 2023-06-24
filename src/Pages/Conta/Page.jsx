import { NavLink } from 'react-router-dom'
import './Conta.css'
import { useContext } from 'react'
import { UsuarioContext } from '../../common/Usuario'
import imagePerfil from '/images/perfil.jpeg'

export default function PaginaConta() {
  const { usuario, deslogar } = useContext(UsuarioContext)
  
  return (
    <main className="principal">
        <div className="conta__container container">
          <div className="conta__side-bar">
            <img src={imagePerfil} alt="" className="conta__imagem" />
            <nav className="conta__opcoes">
              <NavLink className="conta__opcao">Perfil</NavLink>
              <NavLink className="conta__opcao">Pedidos</NavLink>
              <button className="perfil__logout"  onClick={deslogar}>
                <span className="perfil__logout-botao material-symbols-outlined">logout</span>
                <p className="perfil__logout-texto">Sair</p>
              </button>
            </nav>
          </div>
          <div className="conta__content"></div>
        </div>
    </main>
  )
}

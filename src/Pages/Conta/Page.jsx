import { NavLink } from 'react-router-dom'
import './Conta.css'
import { useContext } from 'react'
import { UsuarioContext } from '../../common/Usuario'

export default function PaginaConta() {
  const { usuario, deslogar } = useContext(UsuarioContext)
  
  return (
    <main className="principal">
        <div className="conta__container container">
          <div className="conta__side-bar">
            <img src={usuario.imagem_src} alt="" className="conta__imagem" />
            <nav className="conta__opcoes">
              <NavLink>Perfil</NavLink>
              <NavLink>Pedidos</NavLink>
              <NavLink>Logout</NavLink>
            </nav>
          </div>
          <div className="conta__content"></div>
            <span className="perfil__logout material-symbols-outlined" onClick={deslogar} >logout</span>
        </div>
    </main>
  )
}

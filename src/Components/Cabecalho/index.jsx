import { useContext } from 'react'
import Botao from '../Botao'
import CaixaDeBusca from '../CaixaBusca'
import Logo from '../Logo'
import './Cabecalho.css'
import { UsuarioContext } from '../../common/Usuario'
import { CarrinhoContext } from '../../common/Carrinho'
import { NavLink } from 'react-router-dom'

const Cabecalho = ({produtos}) => {
    const { usuario, deslogar } = useContext(UsuarioContext);
    const { quantidadeProdutos } = useContext(CarrinhoContext)
    return (
        <div className='cabecalho container'>
            <Logo />
            <div className='cab-busca'>
                <CaixaDeBusca produtos={produtos}/>
                <span id="lupa" className="cab-busca__icone   cab-busca__icone-lupa   material-symbols-outlined">search</span>
                <span id="close" className="cab-busca__icone   cab-busca__icone-close   material-symbols-outlined">close</span>
            </div>
            {usuario.nome? 
                <NavLink to="/conta">
                    <div className="cab-perfil">
                        <span className="cab-perfil__icone material-symbols-outlined">account_circle</span>
                        <span className='cab-perfil__nome'>{usuario.nome}</span>
                    </div> 
                </NavLink>
                : 
                <Botao type="submit" aparencia="transparente" link='/login'>Login</Botao>
            }
            <div className="cab-carrinho">
                <NavLink to="/carrinho">
                    <span className="cab-carrinho__icone material-symbols-outlined">shopping_cart</span>
                </NavLink>
                    <span className='cab-carrinho__contador'>{quantidadeProdutos > 0 ? quantidadeProdutos : ""}</span>
            </div>
        </div>
    )
}

export default Cabecalho
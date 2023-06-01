import { useContext } from 'react'
import Botao from '../Botao'
import CaixaDeBusca from '../CaixaBusca'
import Logo from '../Logo'
import './Cabecalho.css'
import { UsuarioContext } from '../../common/Usuario/Usuario'
import { CarrinhoContext } from '../../common/Carrinho'

const Cabecalho = ({produtos}) => {
    const { usuario, deslogar } = useContext(UsuarioContext);
    const { quantidadeProdutos } = useContext(CarrinhoContext)
    return (
        <div className='cabecalho container'>
            <Logo />
            <div className='caixa-busca-container'>
                <CaixaDeBusca produtos={produtos}/>
                <span id="lupa" className="icone__lupa-mobile material-symbols-outlined">search</span>
                <span id="close" className="icone__close-mobile material-symbols-outlined">close</span>
            </div>
            {usuario.nome? 
                "" : 
                <Botao type="submit" aparencia="transparente" link='/login'>Login</Botao>
            }
            <div className="cabecalho__right">
                {usuario.nome? 
                <div className="perfil">
                    <div className="perfil__usuario">
                        <span className="perfil__icone material-symbols-outlined">account_circle</span>
                        <span className='perfil__nome'>{usuario.nome}</span>
                    </div>
                    <span className="perfil__logout material-symbols-outlined" onClick={deslogar}>logout</span>
                </div>
                : ""}
                <div className="carrinho-container">
                    <span className="carrinho__icone material-symbols-outlined">shopping_cart</span>
                    <span className='carrinho__contador'>{quantidadeProdutos > 0 ? quantidadeProdutos : ""}</span>
                </div>
            </div>

            {/* 
            desktop
            // Logo // caixa de busca // login // carrinho

            mobile
            // logo // icone de lupa // login // carrinho
        */}
        </div>
    )
}

export default Cabecalho
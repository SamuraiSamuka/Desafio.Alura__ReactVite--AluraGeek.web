import Botao from '../Botao'
import CaixaDeBusca from '../CaixaBusca'
import Logo from '../Logo'
import './Cabecalho.css'

const Cabecalho = ({produtos}) => {
    return (
        <div className='cabecalho container'>
            <Logo />
            <div className='caixa-busca-container'>
                <CaixaDeBusca produtos={produtos}/>
            </div>
            <Botao type="submit" aparencia="transparente" link='/login'>Login</Botao>
            <span onClick={'mostrarCaixaBusca'} id="lupa" className="icone__lupa-mobile material-symbols-outlined">search</span>
            <span onClick={'esconderCaixaBusca'} id="close" className="icone__close-mobile material-symbols-outlined">close</span>

        </div>
    )
}

export default Cabecalho
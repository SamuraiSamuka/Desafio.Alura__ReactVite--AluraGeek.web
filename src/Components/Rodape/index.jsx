import Formulario from '../Formulario'
import Logo from '../Logo'
import CampoInput from '../CampoInput'
import Botao from '../Botao'
import './Rodape.css'
import {Form, Link} from 'react-router-dom'

const Rodape = () => {
    return (
        <footer>
            <div className="saiba-mais container">
                <div className="logo-container saiba-mais__grid">
                    <Logo/>
                </div>
                <div className="links-container saiba-mais__grid">
                    <nav className="saiba-mais__nav">
                        <Link to="null" className="saiba-mais__nav__link">Quem somos nós</Link>
                        <Link to="null" className="saiba-mais__nav__link">Política de privacidade</Link>
                        <Link to="null" className="saiba-mais__nav__link">Programa fidelidade</Link>
                        <Link to="null" className="saiba-mais__nav__link">Nossas lojas</Link>
                        <Link to="null" className="saiba-mais__nav__link">Quero ser franqueado</Link>
                        <Link to="null" className="saiba-mais__nav__link">Anuncia aqui</Link>
                    </nav>
                </div>
                <div className="contato-container saiba-mais__grid">
                    <Formulario titulo="Fale conosco">
                        <Form method='post'>
                            <CampoInput minimo={4}
                                maximo={40}
                                required>Nome</CampoInput>
                            <CampoInput type="textarea"
                                maximo={350}
                                required>Escreva sua mensagem</CampoInput>
                            <Botao type="submit">Enviar mensagem</Botao>
                        </Form>
                    </Formulario>
                </div>
            </div>
            <div className="sobre container">
                <p className="sobre__direito-autoral">Desenvolvido por Samuel</p>
                <p className="sobre__ano">2023</p>
            </div>
        </footer>
    )
}

export default Rodape

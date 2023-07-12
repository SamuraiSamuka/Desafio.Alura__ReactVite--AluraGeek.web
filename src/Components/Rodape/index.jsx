import Formulario from '../Formulario'
import Logo from '../Logo'
import CampoInput from '../CampoInput'
import Botao from '../Botao'
import './Rodape.css'
import {Form, Link} from 'react-router-dom'
import emailjs from "@emailjs/browser";

const Rodape = () => {

    
    async function enviaEmail({request}) {
        console.log(request)
        const dadosEmail = {email: "email", senha: "senha"}
        const response = await emailjs.send("gmail", "template_9i5aazq", dadosEmail, "G76TIJYKwoArxKzac")
    }

    return (
        <footer>
            <div className="saiba-mais container">
                <div className="logo-container saiba-mais__grid">
                    <Logo/>
                </div>
                <div className="links-container saiba-mais__grid">
                    <nav className="saiba-mais__nav">
                        <Link to="null" className="saiba-mais__nav__link">Quem sou eu</Link>
                        <Link to="null" className="saiba-mais__nav__link">Política de privacidade</Link>
                        <Link to="null" className="saiba-mais__nav__link">Anuncia aqui</Link>
                        <Link to="null" className="saiba-mais__nav__link">Erro 404</Link>
                    </nav>
                </div>
                <div className="contato-container saiba-mais__grid">
                    <Formulario titulo="Fale comigo">
                        <Form method='post' onSubmit={enviaEmail}>
                            <div className="contato__linha">
                                <CampoInput 
                                    minimo={4}
                                    maximo={40}
                                    required
                                    >Nome</CampoInput>
                                <CampoInput 
                                    minimo={4}
                                    maximo={40}
                                    type="email"
                                    required
                                    >Email</CampoInput>
                            </div>
                            <CampoInput 
                                type="textarea"
                                maximo={350}
                                required
                                >Escreva sua mensagem</CampoInput>
                            <Botao type="submit">Enviar mensagem</Botao>
                        </Form>
                    </Formulario>
                </div>
            </div>
            <div className="sobre container">
                <p className="sobre__direito-autoral">Desenvolvido por <Link to="https://www.linkedin.com/in/samuel-silva-de-carvalho/" className='link-chamativo'>Samuel</Link></p>
                <p className="sobre__ano">2023</p>
            </div>
        </footer>
    )
}

export default Rodape

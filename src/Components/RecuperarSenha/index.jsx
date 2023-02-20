import { Form } from 'react-router-dom'
import Botao from '../Botao'
import CampoInput from '../CampoInput'
import Formulario from '../Formulario'
import './RecuperarSenha.css'

const RecuperarSenha = function () {
    return (
        <div className='formulario-container container'>
            <Formulario titulo="Digite seu e-mail:">
                <Form method="post">
                    <CampoInput type="email" required>E-mail</CampoInput>
                    <Botao type="submit">Recuperar senha por e-mail</Botao>
                </Form>
            </Formulario>
        </div>
    )
}

export default RecuperarSenha
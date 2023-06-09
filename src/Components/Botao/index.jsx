import { Link } from 'react-router-dom'
import './Botao.css'
import { useState } from 'react'

const Botao = ({children, type, aparencia, link, onClick, disabled }) => {
    let [classToggle, setClassToggle] = useState("");
    disabled === "disabled" ? aparencia = "cinza" : aparencia

    function addToggleClass () {
        setClassToggle("botao-pressionado")
    }
    
    function removeToggleClass() {
        setClassToggle("")
    }
    return (
        aparencia === undefined ?
            <button 
                type={type || 'submit'} 
                href={link}
                className={`botao botao--azul ${classToggle}`}
                onClick={onClick}
                onMouseDown={addToggleClass}
                onMouseUp={removeToggleClass}
                disabled={disabled}
            >{children}</button>

        : aparencia === 'transparente'?
            <Link 
                type={type || 'button'} 
                to={link}
                className="botao botao--transparente" 
                onClick={onClick}
            >{children}</Link>

        : aparencia === 'cinza'?
            <button 
                type={type || 'button'} 
                href={link}
                className="botao botao--cinza" 
                onClick={onClick}
            >{children}</button>
            
        : ''
    )
}

export default Botao
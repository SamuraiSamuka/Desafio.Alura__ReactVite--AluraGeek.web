import { Link } from 'react-router-dom'
import './Botao.css'
import { useState } from 'react'

const Botao = ({children, type, aparencia, link, onClick, disabled, className }) => {
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
                className={`botao botao--azul ${classToggle} ${className}`}
                onClick={onClick}
                onMouseDown={addToggleClass}
                onMouseUp={removeToggleClass}
                disabled={disabled}
            >{children}</button>

        : aparencia === 'transparente'?
            <Link 
                type={type || 'button'} 
                to={link}
                className={`botao botao--transparente ${className}`} 
                onClick={onClick}
            >{children}</Link>

        : aparencia === 'cinza'?
            <button 
                type={type || 'button'} 
                href={link}
                className="botao botao--cinza" 
                onClick={onClick}
                disabled={disabled}
            >{children}</button>
            
        : ''
    )
}

export default Botao
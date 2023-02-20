import './Formulario.css'

const Formulario = ({titulo, children}) => {
    return (
        <div className="formulario">
            <h4 className="formulario__titulo">{titulo}</h4>
            {children}
        </div>
    )
}

export default Formulario
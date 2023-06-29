import './NovoBotao.css'

export default function NovoBotao({children, funcao, type, corBorda, corFundo, onClick, disabled, className}) {
    /* tipos de botões
    submit ou button
    * botao padrão, grande, chamativo - formulario, adicionar ao carrinho, links
    * botões de navegação -> filtro de produtos, menu, 
    * botões de ação -> excluir, editar
    
    */

   let corPrimaria = corBorda || "#fff"
   let corSecundaria = corFundo || (corPrimaria === "#fff" ? "#777" : "#fff")

  return (
    funcao === "comando"? 
        <button 
            type={type || 'button'} 
            className={`novo-botao ${className}`}
            style={{
                borderColor: corPrimaria,
                color: corPrimaria,
                backgroundColor: corSecundaria
            }}
            disabled={disabled}
        >{children}</button>
    :""
  )
}

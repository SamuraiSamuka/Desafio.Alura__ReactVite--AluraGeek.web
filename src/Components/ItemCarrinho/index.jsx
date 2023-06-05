import { useState } from 'react'
import './ItemCarrinho.css'

export default function ItemCarrinho({nome, preco, imagemSrc, quantidade}) {
  const [contador, setContador] = useState(quantidade)
  return (
    <div className="item-carrinho">
        <div className="item__info">
          <img src={imagemSrc} alt="" className="item__imagem" />
          <div className="item__texto">
            <h4>{nome}</h4>
            <h5>R$ {preco * quantidade}</h5>
          </div>
        </div>
        <div className="item__botoes">
            <button className='item__botao item__botao-add' onClick={()=> setContador(contador + 1)}>+</button>
            <span className='item__quantidade'>{contador}</span>
            <button className='item__botao item__botao-remove' onClick={()=> setContador(contador > 0? contador - 1 : contador)}>-</button>
        </div>
    </div>
  )
}

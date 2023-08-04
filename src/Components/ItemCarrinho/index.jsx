import { useContext, useState } from "react";
import "./ItemCarrinho.css";
import { Link } from "react-router-dom";
import { CarrinhoContext } from "../../common/Carrinho";

export default function ItemCarrinho({item}) {
  const [contador, setContador] = useState(item.quantidade);
  const {adicionarProduto, removerProduto, mudarQuantidade} = useContext(CarrinhoContext);

  function adicionarItem() {
    adicionarProduto(item);
    setContador(contador + 1);
  }

  function removerItem() {
    removerProduto(item.id);
    setContador(contador > 0? contador - 1 : contador);
  }
  return (
    <div className="item-carrinho">
      <div className="item__info">
        <Link to={`/produtos/${item.id}`}>
          <img src={item.imagem_src} alt="" className="item__imagem" />
        </Link>
        <div className="item__texto">
          <h4 className='item__titulo'>{item.nome}</h4>
          <h5 className='item__preco'>R$ {item.preco.toFixed(2)}/uni.</h5>
        </div>
      </div>
      <div className="item__botoes">
        <button className='item__botao item__botao-add' onClick={adicionarItem}>+</button>
        <span className='item__quantidade'>{contador}</span>
        <button className='item__botao item__botao-remove' onClick={removerItem}>-</button>
      </div>
    </div>
  );
}

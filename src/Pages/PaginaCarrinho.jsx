import React, { useContext } from 'react'
import ItemCarrinho from '../Components/ItemCarrinho'
import { getProdutos } from '../API/produtos'
import { useLoaderData } from 'react-router-dom'
import { CarrinhoContext } from '../common/Carrinho'
import Botao from '../Components/Botao'
import CampoInput from '../Components/CampoInput'

export async function loader(){
  let produtos = await getProdutos()
  return { produtos }
}

export default function PaginaCarrinho() {
  const { produtos } = useLoaderData();
  const { nome, imagem_src, preco } = produtos[0]
  const { carrinho } = useContext(CarrinhoContext)
  return (
    <main className="principal">
      <div className="carrinho-container container">
        <h2 className="carrinho__titulo">Carrinho</h2>
        <div className="carrinho">
          <div className="carrinho__itens">
            <ItemCarrinho nome={nome} preco={preco} imagemSrc={imagem_src} quantidade={1}/>
            <ItemCarrinho nome={nome} preco={preco} imagemSrc={imagem_src} quantidade={1}/>
            <ItemCarrinho nome={nome} preco={preco} imagemSrc={imagem_src} quantidade={1}/>
          </div>
          <div className="carrinho-resumo">
            <h3 className="carrinho-resumo__titulo">Resumo</h3>
            <h4 className='carrinho__total'>Total R$ 20,00</h4>
            <CampoInput type="select" opcoesLista={["Cartão de crédito", "Cartão de débito", "Pix", "Boleto"]}>Forma de pagamento</CampoInput>
            <Botao>Finalizar pedido</Botao>
          </div>
        </div>
      </div>
    </main>
  )
}

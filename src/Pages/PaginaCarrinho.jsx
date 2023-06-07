import React, { useContext } from 'react'
import ItemCarrinho from '../Components/ItemCarrinho'
import { getProdutos } from '../API/produtos'
import { NavLink, useLoaderData } from 'react-router-dom'
import { CarrinhoContext } from '../common/Carrinho'
import Botao from '../Components/Botao'
import CampoInput from '../Components/CampoInput'

export default function PaginaCarrinho() {
  const { carrinho } = useContext(CarrinhoContext)
  return (
    <main className="principal">
      <div className="carrinho-container container">
        <div className="carrinho-cabecalho">
          <NavLink to={-1}><span className='carrinho__seta-back material-symbols-outlined'>arrow_back</span></NavLink>
          <h2 className="carrinho__titulo">Carrinho</h2>
        </div>
        <div className="carrinho">
          <div className="carrinho__itens">
            {
              carrinho.length === 0 ?
              <p className='carrinho__mensagem-vazio'>O carrinho está vazio</p>
              :
              carrinho.map((item)=> {
                return (
                  <ItemCarrinho nome={item.nome} preco={item.preco} imagemSrc={item.imagem_src} quantidade={item.quantidade}/>
                )
              })
            }
          </div>
          <hr className='carrinho__divisoria'/>
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

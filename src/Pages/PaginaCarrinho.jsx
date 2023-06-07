import React, { useContext, useState } from 'react'
import ItemCarrinho from '../Components/ItemCarrinho'
import { getProdutos } from '../API/produtos'
import { NavLink, useLoaderData } from 'react-router-dom'
import { CarrinhoContext } from '../common/Carrinho'
import Botao from '../Components/Botao'
import CampoInput from '../Components/CampoInput'

export default function PaginaCarrinho() {
  const { carrinho } = useContext(CarrinhoContext)
  const [formaPagamento, setFormaPagamento] = useState("")
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
                  <ItemCarrinho key={item.id} id={item.id} nome={item.nome} preco={item.preco} imagemSrc={item.imagem_src} quantidade={item.quantidade}/>
                )
              })
            }
          </div>
          <hr className='carrinho__divisoria'/>
          <div className="carrinho-resumo">
            <h3 className="carrinho-resumo__titulo">Resumo</h3>
            <CampoInput type="select" opcoesLista={["Cartão de crédito", "Cartão de débito", "Pix", "Boleto"]} valor={formaPagamento} aoAlterado={(e) => {setFormaPagamento(e.target.value)}}>Forma de pagamento</CampoInput>
            {
              formaPagamento === 'Cartão de crédito'?
              <CampoInput type="select" opcoesLista={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}>Parcelas</CampoInput>
              : <p className='carrinho__forma-pagamento-parcela'>Pagamento à vista</p>
            }
            <h4 className='carrinho__total'>Total R$ 20,00</h4>
            <Botao>Finalizar pedido</Botao>
          </div>
        </div>
      </div>
    </main>
  )
}

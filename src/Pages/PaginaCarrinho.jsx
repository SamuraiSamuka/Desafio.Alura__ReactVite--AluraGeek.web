import React, { useContext, useState } from 'react'
import ItemCarrinho from '../Components/ItemCarrinho'
import { Form, NavLink, redirect} from 'react-router-dom'
import { CarrinhoContext } from '../common/Carrinho'
import Botao from '../Components/Botao'
import CampoInput from '../Components/CampoInput'

export async function action() {
  return redirect('/carrinho/pedidorealizado')
}

export default function PaginaCarrinho() {
  const { carrinho, totalCarrinho } = useContext(CarrinhoContext)
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
              <div className="carrinho-vazio">
                <span className='carrinho-vazio__icone material-symbols-outlined'>shopping_cart</span>
                <p className='carrinho-vazio__mensagem'>O carrinho está vazio</p>
              </div>
              :
              carrinho.map((item)=> {
                return (
                  <ItemCarrinho key={item.id} item={item}/>
                )
              })
            }
          </div>
          <hr className='carrinho__divisoria'/>
          <div className="carrinho-resumo">
            <Form method='post' className='carrinho-resumo__form'>
            <h3 className="carrinho-resumo__titulo">Resumo</h3>
              <CampoInput 
                type="select" 
                opcoesLista={["Cartão de crédito", "Cartão de débito", "Pix", "Boleto"]} 
                valor={formaPagamento} 
                required
                aoAlterado={(e) => {setFormaPagamento(e.target.value)}}
              >Forma de pagamento</CampoInput>
              {
                formaPagamento === 'Cartão de crédito'?
                  <CampoInput 
                    type="select"
                    required
                    opcoesLista={["1x sem juros", "2x sem juros", "3x sem juros", "4x sem juros", "5x sem juros", "6x sem juros", "7x sem juros", "8x sem juros", "9x sem juros", "10x sem juros", "11x sem juros", "12x sem juros"]}
                  >Parcelas</CampoInput>
                : formaPagamento === "" ? 
                    <p className='carrinho__forma-pagamento-parcela'>Escolha a forma de pagamento</p> 
                  : <p className='carrinho__forma-pagamento-parcela'>Pagamento à vista</p>
              }
              <h4 className='carrinho__total'>Total R$ {totalCarrinho.toFixed(2)}</h4>
              <Botao
                type="submit"
                disabled={carrinho.length === 0? "disabled":""}
              >Finalizar pedido</Botao>
            </Form>
          </div>
        </div>
      </div>
    </main>
  )
}

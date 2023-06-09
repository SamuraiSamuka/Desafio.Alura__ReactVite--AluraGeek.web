import './PedidoRealizado.css'
import ImagemPedido from './PedidoFeito.gif'
import { useEffect, useState } from 'react'
import { 
  useSubmit } from 'react-router-dom'

export default function PedidoRealizado() {
  const [contador, setContador] = useState(5)

    useEffect(() => {
        const interval = setInterval(() => {
            setContador(previous => previous > 0 ? --previous
                :previous === 0? useSubmit(): previous
                )
        }, 1000)
        return () => clearInterval(interval)
    }, [])

  return (
    <main className="principal">
        <div className="pedido-realizado container">
            <img 
                src={ImagemPedido}
                className='pedido-realizado__imagem'
            />
            <h2 className='pedido-realizado__mensagem'>Pedido Realizado com sucesso!</h2>
            <h4 className='pedido-realizado__redirecionamento'>Você será redirecionado em {contador} segundos</h4>
            <a className='pedido-realizado__attribution' href="https://storyset.com/business">Business illustrations by Storyset</a>
        </div>
    </main>
  )
}

import './PedidoRealizado.css'
import { useNavigate } from "react-router-dom"
import ImagemPedido from './PedidoFeito.gif'
import { useEffect, useState } from 'react'

export default function PaginaPedidoRealizado() {
  const [contador, setContador] = useState(5)
  const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setContador(prevCount => prevCount > 0 ? --prevCount : prevCount )
        }, 1000)

        if(contador === 0){
          navigate('/')
        }

        return () => clearInterval(interval)
    }, [contador])

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
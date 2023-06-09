import './reset.css'
import './App.css'
import React from 'react'
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, {loader as rootLoader} from './Pages/Root.jsx'
import PaginaProduto, {loader as produtoLoader} from './Pages/PaginaProduto.jsx'
import PaginaInicial, {loader as inicioLoader} from './Pages/PaginaInicial'
import PaginaCadastroProduto, {loader as cadastroProdutoLoader, action as cadastroProdutoAction} from './Pages/PaginaCadastroProduto'
import PaginaCadastroUsuario, {action as cadastroUsuarioAction} from './Pages/PaginaCadastroUsuario'
import PaginaLogin from './Pages/PaginaLogin'
import PaginaErro404 from './Pages/PaginaErro404'
import Erro404 from './Components/Erro404'
import PaginaRecuperarSenha, {action as recuperarSenhaAction} from './Pages/PaginaRecuperarSenha'
import PaginaTodosProdutos, {loader as todosProdutosLoader} from './Pages/PaginaTodosProdutos'
import { action as destroyAction } from "./Pages/destroy.jsx"
import { UsuarioProvider } from './common/Usuario'
import { CarrinhoProvider } from './common/Carrinho'
import PaginaPerfil from './Pages/PaginaPerfil'
import PaginaCarrinho, {action as PaginaCarrinhoAction} from './Pages/PaginaCarrinho'
import PaginaPedidoRealizado, {action as PaginaPedidoRealizadoAction} from './Pages/PaginaPedidoRealizado'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PaginaErro404 />,
    loader: rootLoader,
    children: [
      {
        path: "/",
        element: <PaginaInicial />,
        loader: inicioLoader
      },
      {
        path: "/produtos/:produtoId",
        element: <PaginaProduto />,
        errorElement: <Erro404 />,
        loader: produtoLoader
      },{
        path: "/produtos/:produtoId/destroy",
        action: destroyAction
      },
      {
        path: "/todosProdutos/:categoria",
        element: <PaginaTodosProdutos />,
        loader: todosProdutosLoader
      },
      {
        path: "/cadastroProduto",
        element: <PaginaCadastroProduto />,
        loader: cadastroProdutoLoader,
        action: cadastroProdutoAction
      },
      {
        path: "/cadastroUsuario",
        element: <PaginaCadastroUsuario />,
        action: cadastroUsuarioAction,
      },
      {
        path: "/login",
        element: <PaginaLogin />,
        // action: loginAction
      },
      {
        path: "/recuperarsenha",
        element: <PaginaRecuperarSenha />,
        action: recuperarSenhaAction
      },
      {
        path: "/perfil",
        element: <PaginaPerfil />,
        children: [
          {
            path: "/perfil/alterarsenha"
          }
        ]
      },
      {
        path: '/carrinho',
        element: <PaginaCarrinho />,
        action: PaginaCarrinhoAction
      },
      {
        path: '/carrinho/pedidorealizado',
        element: <PaginaPedidoRealizado />,
        action: PaginaPedidoRealizadoAction
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarrinhoProvider>
      <UsuarioProvider>
        <RouterProvider router={router} />
      </UsuarioProvider>
    </CarrinhoProvider>
  </React.StrictMode>
)
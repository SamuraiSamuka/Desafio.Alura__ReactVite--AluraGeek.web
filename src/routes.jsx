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
import PaginaLogin from './Pages/Login/Page'
import PaginaErro404 from './Pages/PaginaErro404'
import Erro404 from './Components/Erro404'
import PaginaRecuperarSenha, {action as recuperarSenhaAction} from './Pages/PaginaRecuperarSenha'
import PaginaTodosProdutos, {loader as todosProdutosLoader} from './Pages/PaginaTodosProdutos'
import { action as destroyAction } from "./Pages/destroy.jsx"
import { UsuarioProvider } from './common/Usuario'
import { CarrinhoProvider } from './common/Carrinho'
import PaginaCarrinho, {action as PaginaCarrinhoAction} from './Pages/Carrinho/Page'
import PedidoRealizado from './Pages/PedidoRealizado/Page'
import PaginaConta from './Pages/Conta/Page'
import { HistoricoProvider } from './common/Historico'
import Perfil from './Pages/Conta/Perfil/Page'
import Post from './Components/Post'
import posts from './API/db.json'

const router = createBrowserRouter([
  {
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
        path: "/conta",
        element: <PaginaConta />,
        children: [
          {
            path: "/conta/alterarsenha"
          },
          {
            path: "/conta/perfil",
            element: <Perfil />,
          },
          {
            path: "/conta/perfil/editar",
            element: <p>Editar dados</p>
          },
          {
            path: "/conta/perfil/alterarsenha",
            element: <p>Alterar senha</p>
          },
          {
            path: "/conta/perfil/excluir",
            element: <p>Excluir conta</p>
          },
          {
            path: "/conta/pedidos",

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
        element: <PedidoRealizado />
      },
      {
        path: '/sobreodesenvolvedor',
        element: <Post texto={posts.posts.at(0).conteudo}/>
      },
      {
        path: '/politicaprivacidade',
        element: <Post texto={posts.posts.at(1).conteudo}/>
      },
      {
        path: '/anuncie',
        element: <Post texto={posts.posts.at(2).conteudo}/>
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HistoricoProvider>
      <CarrinhoProvider>
        <UsuarioProvider>
          <RouterProvider router={router} />
        </UsuarioProvider>
      </CarrinhoProvider>
    </HistoricoProvider>
  </React.StrictMode>
)
import './reset.css'
import './app.css'
import React from 'react'
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, {loader as rootLoader} from './Pages/Root.jsx'
import PaginaProduto, {loader as produtoLoader} from './Pages/PaginaProduto.jsx'
import PaginaInicial, {loader as inicioLoader} from './Pages/PaginaInicial'
import PaginaCadastroProduto, {loader as cadastroProdutoLoader, action as cadastroProdutoAction} from './Pages/PaginaCadastroProduto'
import PaginaCadastroUsuario, {loader as cadastroUsuarioLoader, action as cadastroUsuarioAction} from './Pages/PaginaCadastroUsuario'
import PaginaLogin from './Pages/PaginaLogin'
import PaginaErro404 from './Pages/PaginaErro404'
import Erro404 from './Components/Erro404'
import PaginaRecuperarSenha from './Pages/PaginaRecuperarSenha'
import PaginaTodosProdutos, {loader as todosProdutosLoader} from './Pages/PaginaTodosProdutos'

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
        loader: cadastroUsuarioLoader,
        action: cadastroUsuarioAction,
      },
      {
        path: "/login",
        element: <PaginaLogin />
        
      },
      {
        path: "/recuperarsenha",
        element: <PaginaRecuperarSenha />
      },
      {
        path: "/teste",
        element: <h1>Hello there!</h1>
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
import React from 'react'
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './reset.css'
import './app.css'
import Root, {loader as rootLoader} from './Pages/Root.jsx'
import PaginaProduto, {loader as produtoLoader} from './Pages/PaginaProduto.jsx'
import PaginaInicial, {loader as inicioLoader} from './Pages/PaginaInicial'
import PaginaCadastroProduto from './Pages/PaginaCadastroProduto'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "/",
        element: <PaginaInicial />,
        loader: inicioLoader
      },
      {
        path: "produtos/:produtoId",
        element: <PaginaProduto />,
        loader: produtoLoader
      },
      {
        path: "cadastroProduto",
        element: <PaginaCadastroProduto />
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
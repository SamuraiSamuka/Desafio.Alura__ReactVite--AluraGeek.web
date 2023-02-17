import React from 'react'
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root, {loader as rootLoader} from './Pages/Root'
import PaginaProduto, {loader as produtoLoader} from './Pages/Root/PaginaProduto'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "produtos/:produtoId",
        element: <PaginaProduto />,
        loader: produtoLoader
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
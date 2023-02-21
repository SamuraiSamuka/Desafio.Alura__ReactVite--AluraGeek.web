import { useLoaderData } from "react-router-dom";
import TodosProdutos from "../Components/TodosProdutos";
import { getProdutos } from "../produtos";

export async function loader({params}) {
  const produtos = await getProdutos();
  const categorias = [...new Set(produtos.map(produto => produto.categoria))]
  let produtosSelecionados;
  if (!(params.categoria === "todos")){
    produtosSelecionados = produtos.filter(produto => produto.categoria === params.categoria)
  } else {produtosSelecionados = produtos}
  return {produtosSelecionados, categorias}
}

export default function PaginaTodosProdutos() {
    const {produtosSelecionados, categorias} = useLoaderData();

  return (
    <main className="principal">
        <TodosProdutos titulo="Todos Produtos" categorias={categorias} produtos={produtosSelecionados}/>
    </main>
  )
}

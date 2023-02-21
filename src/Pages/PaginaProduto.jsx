import { useLoaderData } from "react-router-dom"
import ProdutoDetalhado from "../Components/Produto Detalhado";
import SecaoProduto from "../Components/SecaoProduto";
import { getProduto, getProdutos } from "../produtos";

export async function loader({params}) {
  const produto = await getProduto(params.produtoId)
  const produtos = await getProdutos();
  return {produto, produtos};
}

export default function PaginaProduto() {
  let { produto, produtos } = useLoaderData();
  return (
    <>
    <main className="principal">
    <ProdutoDetalhado 
        nome={produto.nome}
        preco={produto.preco}
        descricao={produto.descricao}
        imagem_src={produto.imagem_src}
        id={produto.id}
      />
    <SecaoProduto produtos={produtos} categoria="star_wars">Produtos semelhantes</SecaoProduto>
    </main>
    </>
  )
}

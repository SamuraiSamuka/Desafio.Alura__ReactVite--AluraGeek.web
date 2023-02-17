import { useLoaderData } from "react-router-dom"
import ProdutoDetalhado from "../../Components/Produto Detalhado";
import { getProduto } from "../../produtos";

export async function loader({params}) {
  const produto = await getProduto(params.produtoId)
  console.log(produto)
  return {produto};
}

export default function PaginaProduto() {
  let { produto } = useLoaderData();
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
    </main>
    </>
  )
}

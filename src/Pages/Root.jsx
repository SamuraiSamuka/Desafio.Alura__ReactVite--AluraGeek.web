import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getProdutos } from "../produtos";
import dados from '../db.json'
import { v4 as uuidv4 } from 'uuid';
import localforage from "localforage";
import Cabecalho from "../Components/Cabecalho";
import Rodape from "../Components/Rodape";

const produtosIniciais = dados.produtos.map(produto => {
  let produtoConvertido = {
    id: uuidv4(),
    nome: produto.nome,
    imagem_src: produto.imagem_src,
    categoria: produto.categoria,
    descricao: produto.descricao,
    preco: parseFloat(produto.preco),
    data_criacao: new Date()
  }
  return produtoConvertido
})

export async function loader() {
    let produtos = await getProdutos();
    if(produtos.length < 1) {
      await localforage.setItem("produtos", produtosIniciais)
      produtos = await localforage.getItem("produtos")
    }
    return { produtos }
}

export default function Root() {
    let { produtos } = useLoaderData();
  return (
    <div>
        <Cabecalho produtos={produtos} />
        <Outlet />
        {produtos.map(produto => <li key={produto.id}><Link to={`produtos/${produto.id}`}>{produto.nome}</Link> - {produto.preco}</li>)}
        <Rodape />
    </div>
  )
}

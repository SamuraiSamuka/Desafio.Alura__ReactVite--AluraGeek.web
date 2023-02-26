import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { getProdutos } from "../API/produtos";
import dados from '../API/db.json'
import { v4 as uuidv4 } from 'uuid';
import localforage from "localforage";
import Cabecalho from "../Components/Cabecalho";
import Rodape from "../Components/Rodape";
import { getUsuarios } from "../API/usuarios";

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

const usuariosIniciais = dados.usuarios.map(usuario => {
  let usuarioParsed = {
    id: uuidv4(),
    nome: usuario.nome,
    tipo: usuario.tipo,
    dataNascimento: Date(usuario.dataNascimento),
    email: usuario.email,
    senha: usuario.senha,
    bio: usuario.bio,
    data_criacao: new Date()
  }
  return usuarioParsed
})

export async function loader() {
    let produtos = await getProdutos();
    if(produtos.length < 1) {
      await localforage.setItem("produtos", produtosIniciais)
      produtos = await localforage.getItem("produtos")
    }

    let usuarios = await getUsuarios();
    if(usuarios.length < 1) {
      await localforage.setItem("usuarios", usuariosIniciais)
      usuarios = await localforage.getItem("usuarios")
    }
    
    return { produtos, usuarios}
}

export default function Root() {
    let { produtos } = useLoaderData();
    // retorna o estado atual da navegação que pode ser: "idle"(parado), "submitting" ou "loading"
    const navigation = useNavigation();
    if(navigation.state === "loading") {
      window.scroll({top: 0, behavior: "smooth"})
    }
  return (
    <div>
        <Cabecalho produtos={produtos} />
        <div
          className={navigation.state === "loading"? "loading": ""}
        >
          <Outlet />
        </div>
        <Rodape />
    </div>
  )
}

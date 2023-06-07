import localforage from "localforage";
import { matchSorter } from "match-sorter";
import { v4 as uuidv4 } from 'uuid';
import { limpaPatternPreco } from "../Components/CadastroProduto";

export async function createProduto({categoria, descricao, imagem_src, nome, preco}) {
    let produto = { 
        id: uuidv4(), 
        nome: nome,
        imagem_src: imagem_src,
        categoria: categoria,
        descricao: descricao,
        preco: Number(limpaPatternPreco(preco))/100,
        data_criacao: new Date()
    }
    let produtos = await localforage.getItem("produtos");
    produtos.unshift(produto);
    await salvar(produtos)
    return produto;
}

export async function getProduto(id) {
    await fakeNetwork();
    let produtos = await localforage.getItem("produtos");
    let produto = produtos.find(produto => produto.id === id);
    return produto ?? null
}

export async function getProdutos(query){
    await fakeNetwork();
    let produtos = await localforage.getItem("produtos");
    if (!produtos) produtos = [];
    if (query) {
        produtos = matchSorter(produtos, query, { keys: ["nome", "categoria", "descricao"]})
    }
    return produtos
}

export async function updateProduto(id, updates) {
    await fakeNetwork();
    let produtos = await localforage.getItem("produtos");
    let produto = produtos.find(produto => produto.id === id);
    if (!produto) throw new Error("Nenhum produto encontrado com o id ", id);
    Object.assign(produto, updates);
    await salvar(produtos);
}

export async function deleteProduto(id) {
    let produtos = await localforage.getItem("produtos");
    let indice = produtos.findIndex(produto => produto.id === id);
    console.log(indice)
    if (indice > -1){
        produtos.splice(indice, 1);
        await salvar(produtos);
        return true;
    }
    return false;
}

function salvar(produtos) {
    return localforage.setItem("produtos", produtos)
}

async function fakeNetwork() {
    return new Promise(res => {
      setTimeout(res, Math.random() * 800);
    });
  }
import { createContext, useEffect, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho';

export function CarrinhoProvider ({children}) {
    const [carrinho, setCarrinho] = useState([]);
    const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);

    function mudarQuantidade(id, op){
        return carrinho.map(itemDoCarrinho => {
            if(itemDoCarrinho.id === id) {
                if(op === '+') itemDoCarrinho.quantidade += 1
                else if (op === '-') itemDoCarrinho.quantidade -= 1
            }
            return itemDoCarrinho
        })
    }

    function adicionarProduto(novoProduto) {
        const temOProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === novoProduto.id)
        if(!temOProduto){
            novoProduto.quantidade = 1;
            return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto])
        }
        setCarrinho(mudarQuantidade(novoProduto.id, '+'))
    }

    function removerProduto(id) {
        const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id)
        const ehOUltimo = produto.quantidade === 1;
        if(!ehOUltimo) {
            setCarrinho(mudarQuantidade(id, '-'))
        } else {
            setCarrinho(carrinho.filter(itemDoCarrinho => itemDoCarrinho.id !== id))
        }
    }

    useEffect(() => {
        const {novaQuantidade} = carrinho.reduce((contador, itemNoCarrinho) => ({
            novaQuantidade: contador.novaQuantidade + itemNoCarrinho.quantidade
        }), {novaQuantidade:0})
        setQuantidadeProdutos(novaQuantidade)
    },[carrinho, setQuantidadeProdutos])

    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho, adicionarProduto, removerProduto, quantidadeProdutos}}>
            {children}
        </CarrinhoContext.Provider>
    )
}
import CadastroProduto from "../Components/CadastroProduto";
import SecaoProduto from "../Components/SecaoProduto";

export default function PaginaCadastroProduto({salvaProduto, categorias, produtos}) {
  return (
    <>
    <main className='principal'>
        <CadastroProduto aoProdutoCadastrado={salvaProduto} categorias={categorias}/>
        <SecaoProduto produtos={produtos.sort((a, b)=>{
        if(a.data_criacao > b.data_criacao){
          return -1
        }
        if(a.data_criacao < b.data_criacao){
          return 1
        }
        return 0
        })}>Adicionados recentemente</SecaoProduto>
      </main>
      </>
  )
}

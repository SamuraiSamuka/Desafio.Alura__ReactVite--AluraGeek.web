import { useLoaderData, redirect } from "react-router-dom";
import CadastroProduto from "../Components/CadastroProduto";
import SecaoProduto from "../Components/SecaoProduto";
import { getProdutos } from "../API/produtos";
import { createProduto } from "../API/produtos";

export async function loader() {
  const produtos = await getProdutos();
  const categorias = [...new Set(produtos.map(produto => produto.categoria))];
  return {produtos, categorias};
}

export async function action({request}) {
  const formData = await request.formData();
  console.log("formData -> ", formData);
  const dados = Object.fromEntries(formData);
  console.log( dados );
  await createProduto(dados);
  return redirect("/");
}


export default function PaginaCadastroProduto() {
  const { produtos, categorias } = useLoaderData();

  return (
    <>
      <main className='principal'>
        <CadastroProduto categorias={categorias} />
        <SecaoProduto 
          produtos={produtos.sort((a, b)=>{
            if(a.data_criacao > b.data_criacao){
              return -1;
            }
            if(a.data_criacao < b.data_criacao){
              return 1;
            }
            return 0;
          })}
          admin={true}
        >Adicionados recentemente</SecaoProduto>
      </main>
    </>
  );
}

import Banner from "../Components/Banner"
import SecaoProduto from "../Components/SecaoProduto"
import { redirect, useLoaderData } from "react-router-dom";
import { getProdutos } from "../API/produtos";

export async function loader() {
    let produtos = await getProdutos();
    return { produtos };
}

export default function PaginaInicial() {
    const { produtos } = useLoaderData()
    return (
      <>
      <Banner />
      <main className='principal'>
        {
          [
            {categoria: "star_wars", titulo: "Star Wars"}, 
            {categoria: "consoles", titulo: "Consoles"}, 
            {categoria: "roupas", titulo: "Roupas"}
          ].map(item => {
            return (
              <SecaoProduto
                produtos={produtos}
                categoria={item.categoria}
              >{item.titulo}</SecaoProduto>      
            )
          })
        }
      </main>
      </>
    )
}

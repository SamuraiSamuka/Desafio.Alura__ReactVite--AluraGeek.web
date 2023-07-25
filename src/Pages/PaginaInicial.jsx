import Banner from "../Components/Banner"
import SecaoProduto from "../Components/SecaoProduto"
import { useLoaderData } from "react-router-dom";
import { getProdutos } from "../API/produtos";

// apagar depois
export async function loader() {
    let produtos = await getProdutos();
    return { produtos };
}

export default function PaginaInicial() {
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
                categoria={item.categoria}
                key={item.categoria}
              >{item.titulo}</SecaoProduto>      
            )
          })
        }
      </main>
      </>
    )
}

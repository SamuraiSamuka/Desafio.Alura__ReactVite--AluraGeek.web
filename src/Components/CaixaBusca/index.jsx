import { getProdutos } from "../../API/produtos";
import "./CaixaBusca.css";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function CaixaBusca() {
  const [input, setInput] = useState("");
  const [resultados, setResultados] = useState([]);

  async function buscaProdutos(query){
    const resultados = await getProdutos(query);
    return resultados;
  }

  useEffect(() => {
    (async () => {
      setResultados(await buscaProdutos(input));
    })();
  }, [input]);

  return (
    <div className="caixa-busca">
      <div className="caixa-busca__busca">
        <form role="search">
          <input 
            type="search" name='q' id='q' placeholder='Busque aqui' className='caixa-busca__input' 
            value={input} 
            onChange={event => setInput(event.target.value)}
            autoComplete='off'/>
        </form>
        <span className="material-symbols-outlined caixa-busca__lupa">search</span>
      </div>
      <div className="caixa-busca__resultados" id="resultados">
        {
          input != "" ?
            resultados.length === 0 ?
              <p className="caixa-busca__resultado" key={0} >Produto não encontrado</p> 
              :
              resultados.map((r, i) => {
                if (i < 10) {
                  return (
                    <Link className="caixa-busca__resultado" key={r.id} to={`/produtos/${r.id}`}>
                      <img src={r.imagem_src} alt="" className="caixa-busca__resultado-imagem" />
                      {r.nome}
                    </Link>
                  );
                }
              })
            : ""
        }
        {/* {
          resultados.length === 0 ? 
            <a 
              className="caixa-busca__resultados__item" 
              href="#null"
              key={0}
            >Produto não encontrado</a> 
          : 
          resultados.map((produto) => 
            <Link className="caixa-busca__resultados__item"
              to={`/produto/${produto.id}`}
              key={produto.id || 0}
            >{ produto.nome }</Link>)
        }  */}
      </div>
    </div>
  );
}

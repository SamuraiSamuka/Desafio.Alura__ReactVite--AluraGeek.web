import { useState } from "react";
import { Link } from "react-router-dom";
import "./CaixaBusca.css";

const CaixaDeBusca = ({produtos, classeComponente}) => {
  const [resultados, setResultados] = useState([{nulo:true}]);
    
  const mostraInput = (evento) => {
    const input = evento.target.value.toLowerCase();
        
    if (input.length > 1){
      const lista = produtos.filter(
        produto => (produto.nome.toLowerCase().indexOf(input) !== -1) ? 
          produto
          :false);
      setResultados(lista);
    } else {
      setResultados([{nulo:true}]);
      console.log(resultados);
    }
  };

  return (
    <div className={`caixa-busca ${classeComponente || ""}`}>
      <div className="caixa-busca__inputs">
        <input type="text" className="caixa-busca__input" onChange={mostraInput} placeholder="O que deseja encontrar?" id="inputBusca" />
        <span className="material-symbols-outlined caixa-busca__lupa">search</span>
      </div>
      <div className="caixa-busca__resultados" id="resultados">
        {resultados.length === 0 ? 
          <a className="caixa-busca__resultados__item" href="#null" key={0}>Produto não encontrado</a>
          : 
          resultados[0].nulo === true ? 
            "": 
            resultados.map((produto) => <Link className="caixa-busca__resultados__item" to={`/produto/${produto.id}`} key={produto.id || 0}>{produto.nome}</Link>  )}
      </div>
    </div>
  );
};

export default CaixaDeBusca;
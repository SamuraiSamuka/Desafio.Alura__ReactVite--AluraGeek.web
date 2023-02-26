import './CaixaBusca.css'

export default function CaixaBusca() {
  return (
    <div className="caixa-busca">
      <div className="caixa-busca__inputs">
        <form role="search">
          <input 
            type="search"
            name='q'
            id='q'
            placeholder='Busque aqui'
          />
        </form>
        <span className="material-symbols-outlined caixa-busca__lupa">search</span>
      </div>
      {/* <div className="caixa-busca__input">
        <input type="text" className="caixa-busca__input" onChange={mostraInput} placeholder="O que deseja encontrar?" id="inputBusca" />
        <span className="material-symbols-outlined caixa-busca__lupa">search</span>
      </div>
      <div className="caixa-busca__resultados" id="resultados">
        {resultados.length === 0 ? 
          <a className="caixa-busca__resultados__item" href="#null" key={0}>Produto não encontrado</a>
        : 
          resultados[0].nulo === true ? 
            '': 
            resultados.map((produto) => <Link className="caixa-busca__resultados__item" to={`/produto/${produto.id}`} key={produto.id || 0}>{produto.nome}</Link>  )}
      </div> */}
  </div>
  )
}

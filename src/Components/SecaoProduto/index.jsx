import './SecaoProduto.css'
import Produto from "../Produto"
import { Link } from 'react-router-dom'

const SecaoProduto = ({produtos, categoria, children, admin}) => {
    return (
    <div className="products-section container" id={categoria}>
        <div className="products-section__header">
            <h2 className="products-section__title" id="title">{children}</h2>
            <Link to={`/todosProdutos/${categoria}`} className="products-section__seeAll">Ver tudo
                <span className="material-symbols-outlined">arrow_right_alt</span>
            </Link>
        </div>
        <div className="products-section__body">
            {produtos.map((produto, i) => i < 6 ? <Produto key={produto.id} id={produto.id} name={produto.nome} price={produto.preco} source={produto.imagem_src} admin={admin}></Produto>: "")}
        </div>
    </div>)
}

export default SecaoProduto
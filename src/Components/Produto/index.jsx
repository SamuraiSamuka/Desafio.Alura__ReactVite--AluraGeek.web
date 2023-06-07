import { Link, Form, redirect } from 'react-router-dom'
import { deleteProduto } from '../../API/produtos';
import './Produto.css'

const Produto = ({source, name, price, id, admin}) => {
    function aplicaPatternRealBra(valor){
        return "R$ " + valor.toFixed(2).replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return (
        <div className='product'>
            <Link to={`/produtos/${id}`}>
            <img className='product__image' alt="" src={source}/>
            <div className='product__info'>
                <p className='product__title'>{name}</p>
                <p className='product__price'>{aplicaPatternRealBra(price)}</p>
                <p className='product__link'>Ver produto</p>
            </div>
            </Link>
                {admin?
                <>
                {/* <Form action="edit">
                    <button type="submit"><span className="material-symbols-outlined product__edit">edit</span></button>
                </Form> */}
                <Form
                    method="post"
                    action={`/produtos/${id}/destroy`}
                    onSubmit={(event) => {
                        if (
                        !confirm(
                            "Por favor, confirme que você quer realmente deletar esse produto."
                        )
                        ) {
                            event.preventDefault();
                        }
                    }}
                >
                    <button type="submit"><span className="material-symbols-outlined product__delete">delete</span></button>
                </Form>
                </>
                :""
                }
        </div>
        )
}

export default Produto
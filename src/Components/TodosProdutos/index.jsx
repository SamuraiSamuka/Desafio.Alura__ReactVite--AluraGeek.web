import "./TodosProdutos.css";
import Produto from "../Produto";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function TodosProdutos({titulo, produtos, categorias}) {
  return (
    <div className="todos-produtos container">
      <div className="todos-produtos__cabecalho">
        <h2 className="todos-produtos__titulo" id="title">{titulo}</h2>
        <div className="todos-produtos__categorias">
          <NavLink key={"todos"} to={"/todosProdutos/todos"} className={({isActive, isPending})=> isActive? "todos-produtos__botao link-ativo":isPending? "todos-produtos__botao link-pendente" : "todos-produtos__botao"}>Todos</NavLink>
          {categorias.map(categoria => <NavLink key={categoria} to={`/todosProdutos/${categoria}`} className={({isActive, isPending})=> isActive? "todos-produtos__botao link-ativo":isPending? "todos-produtos__botao link-pendente" : "todos-produtos__botao"}>{categoria}</NavLink>)}
        </div>
      </div>
      <div className="todos-produtos__body">
        {produtos.map((produto, i) => <Produto key={produto.id} id={produto.id} name={produto.nome} price={produto.preco} source={produto.imagem_src}></Produto>)}
      </div>
    </div>

  );
}

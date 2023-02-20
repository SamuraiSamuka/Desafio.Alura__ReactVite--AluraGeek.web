import { useState } from 'react'
import Botao from '../Botao'
import CampoInput from '../CampoInput'
import { Form, } from 'react-router-dom'
import './CadastroProduto.css'
import Formulario from '../Formulario'

export function limpaPatternPreco(valorInicial){
    const valorLimpo = valorInicial.replace(/\D+/, "").replace(/[,. a-zA-Z$!@#%&*-+]/, "")
    return valorLimpo
}

const CadastroProduto = ({categorias}) => {

    const [nomeProduto, setNomeProduto] = useState('')
    const [categoriaProduto, setCategoriaProduto] = useState('')
    const [precoProduto, setPrecoProduto] = useState('')
    const [imagemProduto, setImagemProduto] = useState('')
    const [descricaoProduto, setDescricaoProduto] = useState('')
    
    // function limpaPatternPreco(valorInicial){
    //     const valorLimpo = valorInicial.replace(/\D+/, "").replace(/[,. a-zA-Z$!@#%&*-+]/, "")
    //     return valorLimpo
    // }

    function aplicaPatternPreco(evento){
        const campo = evento.target
        const valor = campo.value
        const numerosApenas = limpaPatternPreco(valor)
        let valorTamanhoAdequado = numerosApenas
        const valorFormatado = valorTamanhoAdequado.replace(/(0*)(\d*)(\d{2}$)/,"R$ $2,$3")
        campo.value = valorFormatado

        return valorFormatado
    }

    function verificaPreco(evento, verificaSeValido){
        const campo = evento.target
        const valor = campo.value
        if(valor === "R$ ,00" || valor.length === 1){
            campo.setCustomValidity("O preço tem de ser maior do que R$ 0,00 e ter mais de um caractere")
        } else {
            campo.setCustomValidity('')
        }
        verificaSeValido(evento, "Preço inválido!")
    }

    return (
        <div className='formulario-container container'>
            <Formulario titulo="Adicionar novo produto" >
            <Form method="post">
                <CampoInput 
                    id="produtoNome"
                    name="nome"
                    minimo="5" 
                    maximo="50" 
                    aoAlterado={evento => { setNomeProduto(evento.target.value) }}
                    valor={nomeProduto}
                    required
                >Nome do produto</CampoInput>
                <CampoInput 
                    id="produtoCategoria"
                    name="categoria"
                    type="select" 
                    opcoesLista={categorias} 
                    addOpcao="true"
                    aoAlterado={evento => { setCategoriaProduto(evento.target.value) }}
                    valor={categoriaProduto}
                    required
                >Categoria</CampoInput>
                <CampoInput 
                    id="produtoPreco"
                    name="preco"  
                    aoAlterado={evento => { setPrecoProduto(aplicaPatternPreco(evento)) }}
                    validacaoCustomizada={verificaPreco}
                    minimo='2'
                    valor={precoProduto}
                    required
                >Preço do produto</CampoInput>
                <CampoInput 
                    id="produtoImagem" 
                    name="imagem_src" 
                    type="url"
                    aoAlterado={evento => { setImagemProduto(evento.target.value) }}
                    valor={imagemProduto}
                    required
                >URL da imagem</CampoInput>
                <CampoInput 
                    id="produtoDescricao" 
                    name="descricao" 
                    type="textarea" 
                    minimo={5} 
                    maximo={400}
                    aoAlterado={evento => { setDescricaoProduto(evento.target.value) }}
                    valor={descricaoProduto}
                    required
                >Descrição do produto</CampoInput>
                <Botao type="submit">Adicionar produto</Botao>
            </Form>
            </Formulario>
        </div>
    )
}

export default CadastroProduto
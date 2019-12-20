import React, {Component} from 'react';
import api from '../../services/api';

import './styles.css'

export default class Main extends Component
{
    state =
    {
        products:[],
        productInfo:{},
        page:1,
    };

    componentDidMount() //EXECUTA LOGO QUE MOSTRA EM TELA
    {
        this.LoadProducts();
    }

    //USAR ARROW PRA MANTER O this NO ESCOPO DA FUNÇÃO
    LoadProducts = async (page = 1) =>
    {
        const response = await api.get(`/products?page=${page}`);
        const {docs, ...productInfo} = response.data; 

        console.log(response.data.docs);
        this.setState({products: docs, productInfo, page});
    };

    PrevPage = () => {
        const {page, productInfo} = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;

        this.LoadProducts(pageNumber);
    };

    NextPage = () => 
    {
        const{page, productInfo} = this.state;

        if(page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.LoadProducts(pageNumber);
    };

    render()
    {
        const {products, page, productInfo} = this.state;

        return(
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href="">Acessar</a>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.PrevPage}>Anterior</button>

                    <button disabled={page === productInfo.pages} onClick={this.NextPage}>Próximo</button>
                </div>
            </div>
        );
    }
}
import React, { Component } from 'react';
import Product from "./Product.js";
import Title from './Title.js';
import {ProductConsumer} from '../Context'

class Productlist extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">
                            <ProductConsumer>
                                {value=>{
                                    return value.products.map( product =>{
                                        return <Product key={product.id} product={product}/>
                                    })
                                }}
                            </ProductConsumer>
                        </div>

                    </div>

                </div>
            </React.Fragment>

        );
    }
}

export default Productlist;
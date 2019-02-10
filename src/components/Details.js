import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {
                        id, 
                        company, 
                        img, 
                        info, 
                        price, 
                        title, 
                        inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                        {/* title */}
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                        {/* end title */}
                        {/*product info */}
                        <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                             <img src={img} className="img-fluid" alt="product"/>   
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>title : {title}</h2>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    published by: <span className="text-uppercase">
                                    {company}</span>
                                </h4>
                                <h4 className="text-blue">
                                    price : <span> € </span>
                                    {price}
                                </h4>
                                <p className="text-capatilize font-weight-bold mt-3 mb-0">
                                    some info about book :
                                </p>
                                <p className="text-muted lead">{info}</p>
                                {/* buttons */}
                                <div>
                                    <Link to="/">
                                        <ButtonContainer>
                                            back to products 
                                        </ButtonContainer>
                                    </Link>
                                        <ButtonContainer 
                                            cart
                                            disabled = {inCart ? true: false}
                                            onClick = {() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                        >
                                            {inCart ? 'inCart' : 'add to cart'}
                                        </ButtonContainer>
                                </div>
                        </div> 
                        </div>
                        {/* end product info */}
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;
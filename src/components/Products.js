import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

import meat from '../img/meat.jpg';
import sea_food from '../img/sea_food.jpg';
import dairy_products from '../img/dairy_products.jpg';
import fruits_vegetables from '../img/fruits_vegetables.jpg';
import dried_fruits from '../img/dried_fruits.jpg';
import beverage from '../img/beverage.jpg';

const Title = styled.h3`
    font-size: 40px;
    max-width: 220px;
    text-align: center;
    margin: 1em auto;
    border-bottom: 3px solid #E4002B;
    padding-bottom: 20px;
    margin-top: 50px !important;
`;

const ProductText = styled.p`
    font-size: 24px;
    text-align: center;
    margin: 5em auto;
    line-height: 15px;
`;


const Products = ({
    products_menu,
    products_text_1,
    products_text_2
}) => {

    return (
        <Fragment>
            <div>
                <Title>{products_menu}</Title>
            </div>

            <div className="container">
                <div className="row">
                    <div className= "col s12 m2">
                        <img className="responsive-img product-image" src={meat} alt="Meat" />
                    </div>

                    <div className= "col s12 m2">
                        <img className="responsive-img product-image" src={sea_food} alt="sea_food" />
                    </div>
                    <div className= "col s12 m2">
                        <img className="responsive-img product-image" src={dairy_products} alt="dairy_products" />
                    </div>
                    <div className= "col s12 m2">
                        <img className="responsive-img product-image" src={fruits_vegetables} alt="fruits_vegetables" />
                    </div>
                    <div className= "col s12 m2">
                        <img className="responsive-img product-image" src={dried_fruits} alt="dried_fruits" />
                    </div>
                    <div className= "col s12 m2">
                        <img className="responsive-img product-image" src={beverage} alt="beverage" />
                    </div>
                </div>
            </div>
            



            <ProductText className="container">
                <p>{products_text_1}</p>
                <p>{products_text_2}</p>
            </ProductText>
        </Fragment>
    );
}

export default Products;
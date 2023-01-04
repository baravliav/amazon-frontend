import React from 'react'
import "./RightSide.css";

function Product(props) {
  return (
    <div className='product'>
        <div className="product__image">
            <img src={props.definition.image} height="280px"/>
        </div>
        <div className="product__name">
            {props.definition.name}
        </div>
        <div className="product__price">
            {props.definition.price}
        </div>
    </div>
  );
}

export default Product;
import React from 'react';
import Button from './Button';
import './styles/ProductItem.css';

function ProductItem(props) {
  return(
      <div className="product__el">
          <div className="product-img">
            <img src={props.img} alt={props.desc}/>
          </div>
          <div className="product-desc">{props.desc}</div>
          <div className="product-bottom">
            <div className="product-price">
              <div className="product-price__new">
                {/*<span className="data-discont"><p>{props.dataDiscont}</p></span>*/}
                {props.priceNew}
              </div>
              <div className="product-price__old">{props.priceOld}</div>
            </div>
            <div className="product-cart"><Button name="+" /></div>
          </div>
      </div>
    )
}

export default ProductItem
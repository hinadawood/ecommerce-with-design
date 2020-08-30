import React from 'react';
import './product.scss';
import { editItemInCart, displayCartModal, showAddToCartBtn} from '../../actions/cartActions';
import _ from 'underscore';
import {useSelector, useDispatch} from 'react-redux';

const Product = (props) => {
  const selectedItems = useSelector(state => state.cart.selectedItems);
  const quantity = useSelector(state => getQuantity(state.cart.selectedItems, props.item.id));
  const dispatch = useDispatch();

  const addToCart = (item) => { 
    dispatch(editItemInCart({...item, qnty: 1}));
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    dispatch(displayCartModal(true)); 
    if (window.innerWidth <= 600) {
     setTimeout(()=>{document.getElementsByClassName('c-onlineshop-cart-modal')[0].style.transform = 'translateY(-400px)';}, 0);
    }
    dispatch(showAddToCartBtn(true));
  }

  const editItem = (editCartItem) => {
    dispatch(editItemInCart(selectedItems.find((item) => item.id === editCartItem.id)));
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    dispatch(displayCartModal(true));
    if (window.innerWidth <= 600) {
      setTimeout(()=>{document.getElementsByClassName('c-onlineshop-cart-modal')[0].style.transform = 'translateY(-400px)';}, 0);
    }
    dispatch(showAddToCartBtn(false));
  }

  return(
    <div className={"c-onlineshop-product-card" + (!props.item.stockAvailable ? " disabled" : "")}>
      <div className="c-onlineshop-product-card__brand" >{props.item.brand}</div>
      <img className="c-onlineshop-product-card__image" 
        src={`http://localhost:8080/${props.item.image}`} alt="product_image"/>
      <div className="c-onlineshop-product-card__brand-n-name" >{props.item.name}</div>
      <div className="c-onlineshop-product-card__price" >${props.item.price}</div>
      <div className="c-onlineshop-product-card-attr-container">
        {
          !props.item.stockAvailable ? 
            
              <div className="c-onlineshop-product-card-attr-container__attributes">OUT OF STOCK</div> : 
            null
        }
        {
          props.item.isPopular ? 
          <div className="c-onlineshop-product-card-attr-container__attributes">MOST POPULAR</div> : 
            null
        }
        {
          props.item.isCommon ? 
          <div className="c-onlineshop-product-card-attr-container__attributes">COMMON IN YOUR AREA</div> : 
            null
        }
      </div>
      {
        (quantity === "" || quantity > 0) ? 
        <button className="c-onlineshop-product-card__btn btn" onClick={() => editItem(props.item)}>Edit Quantity </button> :
        <button disabled={!props.item.stockAvailable} className="c-onlineshop-product-card__btn btn" 
         onClick={() => addToCart(props.item)}>Add to cart </button>
      }
    </div>
  )
}

const getQuantity = (cartItemsArray, id) => {
  let item = _.find(cartItemsArray, {id: id});
  if (!item) return 0;
  return item.qnty;
}

export default Product;

import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {
    addCartItem,
    updateCartItem,
    updateCartTotal,
    displayCartModal
} from '../../actions/cartActions';
import './cartmodal.scss'
import Quantity from './Quantity';

const CartModal = (props) => {

    const selectedItems = useSelector(state => state.cart.selectedItems);
    const showModal = useSelector(state => state.cart.showModal);
    const currentSelectedCartItem = useSelector(state => state.cart.currentSelectedCartItem);
    const showAddToCartBtn = useSelector(state => state.cart.showAddToCartBtn);
    const total = useSelector(state => state.cart.total);

    const dispatch = useDispatch();

    const closeModal = (event) => {
        window['xx'] = event.target;
        if (event.target !== document.getElementsByClassName('c-onlineshop-cart-overlay')[0]) {
            return;
        }
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        if (window.innerWidth <= 600) {
            document.getElementsByClassName('c-onlineshop-cart-modal')[0].style.transform = 'none'; 
            setTimeout(()=>{dispatch(displayCartModal(false));}, 500);
        } else {
            dispatch(displayCartModal(false));
        }
    }

    const submitItem = () => {
        if (!selectedItems.find((item) => item.id === currentSelectedCartItem.id)){
            dispatch(addCartItem(currentSelectedCartItem))
        } else {
            dispatch(updateCartItem(currentSelectedCartItem.id, currentSelectedCartItem.qnty));
        }
        dispatch(updateCartTotal());
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        if (window.innerWidth <= 600) {
            document.getElementsByClassName('c-onlineshop-cart-modal')[0].style.transform = 'none'; 
            setTimeout(()=>{dispatch(displayCartModal(false));}, 500);
        } else {
            dispatch(displayCartModal(false));
        }
      }

    return (
        currentSelectedCartItem ? <div className="c-onlineshop-cart-overlay" style={{display: showModal? 'flex' : 'none'}} onClick={(event) => closeModal(event)}>
            <div className="c-onlineshop-cart-modal">
                <div className="c-onlineshop-cart-modal__close-btn">
                    <i onClick={closeModal} className="fa fa-times"></i>  
                </div>
                <div className="c-onlineshop-cart-modal-brand">
                    {currentSelectedCartItem.brand}
                </div>
                <div className="c-onlineshop-cart-modal-item-name c-onlineshop-cart-modal-entry">
                    {currentSelectedCartItem.name}
                </div>
                <div className="c-onlineshop-cart-modal-item-quantity c-onlineshop-cart-modal-entry">
                    <Quantity item={currentSelectedCartItem}/>
                </div>
                <div className="c-onlineshop-cart-modal-subtotal c-onlineshop-cart-modal-entry">
                    <span className="c-onlineshop-cart-modal-subtotal__label">Subtotal</span> 
                    <span className="c-onlineshop-cart-modal-subtotal__value">
                    { (parseFloat(total) + parseFloat(currentSelectedCartItem.price) * currentSelectedCartItem.qnty).toFixed(2)}
                    </span>
                </div>
                <div className="c-onlineshop-cart-modal-btn-panel c-onlineshop-cart-modal-entry">
                {
                    showAddToCartBtn ? 
                        <button className="c-onlineshop-cart-modal__add-btn btn" onClick={submitItem}>Add To Cart</button> :
                        <button className="c-onlineshop-cart-modal__edit-btn btn" onClick={closeModal}>Cancel</button>
                }
                </div>
            </div>
        </div> : null
    )
}

export default CartModal;
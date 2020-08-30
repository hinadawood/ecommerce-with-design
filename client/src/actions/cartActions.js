export const DISPLAY_CART = "DISPLAY_CART";

export function displayCart(){
  return {
    type: DISPLAY_CART
  }
}

export const ADD_TO_CART = "ADD_TO_CART";
export function addCartItem(item){
  return {
    type: ADD_TO_CART,
    payload: {
      itemToAdd: item
    }
  }
}

export const EDIT_ITEM_IN_CART = "EDIT_ITEM_IN_CART";
export function editItemInCart(item){
  return {
    type: EDIT_ITEM_IN_CART,
    payload: {
      currentSelectedCartItem: item
    }
  }
}

export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export function updateCartItem(id, quantity){
  return {
    type: UPDATE_CART_ITEM,
    payload: {
      id,
      quantity
    }
  }
}

export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export function removeCartItem(id){
  return {
    type: REMOVE_CART_ITEM,
    payload: {
      id
    }
  }
}

export const UPDATE_CART_TOTAL = "UPDATE_CART_TOTAL";
export function updateCartTotal(){
  return {
    type: UPDATE_CART_TOTAL
  }
}

export const DISPLAY_CART_MODAL = "DISPLAY_CART_MODAL";
export function displayCartModal(showModal){
  return {
    type: DISPLAY_CART_MODAL,
    payload: {
      showModal
    }
  }
}

export const UPDATE_CURRENT_SELECTED_ITEM = "UPDATE_CURRENT_SELECTED_ITEM";
export function updateCurrentSelectedItem(quantity){
  return {
    type: UPDATE_CURRENT_SELECTED_ITEM,
    payload: {
      quantity
    }
  }
}

export const SHOW_ADD_TO_CART_BTN = "SHOW_ADD_TO_CART_BTN";
export function showAddToCartBtn(showAddToCartBtn){
  return {
    type: SHOW_ADD_TO_CART_BTN,
    payload: {
      showAddToCartBtn
    }
  }
}


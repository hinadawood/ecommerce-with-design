import {
  DISPLAY_CART,
  ADD_TO_CART,
  UPDATE_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_CART_TOTAL,
  EDIT_ITEM_IN_CART,
  DISPLAY_CART_MODAL,
  UPDATE_CURRENT_SELECTED_ITEM,
  SHOW_ADD_TO_CART_BTN
} from '../actions/cartActions';

export default function cartReducer(state = {
  cartIsDisplayed: false,
  selectedItems: [],
  total: 0
}, action = null){
  switch(action.type) {
    case DISPLAY_CART:
      return {
        ...state,
        cartIsDisplayed: !state.cartIsDisplayed
      }
    case ADD_TO_CART:
      return {
        ...state,
        selectedItems: [action.payload.itemToAdd, ...state.selectedItems],
        currentSelectedCartItem: {
          ...state.currentSelectedCartItem,
          qnty: action.payload.itemToAdd.qnty
        }
      }
    case EDIT_ITEM_IN_CART:
      return {
        ...state,
        currentSelectedCartItem: action.payload.currentSelectedCartItem
      }
    case DISPLAY_CART_MODAL:
      return {
        ...state,
        showModal: action.payload.showModal
      }  
    case UPDATE_CART_ITEM:
      return {
        ...state,
        selectedItems: state.selectedItems.map((item) => {
          if (item.id === action.payload.id){
            return {...item, qnty: action.payload.quantity}
          }
          return item;
        }),
        currentSelectedCartItem: {
          ...state.currentSelectedCartItem,
          qnty: action.payload.quantity
        }
      }      
    case REMOVE_CART_ITEM:
      return {
        ...state,
        selectedItems: state.selectedItems.filter((item) => item.id !== action.payload.id)
      }
    case UPDATE_CART_TOTAL:
      return {
        ...state,
        total: (state.selectedItems.reduce((sum, item) => {
          let quantity = item.qnty
          if (quantity === ""){
            quantity = 0
          }
          return sum + parseInt(quantity) * parseFloat(item.price)
        }, 0)).toFixed(2)
      }
    case UPDATE_CURRENT_SELECTED_ITEM:
      return {
        ...state,
        currentSelectedCartItem: {
          ...state.currentSelectedCartItem,
          qnty: action.payload.quantity
        }  
      }
    case SHOW_ADD_TO_CART_BTN:
      return {
        ...state,
        showAddToCartBtn: action.payload.showAddToCartBtn
      }
    default:
    return state;
  }
}

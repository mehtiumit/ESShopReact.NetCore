import * as actionTypes from "../actions/actionTypes";
import {
  addItemToCart,
  removeItemFromCart,
  instaDeleteFromCart,
} from "../../utils/Cart.utils";
const initialState = {
  cart: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload),
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: removeItemFromCart(state.cart, action.payload),
      };
    case actionTypes.INSTA_DELETE_FROM_CART:
      return {
        ...state,
        cart: instaDeleteFromCart(state.cart, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;

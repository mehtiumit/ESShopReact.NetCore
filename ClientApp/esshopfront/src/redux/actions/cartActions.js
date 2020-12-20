import Axios from "axios";
import * as actionTypes from "./actionTypes";

export const addToCart = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product,
  };
};
export const removeFromCart = (product) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: product,
  };
};

export const instaDeleteFromCart = (product) => {
  return {
    type: actionTypes.INSTA_DELETE_FROM_CART,
    payload: product,
  };
};


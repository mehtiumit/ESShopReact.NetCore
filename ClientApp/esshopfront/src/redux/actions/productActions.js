import Axios from "axios";
import * as actionTypes from "./actionTypes";

const getProductStart = () => {
  return {
    type: actionTypes.GET_PRODUCT_START,
  };
};

const getProductSuccess = (products) => {
  return {
    type: actionTypes.GET_PRODUCT_SUCCESS,
    payload: products,
  };
};

const getProductFail = (err) => {
  return {
    type: actionTypes.GET_PRODUCT_FAIL,
    payload: err,
  };
};

export const fetchProducts = (categoryId) => {
  console.log("categoryID actions" + categoryId);
  return (dispatch) => {
    dispatch(getProductStart());
    console.log("categoryID actions", categoryId);
    if (categoryId) {
      Axios.get(`/products/getbyCategory/${categoryId}`)
        .then((res) => {
          dispatch(getProductSuccess(res.data.data));
        })
        .catch((err) => {
          dispatch(getProductFail(err));
        });
    } else {
      Axios.get(`/products`)
        .then((res) => {
          dispatch(getProductSuccess(res.data.data));
        })
        .catch((err) => {
          dispatch(getProductFail(err));
        });
    }
  };
};

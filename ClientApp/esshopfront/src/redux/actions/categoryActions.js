import Axios from "axios";
import * as actionTypes from "./actionTypes";

const getCategoryStart = () => {
  return {
    type: actionTypes.GET_CATEGORY_START,
  };
};

const getCategorySuccess = (category) => {
  return {
    type: actionTypes.GET_CATEGORY_SUCCESS,
    payload: category,
  };
};

const getCategoryFail = (err) => {
  return {
    type: actionTypes.GET_CATEGORY_FAIL,
    payload: err,
  };
};

export const fetchCategory = (dispatch) => {
  return (dispatch) => {
    dispatch(getCategoryStart());
    Axios.get("/category")
      .then((res) => dispatch(getCategorySuccess(res.data)))
      .catch((err) => dispatch(getCategoryFail(err)));
  };
};

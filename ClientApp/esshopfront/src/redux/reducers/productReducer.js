import * as actionTypes from "../actions/actionTypes";

const initialState = {
  error: "",
  loading: false,
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case actionTypes.GET_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;

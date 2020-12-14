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
    case actionTypes.SORT_PRODUCT_ASC:
      // const sortByKey = (key) => (a, b) => (a[key] > b[key] ? 1 : -1);
      // return state.products.slice().sort(sortByKey(state.products.listPrice));
      return {
        ...state,
        products: state.products.sort((a, b) => a.listPrice - b.listPrice),
      };
    case actionTypes.SORT_PRODUCT_DESC:
      return {
        ...state,
        products: state.products.sort((b, a) => a.listPrice - b.listPrice),
      };
    default:
      return state;
  }
};

export default productReducer;

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  categories: [],
  error: "",
  loading: false,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORY_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payload.data,
        loading: false,
      };
    case actionTypes.GET_CATEGORY_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default categoryReducer;

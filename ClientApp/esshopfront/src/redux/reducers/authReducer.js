import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: {},
  isAuthenticated: false,
  error: false,
  loading: false,
  token: "",
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        token: action.idToken,
        loading: false,
        isAuthenticated: true,
        error: null,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
export default authReducer;

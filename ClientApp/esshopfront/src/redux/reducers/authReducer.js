import * as actionTypes from "../actions/actionTypes";

const initialState = {
  userId: "",
  user: {},
  isAuthenticated: false,
  error: "",
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
        userId: action.payload.nameid,
        token: action.idToken,
        loading: false,
        isAuthenticated: true,
        error: null,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        userId: null,
        isAuthenticated: false,
      };
    case actionTypes.GET_USER_DATA:
      return {
        ...state,
        user: action.payload.data,
      };
    case actionTypes.GET_USER_DATA_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case actionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        user:
          state.user.userId === action.payload.data.userId
            ? action.payload.data
            : state.user,
      };
    case actionTypes.UPDATE_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;

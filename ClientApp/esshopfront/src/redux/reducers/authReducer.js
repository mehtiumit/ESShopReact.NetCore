import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: "",
  isAuthenticated: false,
  error: false,
  errorMessage: "",
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return state;

    default:
      return state;
  }
};
export default authReducer;

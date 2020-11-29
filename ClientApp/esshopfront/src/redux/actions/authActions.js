import axios from "axios";
import * as actionTypes from "./actionTypes";
import setAuthorizationToken from "../../helpers/setAuthToken";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (user) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: user,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload: error,
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    dispatchEvent(authStart());
    const authData = {
      email: email,
      password: password,
    };
    axios
      .post("/auth/login", authData)
      .then((res) => {
        localStorage.setItem("jwtToken", res.data);
        setAuthorizationToken(res.data);
        dispatch(authSuccess(res.data));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

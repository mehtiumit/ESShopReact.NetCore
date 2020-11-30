import axios from "axios";
import * as actionTypes from "./actionTypes";
import { setAuthorizationToken } from "../../helpers/setAuthToken";
import jwt from "jwt-decode";

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

const authSuccess = (user, token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: user,
    idToken: token,
  };
};

const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload: error,
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
    };
    axios
      .post("/auth/login", authData)
      .then((res) => {
        const token = res.data;
        const user = jwt(token); // decode your token here
        localStorage.setItem("token", token);
        dispatch(authSuccess(user, token));
        /*localStorage.setItem("jwtToken", res.data);
        setAuthorizationToken(res.data);
        dispatch(authSuccess(res.data));*/
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const logout = () => {
  localStorage.removeItem("jwtToken");
  setAuthorizationToken(false);
};

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

export const logout = () => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("expirationTime");
  setAuthorizationToken(false);
  return {
    type: actionTypes.AUTH_LOGOUT,
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
        const timeValid = new Date(parseInt(user.exp) * 1000);
        const timeCreated = new Date(parseInt(user.iat) * 1000);
        const oneHour = (timeValid - timeCreated) / (1000 * 60 * 60);
        localStorage.setItem("expirationTime", oneHour);
        localStorage.setItem("jwtToken", token);
        dispatch(authSuccess(user, token));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = localStorage.getItem("expirationDate");
      if (expirationDate === 0) {
        dispatch(logout());
      } else {
        const user = jwt(token);
        dispatch(authSuccess(user, token));
        dispatch(checkAuthTimeout());
      }
    }
  };
};

export const checkAuthTimeout = () => {
  // JWT TOKEN VALID ONLY 1 HOUR
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, 1000 * 60 * 60);
  };
};

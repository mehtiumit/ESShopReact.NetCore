import axios from "axios";
import * as actionTypes from "./actionTypes";
import { setAuthorizationToken } from "../../helpers/setAuthToken";
import jwt from "jwt-decode";
import Axios from "axios";

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

const getUser = (user) => {
  return {
    type: actionTypes.GET_USER_DATA,
    payload: user,
  };
};

const getUserDataFail = (error) => {
  return {
    type: actionTypes.GET_USER_DATA_FAIL,
    payload: error,
  };
};

const updateUserSuccess = (user) => {
  return {
    type: actionTypes.UPDATE_USER_SUCCESS,
    payload: user,
  };
};
const updateUserFail = (err) => {
  return {
    type: actionTypes.UPDATE_USER_FAIL,
    payload: err,
  };
};

export const updateUser = (user) => {
  return (dispatch) => {
    Axios.put("user/updateuser", user)
      .then((res) => dispatch(updateUserSuccess(res.data)))
      .catch((err) => dispatch(updateUserFail(err)));
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
export const getUserData = (userId) => {
  return (dispatch) => {
    axios
      .get(`/user/getuser/${userId}`)
      .then((res) => {
        console.log("User data", res.data);
        dispatch(getUser(res.data));
      })
      .catch((err) => {
        dispatch(getUserDataFail(err));
      });
  };
};

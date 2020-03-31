import decode from "jwt-decode";

import instance from "./instance";

import { SET_CURRENT_USER } from "./actionTypes";

import { setErrors } from "./errors";
import { fetchChannels } from "./channels";

export const checkForExpiredToken = () => dispatch => {
  const token = localStorage.getItem("token");
  if (token) {
    const currentTime = Date.now() / 1000;
    //decode token and get user information
    const user = decode(token);
    //chek token expiration
    if (user.exp >= currentTime) {
      //setAuthHeader
      setAuthHeader(token);
      //set the user
      dispatch({
        type: SET_CURRENT_USER,
        payload: user
      });
      dispatch(fetchChannels());
    } else {
      dispatch(logout());
    }
  }
};

const setLocalToken = token => {
  if (token) localStorage.setItem("token", token);
  else localStorage.removeItem("token");
};

const setAuthHeader = token => {
  if (token) instance.defaults.headers.Authorization = `jwt ${token}`;
  else delete instance.defaults.headers.Authorization;
};

/*
 *
 * You can combine the login() and signup() actions into a single action
 * that receives a type.
 * This way you can avoid a lot of unnecessary logic and repetitive code.
 *
 */

export const login = userData => async dispatch => {
  try {
    const response = await instance.post("login/", userData);
    const { token } = response.data;
    setAuthHeader(token);
    setLocalToken(token);
    const user = decode(token);
    dispatch({
      type: SET_CURRENT_USER,
      payload: user
    });

    dispatch(fetchChannels());
  } catch (error) {
    console.error("some thing is wrong!");
    console.error(error.response.data);
    dispatch(setErrors(error.response.data));
  }
};

export const signup = userData => async dispatch => {
  try {
    const response = await instance.post("signup/", userData);
    const { token } = response.data;
    setAuthHeader(token);
    setLocalToken(token);
    const user = decode(token);
    dispatch({
      type: SET_CURRENT_USER,
      payload: user
    });
    dispatch(fetchChannels());
  } catch (error) {
    console.error("some thing is wrong!");
    console.error(error.response.data);
    dispatch(setErrors(error.response.data));
  }
};

export const logout = () => {
  setAuthHeader(null);
  setLocalToken(null);
  return {
    type: SET_CURRENT_USER,
    payload: null
  };
};

const setCurrentUser = token => {};

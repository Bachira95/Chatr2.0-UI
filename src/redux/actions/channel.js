import { SEND_MESSAGE, SET_MESSAGES } from "./actionTypes";
import { setErrors } from "./errors";

import instance from "./instance";
export const fetchMessages = channelID => async dispatch => {
  try {
    const res = await instance.get(`channels/${channelID}/`);
    const channel = res.data;
    dispatch({
      type: SET_MESSAGES,
      payload: channel
    });
  } catch (err) {
    console.error(err);
    dispatch(setErrors(err));
  }
};

export const sendMessage = (channelID, newMessage) => async dispatch => {
  try {
    const res = await instance.post(`channels/${channelID}/send/`, newMessage);
    const message = res.data;
    // dispatch(setErrors());
    dispatch({
      type: SEND_MESSAGE,
      payload: message
    });
  } catch (err) {
    console.error(err);
    dispatch(setErrors(err));
  }
};

import { SET_CHANNELS, CREATE_CHANNEL } from "./actionTypes";
import { setErrors } from "./errors";
import instance from "./instance";

export const fetchChannels = () => async dispatch => {
  try {
    const res = await instance.get("channels/");
    const channels = res.data;
    dispatch({ type: SET_CHANNELS, payload: channels });
  } catch (err) {
    console.error(err);
  }
};

export const createChannel = newChannel => async dispatch => {
  try {
    const res = await instance.post("channels/create/", newChannel);
    const channel = res.data;

    dispatch({
      type: CREATE_CHANNEL,
      payload: channel
    });
  } catch (err) {
    console.error(err);
    dispatch(setErrors(err));
  }
};

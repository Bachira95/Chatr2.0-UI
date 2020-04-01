import { SET_CHANNELS, CREATE_CHANNEL, SET_ERRORS } from "./actionTypes";
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

/**
 * Clean up "dead" code and console logs
 */
export const createChannel = newChannel => async dispatch => {
  try {
    //bad request
    console.log(newChannel);
    const res = await instance.post("channels/create/", newChannel);
    const channel = res.data;
    console.log(channel);
    dispatch(setErrors());
    dispatch({
      type: CREATE_CHANNEL,
      payload: channel
    });
    // closeModal();
  } catch (err) {
    /**
     * Because this error is part of a form,
     * you should be passing your errors to the errors reducer
     * and then displaying them on the for,
     */
    // dispatch({
    //   type: SET_ERRORS,
    //   payload: err.response.data
    // });
    console.error(err);
  }
};

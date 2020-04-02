import { SET_MESSAGES, SEND_MESSAGE } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        channel: action.payload // Rename this property from channel to messages, it's not a channel object, it's a list of messages.
      };

    case SEND_MESSAGE:
      const message = action.payload;
      return {
        ...state,
        channel: [...state.channel, message]
      };

    default:
      return state;
  }
};

export default reducer;

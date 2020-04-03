import { SET_CHANNELS, ADD_CHANNEL } from "../actions/actionTypes";

const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHANNELS:
      return {
        ...state,
        channels: action.payload
      };
    case ADD_CHANNEL:
      return {
        ...state,
        channels: [action.payload].concat(state.channels)
      };
    default:
      return state;
  }
};

export default reducer;

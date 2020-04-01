import { SET_CHANNEL_DETAIL, SEND_MESSAGE } from "../actions/actionTypes";

/**
 * I think with a little renaming and restructuring, you can make this reducer cleaner:
 *
 *  - const initialState = []
 *  - SET_MESSAGES instead of SET_CHANNEL_DETAIL
 *  - etc
 */

const initialState = {
  channel: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHANNEL_DETAIL:
      return {
        ...state,
        channel: action.payload
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

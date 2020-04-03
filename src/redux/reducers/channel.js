import {
  SET_MESSAGES,
  ADD_MESSAGE,
  CLEAR_MESSAGES
} from "../actions/actionTypes";

const initialState = { messages: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, ...action.payload]
      };
    case CLEAR_MESSAGES:
      return {
        ...state,
        messages: []
      };
    case ADD_MESSAGE:
      const message = action.payload;
      return {
        ...state,
        messages: [...state.messages, message]
      };

    default:
      return state;
  }
};

export default reducer;

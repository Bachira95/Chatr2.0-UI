import { SET_CHANNELS, CREATE_CHANNEL } from "../actions/actionTypes";

/**
 * Cleanup:
 *
 * - Don't commit "dead" code
 * - Don't commit console logs
 * - const initialState = []
 */

// const initialState = {
//   listChannel: [
//     { title: "all", messages: ["message1", "msg2", "msg3"] },
//     { title: "CODED", messages: ["message1", "msg2", "msg3"] }
//   ]
// };

const initialState = {
  channels: []
  // loading: true
};

const reducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case SET_CHANNELS:
      return {
        ...state,
        channels: action.payload
        // filteredAuthors: action.payload,
        // loading: false
      };
    case CREATE_CHANNEL:
      console.log(action.payload);
      return {
        ...state,
        channels: [action.payload].concat(state.channelss)
      };
    // case ADD_CHANNEL:
    //   const newChannel = {
    //     title: action.payload
    //   };

    //   return {
    //     ...state,
    //     listChannel: [newChannel].concat(state.listChannel)
    //   };
    // case ADD_MESSAGE:
    //   const newMessage = action.payload;

    //   return {
    //     ...state,
    //     listChannel: [newChannel].concat(state.listChannel)
    //   };
    default:
      return state;
  }
};

export default reducer;
